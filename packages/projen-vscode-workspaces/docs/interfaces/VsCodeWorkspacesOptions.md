[projen-vscode-workspaces](../README.md) / [Exports](../modules.md) / VsCodeWorkspacesOptions

# Interface: VsCodeWorkspacesOptions

## Table of contents

### Properties

- [additionalWorkspacesJsonSettings](VsCodeWorkspacesOptions.md#additionalworkspacesjsonsettings)
- [disableMonoRepoExtensionRecommendations](VsCodeWorkspacesOptions.md#disablemonorepoextensionrecommendations)
- [filename](VsCodeWorkspacesOptions.md#filename)
- [path](VsCodeWorkspacesOptions.md#path)
- [projectNamer](VsCodeWorkspacesOptions.md#projectnamer)

## Properties

### additionalWorkspacesJsonSettings

• `Optional` **additionalWorkspacesJsonSettings**: `Omit`\<[`VsCodeWorkspacesJson`](../modules.md#vscodeworkspacesjson), ``"folders"``\>

**`Default`**

```ts
none
```

___

### disableMonoRepoExtensionRecommendations

• `Optional` **disableMonoRepoExtensionRecommendations**: `boolean`

**`Default`**

```ts
false
```

___

### filename

• **filename**: `string`

Should end with ".code-workspace"

___

### path

• `Optional` **path**: `string`

**`Default`**

```ts
".vscode"
```

___

### projectNamer

• `Optional` **projectNamer**: (`project`: `Project`, `rootProject`: `Project`) => `string`

**`Default`**

```ts
(project) => project.name
```

**`Param`**

The root project definition to use for naming

**`Param`**

The project definition to use for naming

#### Type declaration

▸ (`project`, `rootProject`): `string`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | `Project` | The project definition to use for naming |
| `rootProject` | `Project` | The root project definition to use for naming |

##### Returns

`string`

The name of the project in the context of VSCode Workspaces

**`Default`**

```ts
(project) => project.name
```
