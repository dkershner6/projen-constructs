[**projen-esm**](../README.md) • **Docs**

***

[projen-esm](../globals.md) / EsmLibrary

# Class: EsmLibrary

Adds ESM support and linting to a projen TypeScript project.
Supports React as well.

## Extends

- `Component`

## Constructors

### new EsmLibrary()

> **new EsmLibrary**(`project`, `options`): [`EsmLibrary`](EsmLibrary.md)

#### Parameters

• **project**: `TypeScriptProject`

• **options**: [`EsmLibraryOptions`](../interfaces/EsmLibraryOptions.md) = `{}`

#### Returns

[`EsmLibrary`](EsmLibrary.md)

#### Overrides

`Component.constructor`

## Properties

### babelConfigFile?

> `optional` **babelConfigFile**: `BabelConfigFile`

***

### babelTestConfigFile?

> `optional` **babelTestConfigFile**: `BabelConfigFile`

***

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`Component.node`

***

### project

> **project**: `TypeScriptProject`

#### Overrides

`Component.project`

***

### DEFAULT\_BABEL\_PRESETS

> `static` **DEFAULT\_BABEL\_PRESETS**: `PluginItem`[]

***

### DEFAULT\_BABEL\_PUBLISH\_IGNORES

> `static` **DEFAULT\_BABEL\_PUBLISH\_IGNORES**: `string`[]

***

### DEFAULT\_BABEL\_TARGETS

> `static` **DEFAULT\_BABEL\_TARGETS**: `object`

#### node

> **node**: `string` = `"current"`

## Methods

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

#### Inherited from

`Component.preSynthesize`

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
