[dkershner6-projen-typescript](../README.md) / [Exports](../modules.md) / DKTasks

# Class: DKTasks

## Hierarchy

- `Component`

  ↳ **`DKTasks`**

## Table of contents

### Constructors

- [constructor](DKTasks.md#constructor)

### Properties

- [node](DKTasks.md#node)
- [project](DKTasks.md#project)
- [IS\_NOT\_RELEASE\_CONDITION](DKTasks.md#is_not_release_condition)
- [UPGRADE\_SCOPE\_ENV\_NOT\_BLANK\_CONDITION](DKTasks.md#upgrade_scope_env_not_blank_condition)

### Methods

- [alterUpgradeScopeTask](DKTasks.md#alterupgradescopetask)
- [postSynthesize](DKTasks.md#postsynthesize)
- [preSynthesize](DKTasks.md#presynthesize)
- [synthesize](DKTasks.md#synthesize)
- [toString](DKTasks.md#tostring)
- [isComponent](DKTasks.md#iscomponent)
- [isConstruct](DKTasks.md#isconstruct)

## Constructors

### constructor

• **new DKTasks**(`project`): [`DKTasks`](DKTasks.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `TypeScriptProject` |

#### Returns

[`DKTasks`](DKTasks.md)

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

• **project**: `TypeScriptProject`

#### Overrides

Component.project

___

### IS\_NOT\_RELEASE\_CONDITION

▪ `Static` `Readonly` **IS\_NOT\_RELEASE\_CONDITION**: ``"if [ \"$RELEASE\" = \"true\" ] ; then exit 1 ; fi"``

___

### UPGRADE\_SCOPE\_ENV\_NOT\_BLANK\_CONDITION

▪ `Static` `Readonly` **UPGRADE\_SCOPE\_ENV\_NOT\_BLANK\_CONDITION**: ``"if [ -z \"$UPGRADE_SCOPE\" ] ; then echo 'UPGRADE_SCOPE env variable must be populated with exactly one scope' && exit 1 ; fi"``

## Methods

### alterUpgradeScopeTask

▸ **alterUpgradeScopeTask**(): `void`

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
