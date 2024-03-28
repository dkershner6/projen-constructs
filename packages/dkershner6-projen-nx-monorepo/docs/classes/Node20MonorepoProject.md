[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / Node20MonorepoProject

# Class: Node20MonorepoProject

## Hierarchy

- [`MonorepoProject`](MonorepoProject.md)

  ↳ **`Node20MonorepoProject`**

## Table of contents

### Constructors

- [constructor](Node20MonorepoProject.md#constructor)

### Properties

- [artifactsDirectory](Node20MonorepoProject.md#artifactsdirectory)
- [artifactsJavascriptDirectory](Node20MonorepoProject.md#artifactsjavascriptdirectory)
- [autoApprove](Node20MonorepoProject.md#autoapprove)
- [autoMerge](Node20MonorepoProject.md#automerge)
- [buildWorkflow](Node20MonorepoProject.md#buildworkflow)
- [bundler](Node20MonorepoProject.md#bundler)
- [commitGenerated](Node20MonorepoProject.md#commitgenerated)
- [defaultTask](Node20MonorepoProject.md#defaulttask)
- [deps](Node20MonorepoProject.md#deps)
- [devContainer](Node20MonorepoProject.md#devcontainer)
- [docgen](Node20MonorepoProject.md#docgen)
- [docsDirectory](Node20MonorepoProject.md#docsdirectory)
- [eslint](Node20MonorepoProject.md#eslint)
- [gitattributes](Node20MonorepoProject.md#gitattributes)
- [github](Node20MonorepoProject.md#github)
- [gitignore](Node20MonorepoProject.md#gitignore)
- [gitpod](Node20MonorepoProject.md#gitpod)
- [initProject](Node20MonorepoProject.md#initproject)
- [jest](Node20MonorepoProject.md#jest)
- [libdir](Node20MonorepoProject.md#libdir)
- [logger](Node20MonorepoProject.md#logger)
- [name](Node20MonorepoProject.md#name)
- [node](Node20MonorepoProject.md#node)
- [nodeVersion](Node20MonorepoProject.md#nodeversion)
- [npmignore](Node20MonorepoProject.md#npmignore)
- [nxConfigurator](Node20MonorepoProject.md#nxconfigurator)
- [outdir](Node20MonorepoProject.md#outdir)
- [package](Node20MonorepoProject.md#package)
- [parent](Node20MonorepoProject.md#parent)
- [prettier](Node20MonorepoProject.md#prettier)
- [projectBuild](Node20MonorepoProject.md#projectbuild)
- [projectType](Node20MonorepoProject.md#projecttype)
- [publisher](Node20MonorepoProject.md#publisher)
- [release](Node20MonorepoProject.md#release)
- [runScriptCommand](Node20MonorepoProject.md#runscriptcommand)
- [srcdir](Node20MonorepoProject.md#srcdir)
- [tasks](Node20MonorepoProject.md#tasks)
- [testdir](Node20MonorepoProject.md#testdir)
- [tsconfig](Node20MonorepoProject.md#tsconfig)
- [tsconfigDev](Node20MonorepoProject.md#tsconfigdev)
- [tsconfigEslint](Node20MonorepoProject.md#tsconfigeslint)
- [upgradeWorkflow](Node20MonorepoProject.md#upgradeworkflow)
- [vscode](Node20MonorepoProject.md#vscode)
- [watchTask](Node20MonorepoProject.md#watchtask)
- [workflowBootstrapSteps](Node20MonorepoProject.md#workflowbootstrapsteps)
- [workflowPackageCache](Node20MonorepoProject.md#workflowpackagecache)
- [DEFAULT\_TASK](Node20MonorepoProject.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](Node20MonorepoProject.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](Node20MonorepoProject.md#allowlibrarydependencies)
- [buildTask](Node20MonorepoProject.md#buildtask)
- [buildWorkflowJobId](Node20MonorepoProject.md#buildworkflowjobid)
- [compileTask](Node20MonorepoProject.md#compiletask)
- [components](Node20MonorepoProject.md#components)
- [ejected](Node20MonorepoProject.md#ejected)
- [entrypoint](Node20MonorepoProject.md#entrypoint)
- [files](Node20MonorepoProject.md#files)
- [manifest](Node20MonorepoProject.md#manifest)
- [maxNodeVersion](Node20MonorepoProject.md#maxnodeversion)
- [minNodeVersion](Node20MonorepoProject.md#minnodeversion)
- [npmrc](Node20MonorepoProject.md#npmrc)
- [nx](Node20MonorepoProject.md#nx)
- [packageManager](Node20MonorepoProject.md#packagemanager)
- [packageTask](Node20MonorepoProject.md#packagetask)
- [postCompileTask](Node20MonorepoProject.md#postcompiletask)
- [preCompileTask](Node20MonorepoProject.md#precompiletask)
- [projenCommand](Node20MonorepoProject.md#projencommand)
- [root](Node20MonorepoProject.md#root)
- [sortedSubProjects](Node20MonorepoProject.md#sortedsubprojects)
- [subprojects](Node20MonorepoProject.md#subprojects)
- [testTask](Node20MonorepoProject.md#testtask)

### Methods

- [addBins](Node20MonorepoProject.md#addbins)
- [addBundledDeps](Node20MonorepoProject.md#addbundleddeps)
- [addCompileCommand](Node20MonorepoProject.md#addcompilecommand)
- [addDeps](Node20MonorepoProject.md#adddeps)
- [addDevDeps](Node20MonorepoProject.md#adddevdeps)
- [addExcludeFromCleanup](Node20MonorepoProject.md#addexcludefromcleanup)
- [addFields](Node20MonorepoProject.md#addfields)
- [addGitIgnore](Node20MonorepoProject.md#addgitignore)
- [addImplicitDependency](Node20MonorepoProject.md#addimplicitdependency)
- [addJavaDependency](Node20MonorepoProject.md#addjavadependency)
- [addKeywords](Node20MonorepoProject.md#addkeywords)
- [addNxRunManyTask](Node20MonorepoProject.md#addnxrunmanytask)
- [addPackageIgnore](Node20MonorepoProject.md#addpackageignore)
- [addPeerDeps](Node20MonorepoProject.md#addpeerdeps)
- [addPythonPoetryDependency](Node20MonorepoProject.md#addpythonpoetrydependency)
- [addScripts](Node20MonorepoProject.md#addscripts)
- [addTask](Node20MonorepoProject.md#addtask)
- [addTestCommand](Node20MonorepoProject.md#addtestcommand)
- [addTip](Node20MonorepoProject.md#addtip)
- [addWorkspacePackages](Node20MonorepoProject.md#addworkspacepackages)
- [annotateGenerated](Node20MonorepoProject.md#annotategenerated)
- [composeNxRunManyCommand](Node20MonorepoProject.md#composenxrunmanycommand)
- [execNxRunManyCommand](Node20MonorepoProject.md#execnxrunmanycommand)
- [hasScript](Node20MonorepoProject.md#hasscript)
- [linkLocalWorkspaceBins](Node20MonorepoProject.md#linklocalworkspacebins)
- [postSynthesize](Node20MonorepoProject.md#postsynthesize)
- [preSynthesize](Node20MonorepoProject.md#presynthesize)
- [removeScript](Node20MonorepoProject.md#removescript)
- [removeTask](Node20MonorepoProject.md#removetask)
- [renderWorkflowSetup](Node20MonorepoProject.md#renderworkflowsetup)
- [runTaskCommand](Node20MonorepoProject.md#runtaskcommand)
- [setScript](Node20MonorepoProject.md#setscript)
- [synth](Node20MonorepoProject.md#synth)
- [toString](Node20MonorepoProject.md#tostring)
- [tryFindFile](Node20MonorepoProject.md#tryfindfile)
- [tryFindJsonFile](Node20MonorepoProject.md#tryfindjsonfile)
- [tryFindObjectFile](Node20MonorepoProject.md#tryfindobjectfile)
- [tryRemoveFile](Node20MonorepoProject.md#tryremovefile)
- [isConstruct](Node20MonorepoProject.md#isconstruct)
- [isProject](Node20MonorepoProject.md#isproject)
- [of](Node20MonorepoProject.md#of)

## Constructors

### constructor

• **new Node20MonorepoProject**(`options`): [`Node20MonorepoProject`](Node20MonorepoProject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MonorepoProjectOptions`](../interfaces/MonorepoProjectOptions.md) |

#### Returns

[`Node20MonorepoProject`](Node20MonorepoProject.md)

#### Overrides

[MonorepoProject](MonorepoProject.md).[constructor](MonorepoProject.md#constructor)

## Properties

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[artifactsDirectory](MonorepoProject.md#artifactsdirectory)

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

[MonorepoProject](MonorepoProject.md).[artifactsJavascriptDirectory](MonorepoProject.md#artifactsjavascriptdirectory)

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[autoApprove](MonorepoProject.md#autoapprove)

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[autoMerge](MonorepoProject.md#automerge)

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[buildWorkflow](MonorepoProject.md#buildworkflow)

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[bundler](MonorepoProject.md#bundler)

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[commitGenerated](MonorepoProject.md#commitgenerated)

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[defaultTask](MonorepoProject.md#defaulttask)

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[deps](MonorepoProject.md#deps)

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

[MonorepoProject](MonorepoProject.md).[devContainer](MonorepoProject.md#devcontainer)

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[docgen](MonorepoProject.md#docgen)

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[docsDirectory](MonorepoProject.md#docsdirectory)

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[eslint](MonorepoProject.md#eslint)

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[gitattributes](MonorepoProject.md#gitattributes)

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[github](MonorepoProject.md#github)

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

[MonorepoProject](MonorepoProject.md).[gitignore](MonorepoProject.md#gitignore)

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

[MonorepoProject](MonorepoProject.md).[gitpod](MonorepoProject.md#gitpod)

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[initProject](MonorepoProject.md#initproject)

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

[MonorepoProject](MonorepoProject.md).[jest](MonorepoProject.md#jest)

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[libdir](MonorepoProject.md#libdir)

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[logger](MonorepoProject.md#logger)

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[name](MonorepoProject.md#name)

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[node](MonorepoProject.md#node)

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[nodeVersion](MonorepoProject.md#nodeversion)

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[npmignore](MonorepoProject.md#npmignore)

___

### nxConfigurator

• `Readonly` **nxConfigurator**: `NxConfigurator`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[nxConfigurator](MonorepoProject.md#nxconfigurator)

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[outdir](MonorepoProject.md#outdir)

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[package](MonorepoProject.md#package)

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[parent](MonorepoProject.md#parent)

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[prettier](MonorepoProject.md#prettier)

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[projectBuild](MonorepoProject.md#projectbuild)

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[projectType](MonorepoProject.md#projecttype)

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[publisher](MonorepoProject.md#publisher)

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[release](MonorepoProject.md#release)

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

[MonorepoProject](MonorepoProject.md).[runScriptCommand](MonorepoProject.md#runscriptcommand)

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[srcdir](MonorepoProject.md#srcdir)

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[tasks](MonorepoProject.md#tasks)

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[testdir](MonorepoProject.md#testdir)

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[tsconfig](MonorepoProject.md#tsconfig)

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

[MonorepoProject](MonorepoProject.md).[tsconfigDev](MonorepoProject.md#tsconfigdev)

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[tsconfigEslint](MonorepoProject.md#tsconfigeslint)

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[upgradeWorkflow](MonorepoProject.md#upgradeworkflow)

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[vscode](MonorepoProject.md#vscode)

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[watchTask](MonorepoProject.md#watchtask)

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

[MonorepoProject](MonorepoProject.md).[workflowBootstrapSteps](MonorepoProject.md#workflowbootstrapsteps)

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[workflowPackageCache](MonorepoProject.md#workflowpackagecache)

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

[MonorepoProject](MonorepoProject.md).[DEFAULT_TASK](MonorepoProject.md#default_task)

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

[MonorepoProject](MonorepoProject.md).[DEFAULT_TS_JEST_TRANFORM_PATTERN](MonorepoProject.md#default_ts_jest_tranform_pattern)

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

MonorepoProject.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoProject.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

MonorepoProject.buildWorkflowJobId

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoProject.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

MonorepoProject.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

MonorepoProject.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

MonorepoProject.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

MonorepoProject.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

MonorepoProject.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

MonorepoProject.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

MonorepoProject.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

MonorepoProject.npmrc

___

### nx

• `get` **nx**(): `NxWorkspace`

#### Returns

`NxWorkspace`

**`Inherit Doc`**

#### Inherited from

MonorepoProject.nx

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

MonorepoProject.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoProject.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoProject.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoProject.preCompileTask

___

### projenCommand

• `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

MonorepoProject.projenCommand

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

MonorepoProject.root

___

### sortedSubProjects

• `get` **sortedSubProjects**(): `Project`[]

Get consistently sorted list of subprojects

#### Returns

`Project`[]

#### Inherited from

MonorepoProject.sortedSubProjects

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

MonorepoProject.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoProject.testTask

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

[MonorepoProject](MonorepoProject.md).[addBins](MonorepoProject.md#addbins)

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

[MonorepoProject](MonorepoProject.md).[addBundledDeps](MonorepoProject.md#addbundleddeps)

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

[MonorepoProject](MonorepoProject.md).[addCompileCommand](MonorepoProject.md#addcompilecommand)

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

[MonorepoProject](MonorepoProject.md).[addDeps](MonorepoProject.md#adddeps)

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

[MonorepoProject](MonorepoProject.md).[addDevDeps](MonorepoProject.md#adddevdeps)

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

[MonorepoProject](MonorepoProject.md).[addExcludeFromCleanup](MonorepoProject.md#addexcludefromcleanup)

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

[MonorepoProject](MonorepoProject.md).[addFields](MonorepoProject.md#addfields)

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

[MonorepoProject](MonorepoProject.md).[addGitIgnore](MonorepoProject.md#addgitignore)

___

### addImplicitDependency

▸ **addImplicitDependency**(`dependent`, `dependee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependent` | `Project` |
| `dependee` | `string` \| `Project` |

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

[MonorepoProject](MonorepoProject.md).[addImplicitDependency](MonorepoProject.md#addimplicitdependency)

___

### addJavaDependency

▸ **addJavaDependency**(`dependent`, `dependee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependent` | `JavaProject` |
| `dependee` | `JavaProject` |

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

[MonorepoProject](MonorepoProject.md).[addJavaDependency](MonorepoProject.md#addjavadependency)

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

[MonorepoProject](MonorepoProject.md).[addKeywords](MonorepoProject.md#addkeywords)

___

### addNxRunManyTask

▸ **addNxRunManyTask**(`name`, `options`): `Task`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `RunManyOptions` |

#### Returns

`Task`

**`Inherit Doc`**

#### Inherited from

[MonorepoProject](MonorepoProject.md).[addNxRunManyTask](MonorepoProject.md#addnxrunmanytask)

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

[MonorepoProject](MonorepoProject.md).[addPackageIgnore](MonorepoProject.md#addpackageignore)

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

[MonorepoProject](MonorepoProject.md).[addPeerDeps](MonorepoProject.md#addpeerdeps)

___

### addPythonPoetryDependency

▸ **addPythonPoetryDependency**(`dependent`, `dependee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependent` | `PythonProject` |
| `dependee` | `PythonProject` |

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

[MonorepoProject](MonorepoProject.md).[addPythonPoetryDependency](MonorepoProject.md#addpythonpoetrydependency)

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

[MonorepoProject](MonorepoProject.md).[addScripts](MonorepoProject.md#addscripts)

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

[MonorepoProject](MonorepoProject.md).[addTask](MonorepoProject.md#addtask)

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

[MonorepoProject](MonorepoProject.md).[addTestCommand](MonorepoProject.md#addtestcommand)

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

[MonorepoProject](MonorepoProject.md).[addTip](MonorepoProject.md#addtip)

___

### addWorkspacePackages

▸ **addWorkspacePackages**(`...packageGlobs`): `void`

Add one or more additional package globs to the workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...packageGlobs` | `string`[] | paths to the package to include in the workspace (for example packages/my-package) |

#### Returns

`void`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[addWorkspacePackages](MonorepoProject.md#addworkspacepackages)

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

[MonorepoProject](MonorepoProject.md).[annotateGenerated](MonorepoProject.md#annotategenerated)

___

### composeNxRunManyCommand

▸ **composeNxRunManyCommand**(`options`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RunManyOptions` |

#### Returns

`string`[]

**`Inherit Doc`**

#### Inherited from

[MonorepoProject](MonorepoProject.md).[composeNxRunManyCommand](MonorepoProject.md#composenxrunmanycommand)

___

### execNxRunManyCommand

▸ **execNxRunManyCommand**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RunManyOptions` |

#### Returns

`string`

**`Inherit Doc`**

#### Inherited from

[MonorepoProject](MonorepoProject.md).[execNxRunManyCommand](MonorepoProject.md#execnxrunmanycommand)

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

[MonorepoProject](MonorepoProject.md).[hasScript](MonorepoProject.md#hasscript)

___

### linkLocalWorkspaceBins

▸ **linkLocalWorkspaceBins**(): `void`

Create symbolic links to all local workspace bins. This enables the usage of bins the same
way as consumers of the packages have when installing from the registry.

#### Returns

`void`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[linkLocalWorkspaceBins](MonorepoProject.md#linklocalworkspacebins)

___

### postSynthesize

▸ **postSynthesize**(): `void`

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

[MonorepoProject](MonorepoProject.md).[postSynthesize](MonorepoProject.md#postsynthesize)

___

### preSynthesize

▸ **preSynthesize**(): `void`

#### Returns

`void`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[preSynthesize](MonorepoProject.md#presynthesize)

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

[MonorepoProject](MonorepoProject.md).[removeScript](MonorepoProject.md#removescript)

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

[MonorepoProject](MonorepoProject.md).[removeTask](MonorepoProject.md#removetask)

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

[MonorepoProject](MonorepoProject.md).[renderWorkflowSetup](MonorepoProject.md#renderworkflowsetup)

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

[MonorepoProject](MonorepoProject.md).[runTaskCommand](MonorepoProject.md#runtaskcommand)

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

[MonorepoProject](MonorepoProject.md).[setScript](MonorepoProject.md#setscript)

___

### synth

▸ **synth**(): `void`

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

[MonorepoProject](MonorepoProject.md).[synth](MonorepoProject.md#synth)

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

[MonorepoProject](MonorepoProject.md).[toString](MonorepoProject.md#tostring)

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

[MonorepoProject](MonorepoProject.md).[tryFindFile](MonorepoProject.md#tryfindfile)

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

[MonorepoProject](MonorepoProject.md).[tryFindJsonFile](MonorepoProject.md#tryfindjsonfile)

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

[MonorepoProject](MonorepoProject.md).[tryFindObjectFile](MonorepoProject.md#tryfindobjectfile)

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

[MonorepoProject](MonorepoProject.md).[tryRemoveFile](MonorepoProject.md#tryremovefile)

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

[MonorepoProject](MonorepoProject.md).[isConstruct](MonorepoProject.md#isconstruct)

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

[MonorepoProject](MonorepoProject.md).[isProject](MonorepoProject.md#isproject)

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

[MonorepoProject](MonorepoProject.md).[of](MonorepoProject.md#of)
