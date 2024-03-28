[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / WorkspaceConfig

# Interface: WorkspaceConfig

Workspace configurations.

**`See`**

https://classic.yarnpkg.com/lang/en/docs/workspaces/

## Table of contents

### Properties

- [additionalPackages](WorkspaceConfig.md#additionalpackages)
- [linkLocalWorkspaceBins](WorkspaceConfig.md#linklocalworkspacebins)
- [yarn](WorkspaceConfig.md#yarn)

## Properties

### additionalPackages

• `Optional` `Readonly` **additionalPackages**: `string`[]

List of additional package globs to include in the workspace.

All packages which are parented by the monorepo are automatically added to the workspace, but you can use this
property to specify any additional paths to packages which may not be managed by projen.

___

### linkLocalWorkspaceBins

• `Optional` `Readonly` **linkLocalWorkspaceBins**: `boolean`

Links all local workspace project bins so they can be used for local development.

Package bins are only linked when installed from the registry, however it is very useful
for monorepo development to also utilize these bin scripts. When enabled, this flag will
recursively link all bins from packages.json files to the root node_modules/.bin.

___

### yarn

• `Optional` `Readonly` **yarn**: [`YarnWorkspaceConfig`](YarnWorkspaceConfig.md)

Yarn workspace config
