/* eslint-disable @cspell/spellchecker */
// Cannot run cspell in here because flagWords are definite hits.

import { Component, JsonFile, SampleFile } from "projen";
import { Eslint, NodeProject } from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";

export interface CSpellDictionaryDefinition {
    /**
     * Some editor extensions will use `addWords` for adding words to your personal dictionary.
     */
    readonly addWords: boolean;

    /**
     * The name of the dictionary.
     */
    readonly name: string;

    /**
     * The path to the dictionary file.
     */
    readonly path: string;
}

export interface CSpellConfig {
    /**
     * Configuration format version of the settings file.
     *
     * This controls how the settings in the configuration file behave.
     *
     * @default "0.2"
     */
    readonly version?: "0.2" | "0.1";

    /**
     * Current active spelling language. This specifies the language locale to use in choosing the
     * general dictionary.
     *
     * For example:
     *
     * - "en-GB" for British English.
     * - "en,nl" to enable both English and Dutch.
     *
     * @default "en"
     */
    readonly language?: string;

    /**
     * words - list of words to be always considered correct
     */
    readonly words?: string[];

    /**
     * List of regular expression patterns or pattern names to exclude from spell checking.
     *
     * Example: `["href"]` - to exclude html href pattern.
     *
     * Regular expressions use JavaScript regular expression syntax.
     *
     * Example: to ignore ALL-CAPS words
     *
     * JSON
     * ```json
     * "ignoreRegExpList": ["/\\b[A-Z]+\\b/g"]
     * ```
     *
     * YAML
     * ```yaml
     * ignoreRegExpList:
     *   - >-
     *    /\b[A-Z]+\b/g
     * ```
     *
     * By default, several patterns are excluded. See
     * [Configuration](https://cspell.org/configuration/patterns) for more details.
     *
     * While you can create your own patterns, you can also leverage several patterns that are
     * [built-in to CSpell](https://cspell.org/types/cspell-types/types/PredefinedPatterns.html).
     */
    readonly ignoreRegExpList?: string[];

    /**
     * flagWords - list of words to be always considered incorrect
     * This is useful for offensive words and common spelling errors. (e.g. "hte" and "thier")
     */
    readonly flagWords?: string[];

    /**
     * Define custom dictionaries.
     */
    readonly dictionaryDefinitions?: CSpellDictionaryDefinition[];

    /**
     * Custom dictionaries to use.
     */
    readonly dictionaries?: string[];

    /**
     * Globs of files to ignore.
     */
    readonly ignorePaths?: string[];
}

export interface CSpellConfigFileOptions {
    readonly config?: CSpellConfig;
}

const PROJEN_AND_THIS_MONOREPO_WORDS = [
    "awscdk",
    "cdkout",
    "dkershner",
    "jsii",
    "kershner",
    "lcov",
    "libdir",
    "nextjs",
    "npmignore",
    "outdir",
    "projen",
    "projenrc",
    "qualitygate",
    "rootdir",
    "rootproject",
    "setfacl",
    "sonarcloud",
    "sonarjs",
    "sonarqube",
    "sonarsource",
    "srcdir",
    "subproject",
    "subprojects",
    "syncpack",
    "testdir",
];

const SHARED_CSPELL_CONFIG_FILENAME = "cspell-readonly.json";

export class CSpellConfigFile extends Component {
    public readonly config: CSpellConfig;

    constructor(project: NodeProject, options?: CSpellConfigFileOptions) {
        super(project);

        this.config = {
            ...(options?.config ?? {}),
            version: options?.config?.version ?? "0.2",
            language: options?.config?.language ?? "en",
            words: [
                ...new Set([
                    ...(options?.config?.words ?? []),
                    ...PROJEN_AND_THIS_MONOREPO_WORDS,
                ]),
            ],
            flagWords: [
                ...new Set([
                    ...(options?.config?.flagWords ?? []),
                    "hte",
                    "thier",
                ]),
            ],
            ignorePaths: [
                "**/__mocks__/**/*",
                "**/__tests__/**/*",
                "**/*.spec.ts",
                "**/*.spec.tsx",
                "**/*.test.ts",
                "**/*.test.tsx",
                (project as TypeScriptProject).testdir,
            ].filter(Boolean),
        };

        new JsonFile(this.project, SHARED_CSPELL_CONFIG_FILENAME, {
            obj: this.config,
        });

        this.project.addPackageIgnore(SHARED_CSPELL_CONFIG_FILENAME);

        new SampleFile(this.project, "cspell.json", {
            contents: JSON.stringify(
                {
                    "//": "This file can be edited, and will not be overwritten by projen.",
                    import: [SHARED_CSPELL_CONFIG_FILENAME],
                    words: [],
                },
                null,
                2,
            ),
        });

        this.project.addPackageIgnore("/cspell.json");
    }
}

export interface CSpellOptions extends CSpellConfigFileOptions {
    /**
     * Whether or not to enable cSpell in eslint.
     *
     * @default true
     */
    readonly eslint?: boolean;
}

export class CSpell extends Component {
    constructor(project: NodeProject, options?: CSpellOptions) {
        super(project);

        if (options?.eslint ?? true) {
            const eslint = Eslint.of(project);
            if (eslint) {
                (project as NodeProject).addDevDeps("@cspell/eslint-plugin");

                eslint.addOverride({
                    files: ["*.ts", "*.tsx"],
                    excludedFiles: [
                        "__mocks__/**/*",
                        "__tests__/**/*",
                        "*.spec.ts",
                        "*.spec.tsx",
                        "*.test.ts",
                        "*.test.tsx",
                    ],
                    extends: ["plugin:@cspell/recommended"],
                });
            }
        }

        new CSpellConfigFile(project, {
            config: { ...(options?.config ?? {}) },
        });
    }
}
