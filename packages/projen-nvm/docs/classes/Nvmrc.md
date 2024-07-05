[**projen-nvm**](../README.md) • **Docs**

***

[projen-nvm](../globals.md) / Nvmrc

# Class: Nvmrc

## Extends

- `TextFile`

## Constructors

### new Nvmrc()

> **new Nvmrc**(`project`, `options`): [`Nvmrc`](Nvmrc.md)

#### Parameters

• **project**: `NodeProject`

• **options**: [`NvmrcOptions`](../interfaces/NvmrcOptions.md) = `{}`

#### Returns

[`Nvmrc`](Nvmrc.md)

#### Overrides

`TextFile.constructor`

## Properties

### absolutePath

> `readonly` **absolutePath**: `string`

The absolute path of this file.

#### Inherited from

`TextFile.absolutePath`

***

### executable

> **executable**: `boolean`

Indicates if the file should be marked as executable

#### Inherited from

`TextFile.executable`

***

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`TextFile.node`

***

### path

> `readonly` **path**: `string`

The file path, relative to the project's outdir.

#### Inherited from

`TextFile.path`

***

### project

> `readonly` **project**: `Project`

#### Inherited from

`TextFile.project`

***

### readonly

> **readonly**: `boolean`

Indicates if the file should be read-only or read-write.

#### Inherited from

`TextFile.readonly`

## Accessors

### changed

> `get` **changed**(): `undefined` \| `boolean`

Indicates if the file has been changed during synthesis. This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

#### Returns

`undefined` \| `boolean`

#### Inherited from

`TextFile.changed`

***

### marker

> `get` **marker**(): `undefined` \| `string`

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

#### Returns

`undefined` \| `string`

#### Inherited from

`TextFile.marker`

## Methods

### addLine()

> **addLine**(`line`): `void`

Adds a line to the text file.

#### Parameters

• **line**: `string`

the line to add (can use tokens)

#### Returns

`void`

#### Inherited from

`TextFile.addLine`

***

### postSynthesize()

> **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`TextFile.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

`TextFile.preSynthesize`

***

### synthesize()

> **synthesize**(): `void`

Writes the file to the project's output directory

#### Returns

`void`

#### Inherited from

`TextFile.synthesize`

***

### synthesizeContent()

> `protected` **synthesizeContent**(`_`): `undefined` \| `string`

Implemented by derived classes and returns the contents of the file to
emit.

#### Parameters

• **\_**: `IResolver`

#### Returns

`undefined` \| `string`

the content to synthesize or undefined to skip the file

#### Inherited from

`TextFile.synthesizeContent`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`TextFile.toString`

***

### isComponent()

> `static` **isComponent**(`x`): `x is Component`

Test whether the given construct is a component.

#### Parameters

• **x**: `any`

#### Returns

`x is Component`

#### Inherited from

`TextFile.isComponent`

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

`TextFile.isConstruct`
