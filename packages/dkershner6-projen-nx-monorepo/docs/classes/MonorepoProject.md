[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / MonorepoProject

# Class: MonorepoProject

## Hierarchy

- `MonorepoTsProject`

  ↳ **`MonorepoProject`**

  ↳↳ [`Node20MonorepoProject`](Node20MonorepoProject.md)

## Table of contents

### Constructors

- [constructor](MonorepoProject.md#constructor)

### Properties

- [artifactsDirectory](MonorepoProject.md#artifactsdirectory)
- [artifactsJavascriptDirectory](MonorepoProject.md#artifactsjavascriptdirectory)
- [autoApprove](MonorepoProject.md#autoapprove)
- [autoMerge](MonorepoProject.md#automerge)
- [buildWorkflow](MonorepoProject.md#buildworkflow)
- [bundler](MonorepoProject.md#bundler)
- [commitGenerated](MonorepoProject.md#commitgenerated)
- [defaultTask](MonorepoProject.md#defaulttask)
- [deps](MonorepoProject.md#deps)
- [devContainer](MonorepoProject.md#devcontainer)
- [docgen](MonorepoProject.md#docgen)
- [docsDirectory](MonorepoProject.md#docsdirectory)
- [eslint](MonorepoProject.md#eslint)
- [gitattributes](MonorepoProject.md#gitattributes)
- [github](MonorepoProject.md#github)
- [gitignore](MonorepoProject.md#gitignore)
- [gitpod](MonorepoProject.md#gitpod)
- [initProject](MonorepoProject.md#initproject)
- [jest](MonorepoProject.md#jest)
- [libdir](MonorepoProject.md#libdir)
- [logger](MonorepoProject.md#logger)
- [name](MonorepoProject.md#name)
- [node](MonorepoProject.md#node)
- [nodeVersion](MonorepoProject.md#nodeversion)
- [npmignore](MonorepoProject.md#npmignore)
- [nxConfigurator](MonorepoProject.md#nxconfigurator)
- [outdir](MonorepoProject.md#outdir)
- [package](MonorepoProject.md#package)
- [parent](MonorepoProject.md#parent)
- [prettier](MonorepoProject.md#prettier)
- [projectBuild](MonorepoProject.md#projectbuild)
- [projectType](MonorepoProject.md#projecttype)
- [projenCommand](MonorepoProject.md#projencommand)
- [publisher](MonorepoProject.md#publisher)
- [release](MonorepoProject.md#release)
- [runScriptCommand](MonorepoProject.md#runscriptcommand)
- [srcdir](MonorepoProject.md#srcdir)
- [tasks](MonorepoProject.md#tasks)
- [testdir](MonorepoProject.md#testdir)
- [tsconfig](MonorepoProject.md#tsconfig)
- [tsconfigDev](MonorepoProject.md#tsconfigdev)
- [tsconfigEslint](MonorepoProject.md#tsconfigeslint)
- [upgradeWorkflow](MonorepoProject.md#upgradeworkflow)
- [vscode](MonorepoProject.md#vscode)
- [watchTask](MonorepoProject.md#watchtask)
- [workflowBootstrapSteps](MonorepoProject.md#workflowbootstrapsteps)
- [workflowPackageCache](MonorepoProject.md#workflowpackagecache)
- [DEFAULT\_TASK](MonorepoProject.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](MonorepoProject.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](MonorepoProject.md#allowlibrarydependencies)
- [buildTask](MonorepoProject.md#buildtask)
- [buildWorkflowJobId](MonorepoProject.md#buildworkflowjobid)
- [compileTask](MonorepoProject.md#compiletask)
- [components](MonorepoProject.md#components)
- [ejected](MonorepoProject.md#ejected)
- [entrypoint](MonorepoProject.md#entrypoint)
- [files](MonorepoProject.md#files)
- [manifest](MonorepoProject.md#manifest)
- [maxNodeVersion](MonorepoProject.md#maxnodeversion)
- [minNodeVersion](MonorepoProject.md#minnodeversion)
- [npmrc](MonorepoProject.md#npmrc)
- [nx](MonorepoProject.md#nx)
- [packageManager](MonorepoProject.md#packagemanager)
- [packageTask](MonorepoProject.md#packagetask)
- [postCompileTask](MonorepoProject.md#postcompiletask)
- [preCompileTask](MonorepoProject.md#precompiletask)
- [root](MonorepoProject.md#root)
- [sortedSubProjects](MonorepoProject.md#sortedsubprojects)
- [subprojects](MonorepoProject.md#subprojects)
- [testTask](MonorepoProject.md#testtask)

### Methods

- [addAndEditTasks](MonorepoProject.md#addandedittasks)
- [addBins](MonorepoProject.md#addbins)
- [addBundledDeps](MonorepoProject.md#addbundleddeps)
- [addCompileCommand](MonorepoProject.md#addcompilecommand)
- [addDeps](MonorepoProject.md#adddeps)
- [addDevDeps](MonorepoProject.md#adddevdeps)
- [addExcludeFromCleanup](MonorepoProject.md#addexcludefromcleanup)
- [addFields](MonorepoProject.md#addfields)
- [addGitIgnore](MonorepoProject.md#addgitignore)
- [addImplicitDependency](MonorepoProject.md#addimplicitdependency)
- [addJavaDependency](MonorepoProject.md#addjavadependency)
- [addKeywords](MonorepoProject.md#addkeywords)
- [addNxRunManyTask](MonorepoProject.md#addnxrunmanytask)
- [addPackageIgnore](MonorepoProject.md#addpackageignore)
- [addPeerDeps](MonorepoProject.md#addpeerdeps)
- [addPythonPoetryDependency](MonorepoProject.md#addpythonpoetrydependency)
- [addScripts](MonorepoProject.md#addscripts)
- [addTask](MonorepoProject.md#addtask)
- [addTestCommand](MonorepoProject.md#addtestcommand)
- [addTip](MonorepoProject.md#addtip)
- [addWorkspacePackages](MonorepoProject.md#addworkspacepackages)
- [annotateGenerated](MonorepoProject.md#annotategenerated)
- [composeNxRunManyCommand](MonorepoProject.md#composenxrunmanycommand)
- [execNxRunManyCommand](MonorepoProject.md#execnxrunmanycommand)
- [hasScript](MonorepoProject.md#hasscript)
- [linkLocalWorkspaceBins](MonorepoProject.md#linklocalworkspacebins)
- [overwriteUpgradeWorkflow](MonorepoProject.md#overwriteupgradeworkflow)
- [postSynthesize](MonorepoProject.md#postsynthesize)
- [preSynthesize](MonorepoProject.md#presynthesize)
- [removeScript](MonorepoProject.md#removescript)
- [removeTask](MonorepoProject.md#removetask)
- [renderWorkflowSetup](MonorepoProject.md#renderworkflowsetup)
- [runTaskCommand](MonorepoProject.md#runtaskcommand)
- [setScript](MonorepoProject.md#setscript)
- [synth](MonorepoProject.md#synth)
- [toString](MonorepoProject.md#tostring)
- [tryFindFile](MonorepoProject.md#tryfindfile)
- [tryFindJsonFile](MonorepoProject.md#tryfindjsonfile)
- [tryFindObjectFile](MonorepoProject.md#tryfindobjectfile)
- [tryRemoveFile](MonorepoProject.md#tryremovefile)
- [isConstruct](MonorepoProject.md#isconstruct)
- [isProject](MonorepoProject.md#isproject)
- [of](MonorepoProject.md#of)

## Constructors

### constructor

• **new MonorepoProject**(`options`): [`MonorepoProject`](MonorepoProject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MonorepoProjectOptions`](../interfaces/MonorepoProjectOptions.md) |

#### Returns

[`MonorepoProject`](MonorepoProject.md)

#### Overrides

monorepo.MonorepoTsProject.constructor

## Properties

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

monorepo.MonorepoTsProject.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

monorepo.MonorepoTsProject.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

monorepo.MonorepoTsProject.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

monorepo.MonorepoTsProject.autoMerge

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

monorepo.MonorepoTsProject.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

monorepo.MonorepoTsProject.bundler

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

monorepo.MonorepoTsProject.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

monorepo.MonorepoTsProject.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

monorepo.MonorepoTsProject.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

monorepo.MonorepoTsProject.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

monorepo.MonorepoTsProject.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

monorepo.MonorepoTsProject.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

monorepo.MonorepoTsProject.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

monorepo.MonorepoTsProject.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

monorepo.MonorepoTsProject.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

monorepo.MonorepoTsProject.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

monorepo.MonorepoTsProject.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

monorepo.MonorepoTsProject.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

monorepo.MonorepoTsProject.jest

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

monorepo.MonorepoTsProject.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

monorepo.MonorepoTsProject.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

monorepo.MonorepoTsProject.name

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

monorepo.MonorepoTsProject.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

monorepo.MonorepoTsProject.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

monorepo.MonorepoTsProject.npmignore

___

### nxConfigurator

• `Readonly` **nxConfigurator**: `NxConfigurator`

#### Inherited from

monorepo.MonorepoTsProject.nxConfigurator

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

monorepo.MonorepoTsProject.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

monorepo.MonorepoTsProject.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

monorepo.MonorepoTsProject.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

monorepo.MonorepoTsProject.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

monorepo.MonorepoTsProject.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

monorepo.MonorepoTsProject.projectType

___

### projenCommand

• `Readonly` **projenCommand**: `string`

The command to use in order to run the projen CLI.

#### Inherited from

monorepo.MonorepoTsProject.projenCommand

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

monorepo.MonorepoTsProject.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

monorepo.MonorepoTsProject.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

monorepo.MonorepoTsProject.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

monorepo.MonorepoTsProject.srcdir

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

monorepo.MonorepoTsProject.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

monorepo.MonorepoTsProject.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

monorepo.MonorepoTsProject.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

monorepo.MonorepoTsProject.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

monorepo.MonorepoTsProject.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

monorepo.MonorepoTsProject.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

monorepo.MonorepoTsProject.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

monorepo.MonorepoTsProject.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

monorepo.MonorepoTsProject.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

monorepo.MonorepoTsProject.workflowPackageCache

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

monorepo.MonorepoTsProject.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

monorepo.MonorepoTsProject.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

monorepo.MonorepoTsProject.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

monorepo.MonorepoTsProject.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

monorepo.MonorepoTsProject.buildWorkflowJobId

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

monorepo.MonorepoTsProject.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

monorepo.MonorepoTsProject.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

monorepo.MonorepoTsProject.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

monorepo.MonorepoTsProject.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

monorepo.MonorepoTsProject.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

monorepo.MonorepoTsProject.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

monorepo.MonorepoTsProject.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

monorepo.MonorepoTsProject.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

monorepo.MonorepoTsProject.npmrc

___

### nx

• `get` **nx**(): `NxWorkspace`

#### Returns

`NxWorkspace`

**`Inherit Doc`**

#### Inherited from

monorepo.MonorepoTsProject.nx

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

monorepo.MonorepoTsProject.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

monorepo.MonorepoTsProject.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

monorepo.MonorepoTsProject.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

monorepo.MonorepoTsProject.preCompileTask

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

monorepo.MonorepoTsProject.root

___

### sortedSubProjects

• `get` **sortedSubProjects**(): `Project`[]

Get consistently sorted list of subprojects

#### Returns

`Project`[]

#### Inherited from

monorepo.MonorepoTsProject.sortedSubProjects

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

monorepo.MonorepoTsProject.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

monorepo.MonorepoTsProject.testTask

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

monorepo.MonorepoTsProject.addBins

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

monorepo.MonorepoTsProject.addBundledDeps

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

monorepo.MonorepoTsProject.addCompileCommand

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

monorepo.MonorepoTsProject.addDeps

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

monorepo.MonorepoTsProject.addDevDeps

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

monorepo.MonorepoTsProject.addExcludeFromCleanup

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

monorepo.MonorepoTsProject.addFields

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

monorepo.MonorepoTsProject.addGitIgnore

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

monorepo.MonorepoTsProject.addImplicitDependency

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

monorepo.MonorepoTsProject.addJavaDependency

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

monorepo.MonorepoTsProject.addKeywords

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

monorepo.MonorepoTsProject.addNxRunManyTask

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

monorepo.MonorepoTsProject.addPackageIgnore

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

monorepo.MonorepoTsProject.addPeerDeps

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

monorepo.MonorepoTsProject.addPythonPoetryDependency

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

monorepo.MonorepoTsProject.addScripts

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

monorepo.MonorepoTsProject.addTask

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

monorepo.MonorepoTsProject.addTestCommand

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

monorepo.MonorepoTsProject.addTip

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

monorepo.MonorepoTsProject.addWorkspacePackages

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

monorepo.MonorepoTsProject.annotateGenerated

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

monorepo.MonorepoTsProject.composeNxRunManyCommand

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

monorepo.MonorepoTsProject.execNxRunManyCommand

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

monorepo.MonorepoTsProject.hasScript

___

### linkLocalWorkspaceBins

▸ **linkLocalWorkspaceBins**(): `void`

Create symbolic links to all local workspace bins. This enables the usage of bins the same
way as consumers of the packages have when installing from the registry.

#### Returns

`void`

#### Inherited from

monorepo.MonorepoTsProject.linkLocalWorkspaceBins

___

### overwriteUpgradeWorkflow

▸ **overwriteUpgradeWorkflow**(`upgradeDependenciesOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `upgradeDependenciesOptions` | `undefined` \| [`UpgradeDependenciesOptions`](../interfaces/UpgradeDependenciesOptions.md) |

#### Returns

`void`

___

### postSynthesize

▸ **postSynthesize**(): `void`

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

monorepo.MonorepoTsProject.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

#### Returns

`void`

#### Overrides

monorepo.MonorepoTsProject.preSynthesize

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

monorepo.MonorepoTsProject.removeScript

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

monorepo.MonorepoTsProject.removeTask

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

monorepo.MonorepoTsProject.renderWorkflowSetup

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

monorepo.MonorepoTsProject.runTaskCommand

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

monorepo.MonorepoTsProject.setScript

___

### synth

▸ **synth**(): `void`

#### Returns

`void`

**`Inherit Doc`**

#### Inherited from

monorepo.MonorepoTsProject.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

monorepo.MonorepoTsProject.toString

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

monorepo.MonorepoTsProject.tryFindFile

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

monorepo.MonorepoTsProject.tryFindJsonFile

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

monorepo.MonorepoTsProject.tryFindObjectFile

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

monorepo.MonorepoTsProject.tryRemoveFile

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

monorepo.MonorepoTsProject.isConstruct

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

monorepo.MonorepoTsProject.isProject

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

monorepo.MonorepoTsProject.of
