[**dkershner6-projen-nx-monorepo**](../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../globals.md) / INxProjectCore

# Interface: INxProjectCore

Interface that all NXProject implementations should implement.

## Properties

### nx

> `readonly` **nx**: [`NxWorkspace`](../classes/NxWorkspace.md)

Return the NxWorkspace instance. This should be implemented using a getter.

## Methods

### addImplicitDependency()

> **addImplicitDependency**(`dependent`, `dependee`): `void`

Create an implicit dependency between two Projects. This is typically
used in polygot repos where a Typescript project wants a build dependency
on a Python project as an example.

#### Parameters

• **dependent**: `Project`

project you want to have the dependency.

• **dependee**: `string` \| `Project`

project you wish to depend on.

#### Returns

`void`

#### Throws

error if this is called on a dependent which does not have a NXProject component attached.

***

### addJavaDependency()

> **addJavaDependency**(`dependent`, `dependee`): `void`

Adds a dependency between two Java Projects in the monorepo.

#### Parameters

• **dependent**: `JavaProject`

project you want to have the dependency

• **dependee**: `JavaProject`

project you wish to depend on

#### Returns

`void`

***

### addNxRunManyTask()

> **addNxRunManyTask**(`name`, `options`): `Task`

Add project task that executes `npx nx run-many ...` style command.

#### Parameters

• **name**: `string`

task name

• **options**: `RunManyOptions`

options

#### Returns

`Task`

***

### addPythonPoetryDependency()

> **addPythonPoetryDependency**(`dependent`, `dependee`): `void`

Adds a dependency between two Python Projects in the monorepo. The dependent must have Poetry enabled.

#### Parameters

• **dependent**: `PythonProject`

project you want to have the dependency (must be a Poetry Python Project)

• **dependee**: `PythonProject`

project you wish to depend on

#### Returns

`void`

#### Throws

error if the dependent does not have Poetry enabled

***

### composeNxRunManyCommand()

> **composeNxRunManyCommand**(`options`): `string`[]

Helper to format `npx nx run-many ...` style command

#### Parameters

• **options**: `RunManyOptions`

#### Returns

`string`[]

***

### execNxRunManyCommand()

> **execNxRunManyCommand**(`options`): `string`

Helper to format `npx nx run-many ...` style command execution in package manager.

#### Parameters

• **options**: `RunManyOptions`

#### Returns

`string`
