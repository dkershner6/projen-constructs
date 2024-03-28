[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / [NodePackageUtils](NodePackageUtils.md) / command

# Namespace: command

[NodePackageUtils](NodePackageUtils.md).command

Command based utilities

## Table of contents

### Functions

- [bin](NodePackageUtils.command.md#bin)
- [cmd](NodePackageUtils.command.md#cmd)
- [downloadExec](NodePackageUtils.command.md#downloadexec)
- [exec](NodePackageUtils.command.md#exec)
- [install](NodePackageUtils.command.md#install)
- [projen](NodePackageUtils.command.md#projen)
- [runScript](NodePackageUtils.command.md#runscript)

## Functions

### bin

▸ **bin**(`packageManager`, `_cmd`): `string`

Get bash command for executing an executable in the package manager /bin dir.
Example: `$(yarn bin)/${cmd}`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageManager` | `NodePackageManager` |
| `_cmd` | `string` |

#### Returns

`string`

___

### cmd

▸ **cmd**(`packageManager`, `...args`): `string`

Get command to run

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageManager` | `NodePackageManager` |
| `...args` | `string`[] |

#### Returns

`string`

___

### downloadExec

▸ **downloadExec**(`packageManager`, `...args`): `string`

Get command to run a package in a temporary environment

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageManager` | `NodePackageManager` |
| `...args` | `string`[] |

#### Returns

`string`

___

### exec

▸ **exec**(`packageManager`, `...args`): `string`

Get command to execute a shell command

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageManager` | `NodePackageManager` |
| `...args` | `string`[] |

#### Returns

`string`

___

### install

▸ **install**(`packageManager`, `...args`): `string`

Get command to install a package

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageManager` | `NodePackageManager` |
| `...args` | `string`[] |

#### Returns

`string`

___

### projen

▸ **projen**(`packageManager`, `...args`): `string`

Get command to execute projen or a projen task

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageManager` | `NodePackageManager` |
| `...args` | `string`[] |

#### Returns

`string`

___

### runScript

▸ **runScript**(`packageManager`, `...args`): `string`

Get command to run a script defined in the package.json

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageManager` | `NodePackageManager` |
| `...args` | `string`[] |

#### Returns

`string`
