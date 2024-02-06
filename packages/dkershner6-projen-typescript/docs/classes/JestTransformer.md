[dkershner6-projen-typescript](../README.md) / [Exports](../modules.md) / JestTransformer

# Class: JestTransformer

## Hierarchy

- `Component`

  ↳ **`JestTransformer`**

## Table of contents

### Constructors

- [constructor](JestTransformer.md#constructor)

### Properties

- [\_modulesToTransform](JestTransformer.md#_modulestotransform)
- [node](JestTransformer.md#node)
- [project](JestTransformer.md#project)
- [ESM\_MODULES\_TO\_TRANSFORM](JestTransformer.md#esm_modules_to_transform)

### Accessors

- [modulesToTransform](JestTransformer.md#modulestotransform)

### Methods

- [addModulesToTransform](JestTransformer.md#addmodulestotransform)
- [buildTransformIgnorePatterns](JestTransformer.md#buildtransformignorepatterns)
- [postSynthesize](JestTransformer.md#postsynthesize)
- [preSynthesize](JestTransformer.md#presynthesize)
- [removeModulesToTransform](JestTransformer.md#removemodulestotransform)
- [synthesize](JestTransformer.md#synthesize)
- [toString](JestTransformer.md#tostring)
- [isComponent](JestTransformer.md#iscomponent)
- [isConstruct](JestTransformer.md#isconstruct)

## Constructors

### constructor

• **new JestTransformer**(`project`, `options?`): [`JestTransformer`](JestTransformer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `TypeScriptProject` |
| `options?` | [`Node20TypeScriptProjectJestOptions`](../interfaces/Node20TypeScriptProjectJestOptions.md) |

#### Returns

[`JestTransformer`](JestTransformer.md)

#### Overrides

Component.constructor

## Properties

### \_modulesToTransform

• `Private` `Readonly` **\_modulesToTransform**: `Set`\<`string`\>

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

### ESM\_MODULES\_TO\_TRANSFORM

▪ `Static` **ESM\_MODULES\_TO\_TRANSFORM**: `string`[]

## Accessors

### modulesToTransform

• `get` **modulesToTransform**(): `Set`\<`string`\>

#### Returns

`Set`\<`string`\>

## Methods

### addModulesToTransform

▸ **addModulesToTransform**(`...modules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...modules` | `string`[] |

#### Returns

`void`

___

### buildTransformIgnorePatterns

▸ **buildTransformIgnorePatterns**(`nodeModulesToTransform?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeModulesToTransform?` | `string`[] |

#### Returns

`string`[]

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

### removeModulesToTransform

▸ **removeModulesToTransform**(`...modules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...modules` | `string`[] |

#### Returns

`void`

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
