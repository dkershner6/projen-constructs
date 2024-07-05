[**projen-github-workflows**](../README.md) • **Docs**

***

[projen-github-workflows](../globals.md) / WorkflowJobMerger

# Class: WorkflowJobMerger

Add steps or settings to every workflow job in a project.

## Extends

- `Component`

## Constructors

### new WorkflowJobMerger()

> **new WorkflowJobMerger**(`projectGithub`, `options`): [`WorkflowJobMerger`](WorkflowJobMerger.md)

#### Parameters

• **projectGithub**: `GitHub`

• **options**: [`WorkflowJobMergerOptions`](../interfaces/WorkflowJobMergerOptions.md)

#### Returns

[`WorkflowJobMerger`](WorkflowJobMerger.md)

#### Overrides

`Component.constructor`

## Properties

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`Component.node`

***

### project

> `readonly` **project**: `Project`

#### Inherited from

`Component.project`

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

#### Overrides

`Component.preSynthesize`

***

### synthesize()

> **synthesize**(): `void`

Synthesizes files to the project output directory.

#### Returns

`void`

#### Overrides

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
