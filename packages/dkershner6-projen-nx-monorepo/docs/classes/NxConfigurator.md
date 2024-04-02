[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / NxConfigurator

# Class: NxConfigurator

Configures common NX related tasks and methods.

## Hierarchy

- `Component`

  ↳ **`NxConfigurator`**

## Implements

- [`INxProjectCore`](../interfaces/INxProjectCore.md)

## Table of contents

### Constructors

- [constructor](NxConfigurator.md#constructor)

### Properties

- [node](NxConfigurator.md#node)
- [nx](NxConfigurator.md#nx)
- [nxPlugins](NxConfigurator.md#nxplugins)
- [project](NxConfigurator.md#project)

### Methods

- [\_invokeInstallCITasks](NxConfigurator.md#_invokeinstallcitasks)
- [addImplicitDependency](NxConfigurator.md#addimplicitdependency)
- [addJavaDependency](NxConfigurator.md#addjavadependency)
- [addNxRunManyTask](NxConfigurator.md#addnxrunmanytask)
- [addPythonPoetryDependency](NxConfigurator.md#addpythonpoetrydependency)
- [composeNxRunManyCommand](NxConfigurator.md#composenxrunmanycommand)
- [ensureNxInstallTask](NxConfigurator.md#ensurenxinstalltask)
- [execNxRunManyCommand](NxConfigurator.md#execnxrunmanycommand)
- [patchPoetryEnv](NxConfigurator.md#patchpoetryenv)
- [patchPythonProjects](NxConfigurator.md#patchpythonprojects)
- [postSynthesize](NxConfigurator.md#postsynthesize)
- [preSynthesize](NxConfigurator.md#presynthesize)
- [resetDefaultTask](NxConfigurator.md#resetdefaulttask)
- [synth](NxConfigurator.md#synth)
- [synthesize](NxConfigurator.md#synthesize)
- [toString](NxConfigurator.md#tostring)
- [isComponent](NxConfigurator.md#iscomponent)
- [isConstruct](NxConfigurator.md#isconstruct)

## Constructors

### constructor

• **new NxConfigurator**(`project`, `options?`): [`NxConfigurator`](NxConfigurator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `Project` |
| `options?` | [`NxConfiguratorOptions`](../interfaces/NxConfiguratorOptions.md) |

#### Returns

[`NxConfigurator`](NxConfigurator.md)

#### Overrides

Component.constructor

## Properties

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Component.node

___

### nx

• `Readonly` **nx**: [`NxWorkspace`](NxWorkspace.md)

Return the NxWorkspace instance. This should be implemented using a getter.

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[nx](../interfaces/INxProjectCore.md#nx)

___

### nxPlugins

• `Private` **nxPlugins**: `Object` = `{}`

#### Index signature

▪ [dep: `string`]: `string`

___

### project

• `Readonly` **project**: `Project`

#### Inherited from

Component.project

## Methods

### \_invokeInstallCITasks

▸ **_invokeInstallCITasks**(): `void`

#### Returns

`void`

___

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[addImplicitDependency](../interfaces/INxProjectCore.md#addimplicitdependency)

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[addJavaDependency](../interfaces/INxProjectCore.md#addjavadependency)

___

### addNxRunManyTask

▸ **addNxRunManyTask**(`name`, `options`): `Task`

Add project task that executes `npx nx run-many ...` style command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `RunManyOptions` |

#### Returns

`Task`

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[addNxRunManyTask](../interfaces/INxProjectCore.md#addnxrunmanytask)

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[addPythonPoetryDependency](../interfaces/INxProjectCore.md#addpythonpoetrydependency)

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[composeNxRunManyCommand](../interfaces/INxProjectCore.md#composenxrunmanycommand)

___

### ensureNxInstallTask

▸ **ensureNxInstallTask**(`nxPlugins`): `Task`

Returns the install task or creates one with nx installation command added.

Note: this should only be called from non-node projects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nxPlugins` | `Object` | additional plugins to install |

#### Returns

`Task`

install task

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[execNxRunManyCommand](../interfaces/INxProjectCore.md#execnxrunmanycommand)

___

### patchPoetryEnv

▸ **patchPoetryEnv**(`project`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `PythonProject` |

#### Returns

`void`

___

### patchPythonProjects

▸ **patchPythonProjects**(`projects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `projects` | `Project`[] |

#### Returns

`void`

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

Component.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

#### Returns

`void`

#### Overrides

Component.preSynthesize

___

### resetDefaultTask

▸ **resetDefaultTask**(): `void`

Ensures subprojects don't have a default task

#### Returns

`void`

___

### synth

▸ **synth**(): `void`

#### Returns

`void`

**`Inherit Doc`**

___

### synthesize

▸ **synthesize**(): `void`

Synthesizes files to the project output directory.

#### Returns

`void`

#### Inherited from

Component.synthesize

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

Component.toString

___

### isComponent

▸ **isComponent**(`x`): x is Component

Test whether the given construct is a component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

x is Component

#### Inherited from

Component.isComponent

___

### isConstruct

▸ **isConstruct**(`x`): x is Construct

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `any` | Any object |

#### Returns

x is Construct

true if `x` is an object created from a class which extends `Construct`.

#### Inherited from

Component.isConstruct
