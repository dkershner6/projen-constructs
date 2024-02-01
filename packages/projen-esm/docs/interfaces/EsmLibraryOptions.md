[projen-esm](../README.md) / [Exports](../modules.md) / EsmLibraryOptions

# Interface: EsmLibraryOptions

## Table of contents

### Properties

- [babel](EsmLibraryOptions.md#babel)
- [babelConfigFileOptions](EsmLibraryOptions.md#babelconfigfileoptions)
- [babelTestConfigFileOptions](EsmLibraryOptions.md#babeltestconfigfileoptions)
- [setupEslintToEnforceImportFileExtensions](EsmLibraryOptions.md#setupeslinttoenforceimportfileextensions)

## Properties

### babel

• `Optional` `Readonly` **babel**: `boolean`

Use babel instead of tsc to compile.

___

### babelConfigFileOptions

• `Optional` `Readonly` **babelConfigFileOptions**: `BabelConfigFileOptions`

Options for the babel config file.

**`Default`**

```ts
- Typical options for an ESM library.
```

___

### babelTestConfigFileOptions

• `Optional` `Readonly` **babelTestConfigFileOptions**: `BabelConfigFileOptions`

Options for the babel test config file.

**`Default`**

```ts
- Typical options for an ESM library.
```

___

### setupEslintToEnforceImportFileExtensions

• `Optional` `Readonly` **setupEslintToEnforceImportFileExtensions**: `boolean`

Whether or not to setup eslint to enforce import file extensions.

**`Example`**

```ts
import { MyComponent } from "./MyComponent.js";
```
