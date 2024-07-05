[**dkershner6-projen-nx-monorepo**](../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../globals.md) / NxProject

# Class: NxProject

**`Experimental`**

Component which manages the project specific NX Config and is added to all NXMonorepo subprojects.

## Extends

- `Component`

## Constructors

### new NxProject()

> **new NxProject**(`project`): [`NxProject`](NxProject.md)

**`Experimental`**

#### Parameters

• **project**: `Project`

#### Returns

[`NxProject`](NxProject.md)

#### Overrides

`Component.constructor`

## Properties

### file

> `readonly` **file**: `JsonFile`

**`Experimental`**

Raw json file

**Attention:** any overrides applied here will not be visible
in the properties and only included in final synthesized output,
and likely to override native handling.

#### Advanced

***

### implicitDependencies

> **implicitDependencies**: `string`[] = `[]`

**`Experimental`**

Implicit dependencies

#### See

https://nx.dev/reference/project-configuration#implicitdependencies

***

### includedScripts

> **includedScripts**: `string`[] = `[]`

**`Experimental`**

Explicit list of scripts for Nx to include.

#### See

https://nx.dev/reference/project-configuration#ignoring-package.json-scripts

***

### namedInputs

> **namedInputs**: `Obj`\<`any`\> = `{}`

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

### project

> `readonly` **project**: `Project`

**`Experimental`**

#### Inherited from

`Component.project`

***

### tags

> **tags**: `string`[] = `[]`

**`Experimental`**

Project tag annotations

#### See

https://nx.dev/reference/project-configuration#tags

***

### targets

> **targets**: `Obj`\<`any`\> = `{}`

**`Experimental`**

Targets configuration

#### See

https://nx.dev/reference/project-configuration

## Methods

### addBuildTargetFiles()

> **addBuildTargetFiles**(`inputs`?, `outputs`?): `void`

**`Experimental`**

Add input and output files to build target

#### Parameters

• **inputs?**: (`string` \| `IInput`)[]

Input files

• **outputs?**: `string`[]

Output files

#### Returns

`void`

***

### addImplicitDependency()

> **addImplicitDependency**(...`dependee`): `void`

**`Experimental`**

Adds an implicit dependency between the dependant (this project) and dependee.

#### Parameters

• ...**dependee**: (`string` \| `Project`)[]

project to add the implicit dependency on.

#### Returns

`void`

***

### addJavaDependency()

> **addJavaDependency**(`dependee`): `void`

**`Experimental`**

Adds a dependency between two Java Projects in the monorepo.

#### Parameters

• **dependee**: `JavaProject`

project you wish to depend on

#### Returns

`void`

***

### addPythonPoetryDependency()

> **addPythonPoetryDependency**(`dependee`): `void`

**`Experimental`**

Adds a dependency between two Python Projects in the monorepo. The dependent must have Poetry enabled.

#### Parameters

• **dependee**: `PythonProject`

project you wish to depend on

#### Returns

`void`

#### Throws

error if the dependent does not have Poetry enabled

***

### addTag()

> **addTag**(...`tags`): `void`

**`Experimental`**

Add tag

#### Parameters

• ...**tags**: `string`[]

#### Returns

`void`

***

### inferTargets()

> **inferTargets**(): `void`

**`Experimental`**

Automatically infer targets based on project type.

#### Returns

`void`

***

### merge()

> **merge**(`config`): `void`

**`Experimental`**

Merge configuration into existing config

#### Parameters

• **config**: `ProjectConfig`

#### Returns

`void`

***

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

Called before synthesis.

#### Returns

`void`

#### Inherited from

`Component.preSynthesize`

***

### setNamedInput()

> **setNamedInput**(`name`, `inputs`): `void`

**`Experimental`**

Set `namedInputs` helper

#### Parameters

• **name**: `string`

• **inputs**: `string`[]

#### Returns

`void`

***

### setTarget()

> **setTarget**(`name`, `target`, `includeDefaults`): `void`

**`Experimental`**

Set `targets` helper

#### Parameters

• **name**: `string`

• **target**: `IProjectTarget`

• **includeDefaults**: `string` \| `boolean` = `false`

#### Returns

`void`

***

### synthesize()

> **synthesize**(): `void`

**`Interface`** **`Experimental`**

#### Returns

`void`

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

### ensure()

> `static` **ensure**(`project`): [`NxProject`](NxProject.md)

**`Experimental`**

Retrieves an instance of NXProject if one is associated to the given project,
otherwise created a NXProject instance for the project.

#### Parameters

• **project**: `Project`

project instance.

#### Returns

[`NxProject`](NxProject.md)

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

> `static` **of**(`project`): `undefined` \| [`NxProject`](NxProject.md)

**`Experimental`**

Retrieves an instance of NXProject if one is associated to the given project.

#### Parameters

• **project**: `Project`

project instance.

#### Returns

`undefined` \| [`NxProject`](NxProject.md)
