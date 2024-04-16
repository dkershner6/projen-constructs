[projen-sonar](../README.md) / [Exports](../modules.md) / SonarBuildWorkflowPatch

# Class: SonarBuildWorkflowPatch

## Hierarchy

- `Component`

  ↳ **`SonarBuildWorkflowPatch`**

## Table of contents

### Constructors

- [constructor](SonarBuildWorkflowPatch.md#constructor)

### Properties

- [node](SonarBuildWorkflowPatch.md#node)
- [project](SonarBuildWorkflowPatch.md#project)

### Methods

- [postSynthesize](SonarBuildWorkflowPatch.md#postsynthesize)
- [preSynthesize](SonarBuildWorkflowPatch.md#presynthesize)
- [synthesize](SonarBuildWorkflowPatch.md#synthesize)
- [toString](SonarBuildWorkflowPatch.md#tostring)
- [isComponent](SonarBuildWorkflowPatch.md#iscomponent)
- [isConstruct](SonarBuildWorkflowPatch.md#isconstruct)

## Constructors

### constructor

• **new SonarBuildWorkflowPatch**(`project`, `options?`): [`SonarBuildWorkflowPatch`](SonarBuildWorkflowPatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `Project` |
| `options?` | `Pick`\<[`SonarFullQualityScanWorkflowOptions`](../interfaces/SonarFullQualityScanWorkflowOptions.md), ``"jobConfig"`` \| ``"actionVersion"``\> |

#### Returns

[`SonarBuildWorkflowPatch`](SonarBuildWorkflowPatch.md)

#### Overrides

Component.constructor

## Properties

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

## Methods

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
