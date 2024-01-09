[dkershner6-projen-typescript](../README.md) / [Exports](../modules.md) / Node20TypeScriptProject

# Class: Node20TypeScriptProject

## Hierarchy

- `TypeScriptProject`

  ↳ **`Node20TypeScriptProject`**

## Table of contents

### Constructors

- [constructor](Node20TypeScriptProject.md#constructor)

### Properties

- [artifactsDirectory](Node20TypeScriptProject.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20TypeScriptProject.md#artifactsjavascriptdirectory)
- [autoApprove](Node20TypeScriptProject.md#autoapprove)
- [autoMerge](Node20TypeScriptProject.md#automerge)
- [buildWorkflow](Node20TypeScriptProject.md#buildworkflow)
- [bundler](Node20TypeScriptProject.md#bundler)
- [commitGenerated](Node20TypeScriptProject.md#commitgenerated)
- [defaultTask](Node20TypeScriptProject.md#defaulttask)
- [deps](Node20TypeScriptProject.md#deps)
- [devContainer](Node20TypeScriptProject.md#devcontainer)
- [docgen](Node20TypeScriptProject.md#docgen)
- [docsDirectory](Node20TypeScriptProject.md#docsdirectory)
- [eslint](Node20TypeScriptProject.md#eslint)
- [gitattributes](Node20TypeScriptProject.md#gitattributes)
- [github](Node20TypeScriptProject.md#github)
- [gitignore](Node20TypeScriptProject.md#gitignore)
- [gitpod](Node20TypeScriptProject.md#gitpod)
- [initProject](Node20TypeScriptProject.md#initproject)
- [jest](Node20TypeScriptProject.md#jest)
- [libdir](Node20TypeScriptProject.md#libdir)
- [logger](Node20TypeScriptProject.md#logger)
- [name](Node20TypeScriptProject.md#name)
- [node](Node20TypeScriptProject.md#node)
- [nodeVersion](Node20TypeScriptProject.md#nodeversion)
- [npmignore](Node20TypeScriptProject.md#npmignore)
- [outdir](Node20TypeScriptProject.md#outdir)
- [package](Node20TypeScriptProject.md#package)
- [parent](Node20TypeScriptProject.md#parent)
- [prettier](Node20TypeScriptProject.md#prettier)
- [projectBuild](Node20TypeScriptProject.md#projectbuild)
- [projectType](Node20TypeScriptProject.md#projecttype)
- [projenCommand](Node20TypeScriptProject.md#projencommand)
- [publisher](Node20TypeScriptProject.md#publisher)
- [release](Node20TypeScriptProject.md#release)
- [runScriptCommand](Node20TypeScriptProject.md#runscriptcommand)
- [srcdir](Node20TypeScriptProject.md#srcdir)
- [tasks](Node20TypeScriptProject.md#tasks)
- [testdir](Node20TypeScriptProject.md#testdir)
- [tsconfig](Node20TypeScriptProject.md#tsconfig)
- [tsconfigDev](Node20TypeScriptProject.md#tsconfigdev)
- [tsconfigEslint](Node20TypeScriptProject.md#tsconfigeslint)
- [upgradeWorkflow](Node20TypeScriptProject.md#upgradeworkflow)
- [vscode](Node20TypeScriptProject.md#vscode)
- [watchTask](Node20TypeScriptProject.md#watchtask)
- [workflowBootstrapSteps](Node20TypeScriptProject.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20TypeScriptProject.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20TypeScriptProject.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20TypeScriptProject.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20TypeScriptProject.md#allowlibrarydependencies)
- [buildTask](Node20TypeScriptProject.md#buildtask)
- [buildWorkflowJobId](Node20TypeScriptProject.md#buildworkflowjobid)
- [compileTask](Node20TypeScriptProject.md#compiletask)
- [components](Node20TypeScriptProject.md#components)
- [ejected](Node20TypeScriptProject.md#ejected)
- [entrypoint](Node20TypeScriptProject.md#entrypoint)
- [files](Node20TypeScriptProject.md#files)
- [manifest](Node20TypeScriptProject.md#manifest)
- [maxNodeVersion](Node20TypeScriptProject.md#maxnodeversion)
- [minNodeVersion](Node20TypeScriptProject.md#minnodeversion)
- [npmrc](Node20TypeScriptProject.md#npmrc)
- [packageManager](Node20TypeScriptProject.md#packagemanager)
- [packageTask](Node20TypeScriptProject.md#packagetask)
- [postCompileTask](Node20TypeScriptProject.md#postcompiletask)
- [preCompileTask](Node20TypeScriptProject.md#precompiletask)
- [root](Node20TypeScriptProject.md#root)
- [subprojects](Node20TypeScriptProject.md#subprojects)
- [testTask](Node20TypeScriptProject.md#testtask)

### Methods

- [addBins](Node20TypeScriptProject.md#addbins)
- [addBundledDeps](Node20TypeScriptProject.md#addbundleddeps)
- [addCompileCommand](Node20TypeScriptProject.md#addcompilecommand)
- [addDeps](Node20TypeScriptProject.md#adddeps)
- [addDevDeps](Node20TypeScriptProject.md#adddevdeps)
- [addExcludeFromCleanup](Node20TypeScriptProject.md#addexcludefromcleanup)
- [addFields](Node20TypeScriptProject.md#addfields)
- [addGitIgnore](Node20TypeScriptProject.md#addgitignore)
- [addKeywords](Node20TypeScriptProject.md#addkeywords)
- [addPackageIgnore](Node20TypeScriptProject.md#addpackageignore)
- [addPeerDeps](Node20TypeScriptProject.md#addpeerdeps)
- [addScripts](Node20TypeScriptProject.md#addscripts)
- [addTask](Node20TypeScriptProject.md#addtask)
- [addTestCommand](Node20TypeScriptProject.md#addtestcommand)
- [addTip](Node20TypeScriptProject.md#addtip)
- [annotateGenerated](Node20TypeScriptProject.md#annotategenerated)
- [hasScript](Node20TypeScriptProject.md#hasscript)
- [postSynthesize](Node20TypeScriptProject.md#postsynthesize)
- [preSynthesize](Node20TypeScriptProject.md#presynthesize)
- [removeScript](Node20TypeScriptProject.md#removescript)
- [removeTask](Node20TypeScriptProject.md#removetask)
- [renderWorkflowSetup](Node20TypeScriptProject.md#renderworkflowsetup)
- [runTaskCommand](Node20TypeScriptProject.md#runtaskcommand)
- [setScript](Node20TypeScriptProject.md#setscript)
- [synth](Node20TypeScriptProject.md#synth)
- [toString](Node20TypeScriptProject.md#tostring)
- [tryFindFile](Node20TypeScriptProject.md#tryfindfile)
- [tryFindJsonFile](Node20TypeScriptProject.md#tryfindjsonfile)
- [tryFindObjectFile](Node20TypeScriptProject.md#tryfindobjectfile)
- [tryRemoveFile](Node20TypeScriptProject.md#tryremovefile)
- [isConstruct](Node20TypeScriptProject.md#isconstruct)
- [isProject](Node20TypeScriptProject.md#isproject)
- [of](Node20TypeScriptProject.md#of)

## Constructors

### constructor

• **new Node20TypeScriptProject**(`options`): [`Node20TypeScriptProject`](Node20TypeScriptProject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `TypeScriptProjectOptions` |

#### Returns

[`Node20TypeScriptProject`](Node20TypeScriptProject.md)

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
