[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / INxProjectCore

# Interface: INxProjectCore

Interface that all NXProject implementations should implement.

## Implemented by

- [`MonorepoTsProject`](../classes/MonorepoTsProject.md)
- [`NxConfigurator`](../classes/NxConfigurator.md)

## Table of contents

### Properties

- [nx](INxProjectCore.md#nx)

### Methods

- [addImplicitDependency](INxProjectCore.md#addimplicitdependency)
- [addJavaDependency](INxProjectCore.md#addjavadependency)
- [addNxRunManyTask](INxProjectCore.md#addnxrunmanytask)
- [addPythonPoetryDependency](INxProjectCore.md#addpythonpoetrydependency)
- [composeNxRunManyCommand](INxProjectCore.md#composenxrunmanycommand)
- [execNxRunManyCommand](INxProjectCore.md#execnxrunmanycommand)

## Properties

### nx

• `Readonly` **nx**: [`NxWorkspace`](../classes/NxWorkspace.md)

Return the NxWorkspace instance. This should be implemented using a getter.

## Methods

### addImplicitDependency

▸ **addImplicitDependency**(`dependent`, `dependee`): `void`

Create an implicit dependency between two Projects. This is typically
used in polygot repos where a Typescript project wants a build dependency
on a Python project as an example.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependent` | `Project` | project you want to have the dependency. |
| `dependee` | `string` \| `Project` | project you wish to depend on. |

#### Returns

`void`

**`Throws`**

error if this is called on a dependent which does not have a NXProject component attached.

___

### addJavaDependency

▸ **addJavaDependency**(`dependent`, `dependee`): `void`

Adds a dependency between two Java Projects in the monorepo.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependent` | `JavaProject` | project you want to have the dependency |
| `dependee` | `JavaProject` | project you wish to depend on |

#### Returns

`void`

___

### addNxRunManyTask

▸ **addNxRunManyTask**(`name`, `options`): `Task`

Add project task that executes `npx nx run-many ...` style command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | task name |
| `options` | `RunManyOptions` | options |

#### Returns

`Task`

___

### addPythonPoetryDependency

▸ **addPythonPoetryDependency**(`dependent`, `dependee`): `void`

Adds a dependency between two Python Projects in the monorepo. The dependent must have Poetry enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependent` | `PythonProject` | project you want to have the dependency (must be a Poetry Python Project) |
| `dependee` | `PythonProject` | project you wish to depend on |

#### Returns

`void`

**`Throws`**

error if the dependent does not have Poetry enabled

___

### composeNxRunManyCommand

▸ **composeNxRunManyCommand**(`options`): `string`[]

Helper to format `npx nx run-many ...` style command

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RunManyOptions` |

#### Returns

`string`[]

___

### execNxRunManyCommand

▸ **execNxRunManyCommand**(`options`): `string`

Helper to format `npx nx run-many ...` style command execution in package manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RunManyOptions` |

#### Returns

`string`
