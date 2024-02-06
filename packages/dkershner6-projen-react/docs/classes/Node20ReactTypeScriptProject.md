[dkershner6-projen-react](../README.md) / [Exports](../modules.md) / Node20ReactTypeScriptProject

# Class: Node20ReactTypeScriptProject

## Hierarchy

- `TypeScriptProject`

  ↳ **`Node20ReactTypeScriptProject`**

## Table of contents

### Constructors

- [constructor](Node20ReactTypeScriptProject.md#constructor)

### Properties

- [artifactsDirectory](Node20ReactTypeScriptProject.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20ReactTypeScriptProject.md#artifactsjavascriptdirectory)
- [autoApprove](Node20ReactTypeScriptProject.md#autoapprove)
- [autoMerge](Node20ReactTypeScriptProject.md#automerge)
- [buildWorkflow](Node20ReactTypeScriptProject.md#buildworkflow)
- [bundler](Node20ReactTypeScriptProject.md#bundler)
- [commitGenerated](Node20ReactTypeScriptProject.md#commitgenerated)
- [defaultTask](Node20ReactTypeScriptProject.md#defaulttask)
- [deps](Node20ReactTypeScriptProject.md#deps)
- [devContainer](Node20ReactTypeScriptProject.md#devcontainer)
- [docgen](Node20ReactTypeScriptProject.md#docgen)
- [docsDirectory](Node20ReactTypeScriptProject.md#docsdirectory)
- [eslint](Node20ReactTypeScriptProject.md#eslint)
- [gitattributes](Node20ReactTypeScriptProject.md#gitattributes)
- [github](Node20ReactTypeScriptProject.md#github)
- [gitignore](Node20ReactTypeScriptProject.md#gitignore)
- [gitpod](Node20ReactTypeScriptProject.md#gitpod)
- [initProject](Node20ReactTypeScriptProject.md#initproject)
- [jest](Node20ReactTypeScriptProject.md#jest)
- [jestTransformer](Node20ReactTypeScriptProject.md#jesttransformer)
- [libdir](Node20ReactTypeScriptProject.md#libdir)
- [logger](Node20ReactTypeScriptProject.md#logger)
- [name](Node20ReactTypeScriptProject.md#name)
- [node](Node20ReactTypeScriptProject.md#node)
- [nodeVersion](Node20ReactTypeScriptProject.md#nodeversion)
- [npmignore](Node20ReactTypeScriptProject.md#npmignore)
- [outdir](Node20ReactTypeScriptProject.md#outdir)
- [package](Node20ReactTypeScriptProject.md#package)
- [parent](Node20ReactTypeScriptProject.md#parent)
- [prettier](Node20ReactTypeScriptProject.md#prettier)
- [projectBuild](Node20ReactTypeScriptProject.md#projectbuild)
- [projectType](Node20ReactTypeScriptProject.md#projecttype)
- [projenCommand](Node20ReactTypeScriptProject.md#projencommand)
- [publisher](Node20ReactTypeScriptProject.md#publisher)
- [release](Node20ReactTypeScriptProject.md#release)
- [runScriptCommand](Node20ReactTypeScriptProject.md#runscriptcommand)
- [srcdir](Node20ReactTypeScriptProject.md#srcdir)
- [tasks](Node20ReactTypeScriptProject.md#tasks)
- [testdir](Node20ReactTypeScriptProject.md#testdir)
- [tsconfig](Node20ReactTypeScriptProject.md#tsconfig)
- [tsconfigDev](Node20ReactTypeScriptProject.md#tsconfigdev)
- [tsconfigEslint](Node20ReactTypeScriptProject.md#tsconfigeslint)
- [upgradeWorkflow](Node20ReactTypeScriptProject.md#upgradeworkflow)
- [vscode](Node20ReactTypeScriptProject.md#vscode)
- [watchTask](Node20ReactTypeScriptProject.md#watchtask)
- [workflowBootstrapSteps](Node20ReactTypeScriptProject.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20ReactTypeScriptProject.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20ReactTypeScriptProject.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20ReactTypeScriptProject.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20ReactTypeScriptProject.md#allowlibrarydependencies)
- [buildTask](Node20ReactTypeScriptProject.md#buildtask)
- [buildWorkflowJobId](Node20ReactTypeScriptProject.md#buildworkflowjobid)
- [compileTask](Node20ReactTypeScriptProject.md#compiletask)
- [components](Node20ReactTypeScriptProject.md#components)
- [ejected](Node20ReactTypeScriptProject.md#ejected)
- [entrypoint](Node20ReactTypeScriptProject.md#entrypoint)
- [files](Node20ReactTypeScriptProject.md#files)
- [manifest](Node20ReactTypeScriptProject.md#manifest)
- [maxNodeVersion](Node20ReactTypeScriptProject.md#maxnodeversion)
- [minNodeVersion](Node20ReactTypeScriptProject.md#minnodeversion)
- [npmrc](Node20ReactTypeScriptProject.md#npmrc)
- [packageManager](Node20ReactTypeScriptProject.md#packagemanager)
- [packageTask](Node20ReactTypeScriptProject.md#packagetask)
- [postCompileTask](Node20ReactTypeScriptProject.md#postcompiletask)
- [preCompileTask](Node20ReactTypeScriptProject.md#precompiletask)
- [root](Node20ReactTypeScriptProject.md#root)
- [subprojects](Node20ReactTypeScriptProject.md#subprojects)
- [testTask](Node20ReactTypeScriptProject.md#testtask)

### Methods

- [addBins](Node20ReactTypeScriptProject.md#addbins)
- [addBundledDeps](Node20ReactTypeScriptProject.md#addbundleddeps)
- [addCompileCommand](Node20ReactTypeScriptProject.md#addcompilecommand)
- [addDeps](Node20ReactTypeScriptProject.md#adddeps)
- [addDevDeps](Node20ReactTypeScriptProject.md#adddevdeps)
- [addExcludeFromCleanup](Node20ReactTypeScriptProject.md#addexcludefromcleanup)
- [addFields](Node20ReactTypeScriptProject.md#addfields)
- [addGitIgnore](Node20ReactTypeScriptProject.md#addgitignore)
- [addKeywords](Node20ReactTypeScriptProject.md#addkeywords)
- [addPackageIgnore](Node20ReactTypeScriptProject.md#addpackageignore)
- [addPeerDeps](Node20ReactTypeScriptProject.md#addpeerdeps)
- [addScripts](Node20ReactTypeScriptProject.md#addscripts)
- [addTask](Node20ReactTypeScriptProject.md#addtask)
- [addTestCommand](Node20ReactTypeScriptProject.md#addtestcommand)
- [addTip](Node20ReactTypeScriptProject.md#addtip)
- [annotateGenerated](Node20ReactTypeScriptProject.md#annotategenerated)
- [hasScript](Node20ReactTypeScriptProject.md#hasscript)
- [postSynthesize](Node20ReactTypeScriptProject.md#postsynthesize)
- [preSynthesize](Node20ReactTypeScriptProject.md#presynthesize)
- [removeScript](Node20ReactTypeScriptProject.md#removescript)
- [removeTask](Node20ReactTypeScriptProject.md#removetask)
- [renderWorkflowSetup](Node20ReactTypeScriptProject.md#renderworkflowsetup)
- [runTaskCommand](Node20ReactTypeScriptProject.md#runtaskcommand)
- [setScript](Node20ReactTypeScriptProject.md#setscript)
- [synth](Node20ReactTypeScriptProject.md#synth)
- [toString](Node20ReactTypeScriptProject.md#tostring)
- [tryFindFile](Node20ReactTypeScriptProject.md#tryfindfile)
- [tryFindJsonFile](Node20ReactTypeScriptProject.md#tryfindjsonfile)
- [tryFindObjectFile](Node20ReactTypeScriptProject.md#tryfindobjectfile)
- [tryRemoveFile](Node20ReactTypeScriptProject.md#tryremovefile)
- [isConstruct](Node20ReactTypeScriptProject.md#isconstruct)
- [isProject](Node20ReactTypeScriptProject.md#isproject)
- [of](Node20ReactTypeScriptProject.md#of)

## Constructors

### constructor

• **new Node20ReactTypeScriptProject**(`options`): [`Node20ReactTypeScriptProject`](Node20ReactTypeScriptProject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Node20TypeScriptProjectOptions` |

#### Returns

[`Node20ReactTypeScriptProject`](Node20ReactTypeScriptProject.md)

#### Overrides

TypeScriptProject.constructor

## Properties

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

TypeScriptProject.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

TypeScriptProject.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

TypeScriptProject.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

TypeScriptProject.autoMerge

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

TypeScriptProject.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

TypeScriptProject.bundler

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

TypeScriptProject.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

TypeScriptProject.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

TypeScriptProject.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

TypeScriptProject.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

TypeScriptProject.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

TypeScriptProject.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

TypeScriptProject.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

TypeScriptProject.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

TypeScriptProject.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

TypeScriptProject.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

TypeScriptProject.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

TypeScriptProject.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

TypeScriptProject.jest

___

### jestTransformer

• `Readonly` **jestTransformer**: `JestTransformer`

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

TypeScriptProject.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

TypeScriptProject.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

TypeScriptProject.name

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

TypeScriptProject.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

TypeScriptProject.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

TypeScriptProject.npmignore

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

TypeScriptProject.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

TypeScriptProject.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

TypeScriptProject.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

TypeScriptProject.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

TypeScriptProject.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

TypeScriptProject.projectType

___

### projenCommand

• `Readonly` **projenCommand**: `string`

The command to use in order to run the projen CLI.

#### Inherited from

TypeScriptProject.projenCommand

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

TypeScriptProject.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

TypeScriptProject.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

TypeScriptProject.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

TypeScriptProject.srcdir

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

TypeScriptProject.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

TypeScriptProject.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

TypeScriptProject.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

TypeScriptProject.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

TypeScriptProject.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

TypeScriptProject.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

TypeScriptProject.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

TypeScriptProject.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

TypeScriptProject.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

TypeScriptProject.workflowPackageCache

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

TypeScriptProject.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

TypeScriptProject.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

TypeScriptProject.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

TypeScriptProject.buildWorkflowJobId

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

TypeScriptProject.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

TypeScriptProject.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

TypeScriptProject.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

TypeScriptProject.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

TypeScriptProject.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

TypeScriptProject.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

TypeScriptProject.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

TypeScriptProject.npmrc

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

TypeScriptProject.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.preCompileTask

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

TypeScriptProject.root

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

TypeScriptProject.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.testTask

## Methods

### addBins

▸ **addBins**(`bins`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bins` | `Record`\<`string`, `string`\> |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addBins

___

### addBundledDeps

▸ **addBundledDeps**(`...deps`): `void`

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...deps` | `string`[] | Names modules to install. By default, the the dependency will be installed in the next `npx projen` run and the version will be recorded in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax: `module@^7`. |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addBundledDeps

___

### addCompileCommand

▸ **addCompileCommand**(`...commands`): `void`

DEPRECATED

#### Parameters

| Name | Type |
| :------ | :------ |
| `...commands` | `string`[] |

#### Returns

`void`

**`Deprecated`**

use `project.compileTask.exec()`

#### Inherited from

TypeScriptProject.addCompileCommand

___

### addDeps

▸ **addDeps**(`...deps`): `void`

Defines normal dependencies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...deps` | `string`[] | Names modules to install. By default, the the dependency will be installed in the next `npx projen` run and the version will be recorded in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax: `module@^7`. |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addDeps

___

### addDevDeps

▸ **addDevDeps**(`...deps`): `void`

Defines development/test dependencies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...deps` | `string`[] | Names modules to install. By default, the the dependency will be installed in the next `npx projen` run and the version will be recorded in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax: `module@^7`. |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addDevDeps

___

### addExcludeFromCleanup

▸ **addExcludeFromCleanup**(`...globs`): `void`

Exclude the matching files from pre-synth cleanup. Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...globs` | `string`[] | The glob patterns to match |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addExcludeFromCleanup

___

### addFields

▸ **addFields**(`fields`): `void`

Directly set fields in `package.json`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `Object` | The fields to set |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addFields

___

### addGitIgnore

▸ **addGitIgnore**(`pattern`): `void`

Adds a .gitignore pattern.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` | The glob pattern to ignore. |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addGitIgnore

___

### addKeywords

▸ **addKeywords**(`...keywords`): `void`

Adds keywords to package.json (deduplicated)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...keywords` | `string`[] | The keywords to add |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addKeywords

___

### addPackageIgnore

▸ **addPackageIgnore**(`pattern`): `void`

Adds patterns to be ignored by npm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` | The pattern to ignore. |

#### Returns

`void`

**`Remarks`**

If you are having trouble getting an ignore to populate, try using your construct or component's preSynthesize method to properly delay calling this method.

#### Inherited from

TypeScriptProject.addPackageIgnore

___

### addPeerDeps

▸ **addPeerDeps**(`...deps`): `void`

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...deps` | `string`[] | Names modules to install. By default, the the dependency will be installed in the next `npx projen` run and the version will be recorded in your `package.json` file. You can upgrade manually or using `yarn add/upgrade`. If you wish to specify a version range use this syntax: `module@^7`. |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addPeerDeps

___

### addScripts

▸ **addScripts**(`scripts`): `void`

Replaces the contents of multiple npm package.json scripts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scripts` | `Object` | The scripts to set |

#### Returns

`void`

#### Inherited from

TypeScriptProject.addScripts

___

### addTask

▸ **addTask**(`name`, `props?`): `Task`

Adds a new task to this project. This will fail if the project already has
a task with this name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The task name to add |
| `props?` | `TaskOptions` | Task properties |

#### Returns

`Task`

#### Inherited from

TypeScriptProject.addTask

___

### addTestCommand

▸ **addTestCommand**(`...commands`): `void`

DEPRECATED

#### Parameters

| Name | Type |
| :------ | :------ |
| `...commands` | `string`[] |

#### Returns

`void`

**`Deprecated`**

use `project.testTask.exec()`

#### Inherited from

TypeScriptProject.addTestCommand

___

### addTip

▸ **addTip**(`message`): `void`

Prints a "tip" message during synthesis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message |

#### Returns

`void`

**`Deprecated`**

- use `project.logger.info(message)` to show messages during synthesis

#### Inherited from

TypeScriptProject.addTip

___

### annotateGenerated

▸ **annotateGenerated**(`glob`): `void`

Marks the provided file(s) as being generated. This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `glob` | `string` | the glob pattern to match (could be a file path). |

#### Returns

`void`

**`See`**

https://github.com/github/linguist/blob/master/docs/overrides.md

#### Inherited from

TypeScriptProject.annotateGenerated

___

### hasScript

▸ **hasScript**(`name`): `boolean`

Indicates if a script by the name name is defined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the script |

#### Returns

`boolean`

**`Deprecated`**

Use `project.tasks.tryFind(name)`

#### Inherited from

TypeScriptProject.hasScript

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

TypeScriptProject.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

TypeScriptProject.preSynthesize

___

### removeScript

▸ **removeScript**(`name`): `void`

Removes the npm script (always successful).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the script. |

#### Returns

`void`

#### Inherited from

TypeScriptProject.removeScript

___

### removeTask

▸ **removeTask**(`name`): `undefined` \| `Task`

Removes a task from a project.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the task to remove. |

#### Returns

`undefined` \| `Task`

The `Task` that was removed, otherwise `undefined`.

#### Inherited from

TypeScriptProject.removeTask

___

### renderWorkflowSetup

▸ **renderWorkflowSetup**(`options?`): `JobStep`[]

Returns the set of workflow steps which should be executed to bootstrap a
workflow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `RenderWorkflowSetupOptions` | Options. |

#### Returns

`JobStep`[]

Job steps

#### Inherited from

TypeScriptProject.renderWorkflowSetup

___

### runTaskCommand

▸ **runTaskCommand**(`task`): `string`

Returns the shell command to execute in order to run a task. This will
typically be `npx projen TASK`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `task` | `Task` | The task for which the command is required |

#### Returns

`string`

#### Inherited from

TypeScriptProject.runTaskCommand

___

### setScript

▸ **setScript**(`name`, `command`): `void`

Replaces the contents of an npm package.json script.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The script name |
| `command` | `string` | The command to execute |

#### Returns

`void`

#### Inherited from

TypeScriptProject.setScript

___

### synth

▸ **synth**(): `void`

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

#### Returns

`void`

#### Inherited from

TypeScriptProject.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

TypeScriptProject.toString

___

### tryFindFile

▸ **tryFindFile**(`filePath`): `undefined` \| `FileBase`

Finds a file at the specified relative path within this project and all
its subprojects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The file path. If this path is relative, it will be resolved from the root of _this_ project. |

#### Returns

`undefined` \| `FileBase`

a `FileBase` or undefined if there is no file in that path

#### Inherited from

TypeScriptProject.tryFindFile

___

### tryFindJsonFile

▸ **tryFindJsonFile**(`filePath`): `undefined` \| `JsonFile`

Finds a json file by name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The file path. |

#### Returns

`undefined` \| `JsonFile`

**`Deprecated`**

use `tryFindObjectFile`

#### Inherited from

TypeScriptProject.tryFindJsonFile

___

### tryFindObjectFile

▸ **tryFindObjectFile**(`filePath`): `undefined` \| `ObjectFile`

Finds an object file (like JsonFile, YamlFile, etc.) by name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The file path. |

#### Returns

`undefined` \| `ObjectFile`

#### Inherited from

TypeScriptProject.tryFindObjectFile

___

### tryRemoveFile

▸ **tryRemoveFile**(`filePath`): `undefined` \| `FileBase`

Finds a file at the specified relative path within this project and removes
it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The file path. If this path is relative, it will be resolved from the root of _this_ project. |

#### Returns

`undefined` \| `FileBase`

a `FileBase` if the file was found and removed, or undefined if
the file was not found.

#### Inherited from

TypeScriptProject.tryRemoveFile

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

TypeScriptProject.isConstruct

___

### isProject

▸ **isProject**(`x`): x is Project

Test whether the given construct is a project.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

x is Project

#### Inherited from

TypeScriptProject.isProject

___

### of

▸ **of**(`construct`): `Project`

Find the closest ancestor project for given construct.
When given a project, this it the project itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `construct` | `IConstruct` |

#### Returns

`Project`

**`Throws`**

when no project is found in the path to the root

#### Inherited from

TypeScriptProject.of
