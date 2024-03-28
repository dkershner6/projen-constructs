[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / NxMonorepoProject

# Class: NxMonorepoProject

This project type will bootstrap a monorepo with support for polygot
builds, build caching, dependency graph visualization and much more.

**`Pjid`**

monorepo-ts

## Hierarchy

- [`MonorepoTsProject`](MonorepoTsProject.md)

  ↳ **`NxMonorepoProject`**

  ↳↳ [`Node20MonorepoProject`](Node20MonorepoProject.md)

## Table of contents

### Constructors

- [constructor](NxMonorepoProject.md#constructor)

### Properties

- [artifactsDirectory](NxMonorepoProject.md#artifactsdirectory)
- [artifactsJavascriptDirectory](NxMonorepoProject.md#artifactsjavascriptdirectory)
- [autoApprove](NxMonorepoProject.md#autoapprove)
- [autoMerge](NxMonorepoProject.md#automerge)
- [buildWorkflow](NxMonorepoProject.md#buildworkflow)
- [bundler](NxMonorepoProject.md#bundler)
- [commitGenerated](NxMonorepoProject.md#commitgenerated)
- [defaultTask](NxMonorepoProject.md#defaulttask)
- [deps](NxMonorepoProject.md#deps)
- [devContainer](NxMonorepoProject.md#devcontainer)
- [docgen](NxMonorepoProject.md#docgen)
- [docsDirectory](NxMonorepoProject.md#docsdirectory)
- [eslint](NxMonorepoProject.md#eslint)
- [gitattributes](NxMonorepoProject.md#gitattributes)
- [github](NxMonorepoProject.md#github)
- [gitignore](NxMonorepoProject.md#gitignore)
- [gitpod](NxMonorepoProject.md#gitpod)
- [initProject](NxMonorepoProject.md#initproject)
- [jest](NxMonorepoProject.md#jest)
- [libdir](NxMonorepoProject.md#libdir)
- [logger](NxMonorepoProject.md#logger)
- [name](NxMonorepoProject.md#name)
- [node](NxMonorepoProject.md#node)
- [nodeVersion](NxMonorepoProject.md#nodeversion)
- [npmignore](NxMonorepoProject.md#npmignore)
- [nxConfigurator](NxMonorepoProject.md#nxconfigurator)
- [outdir](NxMonorepoProject.md#outdir)
- [package](NxMonorepoProject.md#package)
- [parent](NxMonorepoProject.md#parent)
- [prettier](NxMonorepoProject.md#prettier)
- [projectBuild](NxMonorepoProject.md#projectbuild)
- [projectType](NxMonorepoProject.md#projecttype)
- [publisher](NxMonorepoProject.md#publisher)
- [release](NxMonorepoProject.md#release)
- [runScriptCommand](NxMonorepoProject.md#runscriptcommand)
- [srcdir](NxMonorepoProject.md#srcdir)
- [tasks](NxMonorepoProject.md#tasks)
- [testdir](NxMonorepoProject.md#testdir)
- [tsconfig](NxMonorepoProject.md#tsconfig)
- [tsconfigDev](NxMonorepoProject.md#tsconfigdev)
- [tsconfigEslint](NxMonorepoProject.md#tsconfigeslint)
- [upgradeWorkflow](NxMonorepoProject.md#upgradeworkflow)
- [vscode](NxMonorepoProject.md#vscode)
- [watchTask](NxMonorepoProject.md#watchtask)
- [workflowBootstrapSteps](NxMonorepoProject.md#workflowbootstrapsteps)
- [workflowPackageCache](NxMonorepoProject.md#workflowpackagecache)
- [DEFAULT\_TASK](NxMonorepoProject.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](NxMonorepoProject.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](NxMonorepoProject.md#allowlibrarydependencies)
- [buildTask](NxMonorepoProject.md#buildtask)
- [buildWorkflowJobId](NxMonorepoProject.md#buildworkflowjobid)
- [compileTask](NxMonorepoProject.md#compiletask)
- [components](NxMonorepoProject.md#components)
- [ejected](NxMonorepoProject.md#ejected)
- [entrypoint](NxMonorepoProject.md#entrypoint)
- [files](NxMonorepoProject.md#files)
- [manifest](NxMonorepoProject.md#manifest)
- [maxNodeVersion](NxMonorepoProject.md#maxnodeversion)
- [minNodeVersion](NxMonorepoProject.md#minnodeversion)
- [npmrc](NxMonorepoProject.md#npmrc)
- [nx](NxMonorepoProject.md#nx)
- [packageManager](NxMonorepoProject.md#packagemanager)
- [packageTask](NxMonorepoProject.md#packagetask)
- [postCompileTask](NxMonorepoProject.md#postcompiletask)
- [preCompileTask](NxMonorepoProject.md#precompiletask)
- [projenCommand](NxMonorepoProject.md#projencommand)
- [root](NxMonorepoProject.md#root)
- [sortedSubProjects](NxMonorepoProject.md#sortedsubprojects)
- [subprojects](NxMonorepoProject.md#subprojects)
- [testTask](NxMonorepoProject.md#testtask)

### Methods

- [addAndEditTasks](NxMonorepoProject.md#addandedittasks)
- [addBins](NxMonorepoProject.md#addbins)
- [addBundledDeps](NxMonorepoProject.md#addbundleddeps)
- [addCompileCommand](NxMonorepoProject.md#addcompilecommand)
- [addDeps](NxMonorepoProject.md#adddeps)
- [addDevDeps](NxMonorepoProject.md#adddevdeps)
- [addExcludeFromCleanup](NxMonorepoProject.md#addexcludefromcleanup)
- [addFields](NxMonorepoProject.md#addfields)
- [addGitIgnore](NxMonorepoProject.md#addgitignore)
- [addImplicitDependency](NxMonorepoProject.md#addimplicitdependency)
- [addJavaDependency](NxMonorepoProject.md#addjavadependency)
- [addKeywords](NxMonorepoProject.md#addkeywords)
- [addNxRunManyTask](NxMonorepoProject.md#addnxrunmanytask)
- [addPackageIgnore](NxMonorepoProject.md#addpackageignore)
- [addPeerDeps](NxMonorepoProject.md#addpeerdeps)
- [addPythonPoetryDependency](NxMonorepoProject.md#addpythonpoetrydependency)
- [addScripts](NxMonorepoProject.md#addscripts)
- [addTask](NxMonorepoProject.md#addtask)
- [addTestCommand](NxMonorepoProject.md#addtestcommand)
- [addTip](NxMonorepoProject.md#addtip)
- [addWorkspacePackages](NxMonorepoProject.md#addworkspacepackages)
- [annotateGenerated](NxMonorepoProject.md#annotategenerated)
- [composeNxRunManyCommand](NxMonorepoProject.md#composenxrunmanycommand)
- [execNxRunManyCommand](NxMonorepoProject.md#execnxrunmanycommand)
- [hasScript](NxMonorepoProject.md#hasscript)
- [linkLocalWorkspaceBins](NxMonorepoProject.md#linklocalworkspacebins)
- [postSynthesize](NxMonorepoProject.md#postsynthesize)
- [preSynthesize](NxMonorepoProject.md#presynthesize)
- [removeScript](NxMonorepoProject.md#removescript)
- [removeTask](NxMonorepoProject.md#removetask)
- [renderWorkflowSetup](NxMonorepoProject.md#renderworkflowsetup)
- [runTaskCommand](NxMonorepoProject.md#runtaskcommand)
- [setScript](NxMonorepoProject.md#setscript)
- [synth](NxMonorepoProject.md#synth)
- [toString](NxMonorepoProject.md#tostring)
- [tryFindFile](NxMonorepoProject.md#tryfindfile)
- [tryFindJsonFile](NxMonorepoProject.md#tryfindjsonfile)
- [tryFindObjectFile](NxMonorepoProject.md#tryfindobjectfile)
- [tryRemoveFile](NxMonorepoProject.md#tryremovefile)
- [isConstruct](NxMonorepoProject.md#isconstruct)
- [isProject](NxMonorepoProject.md#isproject)
- [of](NxMonorepoProject.md#of)

## Constructors

### constructor

• **new NxMonorepoProject**(`options`): [`NxMonorepoProject`](NxMonorepoProject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NxMonorepoProjectOptions`](../interfaces/NxMonorepoProjectOptions.md) |

#### Returns

[`NxMonorepoProject`](NxMonorepoProject.md)

#### Overrides

[MonorepoTsProject](MonorepoTsProject.md).[constructor](MonorepoTsProject.md#constructor)

## Properties

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[artifactsDirectory](MonorepoTsProject.md#artifactsdirectory)

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[artifactsJavascriptDirectory](MonorepoTsProject.md#artifactsjavascriptdirectory)

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[autoApprove](MonorepoTsProject.md#autoapprove)

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[autoMerge](MonorepoTsProject.md#automerge)

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[buildWorkflow](MonorepoTsProject.md#buildworkflow)

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[bundler](MonorepoTsProject.md#bundler)

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[commitGenerated](MonorepoTsProject.md#commitgenerated)

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[defaultTask](MonorepoTsProject.md#defaulttask)

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[deps](MonorepoTsProject.md#deps)

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[devContainer](MonorepoTsProject.md#devcontainer)

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[docgen](MonorepoTsProject.md#docgen)

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[docsDirectory](MonorepoTsProject.md#docsdirectory)

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[eslint](MonorepoTsProject.md#eslint)

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[gitattributes](MonorepoTsProject.md#gitattributes)

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[github](MonorepoTsProject.md#github)

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[gitignore](MonorepoTsProject.md#gitignore)

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[gitpod](MonorepoTsProject.md#gitpod)

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[initProject](MonorepoTsProject.md#initproject)

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[jest](MonorepoTsProject.md#jest)

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[libdir](MonorepoTsProject.md#libdir)

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[logger](MonorepoTsProject.md#logger)

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[name](MonorepoTsProject.md#name)

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[node](MonorepoTsProject.md#node)

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[nodeVersion](MonorepoTsProject.md#nodeversion)

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[npmignore](MonorepoTsProject.md#npmignore)

___

### nxConfigurator

• `Readonly` **nxConfigurator**: [`NxConfigurator`](NxConfigurator.md)

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[nxConfigurator](MonorepoTsProject.md#nxconfigurator)

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[outdir](MonorepoTsProject.md#outdir)

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[package](MonorepoTsProject.md#package)

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[parent](MonorepoTsProject.md#parent)

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[prettier](MonorepoTsProject.md#prettier)

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[projectBuild](MonorepoTsProject.md#projectbuild)

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[projectType](MonorepoTsProject.md#projecttype)

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[publisher](MonorepoTsProject.md#publisher)

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[release](MonorepoTsProject.md#release)

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[runScriptCommand](MonorepoTsProject.md#runscriptcommand)

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[srcdir](MonorepoTsProject.md#srcdir)

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[tasks](MonorepoTsProject.md#tasks)

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[testdir](MonorepoTsProject.md#testdir)

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[tsconfig](MonorepoTsProject.md#tsconfig)

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[tsconfigDev](MonorepoTsProject.md#tsconfigdev)

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[tsconfigEslint](MonorepoTsProject.md#tsconfigeslint)

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[upgradeWorkflow](MonorepoTsProject.md#upgradeworkflow)

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[vscode](MonorepoTsProject.md#vscode)

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[watchTask](MonorepoTsProject.md#watchtask)

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[workflowBootstrapSteps](MonorepoTsProject.md#workflowbootstrapsteps)

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[workflowPackageCache](MonorepoTsProject.md#workflowpackagecache)

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[DEFAULT_TASK](MonorepoTsProject.md#default_task)

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[DEFAULT_TS_JEST_TRANFORM_PATTERN](MonorepoTsProject.md#default_ts_jest_tranform_pattern)

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

MonorepoTsProject.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoTsProject.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

MonorepoTsProject.buildWorkflowJobId

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoTsProject.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

MonorepoTsProject.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

MonorepoTsProject.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

MonorepoTsProject.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

MonorepoTsProject.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

MonorepoTsProject.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

MonorepoTsProject.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

MonorepoTsProject.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

MonorepoTsProject.npmrc

___

### nx

• `get` **nx**(): [`NxWorkspace`](NxWorkspace.md)

Return the NxWorkspace instance. This should be implemented using a getter.

#### Returns

[`NxWorkspace`](NxWorkspace.md)

#### Inherited from

MonorepoTsProject.nx

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

MonorepoTsProject.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoTsProject.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoTsProject.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoTsProject.preCompileTask

___

### projenCommand

• `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

MonorepoTsProject.projenCommand

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

MonorepoTsProject.root

___

### sortedSubProjects

• `get` **sortedSubProjects**(): `Project`[]

Get consistently sorted list of subprojects

#### Returns

`Project`[]

#### Inherited from

MonorepoTsProject.sortedSubProjects

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

MonorepoTsProject.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

MonorepoTsProject.testTask

## Methods

### addAndEditTasks

▸ **addAndEditTasks**(): `void`

#### Returns

`void`

___

### addBins

▸ **addBins**(`bins`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bins` | `Record`\<`string`, `string`\> |

#### Returns

`void`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[addBins](MonorepoTsProject.md#addbins)

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

[MonorepoTsProject](MonorepoTsProject.md).[addBundledDeps](MonorepoTsProject.md#addbundleddeps)

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

[MonorepoTsProject](MonorepoTsProject.md).[addCompileCommand](MonorepoTsProject.md#addcompilecommand)

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

[MonorepoTsProject](MonorepoTsProject.md).[addDeps](MonorepoTsProject.md#adddeps)

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

[MonorepoTsProject](MonorepoTsProject.md).[addDevDeps](MonorepoTsProject.md#adddevdeps)

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

[MonorepoTsProject](MonorepoTsProject.md).[addExcludeFromCleanup](MonorepoTsProject.md#addexcludefromcleanup)

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

[MonorepoTsProject](MonorepoTsProject.md).[addFields](MonorepoTsProject.md#addfields)

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

[MonorepoTsProject](MonorepoTsProject.md).[addGitIgnore](MonorepoTsProject.md#addgitignore)

___

### addImplicitDependency

▸ **addImplicitDependency**(`dependent`, `dependee`): `void`

Create an implicit dependency between two Projects. This is typically
used in polygot repos where a Typescript project wants a build dependency
on a Python project as an example.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependent` | `Project` | project you want to have the dependency. |
| `dependee` | `string` \| `Project` | project you wish to depend on. |

#### Returns

`void`

**`Throws`**

error if this is called on a dependent which does not have a NXProject component attached.

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[addImplicitDependency](MonorepoTsProject.md#addimplicitdependency)

___

### addJavaDependency

▸ **addJavaDependency**(`dependent`, `dependee`): `void`

Adds a dependency between two Java Projects in the monorepo.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependent` | `JavaProject` | project you want to have the dependency |
| `dependee` | `JavaProject` | project you wish to depend on |

#### Returns

`void`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[addJavaDependency](MonorepoTsProject.md#addjavadependency)

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

[MonorepoTsProject](MonorepoTsProject.md).[addKeywords](MonorepoTsProject.md#addkeywords)

___

### addNxRunManyTask

▸ **addNxRunManyTask**(`name`, `options`): `Task`

Add project task that executes `npx nx run-many ...` style command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | task name |
| `options` | `RunManyOptions` | options |

#### Returns

`Task`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[addNxRunManyTask](MonorepoTsProject.md#addnxrunmanytask)

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

[MonorepoTsProject](MonorepoTsProject.md).[addPackageIgnore](MonorepoTsProject.md#addpackageignore)

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

[MonorepoTsProject](MonorepoTsProject.md).[addPeerDeps](MonorepoTsProject.md#addpeerdeps)

___

### addPythonPoetryDependency

▸ **addPythonPoetryDependency**(`dependent`, `dependee`): `void`

Adds a dependency between two Python Projects in the monorepo. The dependent must have Poetry enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependent` | `PythonProject` | project you want to have the dependency (must be a Poetry Python Project) |
| `dependee` | `PythonProject` | project you wish to depend on |

#### Returns

`void`

**`Throws`**

error if the dependent does not have Poetry enabled

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[addPythonPoetryDependency](MonorepoTsProject.md#addpythonpoetrydependency)

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

[MonorepoTsProject](MonorepoTsProject.md).[addScripts](MonorepoTsProject.md#addscripts)

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

[MonorepoTsProject](MonorepoTsProject.md).[addTask](MonorepoTsProject.md#addtask)

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

[MonorepoTsProject](MonorepoTsProject.md).[addTestCommand](MonorepoTsProject.md#addtestcommand)

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

[MonorepoTsProject](MonorepoTsProject.md).[addTip](MonorepoTsProject.md#addtip)

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

[MonorepoTsProject](MonorepoTsProject.md).[addWorkspacePackages](MonorepoTsProject.md#addworkspacepackages)

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

[MonorepoTsProject](MonorepoTsProject.md).[annotateGenerated](MonorepoTsProject.md#annotategenerated)

___

### composeNxRunManyCommand

▸ **composeNxRunManyCommand**(`options`): `string`[]

Helper to format `npx nx run-many ...` style command

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RunManyOptions` |

#### Returns

`string`[]

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[composeNxRunManyCommand](MonorepoTsProject.md#composenxrunmanycommand)

___

### execNxRunManyCommand

▸ **execNxRunManyCommand**(`options`): `string`

Helper to format `npx nx run-many ...` style command execution in package manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RunManyOptions` |

#### Returns

`string`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[execNxRunManyCommand](MonorepoTsProject.md#execnxrunmanycommand)

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

[MonorepoTsProject](MonorepoTsProject.md).[hasScript](MonorepoTsProject.md#hasscript)

___

### linkLocalWorkspaceBins

▸ **linkLocalWorkspaceBins**(): `void`

Create symbolic links to all local workspace bins. This enables the usage of bins the same
way as consumers of the packages have when installing from the registry.

#### Returns

`void`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[linkLocalWorkspaceBins](MonorepoTsProject.md#linklocalworkspacebins)

___

### postSynthesize

▸ **postSynthesize**(): `void`

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[postSynthesize](MonorepoTsProject.md#postsynthesize)

___

### preSynthesize

▸ **preSynthesize**(): `void`

#### Returns

`void`

#### Overrides

[MonorepoTsProject](MonorepoTsProject.md).[preSynthesize](MonorepoTsProject.md#presynthesize)

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

[MonorepoTsProject](MonorepoTsProject.md).[removeScript](MonorepoTsProject.md#removescript)

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

[MonorepoTsProject](MonorepoTsProject.md).[removeTask](MonorepoTsProject.md#removetask)

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

[MonorepoTsProject](MonorepoTsProject.md).[renderWorkflowSetup](MonorepoTsProject.md#renderworkflowsetup)

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

[MonorepoTsProject](MonorepoTsProject.md).[runTaskCommand](MonorepoTsProject.md#runtaskcommand)

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

[MonorepoTsProject](MonorepoTsProject.md).[setScript](MonorepoTsProject.md#setscript)

___

### synth

▸ **synth**(): `void`

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[synth](MonorepoTsProject.md#synth)

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

[MonorepoTsProject](MonorepoTsProject.md).[toString](MonorepoTsProject.md#tostring)

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

[MonorepoTsProject](MonorepoTsProject.md).[tryFindFile](MonorepoTsProject.md#tryfindfile)

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

[MonorepoTsProject](MonorepoTsProject.md).[tryFindJsonFile](MonorepoTsProject.md#tryfindjsonfile)

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

[MonorepoTsProject](MonorepoTsProject.md).[tryFindObjectFile](MonorepoTsProject.md#tryfindobjectfile)

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

[MonorepoTsProject](MonorepoTsProject.md).[tryRemoveFile](MonorepoTsProject.md#tryremovefile)

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

[MonorepoTsProject](MonorepoTsProject.md).[isConstruct](MonorepoTsProject.md#isconstruct)

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

[MonorepoTsProject](MonorepoTsProject.md).[isProject](MonorepoTsProject.md#isproject)

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

[MonorepoTsProject](MonorepoTsProject.md).[of](MonorepoTsProject.md#of)
