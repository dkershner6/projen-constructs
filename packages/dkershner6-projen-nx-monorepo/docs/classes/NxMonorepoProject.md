[**dkershner6-projen-nx-monorepo**](../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../globals.md) / NxMonorepoProject

# Class: NxMonorepoProject

This project type will bootstrap a monorepo with support for polygot
builds, build caching, dependency graph visualization and much more.

## Pjid

monorepo-ts

## Extends

- [`MonorepoTsProject`](MonorepoTsProject.md)

## Extended by

- [`Node20MonorepoProject`](Node20MonorepoProject.md)

## Constructors

### new NxMonorepoProject()

> **new NxMonorepoProject**(`options`): [`NxMonorepoProject`](NxMonorepoProject.md)

#### Parameters

• **options**: [`NxMonorepoProjectOptions`](../interfaces/NxMonorepoProjectOptions.md)

#### Returns

[`NxMonorepoProject`](NxMonorepoProject.md)

#### Overrides

[`MonorepoTsProject`](MonorepoTsProject.md).[`constructor`](MonorepoTsProject.md#constructors)

## Properties

### artifactsDirectory

> `readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`artifactsDirectory`](MonorepoTsProject.md#artifactsdirectory)

***

### artifactsJavascriptDirectory

> `readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`artifactsJavascriptDirectory`](MonorepoTsProject.md#artifactsjavascriptdirectory)

***

### autoApprove?

> `readonly` `optional` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`autoApprove`](MonorepoTsProject.md#autoapprove)

***

### autoMerge?

> `readonly` `optional` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`autoMerge`](MonorepoTsProject.md#automerge)

***

### buildWorkflow?

> `readonly` `optional` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`buildWorkflow`](MonorepoTsProject.md#buildworkflow)

***

### bundler

> `readonly` **bundler**: `Bundler`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`bundler`](MonorepoTsProject.md#bundler)

***

### commitGenerated

> `readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`commitGenerated`](MonorepoTsProject.md#commitgenerated)

***

### defaultTask?

> `readonly` `optional` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`defaultTask`](MonorepoTsProject.md#defaulttask)

***

### deps

> `readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`deps`](MonorepoTsProject.md#deps)

***

### devContainer

> `readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`devContainer`](MonorepoTsProject.md#devcontainer)

***

### docgen?

> `readonly` `optional` **docgen**: `boolean`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`docgen`](MonorepoTsProject.md#docgen)

***

### docsDirectory

> `readonly` **docsDirectory**: `string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`docsDirectory`](MonorepoTsProject.md#docsdirectory)

***

### eslint?

> `readonly` `optional` **eslint**: `Eslint`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`eslint`](MonorepoTsProject.md#eslint)

***

### gitattributes

> `readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`gitattributes`](MonorepoTsProject.md#gitattributes)

***

### github

> `readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`github`](MonorepoTsProject.md#github)

***

### gitignore

> `readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`gitignore`](MonorepoTsProject.md#gitignore)

***

### gitpod

> `readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`gitpod`](MonorepoTsProject.md#gitpod)

***

### initProject?

> `readonly` `optional` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`initProject`](MonorepoTsProject.md#initproject)

***

### jest?

> `readonly` `optional` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`jest`](MonorepoTsProject.md#jest)

***

### libdir

> `readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`libdir`](MonorepoTsProject.md#libdir)

***

### logger

> `readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`logger`](MonorepoTsProject.md#logger)

***

### name

> `readonly` **name**: `string`

Project name.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`name`](MonorepoTsProject.md#name)

***

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`node`](MonorepoTsProject.md#node)

***

### nodeVersion?

> `protected` `readonly` `optional` **nodeVersion**: `string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`nodeVersion`](MonorepoTsProject.md#nodeversion)

***

### npmignore?

> `readonly` `optional` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`npmignore`](MonorepoTsProject.md#npmignore)

***

### nxConfigurator

> `readonly` **nxConfigurator**: [`NxConfigurator`](NxConfigurator.md)

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`nxConfigurator`](MonorepoTsProject.md#nxconfigurator)

***

### outdir

> `readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`outdir`](MonorepoTsProject.md#outdir)

***

### package

> `readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`package`](MonorepoTsProject.md#package)

***

### parent?

> `readonly` `optional` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`parent`](MonorepoTsProject.md#parent)

***

### prettier?

> `readonly` `optional` **prettier**: `Prettier`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`prettier`](MonorepoTsProject.md#prettier)

***

### projectBuild

> `readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`projectBuild`](MonorepoTsProject.md#projectbuild)

***

### projectType

> `readonly` **projectType**: `ProjectType`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`projectType`](MonorepoTsProject.md#projecttype)

***

### ~~publisher?~~

> `readonly` `optional` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

#### Deprecated

use `release.publisher`.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`publisher`](MonorepoTsProject.md#publisher)

***

### release?

> `readonly` `optional` **release**: `Release`

Release management.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`release`](MonorepoTsProject.md#release)

***

### runScriptCommand

> `readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`runScriptCommand`](MonorepoTsProject.md#runscriptcommand)

***

### srcdir

> `readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`srcdir`](MonorepoTsProject.md#srcdir)

***

### tasks

> `readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`tasks`](MonorepoTsProject.md#tasks)

***

### testdir

> `readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`testdir`](MonorepoTsProject.md#testdir)

***

### tsconfig?

> `readonly` `optional` **tsconfig**: `TypescriptConfig`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`tsconfig`](MonorepoTsProject.md#tsconfig)

***

### tsconfigDev

> `readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`tsconfigDev`](MonorepoTsProject.md#tsconfigdev)

***

### tsconfigEslint?

> `readonly` `optional` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`tsconfigEslint`](MonorepoTsProject.md#tsconfigeslint)

***

### upgradeWorkflow?

> `readonly` `optional` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`upgradeWorkflow`](MonorepoTsProject.md#upgradeworkflow)

***

### vscode

> `readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`vscode`](MonorepoTsProject.md#vscode)

***

### watchTask

> `readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`watchTask`](MonorepoTsProject.md#watchtask)

***

### workflowBootstrapSteps

> `protected` `readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`workflowBootstrapSteps`](MonorepoTsProject.md#workflowbootstrapsteps)

***

### workflowPackageCache

> `protected` `readonly` **workflowPackageCache**: `boolean`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`workflowPackageCache`](MonorepoTsProject.md#workflowpackagecache)

***

### DEFAULT\_TASK

> `readonly` `static` **DEFAULT\_TASK**: `"default"` = `"default"`

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`DEFAULT_TASK`](MonorepoTsProject.md#default_task)

***

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

> `readonly` `static` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: "^.+\\.\[t\]sx?$" = `"^.+\\.[t]sx?$"`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`DEFAULT_TS_JEST_TRANFORM_PATTERN`](MonorepoTsProject.md#default_ts_jest_tranform_pattern)

## Accessors

### allowLibraryDependencies

> `get` **allowLibraryDependencies**(): `boolean`

#### Deprecated

use `package.allowLibraryDependencies`

#### Returns

`boolean`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`allowLibraryDependencies`](MonorepoTsProject.md#allowlibrarydependencies)

***

### buildTask

> `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`buildTask`](MonorepoTsProject.md#buildtask)

***

### buildWorkflowJobId

> `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`buildWorkflowJobId`](MonorepoTsProject.md#buildworkflowjobid)

***

### compileTask

> `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`compileTask`](MonorepoTsProject.md#compiletask)

***

### components

> `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`components`](MonorepoTsProject.md#components)

***

### ejected

> `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`ejected`](MonorepoTsProject.md#ejected)

***

### entrypoint

> `get` **entrypoint**(): `string`

#### Deprecated

use `package.entrypoint`

#### Returns

`string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`entrypoint`](MonorepoTsProject.md#entrypoint)

***

### files

> `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`files`](MonorepoTsProject.md#files)

***

### manifest

> `get` **manifest**(): `any`

#### Deprecated

use `package.addField(x, y)`

#### Returns

`any`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`manifest`](MonorepoTsProject.md#manifest)

***

### maxNodeVersion

> `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`maxNodeVersion`](MonorepoTsProject.md#maxnodeversion)

***

### minNodeVersion

> `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`minNodeVersion`](MonorepoTsProject.md#minnodeversion)

***

### npmrc

> `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`npmrc`](MonorepoTsProject.md#npmrc)

***

### nx

> `get` **nx**(): [`NxWorkspace`](NxWorkspace.md)

Return the NxWorkspace instance. This should be implemented using a getter.

#### Returns

[`NxWorkspace`](NxWorkspace.md)

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`nx`](MonorepoTsProject.md#nx)

***

### packageManager

> `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Deprecated

use `package.packageManager`

#### Returns

`NodePackageManager`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`packageManager`](MonorepoTsProject.md#packagemanager)

***

### packageTask

> `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`packageTask`](MonorepoTsProject.md#packagetask)

***

### postCompileTask

> `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`postCompileTask`](MonorepoTsProject.md#postcompiletask)

***

### preCompileTask

> `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`preCompileTask`](MonorepoTsProject.md#precompiletask)

***

### projenCommand

> `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`projenCommand`](MonorepoTsProject.md#projencommand)

***

### root

> `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`root`](MonorepoTsProject.md#root)

***

### sortedSubProjects

> `get` **sortedSubProjects**(): `Project`[]

Get consistently sorted list of subprojects

#### Returns

`Project`[]

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`sortedSubProjects`](MonorepoTsProject.md#sortedsubprojects)

***

### subprojects

> `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`subprojects`](MonorepoTsProject.md#subprojects)

***

### testTask

> `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`testTask`](MonorepoTsProject.md#testtask)

## Methods

### addBins()

> **addBins**(`bins`): `void`

#### Parameters

• **bins**: `Record`\<`string`, `string`\>

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addBins`](MonorepoTsProject.md#addbins)

***

### addBundledDeps()

> **addBundledDeps**(...`deps`): `void`

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

#### Parameters

• ...**deps**: `string`[]

Names modules to install. By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addBundledDeps`](MonorepoTsProject.md#addbundleddeps)

***

### ~~addCompileCommand()~~

> **addCompileCommand**(...`commands`): `void`

DEPRECATED

#### Parameters

• ...**commands**: `string`[]

#### Returns

`void`

#### Deprecated

use `project.compileTask.exec()`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addCompileCommand`](MonorepoTsProject.md#addcompilecommand)

***

### addDeps()

> **addDeps**(...`deps`): `void`

Defines normal dependencies.

#### Parameters

• ...**deps**: `string`[]

Names modules to install. By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addDeps`](MonorepoTsProject.md#adddeps)

***

### addDevDeps()

> **addDevDeps**(...`deps`): `void`

Defines development/test dependencies.

#### Parameters

• ...**deps**: `string`[]

Names modules to install. By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addDevDeps`](MonorepoTsProject.md#adddevdeps)

***

### addExcludeFromCleanup()

> **addExcludeFromCleanup**(...`globs`): `void`

Exclude the matching files from pre-synth cleanup. Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

#### Parameters

• ...**globs**: `string`[]

The glob patterns to match

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addExcludeFromCleanup`](MonorepoTsProject.md#addexcludefromcleanup)

***

### addFields()

> **addFields**(`fields`): `void`

Directly set fields in `package.json`.

#### Parameters

• **fields**

The fields to set

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addFields`](MonorepoTsProject.md#addfields)

***

### addGitIgnore()

> **addGitIgnore**(`pattern`): `void`

Adds a .gitignore pattern.

#### Parameters

• **pattern**: `string`

The glob pattern to ignore.

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addGitIgnore`](MonorepoTsProject.md#addgitignore)

***

### addImplicitDependency()

> **addImplicitDependency**(`dependent`, `dependee`): `void`

Create an implicit dependency between two Projects. This is typically
used in polygot repos where a Typescript project wants a build dependency
on a Python project as an example.

#### Parameters

• **dependent**: `Project`

project you want to have the dependency.

• **dependee**: `string` \| `Project`

project you wish to depend on.

#### Returns

`void`

#### Throws

error if this is called on a dependent which does not have a NXProject component attached.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addImplicitDependency`](MonorepoTsProject.md#addimplicitdependency)

***

### addJavaDependency()

> **addJavaDependency**(`dependent`, `dependee`): `void`

Adds a dependency between two Java Projects in the monorepo.

#### Parameters

• **dependent**: `JavaProject`

project you want to have the dependency

• **dependee**: `JavaProject`

project you wish to depend on

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addJavaDependency`](MonorepoTsProject.md#addjavadependency)

***

### addKeywords()

> **addKeywords**(...`keywords`): `void`

Adds keywords to package.json (deduplicated)

#### Parameters

• ...**keywords**: `string`[]

The keywords to add

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addKeywords`](MonorepoTsProject.md#addkeywords)

***

### addNxRunManyTask()

> **addNxRunManyTask**(`name`, `options`): `Task`

Add project task that executes `npx nx run-many ...` style command.

#### Parameters

• **name**: `string`

task name

• **options**: `RunManyOptions`

options

#### Returns

`Task`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addNxRunManyTask`](MonorepoTsProject.md#addnxrunmanytask)

***

### addPackageIgnore()

> **addPackageIgnore**(`pattern`): `void`

Adds patterns to be ignored by npm.

#### Parameters

• **pattern**: `string`

The pattern to ignore.

#### Returns

`void`

#### Remarks

If you are having trouble getting an ignore to populate, try using your construct or component's preSynthesize method to properly delay calling this method.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addPackageIgnore`](MonorepoTsProject.md#addpackageignore)

***

### addPeerDeps()

> **addPeerDeps**(...`deps`): `void`

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

#### Parameters

• ...**deps**: `string`[]

Names modules to install. By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addPeerDeps`](MonorepoTsProject.md#addpeerdeps)

***

### addPythonPoetryDependency()

> **addPythonPoetryDependency**(`dependent`, `dependee`): `void`

Adds a dependency between two Python Projects in the monorepo. The dependent must have Poetry enabled.

#### Parameters

• **dependent**: `PythonProject`

project you want to have the dependency (must be a Poetry Python Project)

• **dependee**: `PythonProject`

project you wish to depend on

#### Returns

`void`

#### Throws

error if the dependent does not have Poetry enabled

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addPythonPoetryDependency`](MonorepoTsProject.md#addpythonpoetrydependency)

***

### addScripts()

> **addScripts**(`scripts`): `void`

Replaces the contents of multiple npm package.json scripts.

#### Parameters

• **scripts**

The scripts to set

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addScripts`](MonorepoTsProject.md#addscripts)

***

### addTask()

> **addTask**(`name`, `props`?): `Task`

Adds a new task to this project. This will fail if the project already has
a task with this name.

#### Parameters

• **name**: `string`

The task name to add

• **props?**: `TaskOptions`

Task properties

#### Returns

`Task`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addTask`](MonorepoTsProject.md#addtask)

***

### ~~addTestCommand()~~

> **addTestCommand**(...`commands`): `void`

DEPRECATED

#### Parameters

• ...**commands**: `string`[]

#### Returns

`void`

#### Deprecated

use `project.testTask.exec()`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addTestCommand`](MonorepoTsProject.md#addtestcommand)

***

### ~~addTip()~~

> **addTip**(`message`): `void`

Prints a "tip" message during synthesis.

#### Parameters

• **message**: `string`

The message

#### Returns

`void`

#### Deprecated

- use `project.logger.info(message)` to show messages during synthesis

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addTip`](MonorepoTsProject.md#addtip)

***

### addWorkspacePackages()

> **addWorkspacePackages**(...`packageGlobs`): `void`

Add one or more additional package globs to the workspace.

#### Parameters

• ...**packageGlobs**: `string`[]

paths to the package to include in the workspace (for example packages/my-package)

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`addWorkspacePackages`](MonorepoTsProject.md#addworkspacepackages)

***

### annotateGenerated()

> **annotateGenerated**(`glob`): `void`

Marks the provided file(s) as being generated. This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

#### Parameters

• **glob**: `string`

the glob pattern to match (could be a file path).

#### Returns

`void`

#### See

https://github.com/github/linguist/blob/master/docs/overrides.md

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`annotateGenerated`](MonorepoTsProject.md#annotategenerated)

***

### composeNxRunManyCommand()

> **composeNxRunManyCommand**(`options`): `string`[]

Helper to format `npx nx run-many ...` style command

#### Parameters

• **options**: `RunManyOptions`

#### Returns

`string`[]

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`composeNxRunManyCommand`](MonorepoTsProject.md#composenxrunmanycommand)

***

### execNxRunManyCommand()

> **execNxRunManyCommand**(`options`): `string`

Helper to format `npx nx run-many ...` style command execution in package manager.

#### Parameters

• **options**: `RunManyOptions`

#### Returns

`string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`execNxRunManyCommand`](MonorepoTsProject.md#execnxrunmanycommand)

***

### ~~hasScript()~~

> **hasScript**(`name`): `boolean`

Indicates if a script by the name name is defined.

#### Parameters

• **name**: `string`

The name of the script

#### Returns

`boolean`

#### Deprecated

Use `project.tasks.tryFind(name)`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`hasScript`](MonorepoTsProject.md#hasscript)

***

### linkLocalWorkspaceBins()

> `protected` **linkLocalWorkspaceBins**(): `void`

Create symbolic links to all local workspace bins. This enables the usage of bins the same
way as consumers of the packages have when installing from the registry.

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`linkLocalWorkspaceBins`](MonorepoTsProject.md#linklocalworkspacebins)

***

### postSynthesize()

> **postSynthesize**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`postSynthesize`](MonorepoTsProject.md#postsynthesize)

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Overrides

[`MonorepoTsProject`](MonorepoTsProject.md).[`preSynthesize`](MonorepoTsProject.md#presynthesize)

***

### removeScript()

> **removeScript**(`name`): `void`

Removes the npm script (always successful).

#### Parameters

• **name**: `string`

The name of the script.

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`removeScript`](MonorepoTsProject.md#removescript)

***

### removeTask()

> **removeTask**(`name`): `undefined` \| `Task`

Removes a task from a project.

#### Parameters

• **name**: `string`

The name of the task to remove.

#### Returns

`undefined` \| `Task`

The `Task` that was removed, otherwise `undefined`.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`removeTask`](MonorepoTsProject.md#removetask)

***

### renderWorkflowSetup()

> **renderWorkflowSetup**(`options`?): `JobStep`[]

Returns the set of workflow steps which should be executed to bootstrap a
workflow.

#### Parameters

• **options?**: `RenderWorkflowSetupOptions`

Options.

#### Returns

`JobStep`[]

Job steps

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`renderWorkflowSetup`](MonorepoTsProject.md#renderworkflowsetup)

***

### runTaskCommand()

> **runTaskCommand**(`task`): `string`

Returns the shell command to execute in order to run a task. This will
typically be `npx projen TASK`.

#### Parameters

• **task**: `Task`

The task for which the command is required

#### Returns

`string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`runTaskCommand`](MonorepoTsProject.md#runtaskcommand)

***

### setScript()

> **setScript**(`name`, `command`): `void`

Replaces the contents of an npm package.json script.

#### Parameters

• **name**: `string`

The script name

• **command**: `string`

The command to execute

#### Returns

`void`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`setScript`](MonorepoTsProject.md#setscript)

***

### synth()

> **synth**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`synth`](MonorepoTsProject.md#synth)

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`toString`](MonorepoTsProject.md#tostring)

***

### tryFindFile()

> **tryFindFile**(`filePath`): `undefined` \| `FileBase`

Finds a file at the specified relative path within this project and all
its subprojects.

#### Parameters

• **filePath**: `string`

The file path. If this path is relative, it will be resolved
from the root of _this_ project.

#### Returns

`undefined` \| `FileBase`

a `FileBase` or undefined if there is no file in that path

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`tryFindFile`](MonorepoTsProject.md#tryfindfile)

***

### ~~tryFindJsonFile()~~

> **tryFindJsonFile**(`filePath`): `undefined` \| `JsonFile`

Finds a json file by name.

#### Parameters

• **filePath**: `string`

The file path.

#### Returns

`undefined` \| `JsonFile`

#### Deprecated

use `tryFindObjectFile`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`tryFindJsonFile`](MonorepoTsProject.md#tryfindjsonfile)

***

### tryFindObjectFile()

> **tryFindObjectFile**(`filePath`): `undefined` \| `ObjectFile`

Finds an object file (like JsonFile, YamlFile, etc.) by name.

#### Parameters

• **filePath**: `string`

The file path.

#### Returns

`undefined` \| `ObjectFile`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`tryFindObjectFile`](MonorepoTsProject.md#tryfindobjectfile)

***

### tryRemoveFile()

> **tryRemoveFile**(`filePath`): `undefined` \| `FileBase`

Finds a file at the specified relative path within this project and removes
it.

#### Parameters

• **filePath**: `string`

The file path. If this path is relative, it will be
resolved from the root of _this_ project.

#### Returns

`undefined` \| `FileBase`

a `FileBase` if the file was found and removed, or undefined if
the file was not found.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`tryRemoveFile`](MonorepoTsProject.md#tryremovefile)

***

### isConstruct()

> `static` **isConstruct**(`x`): `x is Construct`

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

• **x**: `any`

Any object

#### Returns

`x is Construct`

true if `x` is an object created from a class which extends `Construct`.

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`isConstruct`](MonorepoTsProject.md#isconstruct)

***

### isProject()

> `static` **isProject**(`x`): `x is Project`

Test whether the given construct is a project.

#### Parameters

• **x**: `any`

#### Returns

`x is Project`

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`isProject`](MonorepoTsProject.md#isproject)

***

### of()

> `static` **of**(`construct`): `Project`

Find the closest ancestor project for given construct.
When given a project, this it the project itself.

#### Parameters

• **construct**: `IConstruct`

#### Returns

`Project`

#### Throws

when no project is found in the path to the root

#### Inherited from

[`MonorepoTsProject`](MonorepoTsProject.md).[`of`](MonorepoTsProject.md#of)
