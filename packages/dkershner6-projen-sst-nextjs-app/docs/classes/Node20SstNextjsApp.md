[dkershner6-projen-sst-nextjs-app](../README.md) / [Exports](../modules.md) / Node20SstNextjsApp

# Class: Node20SstNextjsApp

## Hierarchy

- `Node20SstApp`

  ↳ **`Node20SstNextjsApp`**

## Table of contents

### Constructors

- [constructor](Node20SstNextjsApp.md#constructor)

### Properties

- [appEntrypoint](Node20SstNextjsApp.md#appentrypoint)
- [artifactsDirectory](Node20SstNextjsApp.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20SstNextjsApp.md#artifactsjavascriptdirectory)
- [autoApprove](Node20SstNextjsApp.md#autoapprove)
- [autoMerge](Node20SstNextjsApp.md#automerge)
- [branchNameToSstStageMap](Node20SstNextjsApp.md#branchnametosststagemap)
- [buildWorkflow](Node20SstNextjsApp.md#buildworkflow)
- [bundler](Node20SstNextjsApp.md#bundler)
- [cdkConfig](Node20SstNextjsApp.md#cdkconfig)
- [cdkDeps](Node20SstNextjsApp.md#cdkdeps)
- [cdkTasks](Node20SstNextjsApp.md#cdktasks)
- [commitGenerated](Node20SstNextjsApp.md#commitgenerated)
- [defaultTask](Node20SstNextjsApp.md#defaulttask)
- [deps](Node20SstNextjsApp.md#deps)
- [devContainer](Node20SstNextjsApp.md#devcontainer)
- [docgen](Node20SstNextjsApp.md#docgen)
- [docsDirectory](Node20SstNextjsApp.md#docsdirectory)
- [eslint](Node20SstNextjsApp.md#eslint)
- [gitattributes](Node20SstNextjsApp.md#gitattributes)
- [github](Node20SstNextjsApp.md#github)
- [gitignore](Node20SstNextjsApp.md#gitignore)
- [gitpod](Node20SstNextjsApp.md#gitpod)
- [initProject](Node20SstNextjsApp.md#initproject)
- [jest](Node20SstNextjsApp.md#jest)
- [libdir](Node20SstNextjsApp.md#libdir)
- [logger](Node20SstNextjsApp.md#logger)
- [name](Node20SstNextjsApp.md#name)
- [nextjsTypescriptConfig](Node20SstNextjsApp.md#nextjstypescriptconfig)
- [node](Node20SstNextjsApp.md#node)
- [nodeVersion](Node20SstNextjsApp.md#nodeversion)
- [npmignore](Node20SstNextjsApp.md#npmignore)
- [outdir](Node20SstNextjsApp.md#outdir)
- [package](Node20SstNextjsApp.md#package)
- [parent](Node20SstNextjsApp.md#parent)
- [prettier](Node20SstNextjsApp.md#prettier)
- [projectBuild](Node20SstNextjsApp.md#projectbuild)
- [projectType](Node20SstNextjsApp.md#projecttype)
- [projenCommand](Node20SstNextjsApp.md#projencommand)
- [publisher](Node20SstNextjsApp.md#publisher)
- [release](Node20SstNextjsApp.md#release)
- [runScriptCommand](Node20SstNextjsApp.md#runscriptcommand)
- [srcdir](Node20SstNextjsApp.md#srcdir)
- [sstConfig](Node20SstNextjsApp.md#sstconfig)
- [sstVersion](Node20SstNextjsApp.md#sstversion)
- [tasks](Node20SstNextjsApp.md#tasks)
- [testdir](Node20SstNextjsApp.md#testdir)
- [tsconfig](Node20SstNextjsApp.md#tsconfig)
- [tsconfigDev](Node20SstNextjsApp.md#tsconfigdev)
- [tsconfigEslint](Node20SstNextjsApp.md#tsconfigeslint)
- [upgradeWorkflow](Node20SstNextjsApp.md#upgradeworkflow)
- [vscode](Node20SstNextjsApp.md#vscode)
- [watchTask](Node20SstNextjsApp.md#watchtask)
- [workflowBootstrapSteps](Node20SstNextjsApp.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20SstNextjsApp.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20SstNextjsApp.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20SstNextjsApp.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20SstNextjsApp.md#allowlibrarydependencies)
- [buildTask](Node20SstNextjsApp.md#buildtask)
- [buildWorkflowJobId](Node20SstNextjsApp.md#buildworkflowjobid)
- [cdkVersion](Node20SstNextjsApp.md#cdkversion)
- [compileTask](Node20SstNextjsApp.md#compiletask)
- [components](Node20SstNextjsApp.md#components)
- [ejected](Node20SstNextjsApp.md#ejected)
- [entrypoint](Node20SstNextjsApp.md#entrypoint)
- [files](Node20SstNextjsApp.md#files)
- [manifest](Node20SstNextjsApp.md#manifest)
- [maxNodeVersion](Node20SstNextjsApp.md#maxnodeversion)
- [minNodeVersion](Node20SstNextjsApp.md#minnodeversion)
- [npmrc](Node20SstNextjsApp.md#npmrc)
- [packageManager](Node20SstNextjsApp.md#packagemanager)
- [packageTask](Node20SstNextjsApp.md#packagetask)
- [postCompileTask](Node20SstNextjsApp.md#postcompiletask)
- [preCompileTask](Node20SstNextjsApp.md#precompiletask)
- [root](Node20SstNextjsApp.md#root)
- [subprojects](Node20SstNextjsApp.md#subprojects)
- [testTask](Node20SstNextjsApp.md#testtask)

### Methods

- [addBins](Node20SstNextjsApp.md#addbins)
- [addBundledDeps](Node20SstNextjsApp.md#addbundleddeps)
- [addCdkDependency](Node20SstNextjsApp.md#addcdkdependency)
- [addCompileCommand](Node20SstNextjsApp.md#addcompilecommand)
- [addDeps](Node20SstNextjsApp.md#adddeps)
- [addDevDeps](Node20SstNextjsApp.md#adddevdeps)
- [addExcludeFromCleanup](Node20SstNextjsApp.md#addexcludefromcleanup)
- [addFields](Node20SstNextjsApp.md#addfields)
- [addGitIgnore](Node20SstNextjsApp.md#addgitignore)
- [addKeywords](Node20SstNextjsApp.md#addkeywords)
- [addPackageIgnore](Node20SstNextjsApp.md#addpackageignore)
- [addPeerDeps](Node20SstNextjsApp.md#addpeerdeps)
- [addScripts](Node20SstNextjsApp.md#addscripts)
- [addTask](Node20SstNextjsApp.md#addtask)
- [addTestCommand](Node20SstNextjsApp.md#addtestcommand)
- [addTip](Node20SstNextjsApp.md#addtip)
- [annotateGenerated](Node20SstNextjsApp.md#annotategenerated)
- [buildDeployToAwsJobStep](Node20SstNextjsApp.md#builddeploytoawsjobstep)
- [buildPublishToAwsJob](Node20SstNextjsApp.md#buildpublishtoawsjob)
- [hasScript](Node20SstNextjsApp.md#hasscript)
- [postSynthesize](Node20SstNextjsApp.md#postsynthesize)
- [preSynthesize](Node20SstNextjsApp.md#presynthesize)
- [removeScript](Node20SstNextjsApp.md#removescript)
- [removeTask](Node20SstNextjsApp.md#removetask)
- [renderWorkflowSetup](Node20SstNextjsApp.md#renderworkflowsetup)
- [runTaskCommand](Node20SstNextjsApp.md#runtaskcommand)
- [setScript](Node20SstNextjsApp.md#setscript)
- [synth](Node20SstNextjsApp.md#synth)
- [toString](Node20SstNextjsApp.md#tostring)
- [tryFindFile](Node20SstNextjsApp.md#tryfindfile)
- [tryFindJsonFile](Node20SstNextjsApp.md#tryfindjsonfile)
- [tryFindObjectFile](Node20SstNextjsApp.md#tryfindobjectfile)
- [tryRemoveFile](Node20SstNextjsApp.md#tryremovefile)
- [isConstruct](Node20SstNextjsApp.md#isconstruct)
- [isProject](Node20SstNextjsApp.md#isproject)
- [of](Node20SstNextjsApp.md#of)

## Constructors

### constructor

• **new Node20SstNextjsApp**(`options`): [`Node20SstNextjsApp`](Node20SstNextjsApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Node20SstNextjsAppOptions`](../interfaces/Node20SstNextjsAppOptions.md) |

#### Returns

[`Node20SstNextjsApp`](Node20SstNextjsApp.md)

#### Overrides

Node20SstApp.constructor

## Properties

### appEntrypoint

• `Readonly` **appEntrypoint**: `string`

The CDK app entrypoint

#### Inherited from

Node20SstApp.appEntrypoint

___

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

Node20SstApp.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

Node20SstApp.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

Node20SstApp.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

Node20SstApp.autoMerge

___

### branchNameToSstStageMap

• `Optional` `Readonly` **branchNameToSstStageMap**: `Record`\<`string`, `string`\>

#### Inherited from

Node20SstApp.branchNameToSstStageMap

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

Node20SstApp.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

Node20SstApp.bundler

___

### cdkConfig

• `Readonly` **cdkConfig**: `CdkConfig`

cdk.json configuration.

#### Inherited from

Node20SstApp.cdkConfig

___

### cdkDeps

• `Readonly` **cdkDeps**: `AwsCdkDeps`

#### Inherited from

Node20SstApp.cdkDeps

___

### cdkTasks

• `Readonly` **cdkTasks**: `CdkTasks`

Common CDK tasks.

#### Inherited from

Node20SstApp.cdkTasks

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

Node20SstApp.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

Node20SstApp.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

Node20SstApp.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

Node20SstApp.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

Node20SstApp.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

Node20SstApp.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

Node20SstApp.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

Node20SstApp.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

Node20SstApp.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

Node20SstApp.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

Node20SstApp.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

Node20SstApp.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

Node20SstApp.jest

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

Node20SstApp.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

Node20SstApp.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

Node20SstApp.name

___

### nextjsTypescriptConfig

• `Readonly` **nextjsTypescriptConfig**: `TypescriptConfig`

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Node20SstApp.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

Node20SstApp.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

Node20SstApp.npmignore

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

Node20SstApp.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

Node20SstApp.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

Node20SstApp.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

Node20SstApp.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

Node20SstApp.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

Node20SstApp.projectType

___

### projenCommand

• `Readonly` **projenCommand**: `string`

The command to use in order to run the projen CLI.

#### Inherited from

Node20SstApp.projenCommand

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

Node20SstApp.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

Node20SstApp.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

Node20SstApp.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

Node20SstApp.srcdir

___

### sstConfig

• `Readonly` **sstConfig**: `SstConfiguration`

#### Inherited from

Node20SstApp.sstConfig

___

### sstVersion

• `Readonly` **sstVersion**: `string`

#### Inherited from

Node20SstApp.sstVersion

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

Node20SstApp.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

Node20SstApp.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

Node20SstApp.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

Node20SstApp.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

Node20SstApp.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

Node20SstApp.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

Node20SstApp.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

Node20SstApp.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

Node20SstApp.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

Node20SstApp.workflowPackageCache

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

Node20SstApp.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

Node20SstApp.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

Node20SstApp.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20SstApp.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

Node20SstApp.buildWorkflowJobId

___

### cdkVersion

• `get` **cdkVersion**(): `string`

The CDK version this app is using.

#### Returns

`string`

#### Inherited from

Node20SstApp.cdkVersion

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20SstApp.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

Node20SstApp.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

Node20SstApp.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

Node20SstApp.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

Node20SstApp.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

Node20SstApp.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

Node20SstApp.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

Node20SstApp.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

Node20SstApp.npmrc

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

Node20SstApp.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20SstApp.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20SstApp.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20SstApp.preCompileTask

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

Node20SstApp.root

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

Node20SstApp.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20SstApp.testTask

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

Node20SstApp.addBins

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

Node20SstApp.addBundledDeps

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

Node20SstApp.addCdkDependency

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

Node20SstApp.addCompileCommand

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

Node20SstApp.addDeps

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

Node20SstApp.addDevDeps

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

Node20SstApp.addExcludeFromCleanup

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

Node20SstApp.addFields

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

Node20SstApp.addGitIgnore

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

Node20SstApp.addKeywords

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

Node20SstApp.addPackageIgnore

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

Node20SstApp.addPeerDeps

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

Node20SstApp.addScripts

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

Node20SstApp.addTask

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

Node20SstApp.addTestCommand

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

Node20SstApp.addTip

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

Node20SstApp.annotateGenerated

___

### buildDeployToAwsJobStep

▸ **buildDeployToAwsJobStep**(`«destructured»`): `JobStep`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `DeployJobStepBuilderParams` |

#### Returns

`JobStep`

#### Inherited from

Node20SstApp.buildDeployToAwsJobStep

___

### buildPublishToAwsJob

▸ **buildPublishToAwsJob**(`«destructured»`, `options`): `Job`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `DeployJobStepBuilderParams` |
| `options` | `Pick`\<`AwsAppPublisherOptions`, ``"configureAwsCredentialsJobSteps"`` \| ``"deployJobStepBuilder"`` \| ``"env"`` \| ``"runsOn"`` \| ``"runsOnGroup"``\> |

#### Returns

`Job`

#### Inherited from

Node20SstApp.buildPublishToAwsJob

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

Node20SstApp.hasScript

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

Node20SstApp.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

Node20SstApp.preSynthesize

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

Node20SstApp.removeScript

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

Node20SstApp.removeTask

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

Node20SstApp.renderWorkflowSetup

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

Node20SstApp.runTaskCommand

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

Node20SstApp.setScript

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

Node20SstApp.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

Node20SstApp.toString

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

Node20SstApp.tryFindFile

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

Node20SstApp.tryFindJsonFile

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

Node20SstApp.tryFindObjectFile

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

Node20SstApp.tryRemoveFile

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

Node20SstApp.isConstruct

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

Node20SstApp.isProject

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

Node20SstApp.of
