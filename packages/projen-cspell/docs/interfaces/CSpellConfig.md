[projen-cspell](../README.md) / [Exports](../modules.md) / CSpellConfig

# Interface: CSpellConfig

## Table of contents

### Properties

- [dictionaries](CSpellConfig.md#dictionaries)
- [dictionaryDefinitions](CSpellConfig.md#dictionarydefinitions)
- [flagWords](CSpellConfig.md#flagwords)
- [ignoreRegExpList](CSpellConfig.md#ignoreregexplist)
- [language](CSpellConfig.md#language)
- [version](CSpellConfig.md#version)
- [words](CSpellConfig.md#words)

## Properties

### dictionaries

• `Optional` `Readonly` **dictionaries**: `string`[]

Custom dictionaries to use.

___

### dictionaryDefinitions

• `Optional` `Readonly` **dictionaryDefinitions**: [`CSpellDictionaryDefinition`](CSpellDictionaryDefinition.md)[]

Define custom dictionaries.

___

### flagWords

• `Optional` `Readonly` **flagWords**: `string`[]

flagWords - list of words to be always considered incorrect
This is useful for offensive words and common spelling errors. (e.g. "hte" and "thier")

___

### ignoreRegExpList

• `Optional` `Readonly` **ignoreRegExpList**: `string`[]

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

___

### language

• `Optional` `Readonly` **language**: `string`

Current active spelling language. This specifies the language locale to use in choosing the
general dictionary.

For example:

- "en-GB" for British English.
- "en,nl" to enable both English and Dutch.

**`Default`**

```ts
"en"
```

___

### version

• `Optional` `Readonly` **version**: ``"0.2"`` \| ``"0.1"``

Configuration format version of the settings file.

This controls how the settings in the configuration file behave.

**`Default`**

```ts
"0.2"
```

___

### words

• `Optional` `Readonly` **words**: `string`[]

words - list of words to be always considered correct
