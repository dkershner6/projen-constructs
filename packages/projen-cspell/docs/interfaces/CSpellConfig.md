[**projen-cspell**](../README.md) • **Docs**

***

[projen-cspell](../globals.md) / CSpellConfig

# Interface: CSpellConfig

## Properties

### dictionaries?

> `readonly` `optional` **dictionaries**: `string`[]

Custom dictionaries to use.

***

### dictionaryDefinitions?

> `readonly` `optional` **dictionaryDefinitions**: [`CSpellDictionaryDefinition`](CSpellDictionaryDefinition.md)[]

Define custom dictionaries.

***

### flagWords?

> `readonly` `optional` **flagWords**: `string`[]

flagWords - list of words to be always considered incorrect
This is useful for offensive words and common spelling errors. (e.g. "hte" and "thier")

***

### ignorePaths?

> `readonly` `optional` **ignorePaths**: `string`[]

Globs of files to ignore.

***

### ignoreRegExpList?

> `readonly` `optional` **ignoreRegExpList**: `string`[]

List of regular expression patterns or pattern names to exclude from spell checking.

Example: `["href"]` - to exclude html href pattern.

Regular expressions use JavaScript regular expression syntax.

Example: to ignore ALL-CAPS words

JSON
```json
"ignoreRegExpList": ["/\\b[A-Z]+\\b/g"]
```

YAML
```yaml
ignoreRegExpList:
  - >-
   /\b[A-Z]+\b/g
```

By default, several patterns are excluded. See
[Configuration](https://cspell.org/configuration/patterns) for more details.

While you can create your own patterns, you can also leverage several patterns that are
[built-in to CSpell](https://cspell.org/types/cspell-types/types/PredefinedPatterns.html).

***

### language?

> `readonly` `optional` **language**: `string`

Current active spelling language. This specifies the language locale to use in choosing the
general dictionary.

For example:

- "en-GB" for British English.
- "en,nl" to enable both English and Dutch.

#### Default

```ts
"en"
```

***

### version?

> `readonly` `optional` **version**: `"0.2"` \| `"0.1"`

Configuration format version of the settings file.

This controls how the settings in the configuration file behave.

#### Default

```ts
"0.2"
```

***

### words?

> `readonly` `optional` **words**: `string`[]

words - list of words to be always considered correct
