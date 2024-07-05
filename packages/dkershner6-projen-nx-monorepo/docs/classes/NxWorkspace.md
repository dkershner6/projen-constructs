[**dkershner6-projen-nx-monorepo**](../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../globals.md) / NxWorkspace

# Class: NxWorkspace

**`Experimental`**

Component which manages the workspace specific NX Config for the root monorepo.

## Extends

- `Component`

## Constructors

### new NxWorkspace()

> **new NxWorkspace**(`project`): [`NxWorkspace`](NxWorkspace.md)

**`Experimental`**

#### Parameters

• **project**: `Project`

#### Returns

[`NxWorkspace`](NxWorkspace.md)

#### Overrides

`Component.constructor`

## Properties

### affected

> **affected**: `INxAffectedConfig`

**`Experimental`**

Default options for `nx affected`

***

### autoInferProjectTargets

> **autoInferProjectTargets**: `boolean` = `false`

**`Experimental`**

Automatically infer NxProject targets based on project type.

***

### cacheDirectory?

> `optional` **cacheDirectory**: `string`

**`Experimental`**

Override the default nx cacheDirectory
 May cause `Could not find 'nx' module in this workspace.` [issue](https://github.com/nrwl/nx/issues/8929). If you experience this issue, please remove `cacheDirectory` override.

***

### cacheableOperations

> **cacheableOperations**: `string`[]

**`Experimental`**

List of cacheable operations.

***

### defaultTaskRunner

> **defaultTaskRunner**: `string` = `"nx/tasks-runners/default"`

**`Experimental`**

Default task runner

***

### defaultTaskRunnerOptions

> **defaultTaskRunnerOptions**: `Obj`\<`any`\>

**`Experimental`**

Default task runner options

***

### extends

> **extends**: `string` = `"nx/presets/npm.json"`

**`Experimental`**

Some presets use the extends property to hide some default options in a separate json file.
The json file specified in the extends property is located in your node_modules folder.
The Nx preset files are specified in the nx package.

#### Default

```ts
"nx/presets/npm.json"
```

***

### namedInputs

> **namedInputs**: `INamedInputs`

**`Experimental`**

Named inputs

#### See

https://nx.dev/reference/nx-json#inputs-&-namedinputs

***

### node

> `readonly` **node**: `Node`

**`Experimental`**

The tree node.

#### Inherited from

`Component.node`

***

### nonNativeHasher

> **nonNativeHasher**: `boolean` = `false`

**`Experimental`**

Indicates if non-native nx hasher will be used.

If true, the NX_NON_NATIVE_HASHER env var will be set
to true for all project tasks.

***

### npmScope

> **npmScope**: `string` = `"monorepo"`

**`Experimental`**

Tells Nx what prefix to use when generating library imports.

***

### nxIgnore

> `readonly` **nxIgnore**: `IgnoreFile`

**`Experimental`**

.nxignore file

***

### nxJson

> `readonly` **nxJson**: `JsonFile`

**`Experimental`**

Raw nx.json file to support overrides that aren't handled
directly.

**Attention:** any overrides applied here will not be visible
in the properties and only included in final synthesized output,
and likely to override native handling.

#### Advanced

***

### plugins

> **plugins**: `string`[] = `[]`

**`Experimental`**

Plugins for extending the project graph

***

### pluginsConfig

> **pluginsConfig**: `Obj`\<`any`\> = `{}`

**`Experimental`**

Configuration for Nx Plugins

***

### project

> `readonly` **project**: `Project`

**`Experimental`**

#### Inherited from

`Component.project`

***

### targetDefaults

> **targetDefaults**: `ITargetDefaults`

**`Experimental`**

Dependencies between different target names across all projects

#### See

https://nx.dev/reference/nx-json#target-defaults

***

### tasksRunnerOptions

> **tasksRunnerOptions**: `Obj`\<`any`\>

**`Experimental`**

Task runner options.

***

### workspaceLayout?

> `optional` **workspaceLayout**: `IWorkspaceLayout`

**`Experimental`**

Where new apps + libs should be placed

## Methods

### postSynthesize()

> **postSynthesize**(): `void`

**`Experimental`**

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`Component.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

**`Experimental`**

#### Returns

`void`

#### Inherit Doc

#### Overrides

`Component.preSynthesize`

***

### setNamedInput()

> **setNamedInput**(`name`, `inputs`): `void`

**`Experimental`**

Set `namedInput` value helper

#### Parameters

• **name**: `string`

• **inputs**: `string`[]

#### Returns

`void`

***

### setTargetDefault()

> **setTargetDefault**(`name`, `target`, `merge`): `void`

**`Experimental`**

Set `targetDefaults` helper

#### Parameters

• **name**: `string`

• **target**: `IProjectTarget`

• **merge**: `boolean` = `false`

#### Returns

`void`

***

### synthesize()

> **synthesize**(): `void`

**`Experimental`**

#### Returns

`void`

#### Inherit Doc

#### Overrides

`Component.synthesize`

***

### toString()

> **toString**(): `string`

**`Experimental`**

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`Component.toString`

***

### useNxCloud()

> **useNxCloud**(`readOnlyAccessToken`): `void`

**`Experimental`**

Setup workspace to use nx-cloud

#### Parameters

• **readOnlyAccessToken**: `string`

#### Returns

`void`

***

### isComponent()

> `static` **isComponent**(`x`): `x is Component`

**`Experimental`**

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

**`Experimental`**

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

### of()

> `static` **of**(`scope`): `undefined` \| [`NxWorkspace`](NxWorkspace.md)

**`Experimental`**

Retrieves the singleton instance associated with project root.

#### Parameters

• **scope**: `Project`

project instance.

#### Returns

`undefined` \| [`NxWorkspace`](NxWorkspace.md)
