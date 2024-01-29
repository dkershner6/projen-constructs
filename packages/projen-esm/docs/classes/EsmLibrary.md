[projen-esm](../README.md) / [Exports](../modules.md) / EsmLibrary

# Class: EsmLibrary

Adds ESM support and linting to a projen TypeScript project.

## Hierarchy

- `Component`

  ↳ **`EsmLibrary`**

## Table of contents

### Constructors

- [constructor](EsmLibrary.md#constructor)

### Properties

- [babelConfigFile](EsmLibrary.md#babelconfigfile)
- [node](EsmLibrary.md#node)
- [options](EsmLibrary.md#options)
- [project](EsmLibrary.md#project)

### Methods

- [postSynthesize](EsmLibrary.md#postsynthesize)
- [preSynthesize](EsmLibrary.md#presynthesize)
- [setupEslintToEnforceImportFileExtensions](EsmLibrary.md#setupeslinttoenforceimportfileextensions)
- [synthesize](EsmLibrary.md#synthesize)
- [toString](EsmLibrary.md#tostring)
- [useBabelInsteadOfTsc](EsmLibrary.md#usebabelinsteadoftsc)
- [isComponent](EsmLibrary.md#iscomponent)
- [isConstruct](EsmLibrary.md#isconstruct)

## Constructors

### constructor

• **new EsmLibrary**(`project`, `options?`): [`EsmLibrary`](EsmLibrary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `TypeScriptProject` |
| `options` | [`EsmLibraryOptions`](../interfaces/EsmLibraryOptions.md) |

#### Returns

[`EsmLibrary`](EsmLibrary.md)

#### Overrides

Component.constructor

## Properties

### babelConfigFile

• `Optional` **babelConfigFile**: `BabelConfigFile`

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Component.node

___

### options

• `Private` `Readonly` **options**: [`EsmLibraryOptions`](../interfaces/EsmLibraryOptions.md) = `{}`

___

### project

• **project**: `TypeScriptProject`

#### Overrides

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

### setupEslintToEnforceImportFileExtensions

▸ **setupEslintToEnforceImportFileExtensions**(): `void`

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

### useBabelInsteadOfTsc

▸ **useBabelInsteadOfTsc**(): `void`

#### Returns

`void`

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
