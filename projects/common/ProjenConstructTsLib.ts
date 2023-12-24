import { GithubWorkflow, WorkflowActions } from "projen/lib/github";
import { JobPermission, JobStep } from "projen/lib/github/workflows-model";
import { NodePackageManager } from "projen/lib/javascript";
import {
    TypeScriptProject,
    TypeScriptProjectOptions,
} from "projen/lib/typescript";
import { COMMON_PROJECT_OPTIONS } from "./options";
import { RootMonorepo } from "../rootMonorepo";

const GIT_REMOTE_STEPID = "git_remote";
const LATEST_COMMIT_OUTPUT = "latest_commit";
// to avoid race conditions between two commits trying to release the same
// version, we check if the head sha is identical to the remote sha. if
// not, we will skip the release and just finish the build.
const noNewCommits = `\${{ steps.${GIT_REMOTE_STEPID}.outputs.${LATEST_COMMIT_OUTPUT} == github.sha }}`;
/**
 * Name of the permission back up file to include in the build artifact
 * to work around a GitHub Action bug that does not preserve file mode
 * permissions across upload and download actions.
 *
 * See {@link https://github.com/actions/upload-artifact/issues/38}
 */
export const PERMISSION_BACKUP_FILE = "permissions-backup.acl";

/**
 * Name of the artifact produced by the build job. Its contains the entire
 * working directory.
 */
export const BUILD_ARTIFACT_NAME = "build-artifact";

export class ProjenConstructTsLib extends TypeScriptProject {
    constructor(
        rootMonorepoProject: RootMonorepo,
        options: Omit<
            TypeScriptProjectOptions,
            "defaultReleaseBranch" | "outDir"
        >,
    ) {
        const combinedOptions = {
            parent: rootMonorepoProject,
            ...COMMON_PROJECT_OPTIONS,
            ...options,

            defaultReleaseBranch: "main",
            outdir: `packages/${options.name}`,
            releaseTagPrefix: `${options.name}@v`,
            release: true,
            github: true,
            githubOptions: {
                workflows: false,
                ...COMMON_PROJECT_OPTIONS.githubOptions,
                ...options.githubOptions,
            },
            publishTasks: true,

            releaseToNpm: true,

            peerDeps: ["constructs", "projen", ...(options.peerDeps ?? [])],
            devDeps: ["constructs", "projen", ...(options.devDeps ?? [])],
        };

        super(combinedOptions);

        this.tsconfig?.addExclude("src/**/*.test.ts");
        this.tasks
            .tryFind("compile")
            ?.reset(`tsc --build ${this.tsconfig?.fileName}`);

        const releaseWorkflow = new GithubWorkflow(
            rootMonorepoProject.github!,
            `Release ${this.name}`,
        );

        releaseWorkflow.on({
            push: {
                branches: ["main"],
            },
        });

        const setupNodeStep = {
            name: "Setup Node.js",
            uses: "actions/setup-node@v3",
            with: {
                ...(this.nodeVersion && {
                    "node-version": this.nodeVersion,
                }),
                ...(this.workflowPackageCache && {
                    cache:
                        this.package.packageManager === NodePackageManager.PNPM
                            ? "pnpm"
                            : "npm",
                }),
            },
        };

        releaseWorkflow.addJob("release", {
            runsOn: ["ubuntu-latest"],
            defaults: {
                run: {
                    workingDirectory: `./${combinedOptions.outdir}`,
                },
            },
            permissions: {},
            env: {
                CI: "true",
            },
            steps: [
                {
                    name: "Checkout",
                    uses: "actions/checkout@v3",
                    with: {
                        ["fetch-depth"]: 0,
                    },
                },
                ...WorkflowActions.setupGitIdentity({
                    name: "GitHub Actions",
                    email: "github-actions@github.com",
                }),
                this.package.packageManager === NodePackageManager.PNPM
                    ? {
                          name: "Setup pnpm",
                          uses: "pnpm/action-setup@v2.2.4",
                          with: { version: this.package.pnpmVersion },
                      }
                    : null,
                setupNodeStep,
                {
                    name: "Install dependencies",
                    run: this.package.installCommand,
                    workingDirectory: `.`,
                },
                {
                    name: "Release",
                    run: "npm run release",
                },
                {
                    name: "Check for new commits",
                    id: GIT_REMOTE_STEPID,
                    run: `echo "${LATEST_COMMIT_OUTPUT}=$(git ls-remote origin -h \${{ github.ref }} | cut -f1)" >> $GITHUB_OUTPUT`,
                },
                {
                    name: "Backup artifact permissions",
                    if: noNewCommits,
                    continueOnError: true,
                    run: `cd ${this.artifactsDirectory} && getfacl -R . > ${PERMISSION_BACKUP_FILE}`,
                },
                {
                    name: "Upload artifact",
                    uses: "actions/upload-artifact@v3",
                    if: noNewCommits,
                    with: {
                        name: `${this.name}_${BUILD_ARTIFACT_NAME}`,
                        path: this.artifactsDirectory,
                    },
                },
            ].filter(Boolean) as JobStep[],
        });

        if (this.github) {
            releaseWorkflow.addJob("release_github", {
                name: "Publish to GitHub Releases",
                needs: ["release"],
                runsOn: ["ubuntu-latest"],
                permissions: {
                    contents: JobPermission.WRITE,
                },
                if: "needs.release.outputs.latest_commit == github.sha",
                steps: [
                    setupNodeStep,
                    {
                        name: "Download artifact",
                        uses: "actions/download-artifact@v3",
                        with: {
                            name: `${this.name}_${BUILD_ARTIFACT_NAME}`,
                            path: this.artifactsDirectory,
                        },
                    },
                    {
                        name: "Restore build artifact permissions",
                        continueOnError: true,
                        run: [
                            `cd ${this.artifactsDirectory} && setfacl --restore=${PERMISSION_BACKUP_FILE}`,
                        ].join("\n"),
                    },
                    {
                        name: "Publish to GitHub Releases",
                        run: "npm run publish:github",
                        env: {
                            GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
                            GITHUB_REPOSITORY: "${{ github.repository }}",
                            GITHUB_REF: "${{ github.ref }}",
                        },
                    },
                ],
            });
        }

        if (combinedOptions.releaseToNpm) {
            releaseWorkflow.addJob("release_npm", {
                name: "Publish to NPM",
                needs: ["release"],
                runsOn: ["ubuntu-latest"],
                permissions: {
                    contents: JobPermission.WRITE,
                },
                if: "needs.release.outputs.latest_commit == github.sha",
                steps: [
                    setupNodeStep,
                    {
                        name: "Download artifact",
                        uses: "actions/download-artifact@v3",
                        with: {
                            name: `${this.name}_${BUILD_ARTIFACT_NAME}`,
                            path: this.artifactsDirectory,
                        },
                    },
                    {
                        name: "Restore build artifact permissions",
                        continueOnError: true,
                        run: [
                            `cd ${this.artifactsDirectory} && setfacl --restore=${PERMISSION_BACKUP_FILE}`,
                        ].join("\n"),
                    },
                    {
                        name: "Publish to NPM",
                        run: "npm run publish:npm",
                        env: {
                            NPM_TOKEN: "${{ secrets.NPM_TOKEN }}",
                        },
                    },
                ],
            });
        }
    }
}