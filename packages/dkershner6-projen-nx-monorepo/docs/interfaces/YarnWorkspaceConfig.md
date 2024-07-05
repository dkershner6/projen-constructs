[**dkershner6-projen-nx-monorepo**](../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../globals.md) / YarnWorkspaceConfig

# Interface: YarnWorkspaceConfig

Yarn related workspace config

## Properties

### disableNoHoistBundled?

> `readonly` `optional` **disableNoHoistBundled**: `boolean`

Disable automatically applying `noHoist` logic for all sub-project "bundledDependencies".

#### Default

```ts
false
```

***

### noHoist?

> `readonly` `optional` **noHoist**: `string`[]

List of package globs to exclude from hoisting in the workspace.

#### See

https://classic.yarnpkg.com/blog/2018/02/15/nohoist/
