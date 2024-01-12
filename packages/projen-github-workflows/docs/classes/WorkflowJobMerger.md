[projen-github-workflows](../README.md) / [Exports](../modules.md) / WorkflowJobMerger

# Class: WorkflowJobMerger

Add steps or settings to every workflow job in a project.

## Hierarchy

- `Component`

  ↳ **`WorkflowJobMerger`**

## Table of contents

### Constructors

- [constructor](WorkflowJobMerger.md#constructor)

### Properties

- [jobsCompleted](WorkflowJobMerger.md#jobscompleted)
- [node](WorkflowJobMerger.md#node)
- [options](WorkflowJobMerger.md#options)
- [project](WorkflowJobMerger.md#project)
- [projectGithub](WorkflowJobMerger.md#projectgithub)

### Methods

- [determineShouldMergeJob](WorkflowJobMerger.md#determineshouldmergejob)
- [mergeJob](WorkflowJobMerger.md#mergejob)
- [mergeObjects](WorkflowJobMerger.md#mergeobjects)
- [mergeWorkflowJobs](WorkflowJobMerger.md#mergeworkflowjobs)
- [postSynthesize](WorkflowJobMerger.md#postsynthesize)
- [preSynthesize](WorkflowJobMerger.md#presynthesize)
- [synthesize](WorkflowJobMerger.md#synthesize)
- [toString](WorkflowJobMerger.md#tostring)
- [isComponent](WorkflowJobMerger.md#iscomponent)
- [isConstruct](WorkflowJobMerger.md#isconstruct)

## Constructors

### constructor

• **new WorkflowJobMerger**(`projectGithub`, `options`): [`WorkflowJobMerger`](WorkflowJobMerger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectGithub` | `GitHub` |
| `options` | [`WorkflowJobMergerOptions`](../interfaces/WorkflowJobMergerOptions.md) |

#### Returns

[`WorkflowJobMerger`](WorkflowJobMerger.md)

#### Overrides

Component.constructor

## Properties

### jobsCompleted

• `Private` `Readonly` **jobsCompleted**: `Set`\<`string`\>

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Component.node

___

### options

• `Private` `Readonly` **options**: [`WorkflowJobMergerOptions`](../interfaces/WorkflowJobMergerOptions.md)

___

### project

• `Readonly` **project**: `Project`

#### Inherited from

Component.project

___

### projectGithub

• `Private` `Readonly` **projectGithub**: `GitHub`

## Methods

### determineShouldMergeJob

▸ **determineShouldMergeJob**(`workflow`, `jobName`, `merge`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflow` | `GithubWorkflow` |
| `jobName` | `string` |
| `merge` | [`WorkflowJobMerge`](../interfaces/WorkflowJobMerge.md) |

#### Returns

`boolean`

___

### mergeJob

▸ **mergeJob**(`workflow`, `jobName`, `job`, `merge`): `Job`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflow` | `GithubWorkflow` |
| `jobName` | `string` |
| `job` | `Job` |
| `merge` | [`WorkflowJobMerge`](../interfaces/WorkflowJobMerge.md) |

#### Returns

`Job`

___

### mergeObjects

▸ **mergeObjects**\<`TObj`\>(`obj1`, `obj2`): `undefined` \| `TObj`

#### Type parameters

| Name |
| :------ |
| `TObj` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj1` | `undefined` \| `TObj` |
| `obj2` | `undefined` \| `TObj` |

#### Returns

`undefined` \| `TObj`

___

### mergeWorkflowJobs

▸ **mergeWorkflowJobs**(): `void`

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

#### Returns

`void`

#### Overrides

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
