[dkershner6-projen-awscdk-app](../README.md) / [Exports](../modules.md) / Node20AwsCdkApp

# Class: Node20AwsCdkApp

## Hierarchy

- `AwsCdkTypeScriptApp`

  ↳ **`Node20AwsCdkApp`**

## Table of contents

### Constructors

- [constructor](Node20AwsCdkApp.md#constructor)

### Properties

- [appEntrypoint](Node20AwsCdkApp.md#appentrypoint)
- [artifactsDirectory](Node20AwsCdkApp.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20AwsCdkApp.md#artifactsjavascriptdirectory)
- [autoApprove](Node20AwsCdkApp.md#autoapprove)
- [autoMerge](Node20AwsCdkApp.md#automerge)
- [buildWorkflow](Node20AwsCdkApp.md#buildworkflow)
- [bundler](Node20AwsCdkApp.md#bundler)
- [cdkConfig](Node20AwsCdkApp.md#cdkconfig)
- [cdkDeps](Node20AwsCdkApp.md#cdkdeps)
- [cdkTasks](Node20AwsCdkApp.md#cdktasks)
- [commitGenerated](Node20AwsCdkApp.md#commitgenerated)
- [defaultTask](Node20AwsCdkApp.md#defaulttask)
- [deps](Node20AwsCdkApp.md#deps)
- [devContainer](Node20AwsCdkApp.md#devcontainer)
- [docgen](Node20AwsCdkApp.md#docgen)
- [docsDirectory](Node20AwsCdkApp.md#docsdirectory)
- [eslint](Node20AwsCdkApp.md#eslint)
- [gitattributes](Node20AwsCdkApp.md#gitattributes)
- [github](Node20AwsCdkApp.md#github)
- [gitignore](Node20AwsCdkApp.md#gitignore)
- [gitpod](Node20AwsCdkApp.md#gitpod)
- [initProject](Node20AwsCdkApp.md#initproject)
- [jest](Node20AwsCdkApp.md#jest)
- [libdir](Node20AwsCdkApp.md#libdir)
- [logger](Node20AwsCdkApp.md#logger)
- [name](Node20AwsCdkApp.md#name)
- [node](Node20AwsCdkApp.md#node)
- [nodeVersion](Node20AwsCdkApp.md#nodeversion)
- [npmignore](Node20AwsCdkApp.md#npmignore)
- [outdir](Node20AwsCdkApp.md#outdir)
- [package](Node20AwsCdkApp.md#package)
- [parent](Node20AwsCdkApp.md#parent)
- [prettier](Node20AwsCdkApp.md#prettier)
- [projectBuild](Node20AwsCdkApp.md#projectbuild)
- [projectType](Node20AwsCdkApp.md#projecttype)
- [projenCommand](Node20AwsCdkApp.md#projencommand)
- [publishToAwsOptions](Node20AwsCdkApp.md#publishtoawsoptions)
- [publisher](Node20AwsCdkApp.md#publisher)
- [release](Node20AwsCdkApp.md#release)
- [runScriptCommand](Node20AwsCdkApp.md#runscriptcommand)
- [srcdir](Node20AwsCdkApp.md#srcdir)
- [tasks](Node20AwsCdkApp.md#tasks)
- [testdir](Node20AwsCdkApp.md#testdir)
- [tsconfig](Node20AwsCdkApp.md#tsconfig)
- [tsconfigDev](Node20AwsCdkApp.md#tsconfigdev)
- [tsconfigEslint](Node20AwsCdkApp.md#tsconfigeslint)
- [upgradeWorkflow](Node20AwsCdkApp.md#upgradeworkflow)
- [vscode](Node20AwsCdkApp.md#vscode)
- [watchTask](Node20AwsCdkApp.md#watchtask)
- [workflowBootstrapSteps](Node20AwsCdkApp.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20AwsCdkApp.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20AwsCdkApp.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20AwsCdkApp.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20AwsCdkApp.md#allowlibrarydependencies)
- [buildTask](Node20AwsCdkApp.md#buildtask)
- [buildWorkflowJobId](Node20AwsCdkApp.md#buildworkflowjobid)
- [cdkVersion](Node20AwsCdkApp.md#cdkversion)
- [compileTask](Node20AwsCdkApp.md#compiletask)
- [components](Node20AwsCdkApp.md#components)
- [ejected](Node20AwsCdkApp.md#ejected)
- [entrypoint](Node20AwsCdkApp.md#entrypoint)
- [files](Node20AwsCdkApp.md#files)
- [manifest](Node20AwsCdkApp.md#manifest)
- [maxNodeVersion](Node20AwsCdkApp.md#maxnodeversion)
- [minNodeVersion](Node20AwsCdkApp.md#minnodeversion)
- [npmrc](Node20AwsCdkApp.md#npmrc)
- [packageManager](Node20AwsCdkApp.md#packagemanager)
- [packageTask](Node20AwsCdkApp.md#packagetask)
- [postCompileTask](Node20AwsCdkApp.md#postcompiletask)
- [preCompileTask](Node20AwsCdkApp.md#precompiletask)
- [root](Node20AwsCdkApp.md#root)
- [subprojects](Node20AwsCdkApp.md#subprojects)
- [testTask](Node20AwsCdkApp.md#testtask)

### Methods

- [addBins](Node20AwsCdkApp.md#addbins)
- [addBundledDeps](Node20AwsCdkApp.md#addbundleddeps)
- [addCdkDependency](Node20AwsCdkApp.md#addcdkdependency)
- [addCompileCommand](Node20AwsCdkApp.md#addcompilecommand)
- [addDeps](Node20AwsCdkApp.md#adddeps)
- [addDevDeps](Node20AwsCdkApp.md#adddevdeps)
- [addExcludeFromCleanup](Node20AwsCdkApp.md#addexcludefromcleanup)
- [addFields](Node20AwsCdkApp.md#addfields)
- [addGitIgnore](Node20AwsCdkApp.md#addgitignore)
- [addKeywords](Node20AwsCdkApp.md#addkeywords)
- [addPackageIgnore](Node20AwsCdkApp.md#addpackageignore)
- [addPeerDeps](Node20AwsCdkApp.md#addpeerdeps)
- [addScripts](Node20AwsCdkApp.md#addscripts)
- [addTask](Node20AwsCdkApp.md#addtask)
- [addTestCommand](Node20AwsCdkApp.md#addtestcommand)
- [addTip](Node20AwsCdkApp.md#addtip)
- [annotateGenerated](Node20AwsCdkApp.md#annotategenerated)
- [buildDeployToAwsJobStep](Node20AwsCdkApp.md#builddeploytoawsjobstep)
- [hasScript](Node20AwsCdkApp.md#hasscript)
- [makeDeployAndSynthTasksNotRequireApproval](Node20AwsCdkApp.md#makedeployandsynthtasksnotrequireapproval)
- [overridePackageTask](Node20AwsCdkApp.md#overridepackagetask)
- [postSynthesize](Node20AwsCdkApp.md#postsynthesize)
- [preSynthesize](Node20AwsCdkApp.md#presynthesize)
- [removeScript](Node20AwsCdkApp.md#removescript)
- [removeTask](Node20AwsCdkApp.md#removetask)
- [renderWorkflowSetup](Node20AwsCdkApp.md#renderworkflowsetup)
- [runTaskCommand](Node20AwsCdkApp.md#runtaskcommand)
- [setScript](Node20AwsCdkApp.md#setscript)
- [synth](Node20AwsCdkApp.md#synth)
- [toString](Node20AwsCdkApp.md#tostring)
- [tryFindFile](Node20AwsCdkApp.md#tryfindfile)
- [tryFindJsonFile](Node20AwsCdkApp.md#tryfindjsonfile)
- [tryFindObjectFile](Node20AwsCdkApp.md#tryfindobjectfile)
- [tryRemoveFile](Node20AwsCdkApp.md#tryremovefile)
- [isConstruct](Node20AwsCdkApp.md#isconstruct)
- [isProject](Node20AwsCdkApp.md#isproject)
- [of](Node20AwsCdkApp.md#of)

## Constructors

### constructor

• **new Node20AwsCdkApp**(`options`): [`Node20AwsCdkApp`](Node20AwsCdkApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Node20AwsCdkAppOptions`](../interfaces/Node20AwsCdkAppOptions.md) |

#### Returns

[`Node20AwsCdkApp`](Node20AwsCdkApp.md)

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

### projenCommand

• `Readonly` **projenCommand**: `string`

The command to use in order to run the projen CLI.

#### Inherited from

awscdk.AwsCdkTypeScriptApp.projenCommand

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

### buildDeployToAwsJobStep

▸ **buildDeployToAwsJobStep**(`deployTask`): `JobStep`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deployTask` | `Task` |

#### Returns

`JobStep`

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

### makeDeployAndSynthTasksNotRequireApproval

▸ **makeDeployAndSynthTasksNotRequireApproval**(): `void`

#### Returns

`void`

___

### overridePackageTask

▸ **overridePackageTask**(): `void`

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
