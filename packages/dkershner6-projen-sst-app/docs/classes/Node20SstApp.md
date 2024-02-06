[dkershner6-projen-sst-app](../README.md) / [Exports](../modules.md) / Node20SstApp

# Class: Node20SstApp

## Hierarchy

- `SstTypescriptApp`

  ↳ **`Node20SstApp`**

## Table of contents

### Constructors

- [constructor](Node20SstApp.md#constructor)

### Properties

- [appEntrypoint](Node20SstApp.md#appentrypoint)
- [artifactsDirectory](Node20SstApp.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20SstApp.md#artifactsjavascriptdirectory)
- [autoApprove](Node20SstApp.md#autoapprove)
- [autoMerge](Node20SstApp.md#automerge)
- [branchNameToSstStageMap](Node20SstApp.md#branchnametosststagemap)
- [buildWorkflow](Node20SstApp.md#buildworkflow)
- [bundler](Node20SstApp.md#bundler)
- [cdkConfig](Node20SstApp.md#cdkconfig)
- [cdkDeps](Node20SstApp.md#cdkdeps)
- [cdkTasks](Node20SstApp.md#cdktasks)
- [commitGenerated](Node20SstApp.md#commitgenerated)
- [defaultTask](Node20SstApp.md#defaulttask)
- [deps](Node20SstApp.md#deps)
- [devContainer](Node20SstApp.md#devcontainer)
- [docgen](Node20SstApp.md#docgen)
- [docsDirectory](Node20SstApp.md#docsdirectory)
- [eslint](Node20SstApp.md#eslint)
- [gitattributes](Node20SstApp.md#gitattributes)
- [github](Node20SstApp.md#github)
- [gitignore](Node20SstApp.md#gitignore)
- [gitpod](Node20SstApp.md#gitpod)
- [initProject](Node20SstApp.md#initproject)
- [jest](Node20SstApp.md#jest)
- [jestTransformer](Node20SstApp.md#jesttransformer)
- [libdir](Node20SstApp.md#libdir)
- [logger](Node20SstApp.md#logger)
- [name](Node20SstApp.md#name)
- [node](Node20SstApp.md#node)
- [nodeVersion](Node20SstApp.md#nodeversion)
- [npmignore](Node20SstApp.md#npmignore)
- [outdir](Node20SstApp.md#outdir)
- [package](Node20SstApp.md#package)
- [parent](Node20SstApp.md#parent)
- [prettier](Node20SstApp.md#prettier)
- [projectBuild](Node20SstApp.md#projectbuild)
- [projectType](Node20SstApp.md#projecttype)
- [projenCommand](Node20SstApp.md#projencommand)
- [publishToAwsOptions](Node20SstApp.md#publishtoawsoptions)
- [publisher](Node20SstApp.md#publisher)
- [release](Node20SstApp.md#release)
- [runScriptCommand](Node20SstApp.md#runscriptcommand)
- [srcdir](Node20SstApp.md#srcdir)
- [sstConfig](Node20SstApp.md#sstconfig)
- [sstVersion](Node20SstApp.md#sstversion)
- [tasks](Node20SstApp.md#tasks)
- [testdir](Node20SstApp.md#testdir)
- [tsconfig](Node20SstApp.md#tsconfig)
- [tsconfigDev](Node20SstApp.md#tsconfigdev)
- [tsconfigEslint](Node20SstApp.md#tsconfigeslint)
- [upgradeWorkflow](Node20SstApp.md#upgradeworkflow)
- [vscode](Node20SstApp.md#vscode)
- [watchTask](Node20SstApp.md#watchtask)
- [workflowBootstrapSteps](Node20SstApp.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20SstApp.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20SstApp.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20SstApp.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20SstApp.md#allowlibrarydependencies)
- [buildTask](Node20SstApp.md#buildtask)
- [buildWorkflowJobId](Node20SstApp.md#buildworkflowjobid)
- [cdkVersion](Node20SstApp.md#cdkversion)
- [compileTask](Node20SstApp.md#compiletask)
- [components](Node20SstApp.md#components)
- [ejected](Node20SstApp.md#ejected)
- [entrypoint](Node20SstApp.md#entrypoint)
- [files](Node20SstApp.md#files)
- [manifest](Node20SstApp.md#manifest)
- [maxNodeVersion](Node20SstApp.md#maxnodeversion)
- [minNodeVersion](Node20SstApp.md#minnodeversion)
- [npmrc](Node20SstApp.md#npmrc)
- [packageManager](Node20SstApp.md#packagemanager)
- [packageTask](Node20SstApp.md#packagetask)
- [postCompileTask](Node20SstApp.md#postcompiletask)
- [preCompileTask](Node20SstApp.md#precompiletask)
- [root](Node20SstApp.md#root)
- [subprojects](Node20SstApp.md#subprojects)
- [testTask](Node20SstApp.md#testtask)

### Methods

- [addBins](Node20SstApp.md#addbins)
- [addBundledDeps](Node20SstApp.md#addbundleddeps)
- [addCdkDependency](Node20SstApp.md#addcdkdependency)
- [addCompileCommand](Node20SstApp.md#addcompilecommand)
- [addDeps](Node20SstApp.md#adddeps)
- [addDevDeps](Node20SstApp.md#adddevdeps)
- [addExcludeFromCleanup](Node20SstApp.md#addexcludefromcleanup)
- [addFields](Node20SstApp.md#addfields)
- [addGitIgnore](Node20SstApp.md#addgitignore)
- [addKeywords](Node20SstApp.md#addkeywords)
- [addPackageIgnore](Node20SstApp.md#addpackageignore)
- [addPeerDeps](Node20SstApp.md#addpeerdeps)
- [addScripts](Node20SstApp.md#addscripts)
- [addTask](Node20SstApp.md#addtask)
- [addTestCommand](Node20SstApp.md#addtestcommand)
- [addTip](Node20SstApp.md#addtip)
- [annotateGenerated](Node20SstApp.md#annotategenerated)
- [buildDeployToAwsJobStep](Node20SstApp.md#builddeploytoawsjobstep)
- [buildPublishToAwsJob](Node20SstApp.md#buildpublishtoawsjob)
- [determineDeployTaskToUseForAwsJobStep](Node20SstApp.md#determinedeploytasktouseforawsjobstep)
- [hasScript](Node20SstApp.md#hasscript)
- [postSynthesize](Node20SstApp.md#postsynthesize)
- [preSynthesize](Node20SstApp.md#presynthesize)
- [removeScript](Node20SstApp.md#removescript)
- [removeTask](Node20SstApp.md#removetask)
- [renderWorkflowSetup](Node20SstApp.md#renderworkflowsetup)
- [runTaskCommand](Node20SstApp.md#runtaskcommand)
- [setScript](Node20SstApp.md#setscript)
- [synth](Node20SstApp.md#synth)
- [toString](Node20SstApp.md#tostring)
- [tryFindFile](Node20SstApp.md#tryfindfile)
- [tryFindJsonFile](Node20SstApp.md#tryfindjsonfile)
- [tryFindObjectFile](Node20SstApp.md#tryfindobjectfile)
- [tryRemoveFile](Node20SstApp.md#tryremovefile)
- [isConstruct](Node20SstApp.md#isconstruct)
- [isProject](Node20SstApp.md#isproject)
- [of](Node20SstApp.md#of)

## Constructors

### constructor

• **new Node20SstApp**(`options`): [`Node20SstApp`](Node20SstApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Node20SstAppOptions`](../interfaces/Node20SstAppOptions.md) |

#### Returns

[`Node20SstApp`](Node20SstApp.md)

#### Overrides

SstTypescriptApp.constructor

## Properties

### appEntrypoint

• `Readonly` **appEntrypoint**: `string`

The CDK app entrypoint

#### Inherited from

SstTypescriptApp.appEntrypoint

___

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

SstTypescriptApp.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

SstTypescriptApp.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

SstTypescriptApp.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

SstTypescriptApp.autoMerge

___

### branchNameToSstStageMap

• `Optional` `Readonly` **branchNameToSstStageMap**: `Record`\<`string`, `string`\>

#### Inherited from

SstTypescriptApp.branchNameToSstStageMap

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

SstTypescriptApp.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

SstTypescriptApp.bundler

___

### cdkConfig

• `Readonly` **cdkConfig**: `CdkConfig`

cdk.json configuration.

#### Inherited from

SstTypescriptApp.cdkConfig

___

### cdkDeps

• `Readonly` **cdkDeps**: `AwsCdkDeps`

#### Inherited from

SstTypescriptApp.cdkDeps

___

### cdkTasks

• `Readonly` **cdkTasks**: `CdkTasks`

Common CDK tasks.

#### Inherited from

SstTypescriptApp.cdkTasks

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

SstTypescriptApp.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

SstTypescriptApp.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

SstTypescriptApp.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

SstTypescriptApp.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

SstTypescriptApp.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

SstTypescriptApp.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

SstTypescriptApp.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

SstTypescriptApp.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

SstTypescriptApp.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

SstTypescriptApp.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

SstTypescriptApp.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

SstTypescriptApp.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

SstTypescriptApp.jest

___

### jestTransformer

• `Readonly` **jestTransformer**: `JestTransformer`

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

SstTypescriptApp.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

SstTypescriptApp.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

SstTypescriptApp.name

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

SstTypescriptApp.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

SstTypescriptApp.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

SstTypescriptApp.npmignore

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

SstTypescriptApp.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

SstTypescriptApp.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

SstTypescriptApp.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

SstTypescriptApp.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

SstTypescriptApp.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

SstTypescriptApp.projectType

___

### projenCommand

• `Readonly` **projenCommand**: `string`

The command to use in order to run the projen CLI.

#### Inherited from

SstTypescriptApp.projenCommand

___

### publishToAwsOptions

• `Private` `Optional` `Readonly` **publishToAwsOptions**: `PublishToAwsOptions`

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

SstTypescriptApp.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

SstTypescriptApp.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

SstTypescriptApp.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

SstTypescriptApp.srcdir

___

### sstConfig

• `Readonly` **sstConfig**: `SstConfiguration`

#### Inherited from

SstTypescriptApp.sstConfig

___

### sstVersion

• `Readonly` **sstVersion**: `string`

#### Inherited from

SstTypescriptApp.sstVersion

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

SstTypescriptApp.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

SstTypescriptApp.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

SstTypescriptApp.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

SstTypescriptApp.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

SstTypescriptApp.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

SstTypescriptApp.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

SstTypescriptApp.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

SstTypescriptApp.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

SstTypescriptApp.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

SstTypescriptApp.workflowPackageCache

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

SstTypescriptApp.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

SstTypescriptApp.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

SstTypescriptApp.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

SstTypescriptApp.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

SstTypescriptApp.buildWorkflowJobId

___

### cdkVersion

• `get` **cdkVersion**(): `string`

The CDK version this app is using.

#### Returns

`string`

#### Inherited from

SstTypescriptApp.cdkVersion

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

SstTypescriptApp.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

SstTypescriptApp.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

SstTypescriptApp.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

SstTypescriptApp.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

SstTypescriptApp.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

SstTypescriptApp.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

SstTypescriptApp.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

SstTypescriptApp.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

SstTypescriptApp.npmrc

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

SstTypescriptApp.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

SstTypescriptApp.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

SstTypescriptApp.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

SstTypescriptApp.preCompileTask

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

SstTypescriptApp.root

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

SstTypescriptApp.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

SstTypescriptApp.testTask

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

SstTypescriptApp.addBins

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

SstTypescriptApp.addBundledDeps

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

SstTypescriptApp.addCdkDependency

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

SstTypescriptApp.addCompileCommand

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

SstTypescriptApp.addDeps

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

SstTypescriptApp.addDevDeps

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

SstTypescriptApp.addExcludeFromCleanup

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

SstTypescriptApp.addFields

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

SstTypescriptApp.addGitIgnore

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

SstTypescriptApp.addKeywords

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

SstTypescriptApp.addPackageIgnore

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

SstTypescriptApp.addPeerDeps

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

SstTypescriptApp.addScripts

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

SstTypescriptApp.addTask

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

SstTypescriptApp.addTestCommand

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

SstTypescriptApp.addTip

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

SstTypescriptApp.annotateGenerated

___

### buildDeployToAwsJobStep

▸ **buildDeployToAwsJobStep**(`«destructured»`): `JobStep`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `DeployJobStepBuilderParams` |

#### Returns

`JobStep`

___

### buildPublishToAwsJob

▸ **buildPublishToAwsJob**(`«destructured»`, `options`): `Job`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `DeployJobStepBuilderParams` |
| `options` | `AwsAppPublisherOptions` |

#### Returns

`Job`

___

### determineDeployTaskToUseForAwsJobStep

▸ **determineDeployTaskToUseForAwsJobStep**(`«destructured»`): `Task`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `DeployJobStepBuilderParams` |

#### Returns

`Task`

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

SstTypescriptApp.hasScript

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

SstTypescriptApp.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

SstTypescriptApp.preSynthesize

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

SstTypescriptApp.removeScript

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

SstTypescriptApp.removeTask

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

SstTypescriptApp.renderWorkflowSetup

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

SstTypescriptApp.runTaskCommand

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

SstTypescriptApp.setScript

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

SstTypescriptApp.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

SstTypescriptApp.toString

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

SstTypescriptApp.tryFindFile

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

SstTypescriptApp.tryFindJsonFile

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

SstTypescriptApp.tryFindObjectFile

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

SstTypescriptApp.tryRemoveFile

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

SstTypescriptApp.isConstruct

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

SstTypescriptApp.isProject

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

SstTypescriptApp.of
