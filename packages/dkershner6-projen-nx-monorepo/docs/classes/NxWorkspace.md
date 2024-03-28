[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / NxWorkspace

# Class: NxWorkspace

Component which manages the workspace specific NX Config for the root monorepo.

## Hierarchy

- `Component`

  ↳ **`NxWorkspace`**

## Table of contents

### Constructors

- [constructor](NxWorkspace.md#constructor)

### Properties

- [affected](NxWorkspace.md#affected)
- [autoInferProjectTargets](NxWorkspace.md#autoinferprojecttargets)
- [cacheDirectory](NxWorkspace.md#cachedirectory)
- [cacheableOperations](NxWorkspace.md#cacheableoperations)
- [defaultTaskRunner](NxWorkspace.md#defaulttaskrunner)
- [defaultTaskRunnerOptions](NxWorkspace.md#defaulttaskrunneroptions)
- [extends](NxWorkspace.md#extends)
- [namedInputs](NxWorkspace.md#namedinputs)
- [node](NxWorkspace.md#node)
- [nonNativeHasher](NxWorkspace.md#nonnativehasher)
- [npmScope](NxWorkspace.md#npmscope)
- [nxIgnore](NxWorkspace.md#nxignore)
- [nxJson](NxWorkspace.md#nxjson)
- [plugins](NxWorkspace.md#plugins)
- [pluginsConfig](NxWorkspace.md#pluginsconfig)
- [project](NxWorkspace.md#project)
- [targetDefaults](NxWorkspace.md#targetdefaults)
- [tasksRunnerOptions](NxWorkspace.md#tasksrunneroptions)
- [workspaceLayout](NxWorkspace.md#workspacelayout)

### Methods

- [postSynthesize](NxWorkspace.md#postsynthesize)
- [preSynthesize](NxWorkspace.md#presynthesize)
- [setNamedInput](NxWorkspace.md#setnamedinput)
- [setTargetDefault](NxWorkspace.md#settargetdefault)
- [synthesize](NxWorkspace.md#synthesize)
- [toString](NxWorkspace.md#tostring)
- [useNxCloud](NxWorkspace.md#usenxcloud)
- [isComponent](NxWorkspace.md#iscomponent)
- [isConstruct](NxWorkspace.md#isconstruct)
- [of](NxWorkspace.md#of)

## Constructors

### constructor

• **new NxWorkspace**(`project`): [`NxWorkspace`](NxWorkspace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `Project` |

#### Returns

[`NxWorkspace`](NxWorkspace.md)

#### Overrides

Component.constructor

## Properties

### affected

• **affected**: `INxAffectedConfig`

Default options for `nx affected`

___

### autoInferProjectTargets

• **autoInferProjectTargets**: `boolean` = `false`

Automatically infer NxProject targets based on project type.

___

### cacheDirectory

• `Optional` **cacheDirectory**: `string`

Override the default nx cacheDirectory
 May cause `Could not find 'nx' module in this workspace.` [issue](https://github.com/nrwl/nx/issues/8929). If you experience this issue, please remove `cacheDirectory` override.

___

### cacheableOperations

• **cacheableOperations**: `string`[]

List of cacheable operations.

___

### defaultTaskRunner

• **defaultTaskRunner**: `string` = `"nx/tasks-runners/default"`

Default task runner

___

### defaultTaskRunnerOptions

• **defaultTaskRunnerOptions**: `Obj`\<`any`\>

Default task runner options

___

### extends

• **extends**: `string` = `"nx/presets/npm.json"`

Some presets use the extends property to hide some default options in a separate json file.
The json file specified in the extends property is located in your node_modules folder.
The Nx preset files are specified in the nx package.

**`Default`**

```ts
"nx/presets/npm.json"
```

___

### namedInputs

• **namedInputs**: `INamedInputs`

Named inputs

**`See`**

https://nx.dev/reference/nx-json#inputs-&-namedinputs

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Component.node

___

### nonNativeHasher

• **nonNativeHasher**: `boolean` = `false`

Indicates if non-native nx hasher will be used.

If true, the NX_NON_NATIVE_HASHER env var will be set
to true for all project tasks.

___

### npmScope

• **npmScope**: `string` = `"monorepo"`

Tells Nx what prefix to use when generating library imports.

___

### nxIgnore

• `Readonly` **nxIgnore**: `IgnoreFile`

.nxignore file

___

### nxJson

• `Readonly` **nxJson**: `JsonFile`

Raw nx.json file to support overrides that aren't handled
directly.

**Attention:** any overrides applied here will not be visible
in the properties and only included in final synthesized output,
and likely to override native handling.

**`Advanced`**

___

### plugins

• **plugins**: `string`[] = `[]`

Plugins for extending the project graph

___

### pluginsConfig

• **pluginsConfig**: `Obj`\<`any`\> = `{}`

Configuration for Nx Plugins

___

### project

• `Readonly` **project**: `Project`

#### Inherited from

Component.project

___

### targetDefaults

• **targetDefaults**: `ITargetDefaults`

Dependencies between different target names across all projects

**`See`**

https://nx.dev/reference/nx-json#target-defaults

___

### tasksRunnerOptions

• **tasksRunnerOptions**: `Obj`\<`any`\>

Task runner options.

___

### workspaceLayout

• `Optional` **workspaceLayout**: `IWorkspaceLayout`

Where new apps + libs should be placed

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

#### Returns

`void`

**`Inherit Doc`**

#### Overrides

Component.preSynthesize

___

### setNamedInput

▸ **setNamedInput**(`name`, `inputs`): `void`

Set `namedInput` value helper

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `inputs` | `string`[] |

#### Returns

`void`

___

### setTargetDefault

▸ **setTargetDefault**(`name`, `target`, `merge?`): `void`

Set `targetDefaults` helper

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `target` | `IProjectTarget` | `undefined` |
| `merge` | `boolean` | `false` |

#### Returns

`void`

___

### synthesize

▸ **synthesize**(): `void`

#### Returns

`void`

**`Inherit Doc`**

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

### useNxCloud

▸ **useNxCloud**(`readOnlyAccessToken`): `void`

Setup workspace to use nx-cloud

#### Parameters

| Name | Type |
| :------ | :------ |
| `readOnlyAccessToken` | `string` |

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

___

### of

▸ **of**(`scope`): `undefined` \| [`NxWorkspace`](NxWorkspace.md)

Retrieves the singleton instance associated with project root.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | `Project` | project instance. |

#### Returns

`undefined` \| [`NxWorkspace`](NxWorkspace.md)
