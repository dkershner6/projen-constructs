[**dkershner6-projen-nx-monorepo**](../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../globals.md) / NxConfigurator

# Class: NxConfigurator

Configures common NX related tasks and methods.

## Extends

- `Component`

## Implements

- [`INxProjectCore`](../interfaces/INxProjectCore.md)

## Constructors

### new NxConfigurator()

> **new NxConfigurator**(`project`, `options`?): [`NxConfigurator`](NxConfigurator.md)

#### Parameters

• **project**: `Project`

• **options?**: [`NxConfiguratorOptions`](../interfaces/NxConfiguratorOptions.md)

#### Returns

[`NxConfigurator`](NxConfigurator.md)

#### Overrides

`Component.constructor`

## Properties

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`Component.node`

***

### nx

> `readonly` **nx**: [`NxWorkspace`](NxWorkspace.md)

Return the NxWorkspace instance. This should be implemented using a getter.

#### Implementation of

[`INxProjectCore`](../interfaces/INxProjectCore.md).[`nx`](../interfaces/INxProjectCore.md#nx)

***

### project

> `readonly` **project**: `Project`

#### Inherited from

`Component.project`

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

#### Implementation of

[`INxProjectCore`](../interfaces/INxProjectCore.md).[`addImplicitDependency`](../interfaces/INxProjectCore.md#addimplicitdependency)

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

#### Implementation of

[`INxProjectCore`](../interfaces/INxProjectCore.md).[`addJavaDependency`](../interfaces/INxProjectCore.md#addjavadependency)

***

### addNxRunManyTask()

> **addNxRunManyTask**(`name`, `options`): `Task`

Add project task that executes `npx nx run-many ...` style command.

#### Parameters

• **name**: `string`

• **options**: `RunManyOptions`

#### Returns

`Task`

#### Implementation of

[`INxProjectCore`](../interfaces/INxProjectCore.md).[`addNxRunManyTask`](../interfaces/INxProjectCore.md#addnxrunmanytask)

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

#### Implementation of

[`INxProjectCore`](../interfaces/INxProjectCore.md).[`addPythonPoetryDependency`](../interfaces/INxProjectCore.md#addpythonpoetrydependency)

***

### composeNxRunManyCommand()

> **composeNxRunManyCommand**(`options`): `string`[]

Helper to format `npx nx run-many ...` style command

#### Parameters

• **options**: `RunManyOptions`

#### Returns

`string`[]

#### Implementation of

[`INxProjectCore`](../interfaces/INxProjectCore.md).[`composeNxRunManyCommand`](../interfaces/INxProjectCore.md#composenxrunmanycommand)

***

### ensureNxInstallTask()

> **ensureNxInstallTask**(`nxPlugins`): `Task`

Returns the install task or creates one with nx installation command added.

Note: this should only be called from non-node projects

#### Parameters

• **nxPlugins**

additional plugins to install

#### Returns

`Task`

install task

***

### execNxRunManyCommand()

> **execNxRunManyCommand**(`options`): `string`

Helper to format `npx nx run-many ...` style command execution in package manager.

#### Parameters

• **options**: `RunManyOptions`

#### Returns

`string`

#### Implementation of

[`INxProjectCore`](../interfaces/INxProjectCore.md).[`execNxRunManyCommand`](../interfaces/INxProjectCore.md#execnxrunmanycommand)

***

### patchPoetryEnv()

> **patchPoetryEnv**(`project`): `void`

#### Parameters

• **project**: `PythonProject`

#### Returns

`void`

***

### patchPythonProjects()

> **patchPythonProjects**(`projects`): `void`

#### Parameters

• **projects**: `Project`[]

#### Returns

`void`

***

### postSynthesize()

> **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`Component.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Overrides

`Component.preSynthesize`

***

### synth()

> **synth**(): `void`

#### Returns

`void`

#### Inherit Doc

***

### synthesize()

> **synthesize**(): `void`

Synthesizes files to the project output directory.

#### Returns

`void`

#### Inherited from

`Component.synthesize`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`Component.toString`

***

### isComponent()

> `static` **isComponent**(`x`): `x is Component`

Test whether the given construct is a component.

#### Parameters

• **x**: `any`

#### Returns

`x is Component`

#### Inherited from

`Component.isComponent`

***

### isConstruct()

> `static` **isConstruct**(`x`): `x is Construct`

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

• **x**: `any`

Any object

#### Returns

`x is Construct`

true if `x` is an object created from a class which extends `Construct`.

#### Inherited from

`Component.isConstruct`
