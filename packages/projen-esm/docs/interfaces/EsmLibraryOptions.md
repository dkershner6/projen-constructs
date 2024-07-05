[**projen-esm**](../README.md) • **Docs**

***

[projen-esm](../globals.md) / EsmLibraryOptions

# Interface: EsmLibraryOptions

## Properties

### babel?

> `readonly` `optional` **babel**: `boolean`

Use babel instead of tsc to compile.

***

### babelConfigFileOptions?

> `readonly` `optional` **babelConfigFileOptions**: `BabelConfigFileOptions`

Options for the babel config file.

#### Default

```ts
- Typical options for an ESM library.
```

***

### babelTestConfigFileOptions?

> `readonly` `optional` **babelTestConfigFileOptions**: `BabelConfigFileOptions`

Options for the babel test config file.

#### Default

```ts
- Typical options for an ESM library.
```

***

### setupEslintToEnforceImportFileExtensions?

> `readonly` `optional` **setupEslintToEnforceImportFileExtensions**: `boolean`

Whether or not to setup eslint to enforce import file extensions.

#### Example

```ts
import { MyComponent } from "./MyComponent.js";
```
