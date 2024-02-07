[dkershner6-projen-github-actions](../README.md) / [Exports](../modules.md) / Node20GitHubActionTypescriptProject

# Class: Node20GitHubActionTypescriptProject

## Hierarchy

- `GitHubActionTypeScriptProject`

  ↳ **`Node20GitHubActionTypescriptProject`**

## Table of contents

### Constructors

- [constructor](Node20GitHubActionTypescriptProject.md#constructor)

### Properties

- [artifactsDirectory](Node20GitHubActionTypescriptProject.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20GitHubActionTypescriptProject.md#artifactsjavascriptdirectory)
- [autoApprove](Node20GitHubActionTypescriptProject.md#autoapprove)
- [autoMerge](Node20GitHubActionTypescriptProject.md#automerge)
- [buildWorkflow](Node20GitHubActionTypescriptProject.md#buildworkflow)
- [bundler](Node20GitHubActionTypescriptProject.md#bundler)
- [commitGenerated](Node20GitHubActionTypescriptProject.md#commitgenerated)
- [defaultTask](Node20GitHubActionTypescriptProject.md#defaulttask)
- [deps](Node20GitHubActionTypescriptProject.md#deps)
- [devContainer](Node20GitHubActionTypescriptProject.md#devcontainer)
- [docgen](Node20GitHubActionTypescriptProject.md#docgen)
- [docsDirectory](Node20GitHubActionTypescriptProject.md#docsdirectory)
- [eslint](Node20GitHubActionTypescriptProject.md#eslint)
- [gitattributes](Node20GitHubActionTypescriptProject.md#gitattributes)
- [github](Node20GitHubActionTypescriptProject.md#github)
- [gitignore](Node20GitHubActionTypescriptProject.md#gitignore)
- [gitpod](Node20GitHubActionTypescriptProject.md#gitpod)
- [initProject](Node20GitHubActionTypescriptProject.md#initproject)
- [jest](Node20GitHubActionTypescriptProject.md#jest)
- [libdir](Node20GitHubActionTypescriptProject.md#libdir)
- [logger](Node20GitHubActionTypescriptProject.md#logger)
- [name](Node20GitHubActionTypescriptProject.md#name)
- [node](Node20GitHubActionTypescriptProject.md#node)
- [nodeVersion](Node20GitHubActionTypescriptProject.md#nodeversion)
- [npmignore](Node20GitHubActionTypescriptProject.md#npmignore)
- [outdir](Node20GitHubActionTypescriptProject.md#outdir)
- [package](Node20GitHubActionTypescriptProject.md#package)
- [parent](Node20GitHubActionTypescriptProject.md#parent)
- [prettier](Node20GitHubActionTypescriptProject.md#prettier)
- [projectBuild](Node20GitHubActionTypescriptProject.md#projectbuild)
- [projectType](Node20GitHubActionTypescriptProject.md#projecttype)
- [publisher](Node20GitHubActionTypescriptProject.md#publisher)
- [release](Node20GitHubActionTypescriptProject.md#release)
- [runScriptCommand](Node20GitHubActionTypescriptProject.md#runscriptcommand)
- [srcdir](Node20GitHubActionTypescriptProject.md#srcdir)
- [tasks](Node20GitHubActionTypescriptProject.md#tasks)
- [testdir](Node20GitHubActionTypescriptProject.md#testdir)
- [tsconfig](Node20GitHubActionTypescriptProject.md#tsconfig)
- [tsconfigDev](Node20GitHubActionTypescriptProject.md#tsconfigdev)
- [tsconfigEslint](Node20GitHubActionTypescriptProject.md#tsconfigeslint)
- [upgradeWorkflow](Node20GitHubActionTypescriptProject.md#upgradeworkflow)
- [vscode](Node20GitHubActionTypescriptProject.md#vscode)
- [watchTask](Node20GitHubActionTypescriptProject.md#watchtask)
- [workflowBootstrapSteps](Node20GitHubActionTypescriptProject.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20GitHubActionTypescriptProject.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20GitHubActionTypescriptProject.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20GitHubActionTypescriptProject.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20GitHubActionTypescriptProject.md#allowlibrarydependencies)
- [buildTask](Node20GitHubActionTypescriptProject.md#buildtask)
- [buildWorkflowJobId](Node20GitHubActionTypescriptProject.md#buildworkflowjobid)
- [compileTask](Node20GitHubActionTypescriptProject.md#compiletask)
- [components](Node20GitHubActionTypescriptProject.md#components)
- [ejected](Node20GitHubActionTypescriptProject.md#ejected)
- [entrypoint](Node20GitHubActionTypescriptProject.md#entrypoint)
- [files](Node20GitHubActionTypescriptProject.md#files)
- [manifest](Node20GitHubActionTypescriptProject.md#manifest)
- [maxNodeVersion](Node20GitHubActionTypescriptProject.md#maxnodeversion)
- [minNodeVersion](Node20GitHubActionTypescriptProject.md#minnodeversion)
- [npmrc](Node20GitHubActionTypescriptProject.md#npmrc)
- [packageManager](Node20GitHubActionTypescriptProject.md#packagemanager)
- [packageTask](Node20GitHubActionTypescriptProject.md#packagetask)
- [postCompileTask](Node20GitHubActionTypescriptProject.md#postcompiletask)
- [preCompileTask](Node20GitHubActionTypescriptProject.md#precompiletask)
- [projenCommand](Node20GitHubActionTypescriptProject.md#projencommand)
- [root](Node20GitHubActionTypescriptProject.md#root)
- [subprojects](Node20GitHubActionTypescriptProject.md#subprojects)
- [testTask](Node20GitHubActionTypescriptProject.md#testtask)

### Methods

- [addBins](Node20GitHubActionTypescriptProject.md#addbins)
- [addBundledDeps](Node20GitHubActionTypescriptProject.md#addbundleddeps)
- [addCompileCommand](Node20GitHubActionTypescriptProject.md#addcompilecommand)
- [addDeps](Node20GitHubActionTypescriptProject.md#adddeps)
- [addDevDeps](Node20GitHubActionTypescriptProject.md#adddevdeps)
- [addExcludeFromCleanup](Node20GitHubActionTypescriptProject.md#addexcludefromcleanup)
- [addFields](Node20GitHubActionTypescriptProject.md#addfields)
- [addGitIgnore](Node20GitHubActionTypescriptProject.md#addgitignore)
- [addKeywords](Node20GitHubActionTypescriptProject.md#addkeywords)
- [addPackageIgnore](Node20GitHubActionTypescriptProject.md#addpackageignore)
- [addPeerDeps](Node20GitHubActionTypescriptProject.md#addpeerdeps)
- [addScripts](Node20GitHubActionTypescriptProject.md#addscripts)
- [addTask](Node20GitHubActionTypescriptProject.md#addtask)
- [addTestCommand](Node20GitHubActionTypescriptProject.md#addtestcommand)
- [addTip](Node20GitHubActionTypescriptProject.md#addtip)
- [annotateGenerated](Node20GitHubActionTypescriptProject.md#annotategenerated)
- [hasScript](Node20GitHubActionTypescriptProject.md#hasscript)
- [postSynthesize](Node20GitHubActionTypescriptProject.md#postsynthesize)
- [preSynthesize](Node20GitHubActionTypescriptProject.md#presynthesize)
- [removeScript](Node20GitHubActionTypescriptProject.md#removescript)
- [removeTask](Node20GitHubActionTypescriptProject.md#removetask)
- [renderWorkflowSetup](Node20GitHubActionTypescriptProject.md#renderworkflowsetup)
- [runTaskCommand](Node20GitHubActionTypescriptProject.md#runtaskcommand)
- [setScript](Node20GitHubActionTypescriptProject.md#setscript)
- [synth](Node20GitHubActionTypescriptProject.md#synth)
- [toString](Node20GitHubActionTypescriptProject.md#tostring)
- [tryFindFile](Node20GitHubActionTypescriptProject.md#tryfindfile)
- [tryFindJsonFile](Node20GitHubActionTypescriptProject.md#tryfindjsonfile)
- [tryFindObjectFile](Node20GitHubActionTypescriptProject.md#tryfindobjectfile)
- [tryRemoveFile](Node20GitHubActionTypescriptProject.md#tryremovefile)
- [isConstruct](Node20GitHubActionTypescriptProject.md#isconstruct)
- [isProject](Node20GitHubActionTypescriptProject.md#isproject)
- [of](Node20GitHubActionTypescriptProject.md#of)

## Constructors

### constructor

• **new Node20GitHubActionTypescriptProject**(`options`): [`Node20GitHubActionTypescriptProject`](Node20GitHubActionTypescriptProject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `GitHubActionTypeScriptOptions` |

#### Returns

[`Node20GitHubActionTypescriptProject`](Node20GitHubActionTypescriptProject.md)

#### Overrides

GitHubActionTypeScriptProject.constructor

## Properties

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

GitHubActionTypeScriptProject.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

GitHubActionTypeScriptProject.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

GitHubActionTypeScriptProject.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

GitHubActionTypeScriptProject.autoMerge

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

GitHubActionTypeScriptProject.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

GitHubActionTypeScriptProject.bundler

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

GitHubActionTypeScriptProject.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

GitHubActionTypeScriptProject.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

GitHubActionTypeScriptProject.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

GitHubActionTypeScriptProject.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

GitHubActionTypeScriptProject.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

GitHubActionTypeScriptProject.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

GitHubActionTypeScriptProject.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

GitHubActionTypeScriptProject.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

GitHubActionTypeScriptProject.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

GitHubActionTypeScriptProject.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

GitHubActionTypeScriptProject.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

GitHubActionTypeScriptProject.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

GitHubActionTypeScriptProject.jest

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

GitHubActionTypeScriptProject.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

GitHubActionTypeScriptProject.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

GitHubActionTypeScriptProject.name

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

GitHubActionTypeScriptProject.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

GitHubActionTypeScriptProject.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

GitHubActionTypeScriptProject.npmignore

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

GitHubActionTypeScriptProject.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

GitHubActionTypeScriptProject.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

GitHubActionTypeScriptProject.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

GitHubActionTypeScriptProject.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

GitHubActionTypeScriptProject.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

GitHubActionTypeScriptProject.projectType

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

GitHubActionTypeScriptProject.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

GitHubActionTypeScriptProject.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

GitHubActionTypeScriptProject.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

GitHubActionTypeScriptProject.srcdir

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

GitHubActionTypeScriptProject.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

GitHubActionTypeScriptProject.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

GitHubActionTypeScriptProject.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

GitHubActionTypeScriptProject.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

GitHubActionTypeScriptProject.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

GitHubActionTypeScriptProject.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

GitHubActionTypeScriptProject.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

GitHubActionTypeScriptProject.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

GitHubActionTypeScriptProject.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

GitHubActionTypeScriptProject.workflowPackageCache

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

GitHubActionTypeScriptProject.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

GitHubActionTypeScriptProject.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

GitHubActionTypeScriptProject.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

GitHubActionTypeScriptProject.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

GitHubActionTypeScriptProject.buildWorkflowJobId

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

GitHubActionTypeScriptProject.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

GitHubActionTypeScriptProject.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

GitHubActionTypeScriptProject.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

GitHubActionTypeScriptProject.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

GitHubActionTypeScriptProject.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

GitHubActionTypeScriptProject.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

GitHubActionTypeScriptProject.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

GitHubActionTypeScriptProject.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

GitHubActionTypeScriptProject.npmrc

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

GitHubActionTypeScriptProject.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

GitHubActionTypeScriptProject.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

GitHubActionTypeScriptProject.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

GitHubActionTypeScriptProject.preCompileTask

___

### projenCommand

• `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

GitHubActionTypeScriptProject.projenCommand

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

GitHubActionTypeScriptProject.root

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

GitHubActionTypeScriptProject.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

GitHubActionTypeScriptProject.testTask

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

GitHubActionTypeScriptProject.addBins

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

GitHubActionTypeScriptProject.addBundledDeps

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

GitHubActionTypeScriptProject.addCompileCommand

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

GitHubActionTypeScriptProject.addDeps

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

GitHubActionTypeScriptProject.addDevDeps

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

GitHubActionTypeScriptProject.addExcludeFromCleanup

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

GitHubActionTypeScriptProject.addFields

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

GitHubActionTypeScriptProject.addGitIgnore

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

GitHubActionTypeScriptProject.addKeywords

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

GitHubActionTypeScriptProject.addPackageIgnore

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

GitHubActionTypeScriptProject.addPeerDeps

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

GitHubActionTypeScriptProject.addScripts

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

GitHubActionTypeScriptProject.addTask

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

GitHubActionTypeScriptProject.addTestCommand

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

GitHubActionTypeScriptProject.addTip

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

GitHubActionTypeScriptProject.annotateGenerated

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

GitHubActionTypeScriptProject.hasScript

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

GitHubActionTypeScriptProject.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

GitHubActionTypeScriptProject.preSynthesize

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

GitHubActionTypeScriptProject.removeScript

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

GitHubActionTypeScriptProject.removeTask

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

GitHubActionTypeScriptProject.renderWorkflowSetup

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

GitHubActionTypeScriptProject.runTaskCommand

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

GitHubActionTypeScriptProject.setScript

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

GitHubActionTypeScriptProject.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

GitHubActionTypeScriptProject.toString

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

GitHubActionTypeScriptProject.tryFindFile

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

GitHubActionTypeScriptProject.tryFindJsonFile

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

GitHubActionTypeScriptProject.tryFindObjectFile

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

GitHubActionTypeScriptProject.tryRemoveFile

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

GitHubActionTypeScriptProject.isConstruct

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

GitHubActionTypeScriptProject.isProject

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

GitHubActionTypeScriptProject.of
