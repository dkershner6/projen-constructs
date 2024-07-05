[**dkershner6-projen-awscdk-core**](../README.md) • **Docs**

***

[dkershner6-projen-awscdk-core](../globals.md) / AwsAppPublisher

# Class: AwsAppPublisher

## Extends

- `Component`

## Constructors

### new AwsAppPublisher()

> **new AwsAppPublisher**(`project`, `options`): [`AwsAppPublisher`](AwsAppPublisher.md)

#### Parameters

• **project**: `AwsCdkTypeScriptApp`

• **options**: [`AwsAppPublisherOptions`](../interfaces/AwsAppPublisherOptions.md)

#### Returns

[`AwsAppPublisher`](AwsAppPublisher.md)

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

> `readonly` **project**: `AwsCdkTypeScriptApp`

#### Inherited from

`Component.project`

## Methods

### addPublishToAwsJob()

> `protected` **addPublishToAwsJob**(`branchName`?): `void`

#### Parameters

• **branchName?**: `string`

#### Returns

`void`

***

### buildPublishToAwsJob()

> **buildPublishToAwsJob**(`deployTask`, `branchName`?): `Job`

Allows for manual creation of the publish to AWS Job.

#### Parameters

• **deployTask**: `Task`

The deploy task to use in the deploy JobStep

• **branchName?**: `string`

Optional branchName

#### Returns

`Job`

The job to add

***

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

***

### workflowNameForProject()

> `static` **workflowNameForProject**(`base`, `project`, `branchName`?): `string`

release.ts in projen, not exported

#### Parameters

• **base**: `string`

• **project**: `Project`

• **branchName?**: `string`

#### Returns

`string`
