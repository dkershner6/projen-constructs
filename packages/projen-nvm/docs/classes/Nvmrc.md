[projen-nvm](../README.md) / [Exports](../modules.md) / Nvmrc

# Class: Nvmrc

## Hierarchy

- `TextFile`

  ↳ **`Nvmrc`**

## Table of contents

### Constructors

- [constructor](Nvmrc.md#constructor)

### Properties

- [absolutePath](Nvmrc.md#absolutepath)
- [executable](Nvmrc.md#executable)
- [node](Nvmrc.md#node)
- [path](Nvmrc.md#path)
- [project](Nvmrc.md#project)
- [readonly](Nvmrc.md#readonly)

### Accessors

- [changed](Nvmrc.md#changed)
- [marker](Nvmrc.md#marker)

### Methods

- [addLine](Nvmrc.md#addline)
- [postSynthesize](Nvmrc.md#postsynthesize)
- [preSynthesize](Nvmrc.md#presynthesize)
- [synthesize](Nvmrc.md#synthesize)
- [synthesizeContent](Nvmrc.md#synthesizecontent)
- [toString](Nvmrc.md#tostring)
- [isComponent](Nvmrc.md#iscomponent)
- [isConstruct](Nvmrc.md#isconstruct)

## Constructors

### constructor

• **new Nvmrc**(`project`, `options?`): [`Nvmrc`](Nvmrc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `NodeProject` |
| `options` | [`NvmrcOptions`](../interfaces/NvmrcOptions.md) |

#### Returns

[`Nvmrc`](Nvmrc.md)

#### Overrides

TextFile.constructor

## Properties

### absolutePath

• `Readonly` **absolutePath**: `string`

The absolute path of this file.

#### Inherited from

TextFile.absolutePath

___

### executable

• **executable**: `boolean`

Indicates if the file should be marked as executable

#### Inherited from

TextFile.executable

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

TextFile.node

___

### path

• `Readonly` **path**: `string`

The file path, relative to the project's outdir.

#### Inherited from

TextFile.path

___

### project

• `Readonly` **project**: `Project`

#### Inherited from

TextFile.project

___

### readonly

• **readonly**: `boolean`

Indicates if the file should be read-only or read-write.

#### Inherited from

TextFile.readonly

## Accessors

### changed

• `get` **changed**(): `undefined` \| `boolean`

Indicates if the file has been changed during synthesis. This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

#### Returns

`undefined` \| `boolean`

#### Inherited from

TextFile.changed

___

### marker

• `get` **marker**(): `undefined` \| `string`

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

#### Returns

`undefined` \| `string`

#### Inherited from

TextFile.marker

## Methods

### addLine

▸ **addLine**(`line`): `void`

Adds a line to the text file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `string` | the line to add (can use tokens) |

#### Returns

`void`

#### Inherited from

TextFile.addLine

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

TextFile.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

TextFile.preSynthesize

___

### synthesize

▸ **synthesize**(): `void`

Writes the file to the project's output directory

#### Returns

`void`

#### Inherited from

TextFile.synthesize

___

### synthesizeContent

▸ **synthesizeContent**(`_`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `IResolver` |

#### Returns

`undefined` \| `string`

#### Inherited from

TextFile.synthesizeContent

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

TextFile.toString

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

TextFile.isComponent

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

TextFile.isConstruct
