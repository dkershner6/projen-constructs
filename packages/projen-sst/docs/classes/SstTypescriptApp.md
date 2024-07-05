[**projen-sst**](../README.md) • **Docs**

***

[projen-sst](../globals.md) / SstTypescriptApp

# Class: SstTypescriptApp

## Extends

- `AwsCdkTypeScriptApp`

## Constructors

### new SstTypescriptApp()

> **new SstTypescriptApp**(`options`): [`SstTypescriptApp`](SstTypescriptApp.md)

#### Parameters

• **options**: [`SstTypescriptAppOptions`](../interfaces/SstTypescriptAppOptions.md)

#### Returns

[`SstTypescriptApp`](SstTypescriptApp.md)

#### Overrides

`awscdk.AwsCdkTypeScriptApp.constructor`

## Properties

### appEntrypoint

> `readonly` **appEntrypoint**: `string`

The CDK app entrypoint

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.appEntrypoint`

***

### artifactsDirectory

> `readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.artifactsDirectory`

***

### artifactsJavascriptDirectory

> `readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.artifactsJavascriptDirectory`

***

### autoApprove?

> `readonly` `optional` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.autoApprove`

***

### autoMerge?

> `readonly` `optional` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.autoMerge`

***

### branchNameToSstStageMap?

> `readonly` `optional` **branchNameToSstStageMap**: `Record`\<`string`, `string`\>

***

### buildWorkflow?

> `readonly` `optional` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.buildWorkflow`

***

### bundler

> `readonly` **bundler**: `Bundler`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.bundler`

***

### cdkConfig

> `readonly` **cdkConfig**: `CdkConfig`

cdk.json configuration.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.cdkConfig`

***

### cdkDeps

> `readonly` **cdkDeps**: `AwsCdkDeps`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.cdkDeps`

***

### cdkTasks

> `readonly` **cdkTasks**: `CdkTasks`

Common CDK tasks.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.cdkTasks`

***

### commitGenerated

> `readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.commitGenerated`

***

### defaultTask?

> `readonly` `optional` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.defaultTask`

***

### deps

> `readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.deps`

***

### devContainer

> `readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.devContainer`

***

### docgen?

> `readonly` `optional` **docgen**: `boolean`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.docgen`

***

### docsDirectory

> `readonly` **docsDirectory**: `string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.docsDirectory`

***

### eslint?

> `readonly` `optional` **eslint**: `Eslint`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.eslint`

***

### gitattributes

> `readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.gitattributes`

***

### github

> `readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.github`

***

### gitignore

> `readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.gitignore`

***

### gitpod

> `readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.gitpod`

***

### initProject?

> `readonly` `optional` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.initProject`

***

### jest?

> `readonly` `optional` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.jest`

***

### libdir

> `readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.libdir`

***

### logger

> `readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.logger`

***

### name

> `readonly` **name**: `string`

Project name.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.name`

***

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.node`

***

### nodeVersion?

> `protected` `readonly` `optional` **nodeVersion**: `string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.nodeVersion`

***

### npmignore?

> `readonly` `optional` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.npmignore`

***

### outdir

> `readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.outdir`

***

### package

> `readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.package`

***

### parent?

> `readonly` `optional` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.parent`

***

### prettier?

> `readonly` `optional` **prettier**: `Prettier`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.prettier`

***

### projectBuild

> `readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.projectBuild`

***

### projectType

> `readonly` **projectType**: `ProjectType`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.projectType`

***

### ~~publisher?~~

> `readonly` `optional` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

#### Deprecated

use `release.publisher`.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.publisher`

***

### release?

> `readonly` `optional` **release**: `Release`

Release management.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.release`

***

### runScriptCommand

> `readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.runScriptCommand`

***

### srcdir

> `readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.srcdir`

***

### sstConfig

> `readonly` **sstConfig**: [`SstConfiguration`](../interfaces/SstConfiguration.md)

***

### sstVersion

> `readonly` **sstVersion**: `string`

***

### tasks

> `readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.tasks`

***

### testdir

> `readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.testdir`

***

### tsconfig?

> `readonly` `optional` **tsconfig**: `TypescriptConfig`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.tsconfig`

***

### tsconfigDev

> `readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.tsconfigDev`

***

### tsconfigEslint?

> `readonly` `optional` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.tsconfigEslint`

***

### upgradeWorkflow?

> `readonly` `optional` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.upgradeWorkflow`

***

### vscode

> `readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.vscode`

***

### watchTask

> `readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.watchTask`

***

### workflowBootstrapSteps

> `protected` `readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.workflowBootstrapSteps`

***

### workflowPackageCache

> `protected` `readonly` **workflowPackageCache**: `boolean`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.workflowPackageCache`

***

### DEFAULT\_TASK

> `readonly` `static` **DEFAULT\_TASK**: `"default"` = `"default"`

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.DEFAULT_TASK`

***

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

> `readonly` `static` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: "^.+\\.\[t\]sx?$" = `"^.+\\.[t]sx?$"`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.DEFAULT_TS_JEST_TRANFORM_PATTERN`

## Accessors

### allowLibraryDependencies

> `get` **allowLibraryDependencies**(): `boolean`

#### Deprecated

use `package.allowLibraryDependencies`

#### Returns

`boolean`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.allowLibraryDependencies`

***

### buildTask

> `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.buildTask`

***

### buildWorkflowJobId

> `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.buildWorkflowJobId`

***

### cdkVersion

> `get` **cdkVersion**(): `string`

The CDK version this app is using.

#### Returns

`string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.cdkVersion`

***

### compileTask

> `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.compileTask`

***

### components

> `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.components`

***

### ejected

> `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.ejected`

***

### entrypoint

> `get` **entrypoint**(): `string`

#### Deprecated

use `package.entrypoint`

#### Returns

`string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.entrypoint`

***

### files

> `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.files`

***

### manifest

> `get` **manifest**(): `any`

#### Deprecated

use `package.addField(x, y)`

#### Returns

`any`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.manifest`

***

### maxNodeVersion

> `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.maxNodeVersion`

***

### minNodeVersion

> `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.minNodeVersion`

***

### npmrc

> `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.npmrc`

***

### packageManager

> `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Deprecated

use `package.packageManager`

#### Returns

`NodePackageManager`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.packageManager`

***

### packageTask

> `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.packageTask`

***

### postCompileTask

> `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.postCompileTask`

***

### preCompileTask

> `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.preCompileTask`

***

### projenCommand

> `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.projenCommand`

***

### root

> `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.root`

***

### subprojects

> `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.subprojects`

***

### testTask

> `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.testTask`

## Methods

### addBins()

> **addBins**(`bins`): `void`

#### Parameters

• **bins**: `Record`\<`string`, `string`\>

#### Returns

`void`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.addBins`

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

`awscdk.AwsCdkTypeScriptApp.addBundledDeps`

***

### addCdkDependency()

> **addCdkDependency**(...`modules`): `void`

Adds an AWS CDK module dependencies

#### Parameters

• ...**modules**: `string`[]

The list of modules to depend on

#### Returns

`void`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.addCdkDependency`

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

`awscdk.AwsCdkTypeScriptApp.addCompileCommand`

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

`awscdk.AwsCdkTypeScriptApp.addDeps`

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

`awscdk.AwsCdkTypeScriptApp.addDevDeps`

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

`awscdk.AwsCdkTypeScriptApp.addExcludeFromCleanup`

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

`awscdk.AwsCdkTypeScriptApp.addFields`

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

`awscdk.AwsCdkTypeScriptApp.addGitIgnore`

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

`awscdk.AwsCdkTypeScriptApp.addKeywords`

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

`awscdk.AwsCdkTypeScriptApp.addPackageIgnore`

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

`awscdk.AwsCdkTypeScriptApp.addPeerDeps`

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

`awscdk.AwsCdkTypeScriptApp.addScripts`

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

`awscdk.AwsCdkTypeScriptApp.addTask`

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

`awscdk.AwsCdkTypeScriptApp.addTestCommand`

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

`awscdk.AwsCdkTypeScriptApp.addTip`

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

`awscdk.AwsCdkTypeScriptApp.annotateGenerated`

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

`awscdk.AwsCdkTypeScriptApp.hasScript`

***

### postSynthesize()

> **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.preSynthesize`

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

`awscdk.AwsCdkTypeScriptApp.removeScript`

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

`awscdk.AwsCdkTypeScriptApp.removeTask`

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

`awscdk.AwsCdkTypeScriptApp.renderWorkflowSetup`

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

`awscdk.AwsCdkTypeScriptApp.runTaskCommand`

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

`awscdk.AwsCdkTypeScriptApp.setScript`

***

### synth()

> **synth**(): `void`

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

`awscdk.AwsCdkTypeScriptApp.synth`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.toString`

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

`awscdk.AwsCdkTypeScriptApp.tryFindFile`

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

`awscdk.AwsCdkTypeScriptApp.tryFindJsonFile`

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

`awscdk.AwsCdkTypeScriptApp.tryFindObjectFile`

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

`awscdk.AwsCdkTypeScriptApp.tryRemoveFile`

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

`awscdk.AwsCdkTypeScriptApp.isConstruct`

***

### isProject()

> `static` **isProject**(`x`): `x is Project`

Test whether the given construct is a project.

#### Parameters

• **x**: `any`

#### Returns

`x is Project`

#### Inherited from

`awscdk.AwsCdkTypeScriptApp.isProject`

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

`awscdk.AwsCdkTypeScriptApp.of`
