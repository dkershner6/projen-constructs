[**projen-storybook**](../README.md) • **Docs**

***

[projen-storybook](../globals.md) / StorybookNextjs

# Class: StorybookNextjs

## Extends

- [`Storybook`](Storybook.md)

## Constructors

### new StorybookNextjs()

> **new StorybookNextjs**(`project`, `options`): [`StorybookNextjs`](StorybookNextjs.md)

#### Parameters

• **project**: `NodeProject`

• **options**: [`StorybookOptions`](../interfaces/StorybookOptions.md) = `{}`

#### Returns

[`StorybookNextjs`](StorybookNextjs.md)

#### Overrides

[`Storybook`](Storybook.md).[`constructor`](Storybook.md#constructors)

## Properties

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

[`Storybook`](Storybook.md).[`node`](Storybook.md#node)

***

### project

> `readonly` **project**: `NodeProject`

#### Inherited from

[`Storybook`](Storybook.md).[`project`](Storybook.md#project)

## Methods

### postSynthesize()

> **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

[`Storybook`](Storybook.md).[`postSynthesize`](Storybook.md#postsynthesize)

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

[`Storybook`](Storybook.md).[`preSynthesize`](Storybook.md#presynthesize)

***

### synthesize()

> **synthesize**(): `void`

Synthesizes files to the project output directory.

#### Returns

`void`

#### Inherited from

[`Storybook`](Storybook.md).[`synthesize`](Storybook.md#synthesize)

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

[`Storybook`](Storybook.md).[`toString`](Storybook.md#tostring)

***

### isComponent()

> `static` **isComponent**(`x`): `x is Component`

Test whether the given construct is a component.

#### Parameters

• **x**: `any`

#### Returns

`x is Component`

#### Inherited from

[`Storybook`](Storybook.md).[`isComponent`](Storybook.md#iscomponent)

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

[`Storybook`](Storybook.md).[`isConstruct`](Storybook.md#isconstruct)
