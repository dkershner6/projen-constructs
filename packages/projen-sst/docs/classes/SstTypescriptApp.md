[projen-sst](../README.md) / [Exports](../modules.md) / SstTypescriptApp

# Class: SstTypescriptApp

## Hierarchy

- `AwsCdkTypeScriptApp`

  ↳ **`SstTypescriptApp`**

## Table of contents

### Constructors

- [constructor](SstTypescriptApp.md#constructor)

### Properties

- [appEntrypoint](SstTypescriptApp.md#appentrypoint)
- [artifactsDirectory](SstTypescriptApp.md#artifactsdirectory)
- [artifactsJavascriptDirectory](SstTypescriptApp.md#artifactsjavascriptdirectory)
- [autoApprove](SstTypescriptApp.md#autoapprove)
- [autoMerge](SstTypescriptApp.md#automerge)
- [branchNameToSstStageMap](SstTypescriptApp.md#branchnametosststagemap)
- [buildWorkflow](SstTypescriptApp.md#buildworkflow)
- [bundler](SstTypescriptApp.md#bundler)
- [cdkConfig](SstTypescriptApp.md#cdkconfig)
- [cdkDeps](SstTypescriptApp.md#cdkdeps)
- [cdkTasks](SstTypescriptApp.md#cdktasks)
- [commitGenerated](SstTypescriptApp.md#commitgenerated)
- [defaultTask](SstTypescriptApp.md#defaulttask)
- [deps](SstTypescriptApp.md#deps)
- [devContainer](SstTypescriptApp.md#devcontainer)
- [docgen](SstTypescriptApp.md#docgen)
- [docsDirectory](SstTypescriptApp.md#docsdirectory)
- [eslint](SstTypescriptApp.md#eslint)
- [gitattributes](SstTypescriptApp.md#gitattributes)
- [github](SstTypescriptApp.md#github)
- [gitignore](SstTypescriptApp.md#gitignore)
- [gitpod](SstTypescriptApp.md#gitpod)
- [initProject](SstTypescriptApp.md#initproject)
- [jest](SstTypescriptApp.md#jest)
- [libdir](SstTypescriptApp.md#libdir)
- [logger](SstTypescriptApp.md#logger)
- [name](SstTypescriptApp.md#name)
- [node](SstTypescriptApp.md#node)
- [nodeVersion](SstTypescriptApp.md#nodeversion)
- [npmignore](SstTypescriptApp.md#npmignore)
- [options](SstTypescriptApp.md#options)
- [outdir](SstTypescriptApp.md#outdir)
- [package](SstTypescriptApp.md#package)
- [parent](SstTypescriptApp.md#parent)
- [prettier](SstTypescriptApp.md#prettier)
- [projectBuild](SstTypescriptApp.md#projectbuild)
- [projectType](SstTypescriptApp.md#projecttype)
- [publisher](SstTypescriptApp.md#publisher)
- [release](SstTypescriptApp.md#release)
- [runScriptCommand](SstTypescriptApp.md#runscriptcommand)
- [srcdir](SstTypescriptApp.md#srcdir)
- [sstConfig](SstTypescriptApp.md#sstconfig)
- [sstVersion](SstTypescriptApp.md#sstversion)
- [tasks](SstTypescriptApp.md#tasks)
- [testdir](SstTypescriptApp.md#testdir)
- [tsconfig](SstTypescriptApp.md#tsconfig)
- [tsconfigDev](SstTypescriptApp.md#tsconfigdev)
- [tsconfigEslint](SstTypescriptApp.md#tsconfigeslint)
- [upgradeWorkflow](SstTypescriptApp.md#upgradeworkflow)
- [vscode](SstTypescriptApp.md#vscode)
- [watchTask](SstTypescriptApp.md#watchtask)
- [workflowBootstrapSteps](SstTypescriptApp.md#workflowbootstrapsteps)
- [workflowPackageCache](SstTypescriptApp.md#workflowpackagecache)
- [DEFAULT\_TASK](SstTypescriptApp.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](SstTypescriptApp.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](SstTypescriptApp.md#allowlibrarydependencies)
- [buildTask](SstTypescriptApp.md#buildtask)
- [buildWorkflowJobId](SstTypescriptApp.md#buildworkflowjobid)
- [cdkVersion](SstTypescriptApp.md#cdkversion)
- [compileTask](SstTypescriptApp.md#compiletask)
- [components](SstTypescriptApp.md#components)
- [ejected](SstTypescriptApp.md#ejected)
- [entrypoint](SstTypescriptApp.md#entrypoint)
- [files](SstTypescriptApp.md#files)
- [manifest](SstTypescriptApp.md#manifest)
- [maxNodeVersion](SstTypescriptApp.md#maxnodeversion)
- [minNodeVersion](SstTypescriptApp.md#minnodeversion)
- [npmrc](SstTypescriptApp.md#npmrc)
- [packageManager](SstTypescriptApp.md#packagemanager)
- [packageTask](SstTypescriptApp.md#packagetask)
- [postCompileTask](SstTypescriptApp.md#postcompiletask)
- [preCompileTask](SstTypescriptApp.md#precompiletask)
- [projenCommand](SstTypescriptApp.md#projencommand)
- [root](SstTypescriptApp.md#root)
- [subprojects](SstTypescriptApp.md#subprojects)
- [testTask](SstTypescriptApp.md#testtask)

### Methods

- [addBins](SstTypescriptApp.md#addbins)
- [addBundledDeps](SstTypescriptApp.md#addbundleddeps)
- [addCdkDependency](SstTypescriptApp.md#addcdkdependency)
- [addCompileCommand](SstTypescriptApp.md#addcompilecommand)
- [addDeps](SstTypescriptApp.md#adddeps)
- [addDevDeps](SstTypescriptApp.md#adddevdeps)
- [addExcludeFromCleanup](SstTypescriptApp.md#addexcludefromcleanup)
- [addFields](SstTypescriptApp.md#addfields)
- [addGitIgnore](SstTypescriptApp.md#addgitignore)
- [addIgnores](SstTypescriptApp.md#addignores)
- [addKeywords](SstTypescriptApp.md#addkeywords)
- [addPackageIgnore](SstTypescriptApp.md#addpackageignore)
- [addPeerDeps](SstTypescriptApp.md#addpeerdeps)
- [addScripts](SstTypescriptApp.md#addscripts)
- [addTask](SstTypescriptApp.md#addtask)
- [addTestCommand](SstTypescriptApp.md#addtestcommand)
- [addTip](SstTypescriptApp.md#addtip)
- [annotateGenerated](SstTypescriptApp.md#annotategenerated)
- [createPersonalTasks](SstTypescriptApp.md#createpersonaltasks)
- [createTasksForBranch](SstTypescriptApp.md#createtasksforbranch)
- [hasScript](SstTypescriptApp.md#hasscript)
- [overrideTasks](SstTypescriptApp.md#overridetasks)
- [overrideTasksForDefaultStage](SstTypescriptApp.md#overridetasksfordefaultstage)
- [postSynthesize](SstTypescriptApp.md#postsynthesize)
- [preSynthesize](SstTypescriptApp.md#presynthesize)
- [removeScript](SstTypescriptApp.md#removescript)
- [removeTask](SstTypescriptApp.md#removetask)
- [renderWorkflowSetup](SstTypescriptApp.md#renderworkflowsetup)
- [runTaskCommand](SstTypescriptApp.md#runtaskcommand)
- [setScript](SstTypescriptApp.md#setscript)
- [synth](SstTypescriptApp.md#synth)
- [toString](SstTypescriptApp.md#tostring)
- [tryFindFile](SstTypescriptApp.md#tryfindfile)
- [tryFindJsonFile](SstTypescriptApp.md#tryfindjsonfile)
- [tryFindObjectFile](SstTypescriptApp.md#tryfindobjectfile)
- [tryRemoveFile](SstTypescriptApp.md#tryremovefile)
- [isConstruct](SstTypescriptApp.md#isconstruct)
- [isProject](SstTypescriptApp.md#isproject)
- [of](SstTypescriptApp.md#of)

## Constructors

### constructor

• **new SstTypescriptApp**(`options`): [`SstTypescriptApp`](SstTypescriptApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SstTypescriptAppOptions`](../interfaces/SstTypescriptAppOptions.md) |

#### Returns

[`SstTypescriptApp`](SstTypescriptApp.md)

#### Overrides

awscdk.AwsCdkTypeScriptApp.constructor

## Properties

### appEntrypoint

• `Readonly` **appEntrypoint**: `string`

The CDK app entrypoint

#### Inherited from

awscdk.AwsCdkTypeScriptApp.appEntrypoint

___

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

awscdk.AwsCdkTypeScriptApp.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.autoMerge

___

### branchNameToSstStageMap

• `Optional` `Readonly` **branchNameToSstStageMap**: `Record`\<`string`, `string`\>

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.bundler

___

### cdkConfig

• `Readonly` **cdkConfig**: `CdkConfig`

cdk.json configuration.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.cdkConfig

___

### cdkDeps

• `Readonly` **cdkDeps**: `AwsCdkDeps`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.cdkDeps

___

### cdkTasks

• `Readonly` **cdkTasks**: `CdkTasks`

Common CDK tasks.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.cdkTasks

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

awscdk.AwsCdkTypeScriptApp.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

awscdk.AwsCdkTypeScriptApp.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

awscdk.AwsCdkTypeScriptApp.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

awscdk.AwsCdkTypeScriptApp.jest

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.name

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.npmignore

___

### options

• `Private` `Readonly` **options**: [`SstTypescriptAppOptions`](../interfaces/SstTypescriptAppOptions.md)

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.projectType

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

awscdk.AwsCdkTypeScriptApp.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.srcdir

___

### sstConfig

• `Readonly` **sstConfig**: [`SstConfiguration`](../interfaces/SstConfiguration.md)

___

### sstVersion

• `Readonly` **sstVersion**: `string`

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

awscdk.AwsCdkTypeScriptApp.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

awscdk.AwsCdkTypeScriptApp.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.workflowPackageCache

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

awscdk.AwsCdkTypeScriptApp.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.buildWorkflowJobId

___

### cdkVersion

• `get` **cdkVersion**(): `string`

The CDK version this app is using.

#### Returns

`string`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.cdkVersion

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

awscdk.AwsCdkTypeScriptApp.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

awscdk.AwsCdkTypeScriptApp.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.npmrc

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.preCompileTask

___

### projenCommand

• `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.projenCommand

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.root

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

awscdk.AwsCdkTypeScriptApp.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.testTask

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

awscdk.AwsCdkTypeScriptApp.addBins

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

awscdk.AwsCdkTypeScriptApp.addBundledDeps

___

### addCdkDependency

▸ **addCdkDependency**(`...modules`): `void`

Adds an AWS CDK module dependencies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...modules` | `string`[] | The list of modules to depend on |

#### Returns

`void`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.addCdkDependency

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

awscdk.AwsCdkTypeScriptApp.addCompileCommand

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

awscdk.AwsCdkTypeScriptApp.addDeps

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

awscdk.AwsCdkTypeScriptApp.addDevDeps

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

awscdk.AwsCdkTypeScriptApp.addExcludeFromCleanup

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

awscdk.AwsCdkTypeScriptApp.addFields

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

awscdk.AwsCdkTypeScriptApp.addGitIgnore

___

### addIgnores

▸ **addIgnores**(): `void`

#### Returns

`void`

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

awscdk.AwsCdkTypeScriptApp.addKeywords

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

awscdk.AwsCdkTypeScriptApp.addPackageIgnore

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

awscdk.AwsCdkTypeScriptApp.addPeerDeps

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

awscdk.AwsCdkTypeScriptApp.addScripts

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

awscdk.AwsCdkTypeScriptApp.addTask

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

awscdk.AwsCdkTypeScriptApp.addTestCommand

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

awscdk.AwsCdkTypeScriptApp.addTip

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

awscdk.AwsCdkTypeScriptApp.annotateGenerated

___

### createPersonalTasks

▸ **createPersonalTasks**(): `void`

#### Returns

`void`

___

### createTasksForBranch

▸ **createTasksForBranch**(`branchName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `branchName` | `string` |

#### Returns

`void`

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

awscdk.AwsCdkTypeScriptApp.hasScript

___

### overrideTasks

▸ **overrideTasks**(): `void`

#### Returns

`void`

___

### overrideTasksForDefaultStage

▸ **overrideTasksForDefaultStage**(): `void`

#### Returns

`void`

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.preSynthesize

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

awscdk.AwsCdkTypeScriptApp.removeScript

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

awscdk.AwsCdkTypeScriptApp.removeTask

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

awscdk.AwsCdkTypeScriptApp.renderWorkflowSetup

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

awscdk.AwsCdkTypeScriptApp.runTaskCommand

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

awscdk.AwsCdkTypeScriptApp.setScript

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

awscdk.AwsCdkTypeScriptApp.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

awscdk.AwsCdkTypeScriptApp.toString

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

awscdk.AwsCdkTypeScriptApp.tryFindFile

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

awscdk.AwsCdkTypeScriptApp.tryFindJsonFile

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

awscdk.AwsCdkTypeScriptApp.tryFindObjectFile

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

awscdk.AwsCdkTypeScriptApp.tryRemoveFile

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

awscdk.AwsCdkTypeScriptApp.isConstruct

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

awscdk.AwsCdkTypeScriptApp.isProject

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

awscdk.AwsCdkTypeScriptApp.of
