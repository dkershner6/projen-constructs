[**dkershner6-projen-awscdk-nextjs-app**](../README.md) • **Docs**

***

[dkershner6-projen-awscdk-nextjs-app](../globals.md) / Node20AwsCdkNextjsApp

# Class: Node20AwsCdkNextjsApp

## Extends

- `Node20AwsCdkApp`

## Constructors

### new Node20AwsCdkNextjsApp()

> **new Node20AwsCdkNextjsApp**(`options`): [`Node20AwsCdkNextjsApp`](Node20AwsCdkNextjsApp.md)

#### Parameters

• **options**: [`Node20AwsCdkNextjsAppOptions`](../interfaces/Node20AwsCdkNextjsAppOptions.md)

#### Returns

[`Node20AwsCdkNextjsApp`](Node20AwsCdkNextjsApp.md)

#### Overrides

`Node20AwsCdkApp.constructor`

## Properties

### appEntrypoint

> `readonly` **appEntrypoint**: `string`

The CDK app entrypoint

#### Inherited from

`Node20AwsCdkApp.appEntrypoint`

***

### artifactsDirectory

> `readonly` **artifactsDirectory**: `string`

The build output directory. An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

#### Inherited from

`Node20AwsCdkApp.artifactsDirectory`

***

### artifactsJavascriptDirectory

> `readonly` **artifactsJavascriptDirectory**: `string`

The location of the npm tarball after build (`${artifactsDirectory}/js`).

#### Inherited from

`Node20AwsCdkApp.artifactsJavascriptDirectory`

***

### autoApprove?

> `readonly` `optional` **autoApprove**: `AutoApprove`

Auto approve set up for this project.

#### Inherited from

`Node20AwsCdkApp.autoApprove`

***

### autoMerge?

> `readonly` `optional` **autoMerge**: `AutoMerge`

Component that sets up mergify for merging approved pull requests.

#### Inherited from

`Node20AwsCdkApp.autoMerge`

***

### buildWorkflow?

> `readonly` `optional` **buildWorkflow**: `BuildWorkflow`

The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.

#### Inherited from

`Node20AwsCdkApp.buildWorkflow`

***

### bundler

> `readonly` **bundler**: `Bundler`

#### Inherited from

`Node20AwsCdkApp.bundler`

***

### cdkConfig

> `readonly` **cdkConfig**: `CdkConfig`

cdk.json configuration.

#### Inherited from

`Node20AwsCdkApp.cdkConfig`

***

### cdkDeps

> `readonly` **cdkDeps**: `AwsCdkDeps`

#### Inherited from

`Node20AwsCdkApp.cdkDeps`

***

### cdkTasks

> `readonly` **cdkTasks**: `CdkTasks`

Common CDK tasks.

#### Inherited from

`Node20AwsCdkApp.cdkTasks`

***

### commitGenerated

> `readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Inherited from

`Node20AwsCdkApp.commitGenerated`

***

### defaultTask?

> `readonly` `optional` **defaultTask**: `Task`

This is the "default" task, the one that executes "projen". Undefined if
the project is being ejected.

#### Inherited from

`Node20AwsCdkApp.defaultTask`

***

### deps

> `readonly` **deps**: `Dependencies`

Project dependencies.

#### Inherited from

`Node20AwsCdkApp.deps`

***

### devContainer

> `readonly` **devContainer**: `undefined` \| `DevContainer`

Access for .devcontainer.json (used for GitHub Codespaces)

This will be `undefined` if devContainer boolean is false

#### Inherited from

`Node20AwsCdkApp.devContainer`

***

### docgen?

> `readonly` `optional` **docgen**: `boolean`

#### Inherited from

`Node20AwsCdkApp.docgen`

***

### docsDirectory

> `readonly` **docsDirectory**: `string`

#### Inherited from

`Node20AwsCdkApp.docsDirectory`

***

### eslint?

> `readonly` `optional` **eslint**: `Eslint`

#### Inherited from

`Node20AwsCdkApp.eslint`

***

### gitattributes

> `readonly` **gitattributes**: `GitAttributesFile`

The .gitattributes file for this repository.

#### Inherited from

`Node20AwsCdkApp.gitattributes`

***

### github

> `readonly` **github**: `undefined` \| `GitHub`

Access all github components.

This will be `undefined` for subprojects.

#### Inherited from

`Node20AwsCdkApp.github`

***

### gitignore

> `readonly` **gitignore**: `IgnoreFile`

.gitignore

#### Inherited from

`Node20AwsCdkApp.gitignore`

***

### gitpod

> `readonly` **gitpod**: `undefined` \| `Gitpod`

Access for Gitpod

This will be `undefined` if gitpod boolean is false

#### Inherited from

`Node20AwsCdkApp.gitpod`

***

### initProject?

> `readonly` `optional` **initProject**: `InitProject`

The options used when this project is bootstrapped via `projen new`. It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

#### Inherited from

`Node20AwsCdkApp.initProject`

***

### jest?

> `readonly` `optional` **jest**: `Jest`

The Jest configuration (if enabled)

#### Inherited from

`Node20AwsCdkApp.jest`

***

### jestTransformer

> `readonly` **jestTransformer**: `JestTransformer`

#### Inherited from

`Node20AwsCdkApp.jestTransformer`

***

### libdir

> `readonly` **libdir**: `string`

The directory in which compiled .js files reside.

#### Inherited from

`Node20AwsCdkApp.libdir`

***

### logger

> `readonly` **logger**: `Logger`

Logging utilities.

#### Inherited from

`Node20AwsCdkApp.logger`

***

### name

> `readonly` **name**: `string`

Project name.

#### Inherited from

`Node20AwsCdkApp.name`

***

### nextjsTsconfig

> `readonly` **nextjsTsconfig**: `TypescriptConfig`

***

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`Node20AwsCdkApp.node`

***

### nodeVersion?

> `protected` `readonly` `optional` **nodeVersion**: `string`

#### Inherited from

`Node20AwsCdkApp.nodeVersion`

***

### npmignore?

> `readonly` `optional` **npmignore**: `IgnoreFile`

The .npmignore file.

#### Inherited from

`Node20AwsCdkApp.npmignore`

***

### outdir

> `readonly` **outdir**: `string`

Absolute output directory of this project.

#### Inherited from

`Node20AwsCdkApp.outdir`

***

### package

> `readonly` **package**: `NodePackage`

API for managing the node package.

#### Inherited from

`Node20AwsCdkApp.package`

***

### parent?

> `readonly` `optional` **parent**: `Project`

A parent project. If undefined, this is the root project.

#### Inherited from

`Node20AwsCdkApp.parent`

***

### prettier?

> `readonly` `optional` **prettier**: `Prettier`

#### Inherited from

`Node20AwsCdkApp.prettier`

***

### projectBuild

> `readonly` **projectBuild**: `ProjectBuild`

Manages the build process of the project.

#### Inherited from

`Node20AwsCdkApp.projectBuild`

***

### projectType

> `readonly` **projectType**: `ProjectType`

#### Inherited from

`Node20AwsCdkApp.projectType`

***

### ~~publisher?~~

> `readonly` `optional` **publisher**: `Publisher`

Package publisher. This will be `undefined` if the project does not have a
release workflow.

#### Deprecated

use `release.publisher`.

#### Inherited from

`Node20AwsCdkApp.publisher`

***

### release?

> `readonly` `optional` **release**: `Release`

Release management.

#### Inherited from

`Node20AwsCdkApp.release`

***

### runScriptCommand

> `readonly` **runScriptCommand**: `string`

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

#### Inherited from

`Node20AwsCdkApp.runScriptCommand`

***

### srcdir

> `readonly` **srcdir**: `string`

The directory in which the .ts sources reside.

#### Inherited from

`Node20AwsCdkApp.srcdir`

***

### tasks

> `readonly` **tasks**: `Tasks`

Project tasks.

#### Inherited from

`Node20AwsCdkApp.tasks`

***

### testdir

> `readonly` **testdir**: `string`

The directory in which tests reside.

#### Inherited from

`Node20AwsCdkApp.testdir`

***

### tsconfig?

> `readonly` `optional` **tsconfig**: `TypescriptConfig`

#### Inherited from

`Node20AwsCdkApp.tsconfig`

***

### tsconfigDev

> `readonly` **tsconfigDev**: `TypescriptConfig`

A typescript configuration file which covers all files (sources, tests, projen).

#### Inherited from

`Node20AwsCdkApp.tsconfigDev`

***

### tsconfigEslint?

> `readonly` `optional` **tsconfigEslint**: `TypescriptConfig`

#### Inherited from

`Node20AwsCdkApp.tsconfigEslint`

***

### upgradeWorkflow?

> `readonly` `optional` **upgradeWorkflow**: `UpgradeDependencies`

The upgrade workflow.

#### Inherited from

`Node20AwsCdkApp.upgradeWorkflow`

***

### vscode

> `readonly` **vscode**: `undefined` \| `VsCode`

Access all VSCode components.

This will be `undefined` for subprojects.

#### Inherited from

`Node20AwsCdkApp.vscode`

***

### watchTask

> `readonly` **watchTask**: `Task`

The "watch" task.

#### Inherited from

`Node20AwsCdkApp.watchTask`

***

### workflowBootstrapSteps

> `protected` `readonly` **workflowBootstrapSteps**: `JobStep`[]

#### Inherited from

`Node20AwsCdkApp.workflowBootstrapSteps`

***

### workflowPackageCache

> `protected` `readonly` **workflowPackageCache**: `boolean`

#### Inherited from

`Node20AwsCdkApp.workflowPackageCache`

***

### DEFAULT\_TASK

> `readonly` `static` **DEFAULT\_TASK**: `"default"` = `"default"`

The name of the default task (the task executed when `projen` is run without arguments). Normally
this task should synthesize the project files.

#### Inherited from

`Node20AwsCdkApp.DEFAULT_TASK`

***

### DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN

> `readonly` `static` **DEFAULT\_TS\_JEST\_TRANFORM\_PATTERN**: "^.+\\.\[t\]sx?$" = `"^.+\\.[t]sx?$"`

#### Inherited from

`Node20AwsCdkApp.DEFAULT_TS_JEST_TRANFORM_PATTERN`

## Accessors

### allowLibraryDependencies

> `get` **allowLibraryDependencies**(): `boolean`

#### Deprecated

use `package.allowLibraryDependencies`

#### Returns

`boolean`

#### Inherited from

`Node20AwsCdkApp.allowLibraryDependencies`

***

### buildTask

> `get` **buildTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`Node20AwsCdkApp.buildTask`

***

### buildWorkflowJobId

> `get` **buildWorkflowJobId**(): `undefined` \| `string`

The job ID of the build workflow.

#### Returns

`undefined` \| `string`

#### Inherited from

`Node20AwsCdkApp.buildWorkflowJobId`

***

### cdkVersion

> `get` **cdkVersion**(): `string`

The CDK version this app is using.

#### Returns

`string`

#### Inherited from

`Node20AwsCdkApp.cdkVersion`

***

### compileTask

> `get` **compileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`Node20AwsCdkApp.compileTask`

***

### components

> `get` **components**(): `Component`[]

Returns all the components within this project.

#### Returns

`Component`[]

#### Inherited from

`Node20AwsCdkApp.components`

***

### ejected

> `get` **ejected**(): `boolean`

Whether or not the project is being ejected.

#### Returns

`boolean`

#### Inherited from

`Node20AwsCdkApp.ejected`

***

### entrypoint

> `get` **entrypoint**(): `string`

#### Deprecated

use `package.entrypoint`

#### Returns

`string`

#### Inherited from

`Node20AwsCdkApp.entrypoint`

***

### files

> `get` **files**(): `FileBase`[]

All files in this project.

#### Returns

`FileBase`[]

#### Inherited from

`Node20AwsCdkApp.files`

***

### manifest

> `get` **manifest**(): `any`

#### Deprecated

use `package.addField(x, y)`

#### Returns

`any`

#### Inherited from

`Node20AwsCdkApp.manifest`

***

### maxNodeVersion

> `get` **maxNodeVersion**(): `undefined` \| `string`

Maximum node version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

`Node20AwsCdkApp.maxNodeVersion`

***

### minNodeVersion

> `get` **minNodeVersion**(): `undefined` \| `string`

Minimum node.js version required by this package.

#### Returns

`undefined` \| `string`

#### Inherited from

`Node20AwsCdkApp.minNodeVersion`

***

### npmrc

> `get` **npmrc**(): `NpmConfig`

The .npmrc file

#### Returns

`NpmConfig`

#### Inherited from

`Node20AwsCdkApp.npmrc`

***

### packageManager

> `get` **packageManager**(): `NodePackageManager`

The package manager to use.

#### Deprecated

use `package.packageManager`

#### Returns

`NodePackageManager`

#### Inherited from

`Node20AwsCdkApp.packageManager`

***

### packageTask

> `get` **packageTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`Node20AwsCdkApp.packageTask`

***

### postCompileTask

> `get` **postCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`Node20AwsCdkApp.postCompileTask`

***

### preCompileTask

> `get` **preCompileTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`Node20AwsCdkApp.preCompileTask`

***

### projenCommand

> `get` **projenCommand**(): `string`

The command to use in order to run the projen CLI.

#### Returns

`string`

#### Inherited from

`Node20AwsCdkApp.projenCommand`

***

### root

> `get` **root**(): `Project`

The root project.

#### Returns

`Project`

#### Inherited from

`Node20AwsCdkApp.root`

***

### subprojects

> `get` **subprojects**(): `Project`[]

Returns all the subprojects within this project.

#### Returns

`Project`[]

#### Inherited from

`Node20AwsCdkApp.subprojects`

***

### testTask

> `get` **testTask**(): `Task`

#### Returns

`Task`

#### Inherited from

`Node20AwsCdkApp.testTask`

## Methods

### addBins()

> **addBins**(`bins`): `void`

#### Parameters

• **bins**: `Record`\<`string`, `string`\>

#### Returns

`void`

#### Inherited from

`Node20AwsCdkApp.addBins`

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

`Node20AwsCdkApp.addBundledDeps`

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

`Node20AwsCdkApp.addCdkDependency`

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

`Node20AwsCdkApp.addCompileCommand`

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

`Node20AwsCdkApp.addDeps`

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

`Node20AwsCdkApp.addDevDeps`

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

`Node20AwsCdkApp.addExcludeFromCleanup`

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

`Node20AwsCdkApp.addFields`

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

`Node20AwsCdkApp.addGitIgnore`

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

`Node20AwsCdkApp.addKeywords`

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

`Node20AwsCdkApp.addPackageIgnore`

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

`Node20AwsCdkApp.addPeerDeps`

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

`Node20AwsCdkApp.addScripts`

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

`Node20AwsCdkApp.addTask`

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

`Node20AwsCdkApp.addTestCommand`

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

`Node20AwsCdkApp.addTip`

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

`Node20AwsCdkApp.annotateGenerated`

***

### buildDeployToAwsJobStep()

> `protected` **buildDeployToAwsJobStep**(`deployTask`): `JobStep`

#### Parameters

• **deployTask**: `Task`

#### Returns

`JobStep`

#### Inherited from

`Node20AwsCdkApp.buildDeployToAwsJobStep`

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

`Node20AwsCdkApp.hasScript`

***

### overridePackageTask()

> `protected` **overridePackageTask**(): `void`

#### Returns

`void`

#### Inherited from

`Node20AwsCdkApp.overridePackageTask`

***

### postSynthesize()

> **postSynthesize**(): `void`

Called after all components are synthesized. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`Node20AwsCdkApp.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before all components are synthesized.

#### Returns

`void`

#### Inherited from

`Node20AwsCdkApp.preSynthesize`

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

`Node20AwsCdkApp.removeScript`

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

`Node20AwsCdkApp.removeTask`

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

`Node20AwsCdkApp.renderWorkflowSetup`

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

`Node20AwsCdkApp.runTaskCommand`

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

`Node20AwsCdkApp.setScript`

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

`Node20AwsCdkApp.synth`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`Node20AwsCdkApp.toString`

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

`Node20AwsCdkApp.tryFindFile`

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

`Node20AwsCdkApp.tryFindJsonFile`

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

`Node20AwsCdkApp.tryFindObjectFile`

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

`Node20AwsCdkApp.tryRemoveFile`

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

`Node20AwsCdkApp.isConstruct`

***

### isProject()

> `static` **isProject**(`x`): `x is Project`

Test whether the given construct is a project.

#### Parameters

• **x**: `any`

#### Returns

`x is Project`

#### Inherited from

`Node20AwsCdkApp.isProject`

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

`Node20AwsCdkApp.of`
