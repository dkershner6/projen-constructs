[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / NxProject

# Class: NxProject

Component which manages the project specific NX Config and is added to all NXMonorepo subprojects.

## Hierarchy

- `Component`

  ↳ **`NxProject`**

## Table of contents

### Constructors

- [constructor](NxProject.md#constructor)

### Properties

- [file](NxProject.md#file)
- [implicitDependencies](NxProject.md#implicitdependencies)
- [includedScripts](NxProject.md#includedscripts)
- [namedInputs](NxProject.md#namedinputs)
- [node](NxProject.md#node)
- [project](NxProject.md#project)
- [tags](NxProject.md#tags)
- [targets](NxProject.md#targets)

### Methods

- [addBuildTargetFiles](NxProject.md#addbuildtargetfiles)
- [addImplicitDependency](NxProject.md#addimplicitdependency)
- [addJavaDependency](NxProject.md#addjavadependency)
- [addPythonPoetryDependency](NxProject.md#addpythonpoetrydependency)
- [addTag](NxProject.md#addtag)
- [inferTargets](NxProject.md#infertargets)
- [merge](NxProject.md#merge)
- [postSynthesize](NxProject.md#postsynthesize)
- [preSynthesize](NxProject.md#presynthesize)
- [setNamedInput](NxProject.md#setnamedinput)
- [setTarget](NxProject.md#settarget)
- [synthesize](NxProject.md#synthesize)
- [toString](NxProject.md#tostring)
- [ensure](NxProject.md#ensure)
- [isComponent](NxProject.md#iscomponent)
- [isConstruct](NxProject.md#isconstruct)
- [of](NxProject.md#of)

## Constructors

### constructor

• **new NxProject**(`project`): [`NxProject`](NxProject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `Project` |

#### Returns

[`NxProject`](NxProject.md)

#### Overrides

Component.constructor

## Properties

### file

• `Readonly` **file**: `JsonFile`

Raw json file

**Attention:** any overrides applied here will not be visible
in the properties and only included in final synthesized output,
and likely to override native handling.

**`Advanced`**

___

### implicitDependencies

• **implicitDependencies**: `string`[] = `[]`

Implicit dependencies

**`See`**

https://nx.dev/reference/project-configuration#implicitdependencies

___

### includedScripts

• **includedScripts**: `string`[] = `[]`

Explicit list of scripts for Nx to include.

**`See`**

https://nx.dev/reference/project-configuration#ignoring-package.json-scripts

___

### namedInputs

• **namedInputs**: `Obj`\<`any`\> = `{}`

Named inputs

**`See`**

https://nx.dev/reference/nx-json#inputs-&-namedinputs

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Component.node

___

### project

• `Readonly` **project**: `Project`

#### Inherited from

Component.project

___

### tags

• **tags**: `string`[] = `[]`

Project tag annotations

**`See`**

https://nx.dev/reference/project-configuration#tags

___

### targets

• **targets**: `Obj`\<`any`\> = `{}`

Targets configuration

**`See`**

https://nx.dev/reference/project-configuration

## Methods

### addBuildTargetFiles

▸ **addBuildTargetFiles**(`inputs?`, `outputs?`): `void`

Add input and output files to build target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs?` | (`string` \| `IInput`)[] | Input files |
| `outputs?` | `string`[] | Output files |

#### Returns

`void`

___

### addImplicitDependency

▸ **addImplicitDependency**(`...dependee`): `void`

Adds an implicit dependency between the dependant (this project) and dependee.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...dependee` | (`string` \| `Project`)[] | project to add the implicit dependency on. |

#### Returns

`void`

___

### addJavaDependency

▸ **addJavaDependency**(`dependee`): `void`

Adds a dependency between two Java Projects in the monorepo.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependee` | `JavaProject` | project you wish to depend on |

#### Returns

`void`

___

### addPythonPoetryDependency

▸ **addPythonPoetryDependency**(`dependee`): `void`

Adds a dependency between two Python Projects in the monorepo. The dependent must have Poetry enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependee` | `PythonProject` | project you wish to depend on |

#### Returns

`void`

**`Throws`**

error if the dependent does not have Poetry enabled

___

### addTag

▸ **addTag**(`...tags`): `void`

Add tag

#### Parameters

| Name | Type |
| :------ | :------ |
| `...tags` | `string`[] |

#### Returns

`void`

___

### inferTargets

▸ **inferTargets**(): `void`

Automatically infer targets based on project type.

#### Returns

`void`

___

### merge

▸ **merge**(`config`): `void`

Merge configuration into existing config

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ProjectConfig` |

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

Called before synthesis.

#### Returns

`void`

#### Inherited from

Component.preSynthesize

___

### setNamedInput

▸ **setNamedInput**(`name`, `inputs`): `void`

Set `namedInputs` helper

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `inputs` | `string`[] |

#### Returns

`void`

___

### setTarget

▸ **setTarget**(`name`, `target`, `includeDefaults?`): `void`

Set `targets` helper

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `target` | `IProjectTarget` | `undefined` |
| `includeDefaults` | `string` \| `boolean` | `false` |

#### Returns

`void`

___

### synthesize

▸ **synthesize**(): `void`

#### Returns

`void`

#### Overrides

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

### ensure

▸ **ensure**(`project`): [`NxProject`](NxProject.md)

Retrieves an instance of NXProject if one is associated to the given project,
otherwise created a NXProject instance for the project.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | `Project` | project instance. |

#### Returns

[`NxProject`](NxProject.md)

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

___

### of

▸ **of**(`project`): `undefined` \| [`NxProject`](NxProject.md)

Retrieves an instance of NXProject if one is associated to the given project.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | `Project` | project instance. |

#### Returns

`undefined` \| [`NxProject`](NxProject.md)
