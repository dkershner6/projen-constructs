[projen-vscode-workspaces](README.md) / Exports

# projen-vscode-workspaces

## Table of contents

### Classes

- [VsCodeWorkspaces](classes/VsCodeWorkspaces.md)

### Interfaces

- [VsCodeWorkspacesOptions](interfaces/VsCodeWorkspacesOptions.md)

### Type Aliases

- [VsCodeWorkspacesJson](modules.md#vscodeworkspacesjson)

### Variables

- [NON\_MONOREPO\_ERROR\_MESSAGE](modules.md#non_monorepo_error_message)

## Type Aliases

### VsCodeWorkspacesJson

Ƭ **VsCodeWorkspacesJson**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `extensions?` | \{ `recommendations?`: `string`[]  } |
| `extensions.recommendations?` | `string`[] |
| `folders` | \{ `name`: `string` ; `path`: `string`  }[] |
| `settings?` | \{ `[key: string]`: `unknown`;  } |

## Variables

### NON\_MONOREPO\_ERROR\_MESSAGE

• `Const` **NON\_MONOREPO\_ERROR\_MESSAGE**: ``"VsCodeWorkspaces can only be used in a Project with subprojects"``
