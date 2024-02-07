[dkershner6-projen-awscdk-nextjs-app](../README.md) / [Exports](../modules.md) / Node20AwsCdkNextjsApp

# Class: Node20AwsCdkNextjsApp

## Hierarchy

- `Node20AwsCdkApp`

  ↳ **`Node20AwsCdkNextjsApp`**

## Table of contents

### Constructors

- [constructor](Node20AwsCdkNextjsApp.md#constructor)

### Properties

- [appEntrypoint](Node20AwsCdkNextjsApp.md#appentrypoint)
- [artifactsDirectory](Node20AwsCdkNextjsApp.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20AwsCdkNextjsApp.md#artifactsjavascriptdirectory)
- [autoApprove](Node20AwsCdkNextjsApp.md#autoapprove)
- [autoMerge](Node20AwsCdkNextjsApp.md#automerge)
- [buildWorkflow](Node20AwsCdkNextjsApp.md#buildworkflow)
- [bundler](Node20AwsCdkNextjsApp.md#bundler)
- [cdkConfig](Node20AwsCdkNextjsApp.md#cdkconfig)
- [cdkDeps](Node20AwsCdkNextjsApp.md#cdkdeps)
- [cdkTasks](Node20AwsCdkNextjsApp.md#cdktasks)
- [commitGenerated](Node20AwsCdkNextjsApp.md#commitgenerated)
- [defaultTask](Node20AwsCdkNextjsApp.md#defaulttask)
- [deps](Node20AwsCdkNextjsApp.md#deps)
- [devContainer](Node20AwsCdkNextjsApp.md#devcontainer)
- [docgen](Node20AwsCdkNextjsApp.md#docgen)
- [docsDirectory](Node20AwsCdkNextjsApp.md#docsdirectory)
- [eslint](Node20AwsCdkNextjsApp.md#eslint)
- [gitattributes](Node20AwsCdkNextjsApp.md#gitattributes)
- [github](Node20AwsCdkNextjsApp.md#github)
- [gitignore](Node20AwsCdkNextjsApp.md#gitignore)
- [gitpod](Node20AwsCdkNextjsApp.md#gitpod)
- [initProject](Node20AwsCdkNextjsApp.md#initproject)
- [jest](Node20AwsCdkNextjsApp.md#jest)
- [jestTransformer](Node20AwsCdkNextjsApp.md#jesttransformer)
- [libdir](Node20AwsCdkNextjsApp.md#libdir)
- [logger](Node20AwsCdkNextjsApp.md#logger)
- [name](Node20AwsCdkNextjsApp.md#name)
- [nextjsTsconfig](Node20AwsCdkNextjsApp.md#nextjstsconfig)
- [node](Node20AwsCdkNextjsApp.md#node)
- [nodeVersion](Node20AwsCdkNextjsApp.md#nodeversion)
- [npmignore](Node20AwsCdkNextjsApp.md#npmignore)
- [outdir](Node20AwsCdkNextjsApp.md#outdir)
- [package](Node20AwsCdkNextjsApp.md#package)
- [parent](Node20AwsCdkNextjsApp.md#parent)
- [prettier](Node20AwsCdkNextjsApp.md#prettier)
- [projectBuild](Node20AwsCdkNextjsApp.md#projectbuild)
- [projectType](Node20AwsCdkNextjsApp.md#projecttype)
- [publisher](Node20AwsCdkNextjsApp.md#publisher)
- [release](Node20AwsCdkNextjsApp.md#release)
- [runScriptCommand](Node20AwsCdkNextjsApp.md#runscriptcommand)
- [srcdir](Node20AwsCdkNextjsApp.md#srcdir)
- [tasks](Node20AwsCdkNextjsApp.md#tasks)
- [testdir](Node20AwsCdkNextjsApp.md#testdir)
- [tsconfig](Node20AwsCdkNextjsApp.md#tsconfig)
- [tsconfigDev](Node20AwsCdkNextjsApp.md#tsconfigdev)
- [tsconfigEslint](Node20AwsCdkNextjsApp.md#tsconfigeslint)
- [upgradeWorkflow](Node20AwsCdkNextjsApp.md#upgradeworkflow)
- [vscode](Node20AwsCdkNextjsApp.md#vscode)
- [watchTask](Node20AwsCdkNextjsApp.md#watchtask)
- [workflowBootstrapSteps](Node20AwsCdkNextjsApp.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20AwsCdkNextjsApp.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20AwsCdkNextjsApp.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20AwsCdkNextjsApp.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20AwsCdkNextjsApp.md#allowlibrarydependencies)
- [buildTask](Node20AwsCdkNextjsApp.md#buildtask)
- [buildWorkflowJobId](Node20AwsCdkNextjsApp.md#buildworkflowjobid)
- [cdkVersion](Node20AwsCdkNextjsApp.md#cdkversion)
- [compileTask](Node20AwsCdkNextjsApp.md#compiletask)
- [components](Node20AwsCdkNextjsApp.md#components)
- [ejected](Node20AwsCdkNextjsApp.md#ejected)
- [entrypoint](Node20AwsCdkNextjsApp.md#entrypoint)
- [files](Node20AwsCdkNextjsApp.md#files)
- [manifest](Node20AwsCdkNextjsApp.md#manifest)
- [maxNodeVersion](Node20AwsCdkNextjsApp.md#maxnodeversion)
- [minNodeVersion](Node20AwsCdkNextjsApp.md#minnodeversion)
- [npmrc](Node20AwsCdkNextjsApp.md#npmrc)
- [packageManager](Node20AwsCdkNextjsApp.md#packagemanager)
- [packageTask](Node20AwsCdkNextjsApp.md#packagetask)
- [postCompileTask](Node20AwsCdkNextjsApp.md#postcompiletask)
- [preCompileTask](Node20AwsCdkNextjsApp.md#precompiletask)
- [projenCommand](Node20AwsCdkNextjsApp.md#projencommand)
- [root](Node20AwsCdkNextjsApp.md#root)
- [subprojects](Node20AwsCdkNextjsApp.md#subprojects)
- [testTask](Node20AwsCdkNextjsApp.md#testtask)

### Methods

- [addBins](Node20AwsCdkNextjsApp.md#addbins)
- [addBundledDeps](Node20AwsCdkNextjsApp.md#addbundleddeps)
- [addCdkDependency](Node20AwsCdkNextjsApp.md#addcdkdependency)
- [addCompileCommand](Node20AwsCdkNextjsApp.md#addcompilecommand)
- [addDeps](Node20AwsCdkNextjsApp.md#adddeps)
- [addDevDeps](Node20AwsCdkNextjsApp.md#adddevdeps)
- [addExcludeFromCleanup](Node20AwsCdkNextjsApp.md#addexcludefromcleanup)
- [addFields](Node20AwsCdkNextjsApp.md#addfields)
- [addGitIgnore](Node20AwsCdkNextjsApp.md#addgitignore)
- [addKeywords](Node20AwsCdkNextjsApp.md#addkeywords)
- [addPackageIgnore](Node20AwsCdkNextjsApp.md#addpackageignore)
- [addPeerDeps](Node20AwsCdkNextjsApp.md#addpeerdeps)
- [addScripts](Node20AwsCdkNextjsApp.md#addscripts)
- [addTask](Node20AwsCdkNextjsApp.md#addtask)
- [addTestCommand](Node20AwsCdkNextjsApp.md#addtestcommand)
- [addTip](Node20AwsCdkNextjsApp.md#addtip)
- [annotateGenerated](Node20AwsCdkNextjsApp.md#annotategenerated)
- [buildDeployToAwsJobStep](Node20AwsCdkNextjsApp.md#builddeploytoawsjobstep)
- [hasScript](Node20AwsCdkNextjsApp.md#hasscript)
- [overridePackageTask](Node20AwsCdkNextjsApp.md#overridepackagetask)
- [postSynthesize](Node20AwsCdkNextjsApp.md#postsynthesize)
- [preSynthesize](Node20AwsCdkNextjsApp.md#presynthesize)
- [removeScript](Node20AwsCdkNextjsApp.md#removescript)
- [removeTask](Node20AwsCdkNextjsApp.md#removetask)
- [renderWorkflowSetup](Node20AwsCdkNextjsApp.md#renderworkflowsetup)
- [runTaskCommand](Node20AwsCdkNextjsApp.md#runtaskcommand)
- [setScript](Node20AwsCdkNextjsApp.md#setscript)
- [synth](Node20AwsCdkNextjsApp.md#synth)
- [toString](Node20AwsCdkNextjsApp.md#tostring)
- [tryFindFile](Node20AwsCdkNextjsApp.md#tryfindfile)
- [tryFindJsonFile](Node20AwsCdkNextjsApp.md#tryfindjsonfile)
- [tryFindObjectFile](Node20AwsCdkNextjsApp.md#tryfindobjectfile)
- [tryRemoveFile](Node20AwsCdkNextjsApp.md#tryremovefile)
- [isConstruct](Node20AwsCdkNextjsApp.md#isconstruct)
- [isProject](Node20AwsCdkNextjsApp.md#isproject)
- [of](Node20AwsCdkNextjsApp.md#of)

## Constructors

### constructor

• **new Node20AwsCdkNextjsApp**(`options`): [`Node20AwsCdkNextjsApp`](Node20AwsCdkNextjsApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Node20AwsCdkNextjsAppOptions`](../interfaces/Node20AwsCdkNextjsAppOptions.md) |

#### Returns

[`Node20AwsCdkNextjsApp`](Node20AwsCdkNextjsApp.md)

#### Overrides

Node20AwsCdkApp.constructor

## Properties

### appEntrypoint

• `Readonly` **appEntrypoint**: `string`

The CDK app entrypoint

#### Inherited from

Node20AwsCdkApp.appEntrypoint

___

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

Node20AwsCdkApp.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

Node20AwsCdkApp.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

Node20AwsCdkApp.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

Node20AwsCdkApp.autoMerge

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

Node20AwsCdkApp.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

Node20AwsCdkApp.bundler

___

### cdkConfig

• `Readonly` **cdkConfig**: `CdkConfig`

cdk.json configuration.

#### Inherited from

Node20AwsCdkApp.cdkConfig

___

### cdkDeps

• `Readonly` **cdkDeps**: `AwsCdkDeps`

#### Inherited from

Node20AwsCdkApp.cdkDeps

___

### cdkTasks

• `Readonly` **cdkTasks**: `CdkTasks`

Common CDK tasks.

#### Inherited from

Node20AwsCdkApp.cdkTasks

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

Node20AwsCdkApp.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

Node20AwsCdkApp.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

Node20AwsCdkApp.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

Node20AwsCdkApp.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

Node20AwsCdkApp.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

Node20AwsCdkApp.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

Node20AwsCdkApp.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

Node20AwsCdkApp.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

Node20AwsCdkApp.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

Node20AwsCdkApp.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

Node20AwsCdkApp.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

Node20AwsCdkApp.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

Node20AwsCdkApp.jest

___

### jestTransformer

• `Readonly` **jestTransformer**: `JestTransformer`

#### Inherited from

Node20AwsCdkApp.jestTransformer

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

Node20AwsCdkApp.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

Node20AwsCdkApp.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

Node20AwsCdkApp.name

___

### nextjsTsconfig

• `Readonly` **nextjsTsconfig**: `TypescriptConfig`

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Node20AwsCdkApp.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

Node20AwsCdkApp.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

Node20AwsCdkApp.npmignore

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

Node20AwsCdkApp.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

Node20AwsCdkApp.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

Node20AwsCdkApp.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

Node20AwsCdkApp.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

Node20AwsCdkApp.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

Node20AwsCdkApp.projectType

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

Node20AwsCdkApp.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

Node20AwsCdkApp.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

Node20AwsCdkApp.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

Node20AwsCdkApp.srcdir

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

Node20AwsCdkApp.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

Node20AwsCdkApp.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

Node20AwsCdkApp.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

Node20AwsCdkApp.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

Node20AwsCdkApp.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

Node20AwsCdkApp.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

Node20AwsCdkApp.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

Node20AwsCdkApp.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

Node20AwsCdkApp.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

Node20AwsCdkApp.workflowPackageCache

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

Node20AwsCdkApp.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

Node20AwsCdkApp.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

Node20AwsCdkApp.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20AwsCdkApp.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

Node20AwsCdkApp.buildWorkflowJobId

___

### cdkVersion

• `get` **cdkVersion**(): `string`

The CDK version this app is using.

#### Returns

`string`

#### Inherited from

Node20AwsCdkApp.cdkVersion

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20AwsCdkApp.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

Node20AwsCdkApp.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

Node20AwsCdkApp.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

Node20AwsCdkApp.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

Node20AwsCdkApp.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

Node20AwsCdkApp.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

Node20AwsCdkApp.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

Node20AwsCdkApp.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

Node20AwsCdkApp.npmrc

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

Node20AwsCdkApp.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20AwsCdkApp.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20AwsCdkApp.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20AwsCdkApp.preCompileTask

___

### projenCommand

• `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

Node20AwsCdkApp.projenCommand

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

Node20AwsCdkApp.root

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

Node20AwsCdkApp.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

Node20AwsCdkApp.testTask

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

Node20AwsCdkApp.addBins

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

Node20AwsCdkApp.addBundledDeps

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

Node20AwsCdkApp.addCdkDependency

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

Node20AwsCdkApp.addCompileCommand

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

Node20AwsCdkApp.addDeps

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

Node20AwsCdkApp.addDevDeps

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

Node20AwsCdkApp.addExcludeFromCleanup

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

Node20AwsCdkApp.addFields

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

Node20AwsCdkApp.addGitIgnore

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

Node20AwsCdkApp.addKeywords

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

Node20AwsCdkApp.addPackageIgnore

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

Node20AwsCdkApp.addPeerDeps

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

Node20AwsCdkApp.addScripts

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

Node20AwsCdkApp.addTask

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

Node20AwsCdkApp.addTestCommand

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

Node20AwsCdkApp.addTip

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

Node20AwsCdkApp.annotateGenerated

___

### buildDeployToAwsJobStep

▸ **buildDeployToAwsJobStep**(`deployTask`): `JobStep`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deployTask` | `Task` |

#### Returns

`JobStep`

#### Inherited from

Node20AwsCdkApp.buildDeployToAwsJobStep

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

Node20AwsCdkApp.hasScript

___

### overridePackageTask

▸ **overridePackageTask**(): `void`

#### Returns

`void`

#### Inherited from

Node20AwsCdkApp.overridePackageTask

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

Node20AwsCdkApp.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

Node20AwsCdkApp.preSynthesize

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

Node20AwsCdkApp.removeScript

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

Node20AwsCdkApp.removeTask

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

Node20AwsCdkApp.renderWorkflowSetup

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

Node20AwsCdkApp.runTaskCommand

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

Node20AwsCdkApp.setScript

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

Node20AwsCdkApp.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

Node20AwsCdkApp.toString

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

Node20AwsCdkApp.tryFindFile

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

Node20AwsCdkApp.tryFindJsonFile

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

Node20AwsCdkApp.tryFindObjectFile

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

Node20AwsCdkApp.tryRemoveFile

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

Node20AwsCdkApp.isConstruct

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

Node20AwsCdkApp.isProject

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

Node20AwsCdkApp.of
