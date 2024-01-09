[dkershner6-projen-react](../README.md) / [Exports](../modules.md) / Node20ReactTypescriptConfigurer

# Class: Node20ReactTypescriptConfigurer

## Hierarchy

- `Component`

  ↳ **`Node20ReactTypescriptConfigurer`**

## Table of contents

### Constructors

- [constructor](Node20ReactTypescriptConfigurer.md#constructor)

### Properties

- [node](Node20ReactTypescriptConfigurer.md#node)
- [project](Node20ReactTypescriptConfigurer.md#project)

### Methods

- [configureEslint](Node20ReactTypescriptConfigurer.md#configureeslint)
- [configureJest](Node20ReactTypescriptConfigurer.md#configurejest)
- [installDeps](Node20ReactTypescriptConfigurer.md#installdeps)
- [postSynthesize](Node20ReactTypescriptConfigurer.md#postsynthesize)
- [preSynthesize](Node20ReactTypescriptConfigurer.md#presynthesize)
- [synthesize](Node20ReactTypescriptConfigurer.md#synthesize)
- [toString](Node20ReactTypescriptConfigurer.md#tostring)
- [isComponent](Node20ReactTypescriptConfigurer.md#iscomponent)
- [isConstruct](Node20ReactTypescriptConfigurer.md#isconstruct)

## Constructors

### constructor

• **new Node20ReactTypescriptConfigurer**(`project`, `options?`): [`Node20ReactTypescriptConfigurer`](Node20ReactTypescriptConfigurer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `TypeScriptProject` |
| `options` | [`Node20ReactTypescriptConfigurerOptions`](../interfaces/Node20ReactTypescriptConfigurerOptions.md) |

#### Returns

[`Node20ReactTypescriptConfigurer`](Node20ReactTypescriptConfigurer.md)

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

• `Readonly` **project**: `TypeScriptProject`

#### Overrides

Component.project

## Methods

### configureEslint

▸ **configureEslint**(): `void`

#### Returns

`void`

___

### configureJest

▸ **configureJest**(): `void`

#### Returns

`void`

___

### installDeps

▸ **installDeps**(`projectType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectType` | `undefined` \| ``"library"`` \| ``"app"`` |

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
