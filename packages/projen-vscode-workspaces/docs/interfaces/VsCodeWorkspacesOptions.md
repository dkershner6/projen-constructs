[**projen-vscode-workspaces**](../README.md) • **Docs**

***

[projen-vscode-workspaces](../globals.md) / VsCodeWorkspacesOptions

# Interface: VsCodeWorkspacesOptions

## Properties

### additionalWorkspacesJsonSettings?

> `optional` **additionalWorkspacesJsonSettings**: `Omit`\<[`VsCodeWorkspacesJson`](../type-aliases/VsCodeWorkspacesJson.md), `"folders"`\>

#### Default

```ts
none
```

***

### disableMonoRepoExtensionRecommendations?

> `optional` **disableMonoRepoExtensionRecommendations**: `boolean`

#### Default

```ts
false
```

***

### filename

> **filename**: `string`

Should end with ".code-workspace"

***

### path?

> `optional` **path**: `string`

#### Default

```ts
".vscode"
```

***

### projectNamer()?

> `optional` **projectNamer**: (`project`, `rootProject`) => `string`

#### Parameters

• **project**: `Project`

The project definition to use for naming

• **rootProject**: `Project`

The root project definition to use for naming

#### Returns

`string`

The name of the project in the context of VSCode Workspaces
