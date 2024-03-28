[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / MonorepoTsProject

# Class: MonorepoTsProject

This project type will bootstrap a monorepo with support for polygot
builds, build caching, dependency graph visualization and much more.

**`Pjid`**

monorepo-ts

## Hierarchy

- `TypeScriptProject`

  ↳ **`MonorepoTsProject`**

  ↳↳ [`NxMonorepoProject`](NxMonorepoProject.md)

## Implements

- [`INxProjectCore`](../interfaces/INxProjectCore.md)

## Table of contents

### Constructors

- [constructor](MonorepoTsProject.md#constructor)

### Properties

- [\_options](MonorepoTsProject.md#_options)
- [artifactsDirectory](MonorepoTsProject.md#artifactsdirectory)
- [artifactsJavascriptDirectory](MonorepoTsProject.md#artifactsjavascriptdirectory)
- [autoApprove](MonorepoTsProject.md#autoapprove)
- [autoMerge](MonorepoTsProject.md#automerge)
- [buildWorkflow](MonorepoTsProject.md#buildworkflow)
- [bundler](MonorepoTsProject.md#bundler)
- [commitGenerated](MonorepoTsProject.md#commitgenerated)
- [defaultTask](MonorepoTsProject.md#defaulttask)
- [deps](MonorepoTsProject.md#deps)
- [devContainer](MonorepoTsProject.md#devcontainer)
- [docgen](MonorepoTsProject.md#docgen)
- [docsDirectory](MonorepoTsProject.md#docsdirectory)
- [eslint](MonorepoTsProject.md#eslint)
- [gitattributes](MonorepoTsProject.md#gitattributes)
- [github](MonorepoTsProject.md#github)
- [gitignore](MonorepoTsProject.md#gitignore)
- [gitpod](MonorepoTsProject.md#gitpod)
- [initProject](MonorepoTsProject.md#initproject)
- [jest](MonorepoTsProject.md#jest)
- [libdir](MonorepoTsProject.md#libdir)
- [logger](MonorepoTsProject.md#logger)
- [name](MonorepoTsProject.md#name)
- [node](MonorepoTsProject.md#node)
- [nodeVersion](MonorepoTsProject.md#nodeversion)
- [npmignore](MonorepoTsProject.md#npmignore)
- [nxConfigurator](MonorepoTsProject.md#nxconfigurator)
- [outdir](MonorepoTsProject.md#outdir)
- [package](MonorepoTsProject.md#package)
- [parent](MonorepoTsProject.md#parent)
- [prettier](MonorepoTsProject.md#prettier)
- [projectBuild](MonorepoTsProject.md#projectbuild)
- [projectType](MonorepoTsProject.md#projecttype)
- [projenVersion](MonorepoTsProject.md#projenversion)
- [publisher](MonorepoTsProject.md#publisher)
- [release](MonorepoTsProject.md#release)
- [runScriptCommand](MonorepoTsProject.md#runscriptcommand)
- [srcdir](MonorepoTsProject.md#srcdir)
- [subNodeProjectResolves](MonorepoTsProject.md#subnodeprojectresolves)
- [tasks](MonorepoTsProject.md#tasks)
- [testdir](MonorepoTsProject.md#testdir)
- [tsconfig](MonorepoTsProject.md#tsconfig)
- [tsconfigDev](MonorepoTsProject.md#tsconfigdev)
- [tsconfigEslint](MonorepoTsProject.md#tsconfigeslint)
- [upgradeWorkflow](MonorepoTsProject.md#upgradeworkflow)
- [vscode](MonorepoTsProject.md#vscode)
- [watchTask](MonorepoTsProject.md#watchtask)
- [workflowBootstrapSteps](MonorepoTsProject.md#workflowbootstrapsteps)
- [workflowPackageCache](MonorepoTsProject.md#workflowpackagecache)
- [workspaceConfig](MonorepoTsProject.md#workspaceconfig)
- [workspacePackages](MonorepoTsProject.md#workspacepackages)
- [DEFAULT\_TASK](MonorepoTsProject.md#default_task)
- [DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN](MonorepoTsProject.md#default_ts_jest_tranform_pattern)

### Accessors

- [allowLibraryDependencies](MonorepoTsProject.md#allowlibrarydependencies)
- [buildTask](MonorepoTsProject.md#buildtask)
- [buildWorkflowJobId](MonorepoTsProject.md#buildworkflowjobid)
- [compileTask](MonorepoTsProject.md#compiletask)
- [components](MonorepoTsProject.md#components)
- [ejected](MonorepoTsProject.md#ejected)
- [entrypoint](MonorepoTsProject.md#entrypoint)
- [files](MonorepoTsProject.md#files)
- [manifest](MonorepoTsProject.md#manifest)
- [maxNodeVersion](MonorepoTsProject.md#maxnodeversion)
- [minNodeVersion](MonorepoTsProject.md#minnodeversion)
- [npmrc](MonorepoTsProject.md#npmrc)
- [nx](MonorepoTsProject.md#nx)
- [packageManager](MonorepoTsProject.md#packagemanager)
- [packageTask](MonorepoTsProject.md#packagetask)
- [postCompileTask](MonorepoTsProject.md#postcompiletask)
- [preCompileTask](MonorepoTsProject.md#precompiletask)
- [projenCommand](MonorepoTsProject.md#projencommand)
- [root](MonorepoTsProject.md#root)
- [sortedSubProjects](MonorepoTsProject.md#sortedsubprojects)
- [subprojects](MonorepoTsProject.md#subprojects)
- [testTask](MonorepoTsProject.md#testtask)

### Methods

- [addBins](MonorepoTsProject.md#addbins)
- [addBundledDeps](MonorepoTsProject.md#addbundleddeps)
- [addCompileCommand](MonorepoTsProject.md#addcompilecommand)
- [addDeps](MonorepoTsProject.md#adddeps)
- [addDevDeps](MonorepoTsProject.md#adddevdeps)
- [addExcludeFromCleanup](MonorepoTsProject.md#addexcludefromcleanup)
- [addFields](MonorepoTsProject.md#addfields)
- [addGitIgnore](MonorepoTsProject.md#addgitignore)
- [addImplicitDependency](MonorepoTsProject.md#addimplicitdependency)
- [addJavaDependency](MonorepoTsProject.md#addjavadependency)
- [addKeywords](MonorepoTsProject.md#addkeywords)
- [addNxRunManyTask](MonorepoTsProject.md#addnxrunmanytask)
- [addPackageIgnore](MonorepoTsProject.md#addpackageignore)
- [addPeerDeps](MonorepoTsProject.md#addpeerdeps)
- [addPythonPoetryDependency](MonorepoTsProject.md#addpythonpoetrydependency)
- [addScripts](MonorepoTsProject.md#addscripts)
- [addTask](MonorepoTsProject.md#addtask)
- [addTestCommand](MonorepoTsProject.md#addtestcommand)
- [addTip](MonorepoTsProject.md#addtip)
- [addWorkspacePackages](MonorepoTsProject.md#addworkspacepackages)
- [annotateGenerated](MonorepoTsProject.md#annotategenerated)
- [composeNxRunManyCommand](MonorepoTsProject.md#composenxrunmanycommand)
- [disableNodeWarnings](MonorepoTsProject.md#disablenodewarnings)
- [execNxRunManyCommand](MonorepoTsProject.md#execnxrunmanycommand)
- [hasScript](MonorepoTsProject.md#hasscript)
- [installNonNodeDependencies](MonorepoTsProject.md#installnonnodedependencies)
- [linkLocalWorkspaceBins](MonorepoTsProject.md#linklocalworkspacebins)
- [postSynthesize](MonorepoTsProject.md#postsynthesize)
- [preSynthesize](MonorepoTsProject.md#presynthesize)
- [removeScript](MonorepoTsProject.md#removescript)
- [removeTask](MonorepoTsProject.md#removetask)
- [renderWorkflowSetup](MonorepoTsProject.md#renderworkflowsetup)
- [resolveLocalBunDependencies](MonorepoTsProject.md#resolvelocalbundependencies)
- [resolveSubNodeProjects](MonorepoTsProject.md#resolvesubnodeprojects)
- [runTaskCommand](MonorepoTsProject.md#runtaskcommand)
- [setScript](MonorepoTsProject.md#setscript)
- [synth](MonorepoTsProject.md#synth)
- [toString](MonorepoTsProject.md#tostring)
- [tryFindFile](MonorepoTsProject.md#tryfindfile)
- [tryFindJsonFile](MonorepoTsProject.md#tryfindjsonfile)
- [tryFindObjectFile](MonorepoTsProject.md#tryfindobjectfile)
- [tryRemoveFile](MonorepoTsProject.md#tryremovefile)
- [updateWorkspace](MonorepoTsProject.md#updateworkspace)
- [validateSubProjects](MonorepoTsProject.md#validatesubprojects)
- [isConstruct](MonorepoTsProject.md#isconstruct)
- [isProject](MonorepoTsProject.md#isproject)
- [of](MonorepoTsProject.md#of)

## Constructors

### constructor

• **new MonorepoTsProject**(`options`): [`MonorepoTsProject`](MonorepoTsProject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MonorepoTsProjectOptions`](../interfaces/MonorepoTsProjectOptions.md) |

#### Returns

[`MonorepoTsProject`](MonorepoTsProject.md)

#### Overrides

TypeScriptProject.constructor

## Properties

### \_options

• `Private` `Readonly` **\_options**: [`MonorepoTsProjectOptions`](../interfaces/MonorepoTsProjectOptions.md)

___

### artifactsDirectory

• `Readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

TypeScriptProject.artifactsDirectory

___

### artifactsJavascriptDirectory

• `Readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

TypeScriptProject.artifactsJavascriptDirectory

___

### autoApprove

• `Optional` `Readonly` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

TypeScriptProject.autoApprove

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

TypeScriptProject.autoMerge

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

TypeScriptProject.buildWorkflow

___

### bundler

• `Readonly` **bundler**: `Bundler`

#### Inherited from

TypeScriptProject.bundler

___

### commitGenerated

• `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

TypeScriptProject.commitGenerated

___

### defaultTask

• `Optional` `Readonly` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

TypeScriptProject.defaultTask

___

### deps

• `Readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

TypeScriptProject.deps

___

### devContainer

• `Readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

TypeScriptProject.devContainer

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

#### Inherited from

TypeScriptProject.docgen

___

### docsDirectory

• `Readonly` **docsDirectory**: `string`

#### Inherited from

TypeScriptProject.docsDirectory

___

### eslint

• `Optional` `Readonly` **eslint**: `Eslint`

#### Inherited from

TypeScriptProject.eslint

___

### gitattributes

• `Readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

TypeScriptProject.gitattributes

___

### github

• `Readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

TypeScriptProject.github

___

### gitignore

• `Readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

TypeScriptProject.gitignore

___

### gitpod

• `Readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

TypeScriptProject.gitpod

___

### initProject

• `Optional` `Readonly` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

TypeScriptProject.initProject

___

### jest

• `Optional` `Readonly` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

TypeScriptProject.jest

___

### libdir

• `Readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

TypeScriptProject.libdir

___

### logger

• `Readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

TypeScriptProject.logger

___

### name

• `Readonly` **name**: `string`

Project name.

#### Inherited from

TypeScriptProject.name

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

TypeScriptProject.node

___

### nodeVersion

• `Protected` `Optional` `Readonly` **nodeVersion**: `string`

#### Inherited from

TypeScriptProject.nodeVersion

___

### npmignore

• `Optional` `Readonly` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

TypeScriptProject.npmignore

___

### nxConfigurator

• `Readonly` **nxConfigurator**: [`NxConfigurator`](NxConfigurator.md)

___

### outdir

• `Readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

TypeScriptProject.outdir

___

### package

• `Readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

TypeScriptProject.package

___

### parent

• `Optional` `Readonly` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

TypeScriptProject.parent

___

### prettier

• `Optional` `Readonly` **prettier**: `Prettier`

#### Inherited from

TypeScriptProject.prettier

___

### projectBuild

• `Readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

TypeScriptProject.projectBuild

___

### projectType

• `Readonly` **projectType**: `ProjectType`

#### Inherited from

TypeScriptProject.projectType

___

### projenVersion

• `Private` `Readonly` **projenVersion**: `string`

Version of projen used by the monorepo and its subprojects

___

### publisher

• `Optional` `Readonly` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

**`Deprecated`**

use `release.publisher`.

#### Inherited from

TypeScriptProject.publisher

___

### release

• `Optional` `Readonly` **release**: `Release`

Release management.

#### Inherited from

TypeScriptProject.release

___

### runScriptCommand

• `Readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

TypeScriptProject.runScriptCommand

___

### srcdir

• `Readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

TypeScriptProject.srcdir

___

### subNodeProjectResolves

• `Private` **subNodeProjectResolves**: () => `boolean`[] = `[]`

___

### tasks

• `Readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

TypeScriptProject.tasks

___

### testdir

• `Readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

TypeScriptProject.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfig`

#### Inherited from

TypeScriptProject.tsconfig

___

### tsconfigDev

• `Readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

TypeScriptProject.tsconfigDev

___

### tsconfigEslint

• `Optional` `Readonly` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

TypeScriptProject.tsconfigEslint

___

### upgradeWorkflow

• `Optional` `Readonly` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

TypeScriptProject.upgradeWorkflow

___

### vscode

• `Readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

TypeScriptProject.vscode

___

### watchTask

• `Readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

TypeScriptProject.watchTask

___

### workflowBootstrapSteps

• `Protected` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

TypeScriptProject.workflowBootstrapSteps

___

### workflowPackageCache

• `Protected` `Readonly` **workflowPackageCache**: `boolean`

#### Inherited from

TypeScriptProject.workflowPackageCache

___

### workspaceConfig

• `Private` `Optional` `Readonly` **workspaceConfig**: [`WorkspaceConfig`](../interfaces/WorkspaceConfig.md)

___

### workspacePackages

• `Private` `Readonly` **workspacePackages**: `string`[]

___

### DEFAULT\_TASK

▪ `Static` `Readonly` **DEFAULT\_TASK**: ``"default"``

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

TypeScriptProject.DEFAULT\_TASK

___

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

▪ `Static` `Readonly` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: ``"^.+\\.[t]sx?$"``

#### Inherited from

TypeScriptProject.DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

## Accessors

### allowLibraryDependencies

• `get` **allowLibraryDependencies**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use `package.allowLibraryDependencies`

#### Inherited from

TypeScriptProject.allowLibraryDependencies

___

### buildTask

• `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.buildTask

___

### buildWorkflowJobId

• `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

TypeScriptProject.buildWorkflowJobId

___

### compileTask

• `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.compileTask

___

### components

• `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

TypeScriptProject.components

___

### ejected

• `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

TypeScriptProject.ejected

___

### entrypoint

• `get` **entrypoint**(): `string`

#### Returns

`string`

**`Deprecated`**

use `package.entrypoint`

#### Inherited from

TypeScriptProject.entrypoint

___

### files

• `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

TypeScriptProject.files

___

### manifest

• `get` **manifest**(): `any`

#### Returns

`any`

**`Deprecated`**

use `package.addField(x, y)`

#### Inherited from

TypeScriptProject.manifest

___

### maxNodeVersion

• `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

TypeScriptProject.maxNodeVersion

___

### minNodeVersion

• `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

TypeScriptProject.minNodeVersion

___

### npmrc

• `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

TypeScriptProject.npmrc

___

### nx

• `get` **nx**(): [`NxWorkspace`](NxWorkspace.md)

Return the NxWorkspace instance. This should be implemented using a getter.

#### Returns

[`NxWorkspace`](NxWorkspace.md)

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[nx](../interfaces/INxProjectCore.md#nx)

___

### packageManager

• `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Returns

`NodePackageManager`

**`Deprecated`**

use `package.packageManager`

#### Inherited from

TypeScriptProject.packageManager

___

### packageTask

• `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.packageTask

___

### postCompileTask

• `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.postCompileTask

___

### preCompileTask

• `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.preCompileTask

___

### projenCommand

• `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

TypeScriptProject.projenCommand

___

### root

• `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

TypeScriptProject.root

___

### sortedSubProjects

• `get` **sortedSubProjects**(): `Project`[]

Get consistently sorted list of subprojects

#### Returns

`Project`[]

___

### subprojects

• `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

TypeScriptProject.subprojects

___

### testTask

• `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

TypeScriptProject.testTask

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

TypeScriptProject.addBins

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

TypeScriptProject.addBundledDeps

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

TypeScriptProject.addCompileCommand

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

TypeScriptProject.addDeps

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

TypeScriptProject.addDevDeps

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

TypeScriptProject.addExcludeFromCleanup

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

TypeScriptProject.addFields

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

TypeScriptProject.addGitIgnore

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[addImplicitDependency](../interfaces/INxProjectCore.md#addimplicitdependency)

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[addJavaDependency](../interfaces/INxProjectCore.md#addjavadependency)

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

TypeScriptProject.addKeywords

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[addNxRunManyTask](../interfaces/INxProjectCore.md#addnxrunmanytask)

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

TypeScriptProject.addPackageIgnore

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

TypeScriptProject.addPeerDeps

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[addPythonPoetryDependency](../interfaces/INxProjectCore.md#addpythonpoetrydependency)

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

TypeScriptProject.addScripts

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

TypeScriptProject.addTask

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

TypeScriptProject.addTestCommand

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

TypeScriptProject.addTip

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

TypeScriptProject.annotateGenerated

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[composeNxRunManyCommand](../interfaces/INxProjectCore.md#composenxrunmanycommand)

___

### disableNodeWarnings

▸ **disableNodeWarnings**(): `void`

Suppress Node warnings from being presented in the console when running builds.

#### Returns

`void`

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

#### Implementation of

[INxProjectCore](../interfaces/INxProjectCore.md).[execNxRunManyCommand](../interfaces/INxProjectCore.md#execnxrunmanycommand)

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

TypeScriptProject.hasScript

___

### installNonNodeDependencies

▸ **installNonNodeDependencies**(): `void`

Ensures the install task for non-node projects is executed postinstall.

#### Returns

`void`

___

### linkLocalWorkspaceBins

▸ **linkLocalWorkspaceBins**(): `void`

Create symbolic links to all local workspace bins. This enables the usage of bins the same
way as consumers of the packages have when installing from the registry.

#### Returns

`void`

___

### postSynthesize

▸ **postSynthesize**(): `void`

#### Returns

`void`

**`Inherit Doc`**

#### Overrides

TypeScriptProject.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

#### Returns

`void`

#### Overrides

TypeScriptProject.preSynthesize

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

TypeScriptProject.removeScript

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

TypeScriptProject.removeTask

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

TypeScriptProject.renderWorkflowSetup

___

### resolveLocalBunDependencies

▸ **resolveLocalBunDependencies**(): `void`

Resolve all local workspace dependencies to keep bun happy.

#### Returns

`void`

___

### resolveSubNodeProjects

▸ **resolveSubNodeProjects**(): `void`

Resolve sub `NodePackage` dependencies.

#### Returns

`void`

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

TypeScriptProject.runTaskCommand

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

TypeScriptProject.setScript

___

### synth

▸ **synth**(): `void`

#### Returns

`void`

**`Inherit Doc`**

#### Overrides

TypeScriptProject.synth

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

TypeScriptProject.toString

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

TypeScriptProject.tryFindFile

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

TypeScriptProject.tryFindJsonFile

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

TypeScriptProject.tryFindObjectFile

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

TypeScriptProject.tryRemoveFile

___

### updateWorkspace

▸ **updateWorkspace**(): `void`

Add a submodule entry to the appropriate workspace file.

#### Returns

`void`

___

### validateSubProjects

▸ **validateSubProjects**(): `void`

Ensures subprojects don't have a default task and that all packages use the same package manager.

#### Returns

`void`

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

TypeScriptProject.isConstruct

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

TypeScriptProject.isProject

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

TypeScriptProject.of
