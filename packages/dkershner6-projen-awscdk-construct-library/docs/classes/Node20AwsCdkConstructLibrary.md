[dkershner6-projen-awscdk-construct-library](../README.md) / [Exports](../modules.md) / Node20AwsCdkConstructLibrary

# Class: Node20AwsCdkConstructLibrary

## Hierarchy

- `AwsCdkConstructLibrary`

  ↳ **`Node20AwsCdkConstructLibrary`**

## Table of contents

### Constructors

- [constructor](Node20AwsCdkConstructLibrary.md#constructor)

### Properties

- [artifactsDirectory](Node20AwsCdkConstructLibrary.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20AwsCdkConstructLibrary.md#artifactsjavascriptdirectory)
- [autoApprove](Node20AwsCdkConstructLibrary.md#autoapprove)
- [autoMerge](Node20AwsCdkConstructLibrary.md#automerge)
- [buildWorkflow](Node20AwsCdkConstructLibrary.md#buildworkflow)
- [bundler](Node20AwsCdkConstructLibrary.md#bundler)
- [cdkDeps](Node20AwsCdkConstructLibrary.md#cdkdeps)
- [commitGenerated](Node20AwsCdkConstructLibrary.md#commitgenerated)
- [defaultTask](Node20AwsCdkConstructLibrary.md#defaulttask)
- [deps](Node20AwsCdkConstructLibrary.md#deps)
- [devContainer](Node20AwsCdkConstructLibrary.md#devcontainer)
- [docgen](Node20AwsCdkConstructLibrary.md#docgen)
- [docsDirectory](Node20AwsCdkConstructLibrary.md#docsdirectory)
- [eslint](Node20AwsCdkConstructLibrary.md#eslint)
- [gitattributes](Node20AwsCdkConstructLibrary.md#gitattributes)
- [github](Node20AwsCdkConstructLibrary.md#github)
- [gitignore](Node20AwsCdkConstructLibrary.md#gitignore)
- [gitpod](Node20AwsCdkConstructLibrary.md#gitpod)
- [initProject](Node20AwsCdkConstructLibrary.md#initproject)
- [jest](Node20AwsCdkConstructLibrary.md#jest)
- [libdir](Node20AwsCdkConstructLibrary.md#libdir)
- [logger](Node20AwsCdkConstructLibrary.md#logger)
- [name](Node20AwsCdkConstructLibrary.md#name)
- [node](Node20AwsCdkConstructLibrary.md#node)
- [nodeVersion](Node20AwsCdkConstructLibrary.md#nodeversion)
- [npmignore](Node20AwsCdkConstructLibrary.md#npmignore)
- [outdir](Node20AwsCdkConstructLibrary.md#outdir)
- [package](Node20AwsCdkConstructLibrary.md#package)
- [parent](Node20AwsCdkConstructLibrary.md#parent)
- [prettier](Node20AwsCdkConstructLibrary.md#prettier)
- [projectBuild](Node20AwsCdkConstructLibrary.md#projectbuild)
- [projectType](Node20AwsCdkConstructLibrary.md#projecttype)
- [projenCommand](Node20AwsCdkConstructLibrary.md#projencommand)
- [publisher](Node20AwsCdkConstructLibrary.md#publisher)
- [release](Node20AwsCdkConstructLibrary.md#release)
- [runScriptCommand](Node20AwsCdkConstructLibrary.md#runscriptcommand)
- [srcdir](Node20AwsCdkConstructLibrary.md#srcdir)
- [tasks](Node20AwsCdkConstructLibrary.md#tasks)
- [testdir](Node20AwsCdkConstructLibrary.md#testdir)
- [tsconfig](Node20AwsCdkConstructLibrary.md#tsconfig)
- [tsconfigDev](Node20AwsCdkConstructLibrary.md#tsconfigdev)
- [tsconfigEslint](Node20AwsCdkConstructLibrary.md#tsconfigeslint)
- [upgradeWorkflow](Node20AwsCdkConstructLibrary.md#upgradeworkflow)
- [vscode](Node20AwsCdkConstructLibrary.md#vscode)
- [watchTask](Node20AwsCdkConstructLibrary.md#watchtask)
- [workflowBootstrapSteps](Node20AwsCdkConstructLibrary.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20AwsCdkConstructLibrary.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20AwsCdkConstructLibrary.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20AwsCdkConstructLibrary.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20AwsCdkConstructLibrary.md#allowlibrarydependencies)
- [buildTask](Node20AwsCdkConstructLibrary.md#buildtask)
- [buildWorkflowJobId](Node20AwsCdkConstructLibrary.md#buildworkflowjobid)
- [cdkVersion](Node20AwsCdkConstructLibrary.md#cdkversion)
- [compileTask](Node20AwsCdkConstructLibrary.md#compiletask)
- [components](Node20AwsCdkConstructLibrary.md#components)
- [ejected](Node20AwsCdkConstructLibrary.md#ejected)
- [entrypoint](Node20AwsCdkConstructLibrary.md#entrypoint)
- [files](Node20AwsCdkConstructLibrary.md#files)
- [manifest](Node20AwsCdkConstructLibrary.md#manifest)
- [maxNodeVersion](Node20AwsCdkConstructLibrary.md#maxnodeversion)
- [minNodeVersion](Node20AwsCdkConstructLibrary.md#minnodeversion)
- [npmrc](Node20AwsCdkConstructLibrary.md#npmrc)
- [packageManager](Node20AwsCdkConstructLibrary.md#packagemanager)
- [packageTask](Node20AwsCdkConstructLibrary.md#packagetask)
- [postCompileTask](Node20AwsCdkConstructLibrary.md#postcompiletask)
- [preCompileTask](Node20AwsCdkConstructLibrary.md#precompiletask)
- [root](Node20AwsCdkConstructLibrary.md#root)
- [subprojects](Node20AwsCdkConstructLibrary.md#subprojects)
- [testTask](Node20AwsCdkConstructLibrary.md#testtask)
- [version](Node20AwsCdkConstructLibrary.md#version)

### Methods

- [addBins](Node20AwsCdkConstructLibrary.md#addbins)
- [addBundledDeps](Node20AwsCdkConstructLibrary.md#addbundleddeps)
- [addCdkDependencies](Node20AwsCdkConstructLibrary.md#addcdkdependencies)
- [addCdkTestDependencies](Node20AwsCdkConstructLibrary.md#addcdktestdependencies)
- [addCompileCommand](Node20AwsCdkConstructLibrary.md#addcompilecommand)
- [addDeps](Node20AwsCdkConstructLibrary.md#adddeps)
- [addDevDeps](Node20AwsCdkConstructLibrary.md#adddevdeps)
- [addExcludeFromCleanup](Node20AwsCdkConstructLibrary.md#addexcludefromcleanup)
- [addFields](Node20AwsCdkConstructLibrary.md#addfields)
- [addGitIgnore](Node20AwsCdkConstructLibrary.md#addgitignore)
- [addKeywords](Node20AwsCdkConstructLibrary.md#addkeywords)
- [addPackageIgnore](Node20AwsCdkConstructLibrary.md#addpackageignore)
- [addPeerDeps](Node20AwsCdkConstructLibrary.md#addpeerdeps)
- [addScripts](Node20AwsCdkConstructLibrary.md#addscripts)
- [addTask](Node20AwsCdkConstructLibrary.md#addtask)
- [addTestCommand](Node20AwsCdkConstructLibrary.md#addtestcommand)
- [addTip](Node20AwsCdkConstructLibrary.md#addtip)
- [annotateGenerated](Node20AwsCdkConstructLibrary.md#annotategenerated)
- [hasScript](Node20AwsCdkConstructLibrary.md#hasscript)
- [postSynthesize](Node20AwsCdkConstructLibrary.md#postsynthesize)
- [preSynthesize](Node20AwsCdkConstructLibrary.md#presynthesize)
- [removeScript](Node20AwsCdkConstructLibrary.md#removescript)
- [removeTask](Node20AwsCdkConstructLibrary.md#removetask)
- [renderWorkflowSetup](Node20AwsCdkConstructLibrary.md#renderworkflowsetup)
- [runTaskCommand](Node20AwsCdkConstructLibrary.md#runtaskcommand)
- [setScript](Node20AwsCdkConstructLibrary.md#setscript)
- [synth](Node20AwsCdkConstructLibrary.md#synth)
- [toString](Node20AwsCdkConstructLibrary.md#tostring)
- [tryFindFile](Node20AwsCdkConstructLibrary.md#tryfindfile)
- [tryFindJsonFile](Node20AwsCdkConstructLibrary.md#tryfindjsonfile)
- [tryFindObjectFile](Node20AwsCdkConstructLibrary.md#tryfindobjectfile)
- [tryRemoveFile](Node20AwsCdkConstructLibrary.md#tryremovefile)
- [isConstruct](Node20AwsCdkConstructLibrary.md#isconstruct)
- [isProject](Node20AwsCdkConstructLibrary.md#isproject)
- [of](Node20AwsCdkConstructLibrary.md#of)

## Constructors

### constructor

• **new Node20AwsCdkConstructLibrary**(`options`): [`Node20AwsCdkConstructLibrary`](Node20AwsCdkConstructLibrary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `AwsCdkConstructLibraryOptions` |

#### Returns

[`Node20AwsCdkConstructLibrary`](Node20AwsCdkConstructLibrary.md)

#### Overrides

AwsCdkConstructLibrary.constructor

## Properties

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

AwsCdkConstructLibrary.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

AwsCdkConstructLibrary.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

AwsCdkConstructLibrary.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

AwsCdkConstructLibrary.autoMerge

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

AwsCdkConstructLibrary.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

AwsCdkConstructLibrary.bundler

___

### cdkDeps

• `Readonly` **cdkDeps**: `AwsCdkDeps`

#### Inherited from

AwsCdkConstructLibrary.cdkDeps

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

AwsCdkConstructLibrary.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

AwsCdkConstructLibrary.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

AwsCdkConstructLibrary.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

AwsCdkConstructLibrary.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

AwsCdkConstructLibrary.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

AwsCdkConstructLibrary.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

AwsCdkConstructLibrary.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

AwsCdkConstructLibrary.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

AwsCdkConstructLibrary.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

AwsCdkConstructLibrary.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

AwsCdkConstructLibrary.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

AwsCdkConstructLibrary.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

AwsCdkConstructLibrary.jest

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

AwsCdkConstructLibrary.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

AwsCdkConstructLibrary.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

AwsCdkConstructLibrary.name

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

AwsCdkConstructLibrary.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

AwsCdkConstructLibrary.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

AwsCdkConstructLibrary.npmignore

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

AwsCdkConstructLibrary.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

AwsCdkConstructLibrary.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

AwsCdkConstructLibrary.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

AwsCdkConstructLibrary.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

AwsCdkConstructLibrary.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

AwsCdkConstructLibrary.projectType

___

### projenCommand

• `Readonly` **projenCommand**: `string`

The command to use in order to run the projen CLI.

#### Inherited from

AwsCdkConstructLibrary.projenCommand

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

AwsCdkConstructLibrary.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

AwsCdkConstructLibrary.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

AwsCdkConstructLibrary.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

AwsCdkConstructLibrary.srcdir

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

AwsCdkConstructLibrary.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

AwsCdkConstructLibrary.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

AwsCdkConstructLibrary.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

AwsCdkConstructLibrary.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

AwsCdkConstructLibrary.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

AwsCdkConstructLibrary.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

AwsCdkConstructLibrary.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

AwsCdkConstructLibrary.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

AwsCdkConstructLibrary.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

AwsCdkConstructLibrary.workflowPackageCache

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

AwsCdkConstructLibrary.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

AwsCdkConstructLibrary.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

AwsCdkConstructLibrary.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

AwsCdkConstructLibrary.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

AwsCdkConstructLibrary.buildWorkflowJobId

___

### cdkVersion

• `get` **cdkVersion**(): `string`

The target CDK version for this library.

#### Returns

`string`

#### Inherited from

AwsCdkConstructLibrary.cdkVersion

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

AwsCdkConstructLibrary.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

AwsCdkConstructLibrary.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

AwsCdkConstructLibrary.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

AwsCdkConstructLibrary.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

AwsCdkConstructLibrary.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

AwsCdkConstructLibrary.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

AwsCdkConstructLibrary.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

AwsCdkConstructLibrary.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

AwsCdkConstructLibrary.npmrc

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

AwsCdkConstructLibrary.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

AwsCdkConstructLibrary.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

AwsCdkConstructLibrary.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

AwsCdkConstructLibrary.preCompileTask

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

AwsCdkConstructLibrary.root

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

AwsCdkConstructLibrary.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

AwsCdkConstructLibrary.testTask

___

### version

• `get` **version**(): `string`

#### Returns

`string`

**`Deprecated`**

use `cdkVersion`

#### Inherited from

AwsCdkConstructLibrary.version

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

AwsCdkConstructLibrary.addBins

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

AwsCdkConstructLibrary.addBundledDeps

___

### addCdkDependencies

▸ **addCdkDependencies**(`...deps`): `void`

Adds dependencies to AWS CDK modules.

Since this is a library project, dependencies will be added as peer dependencies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...deps` | `string`[] | names of cdk modules (e.g. `@aws-cdk/aws-lambda`). |

#### Returns

`void`

**`Deprecated`**

Not supported in v2. For v1, use `project.cdkDeps.addV1Dependencies()`

#### Inherited from

AwsCdkConstructLibrary.addCdkDependencies

___

### addCdkTestDependencies

▸ **addCdkTestDependencies**(`...deps`): `void`

Adds AWS CDK modules as dev dependencies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...deps` | `string`[] | names of cdk modules (e.g. `@aws-cdk/aws-lambda`). |

#### Returns

`void`

**`Deprecated`**

Not supported in v2. For v1, use `project.cdkDeps.addV1DevDependencies()`

#### Inherited from

AwsCdkConstructLibrary.addCdkTestDependencies

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

AwsCdkConstructLibrary.addCompileCommand

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

AwsCdkConstructLibrary.addDeps

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

AwsCdkConstructLibrary.addDevDeps

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

AwsCdkConstructLibrary.addExcludeFromCleanup

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

AwsCdkConstructLibrary.addFields

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

AwsCdkConstructLibrary.addGitIgnore

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

AwsCdkConstructLibrary.addKeywords

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

AwsCdkConstructLibrary.addPackageIgnore

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

AwsCdkConstructLibrary.addPeerDeps

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

AwsCdkConstructLibrary.addScripts

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

AwsCdkConstructLibrary.addTask

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

AwsCdkConstructLibrary.addTestCommand

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

AwsCdkConstructLibrary.addTip

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

AwsCdkConstructLibrary.annotateGenerated

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

AwsCdkConstructLibrary.hasScript

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

AwsCdkConstructLibrary.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

AwsCdkConstructLibrary.preSynthesize

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

AwsCdkConstructLibrary.removeScript

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

AwsCdkConstructLibrary.removeTask

___

### renderWorkflowSetup

▸ **renderWorkflowSetup**(`options?`): `JobStep`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `RenderWorkflowSetupOptions` |

#### Returns

`JobStep`[]

#### Overrides

AwsCdkConstructLibrary.renderWorkflowSetup

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

AwsCdkConstructLibrary.runTaskCommand

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

AwsCdkConstructLibrary.setScript

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

AwsCdkConstructLibrary.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

AwsCdkConstructLibrary.toString

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

AwsCdkConstructLibrary.tryFindFile

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

AwsCdkConstructLibrary.tryFindJsonFile

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

AwsCdkConstructLibrary.tryFindObjectFile

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

AwsCdkConstructLibrary.tryRemoveFile

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

AwsCdkConstructLibrary.isConstruct

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

AwsCdkConstructLibrary.isProject

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

AwsCdkConstructLibrary.of
