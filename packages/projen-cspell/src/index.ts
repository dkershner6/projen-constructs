import { Component, JsonFile, Project } from "projen";

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
    readonly ignoreRegExpList?: string;

    /**
     * flagWords - list of words to be always considered incorrect
     * This is useful for offensive words and common spelling errors. (e.g. "hte" and "thier")
     */
    readonly flagWords?: string[];
}

interface CSpellConfigFileOptions {
    readonly config?: CSpellConfig;
}

export class CSpellConfigFile extends Component {
    public readonly config: CSpellConfig;

    constructor(project: Project, options: CSpellConfigFileOptions) {
        super(project);

        this.config = options.config ?? {};

        this.synthesizeContent();
    }

    public synthesizeContent(): void {
        new JsonFile(this.project, "cspell.json", {
            obj: this.config,
        });
    }
}
