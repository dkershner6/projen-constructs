import { GithubWorkflow, WorkflowActions } from "projen/lib/github";
import { JobStep, JobPermission } from "projen/lib/github/workflows-model";

import { NodeProject } from "projen/lib/javascript";

export interface NodeMonorepoChildReleaseWorkflowOptions {
    /**
     * The name of the branches to release from.
     *
     * @default ["main"]
     */
    readonly branches?: string[];
    /**
     * Whether to publish to an NPM Repository.
     *
     * @default false
     */
    readonly releaseToNpm?: boolean;
}

const UBUNTU_LATEST = "ubuntu-latest";
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
const PERMISSION_BACKUP_FILE = "permissions-backup.acl";

/**
 * Name of the artifact produced by the build job. Its contains the entire
 * working directory.
 */
const BUILD_ARTIFACT_NAME = "build-artifact";

/**
 * A GitHub workflow that builds and releases a Node child project in a monorepo.
 * This should be identical to the normal Projen release workflow, except for working-directories.
 */
export class NodeMonorepoChildReleaseWorkflow {
    private readonly setupNodeSteps: JobStep[];
    private readonly releaseWorkflow: GithubWorkflow;

    private readonly filenameSafeName: string;
    private readonly artifactName: string;

    constructor(
        private readonly rootMonorepoProject: NodeProject,
        private readonly childProject: NodeProject,
        private readonly options: NodeMonorepoChildReleaseWorkflowOptions = {},
    ) {
        this.filenameSafeName = this.childProject.name
            .replaceAll("@", "")
            .replaceAll("/", "-");
        this.artifactName = `${this.filenameSafeName}_${BUILD_ARTIFACT_NAME}`;

        this.releaseWorkflow = new GithubWorkflow(
            this.rootMonorepoProject.github!,
            `Release ${this.filenameSafeName}`,
        );

        this.releaseWorkflow.on({
            push: {
                branches: this.options.branches ?? ["main"],
            },
        });

        // Remove install, as that must be run in the root project instead
        this.setupNodeSteps = this.childProject
            .renderWorkflowSetup()
            .filter((step) => step.name?.toLowerCase()?.includes("setup"));

        this.addReleaseBuilderJob();
        this.addGitHubReleaseJob();

        if (this.options.releaseToNpm) {
            this.addNpmPublishJob();
        }
    }

    private addReleaseBuilderJob(): void {
        const childRelativeOutDir = this.childProject.outdir.replace(
            `${this.rootMonorepoProject.outdir}/`,
            "",
        );

        this.releaseWorkflow.addJob("release", {
            runsOn: [UBUNTU_LATEST],
            defaults: {
                run: {
                    workingDirectory: `./${childRelativeOutDir}`,
                },
            },
            outputs: {
                [LATEST_COMMIT_OUTPUT]: {
                    stepId: GIT_REMOTE_STEPID,
                    outputName: LATEST_COMMIT_OUTPUT,
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

                ...this.setupNodeSteps,
                {
                    name: "Install dependencies",
                    run: this.rootMonorepoProject.package.installCommand,
                    workingDirectory: `.`, // Important to run in the root project
                },
                {
                    name: "Build all Packages",
                    run: this.rootMonorepoProject.runTaskCommand(
                        this.rootMonorepoProject.buildTask,
                    ),
                    workingDirectory: `.`, // Important to run in the root project
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
                    run: `cd ${this.childProject.artifactsDirectory} && getfacl -R . > ${PERMISSION_BACKUP_FILE}`,
                },
                {
                    name: "Upload artifact",
                    uses: "actions/upload-artifact@v3",
                    if: noNewCommits,
                    with: {
                        name: this.artifactName,
                        path: `${childRelativeOutDir}/${this.childProject.artifactsDirectory}`,
                    },
                },
            ].filter(Boolean) as JobStep[],
        });
    }

    private addGitHubReleaseJob(): void {
        this.releaseWorkflow.addJob("release_github", {
            name: "Publish to GitHub Releases",
            needs: ["release"],
            runsOn: [UBUNTU_LATEST],
            permissions: {
                contents: JobPermission.WRITE,
            },
            if: "needs.release.outputs.latest_commit == github.sha",
            steps: [
                ...this.setupNodeSteps,
                {
                    name: "Download artifact",
                    uses: "actions/download-artifact@v3",
                    with: {
                        name: this.artifactName,
                        path: this.childProject.artifactsDirectory,
                    },
                },
                {
                    name: "Restore build artifact permissions",
                    continueOnError: true,
                    run: [
                        `cd ${this.childProject.artifactsDirectory} && setfacl --restore=${PERMISSION_BACKUP_FILE}`,
                    ].join("\n"),
                },
                {
                    run: 'errout=$(mktemp); gh release create $(cat dist/releasetag.txt) -R $GITHUB_REPOSITORY -F dist/changelog.md -t $(cat dist/releasetag.txt) --target $GITHUB_REF 2> $errout && true; exitcode=$?; if [ $exitcode -ne 0 ] && ! grep -q "Release.tag_name already exists" $errout; then cat $errout; exit $exitcode; fi',
                    env: {
                        GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
                        GITHUB_REPOSITORY: "${{ github.repository }}",
                        GITHUB_REF: "${{ github.ref }}",
                    },
                },
            ],
        });
    }

    private addNpmPublishJob(): void {
        this.releaseWorkflow.addJob("release_npm", {
            name: "Publish to NPM",
            needs: ["release"],
            runsOn: [UBUNTU_LATEST],
            permissions: {
                contents: JobPermission.WRITE,
            },
            if: "needs.release.outputs.latest_commit == github.sha",
            steps: [
                ...this.setupNodeSteps,
                {
                    name: "Download artifact",
                    uses: "actions/download-artifact@v3",
                    with: {
                        name: this.artifactName,
                        path: this.childProject.artifactsDirectory,
                    },
                },
                {
                    name: "Restore build artifact permissions",
                    continueOnError: true,
                    run: [
                        `cd ${this.childProject.artifactsDirectory} && setfacl --restore=${PERMISSION_BACKUP_FILE}`,
                    ].join("\n"),
                },
                {
                    run: "npx -p publib@latest publib-npm",
                    env: {
                        NPM_TOKEN: "${{ secrets.NPM_TOKEN }}",
                    },
                },
            ],
        });
    }
}
