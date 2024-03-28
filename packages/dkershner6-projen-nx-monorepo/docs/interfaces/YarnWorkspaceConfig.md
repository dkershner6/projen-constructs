[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / YarnWorkspaceConfig

# Interface: YarnWorkspaceConfig

Yarn related workspace config

## Table of contents

### Properties

- [disableNoHoistBundled](YarnWorkspaceConfig.md#disablenohoistbundled)
- [noHoist](YarnWorkspaceConfig.md#nohoist)

## Properties

### disableNoHoistBundled

• `Optional` `Readonly` **disableNoHoistBundled**: `boolean`

Disable automatically applying `noHoist` logic for all sub-project "bundledDependencies".

**`Default`**

```ts
false
```

___

### noHoist

• `Optional` `Readonly` **noHoist**: `string`[]

List of package globs to exclude from hoisting in the workspace.

**`See`**

https://classic.yarnpkg.com/blog/2018/02/15/nohoist/
