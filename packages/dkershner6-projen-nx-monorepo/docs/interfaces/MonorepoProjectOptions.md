[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / MonorepoProjectOptions

# Interface: MonorepoProjectOptions

## Hierarchy

- `MonorepoTsProjectOptions`

  ↳ **`MonorepoProjectOptions`**

## Table of contents

### Properties

- [allowLibraryDependencies](MonorepoProjectOptions.md#allowlibrarydependencies)
- [artifactsDirectory](MonorepoProjectOptions.md#artifactsdirectory)
- [authorEmail](MonorepoProjectOptions.md#authoremail)
- [authorName](MonorepoProjectOptions.md#authorname)
- [authorOrganization](MonorepoProjectOptions.md#authororganization)
- [authorUrl](MonorepoProjectOptions.md#authorurl)
- [autoApproveOptions](MonorepoProjectOptions.md#autoapproveoptions)
- [autoApproveUpgrades](MonorepoProjectOptions.md#autoapproveupgrades)
- [autoDetectBin](MonorepoProjectOptions.md#autodetectbin)
- [autoMerge](MonorepoProjectOptions.md#automerge)
- [autoMergeOptions](MonorepoProjectOptions.md#automergeoptions)
- [bin](MonorepoProjectOptions.md#bin)
- [bugsEmail](MonorepoProjectOptions.md#bugsemail)
- [bugsUrl](MonorepoProjectOptions.md#bugsurl)
- [buildWorkflow](MonorepoProjectOptions.md#buildworkflow)
- [buildWorkflowTriggers](MonorepoProjectOptions.md#buildworkflowtriggers)
- [bundledDeps](MonorepoProjectOptions.md#bundleddeps)
- [bundlerOptions](MonorepoProjectOptions.md#bundleroptions)
- [clobber](MonorepoProjectOptions.md#clobber)
- [codeArtifactOptions](MonorepoProjectOptions.md#codeartifactoptions)
- [codeCov](MonorepoProjectOptions.md#codecov)
- [codeCovTokenSecret](MonorepoProjectOptions.md#codecovtokensecret)
- [commitGenerated](MonorepoProjectOptions.md#commitgenerated)
- [copyrightOwner](MonorepoProjectOptions.md#copyrightowner)
- [copyrightPeriod](MonorepoProjectOptions.md#copyrightperiod)
- [defaultReleaseBranch](MonorepoProjectOptions.md#defaultreleasebranch)
- [dependabot](MonorepoProjectOptions.md#dependabot)
- [dependabotOptions](MonorepoProjectOptions.md#dependabotoptions)
- [deps](MonorepoProjectOptions.md#deps)
- [depsUpgrade](MonorepoProjectOptions.md#depsupgrade)
- [depsUpgradeOptions](MonorepoProjectOptions.md#depsupgradeoptions)
- [description](MonorepoProjectOptions.md#description)
- [devContainer](MonorepoProjectOptions.md#devcontainer)
- [devDeps](MonorepoProjectOptions.md#devdeps)
- [disableNodeWarnings](MonorepoProjectOptions.md#disablenodewarnings)
- [disableTsconfig](MonorepoProjectOptions.md#disabletsconfig)
- [disableTsconfigDev](MonorepoProjectOptions.md#disabletsconfigdev)
- [docgen](MonorepoProjectOptions.md#docgen)
- [docsDirectory](MonorepoProjectOptions.md#docsdirectory)
- [entrypoint](MonorepoProjectOptions.md#entrypoint)
- [entrypointTypes](MonorepoProjectOptions.md#entrypointtypes)
- [eslint](MonorepoProjectOptions.md#eslint)
- [eslintOptions](MonorepoProjectOptions.md#eslintoptions)
- [gitIgnoreOptions](MonorepoProjectOptions.md#gitignoreoptions)
- [gitOptions](MonorepoProjectOptions.md#gitoptions)
- [github](MonorepoProjectOptions.md#github)
- [githubOptions](MonorepoProjectOptions.md#githuboptions)
- [gitignore](MonorepoProjectOptions.md#gitignore)
- [gitpod](MonorepoProjectOptions.md#gitpod)
- [homepage](MonorepoProjectOptions.md#homepage)
- [jest](MonorepoProjectOptions.md#jest)
- [jestOptions](MonorepoProjectOptions.md#jestoptions)
- [jsiiReleaseVersion](MonorepoProjectOptions.md#jsiireleaseversion)
- [keywords](MonorepoProjectOptions.md#keywords)
- [libdir](MonorepoProjectOptions.md#libdir)
- [license](MonorepoProjectOptions.md#license)
- [licensed](MonorepoProjectOptions.md#licensed)
- [logging](MonorepoProjectOptions.md#logging)
- [majorVersion](MonorepoProjectOptions.md#majorversion)
- [maxNodeVersion](MonorepoProjectOptions.md#maxnodeversion)
- [mergify](MonorepoProjectOptions.md#mergify)
- [mergifyOptions](MonorepoProjectOptions.md#mergifyoptions)
- [minMajorVersion](MonorepoProjectOptions.md#minmajorversion)
- [minNodeVersion](MonorepoProjectOptions.md#minnodeversion)
- [monorepoUpgradeDeps](MonorepoProjectOptions.md#monorepoupgradedeps)
- [monorepoUpgradeDepsOptions](MonorepoProjectOptions.md#monorepoupgradedepsoptions)
- [mutableBuild](MonorepoProjectOptions.md#mutablebuild)
- [name](MonorepoProjectOptions.md#name)
- [npmAccess](MonorepoProjectOptions.md#npmaccess)
- [npmDistTag](MonorepoProjectOptions.md#npmdisttag)
- [npmIgnoreOptions](MonorepoProjectOptions.md#npmignoreoptions)
- [npmRegistry](MonorepoProjectOptions.md#npmregistry)
- [npmRegistryUrl](MonorepoProjectOptions.md#npmregistryurl)
- [npmTokenSecret](MonorepoProjectOptions.md#npmtokensecret)
- [npmignore](MonorepoProjectOptions.md#npmignore)
- [npmignoreEnabled](MonorepoProjectOptions.md#npmignoreenabled)
- [outdir](MonorepoProjectOptions.md#outdir)
- [package](MonorepoProjectOptions.md#package)
- [packageManager](MonorepoProjectOptions.md#packagemanager)
- [packageName](MonorepoProjectOptions.md#packagename)
- [parent](MonorepoProjectOptions.md#parent)
- [peerDependencyOptions](MonorepoProjectOptions.md#peerdependencyoptions)
- [peerDeps](MonorepoProjectOptions.md#peerdeps)
- [pnpmVersion](MonorepoProjectOptions.md#pnpmversion)
- [postBuildSteps](MonorepoProjectOptions.md#postbuildsteps)
- [prerelease](MonorepoProjectOptions.md#prerelease)
- [prettier](MonorepoProjectOptions.md#prettier)
- [prettierOptions](MonorepoProjectOptions.md#prettieroptions)
- [projectType](MonorepoProjectOptions.md#projecttype)
- [projenCommand](MonorepoProjectOptions.md#projencommand)
- [projenCredentials](MonorepoProjectOptions.md#projencredentials)
- [projenDevDependency](MonorepoProjectOptions.md#projendevdependency)
- [projenTokenSecret](MonorepoProjectOptions.md#projentokensecret)
- [projenVersion](MonorepoProjectOptions.md#projenversion)
- [projenrcJs](MonorepoProjectOptions.md#projenrcjs)
- [projenrcJsOptions](MonorepoProjectOptions.md#projenrcjsoptions)
- [projenrcJson](MonorepoProjectOptions.md#projenrcjson)
- [projenrcJsonOptions](MonorepoProjectOptions.md#projenrcjsonoptions)
- [projenrcTs](MonorepoProjectOptions.md#projenrcts)
- [projenrcTsOptions](MonorepoProjectOptions.md#projenrctsoptions)
- [publishDryRun](MonorepoProjectOptions.md#publishdryrun)
- [publishTasks](MonorepoProjectOptions.md#publishtasks)
- [pullRequestTemplate](MonorepoProjectOptions.md#pullrequesttemplate)
- [pullRequestTemplateContents](MonorepoProjectOptions.md#pullrequesttemplatecontents)
- [readme](MonorepoProjectOptions.md#readme)
- [releasableCommits](MonorepoProjectOptions.md#releasablecommits)
- [release](MonorepoProjectOptions.md#release)
- [releaseBranches](MonorepoProjectOptions.md#releasebranches)
- [releaseEveryCommit](MonorepoProjectOptions.md#releaseeverycommit)
- [releaseFailureIssue](MonorepoProjectOptions.md#releasefailureissue)
- [releaseFailureIssueLabel](MonorepoProjectOptions.md#releasefailureissuelabel)
- [releaseSchedule](MonorepoProjectOptions.md#releaseschedule)
- [releaseTagPrefix](MonorepoProjectOptions.md#releasetagprefix)
- [releaseToNpm](MonorepoProjectOptions.md#releasetonpm)
- [releaseTrigger](MonorepoProjectOptions.md#releasetrigger)
- [releaseWorkflow](MonorepoProjectOptions.md#releaseworkflow)
- [releaseWorkflowName](MonorepoProjectOptions.md#releaseworkflowname)
- [releaseWorkflowSetupSteps](MonorepoProjectOptions.md#releaseworkflowsetupsteps)
- [renovatebot](MonorepoProjectOptions.md#renovatebot)
- [renovatebotOptions](MonorepoProjectOptions.md#renovatebotoptions)
- [repository](MonorepoProjectOptions.md#repository)
- [repositoryDirectory](MonorepoProjectOptions.md#repositorydirectory)
- [sampleCode](MonorepoProjectOptions.md#samplecode)
- [scopedPackagesOptions](MonorepoProjectOptions.md#scopedpackagesoptions)
- [scripts](MonorepoProjectOptions.md#scripts)
- [srcdir](MonorepoProjectOptions.md#srcdir)
- [stability](MonorepoProjectOptions.md#stability)
- [stale](MonorepoProjectOptions.md#stale)
- [staleOptions](MonorepoProjectOptions.md#staleoptions)
- [testdir](MonorepoProjectOptions.md#testdir)
- [tsconfig](MonorepoProjectOptions.md#tsconfig)
- [tsconfigDev](MonorepoProjectOptions.md#tsconfigdev)
- [tsconfigDevFile](MonorepoProjectOptions.md#tsconfigdevfile)
- [typescriptVersion](MonorepoProjectOptions.md#typescriptversion)
- [versionrcOptions](MonorepoProjectOptions.md#versionrcoptions)
- [vscode](MonorepoProjectOptions.md#vscode)
- [workflowBootstrapSteps](MonorepoProjectOptions.md#workflowbootstrapsteps)
- [workflowContainerImage](MonorepoProjectOptions.md#workflowcontainerimage)
- [workflowGitIdentity](MonorepoProjectOptions.md#workflowgitidentity)
- [workflowNodeVersion](MonorepoProjectOptions.md#workflownodeversion)
- [workflowPackageCache](MonorepoProjectOptions.md#workflowpackagecache)
- [workflowRunsOn](MonorepoProjectOptions.md#workflowrunson)
- [workflowRunsOnGroup](MonorepoProjectOptions.md#workflowrunsongroup)
- [workspaceConfig](MonorepoProjectOptions.md#workspaceconfig)
- [yarnBerryOptions](MonorepoProjectOptions.md#yarnberryoptions)

## Properties

### allowLibraryDependencies

• `Optional` `Readonly` **allowLibraryDependencies**: `boolean`

Allow the project to include `peerDependencies` and `bundledDependencies`.
This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.allowLibraryDependencies

___

### artifactsDirectory

• `Optional` `Readonly` **artifactsDirectory**: `string`

A directory which will contain build artifacts.

**`Default`**

```ts
"dist"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.artifactsDirectory

___

### authorEmail

• `Optional` `Readonly` **authorEmail**: `string`

Author's e-mail.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.authorEmail

___

### authorName

• `Optional` `Readonly` **authorName**: `string`

Author's name.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.authorName

___

### authorOrganization

• `Optional` `Readonly` **authorOrganization**: `boolean`

Is the author an organization.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.authorOrganization

___

### authorUrl

• `Optional` `Readonly` **authorUrl**: `string`

Author's URL / Website.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.authorUrl

___

### autoApproveOptions

• `Optional` `Readonly` **autoApproveOptions**: `AutoApproveOptions`

Enable and configure the 'auto approve' workflow.

**`Default`**

```ts
- auto approve is disabled
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.autoApproveOptions

___

### autoApproveUpgrades

• `Optional` `Readonly` **autoApproveUpgrades**: `boolean`

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).
Throw if set to true but `autoApproveOptions` are not defined.

**`Default`**

```ts
- true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.autoApproveUpgrades

___

### autoDetectBin

• `Optional` `Readonly` **autoDetectBin**: `boolean`

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.autoDetectBin

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `boolean`

Enable automatic merging on GitHub.
Has no effect if `github.mergify`
is set to false.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.autoMerge

___

### autoMergeOptions

• `Optional` `Readonly` **autoMergeOptions**: `AutoMergeOptions`

Configure options for automatic merging on GitHub.
Has no effect if
`github.mergify` or `autoMerge` is set to false.

**`Default`**

- see defaults in `AutoMergeOptions`

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.autoMergeOptions

___

### bin

• `Optional` `Readonly` **bin**: `Record`\<`string`, `string`\>

Binary programs vended with your module.
You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.bin

___

### bugsEmail

• `Optional` `Readonly` **bugsEmail**: `string`

The email address to which issues should be reported.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.bugsEmail

___

### bugsUrl

• `Optional` `Readonly` **bugsUrl**: `string`

The url to your project's issue tracker.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.bugsUrl

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `boolean`

Define a GitHub workflow for building PRs.

**`Default`**

```ts
- true if not a subproject
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.buildWorkflow

___

### buildWorkflowTriggers

• `Optional` `Readonly` **buildWorkflowTriggers**: `Triggers`

Build workflow triggers.

**`Default`**

```ts
"{ pullRequest: {}, workflowDispatch: {} }"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.buildWorkflowTriggers

___

### bundledDeps

• `Optional` `Readonly` **bundledDeps**: `string`[]

List of dependencies to bundle into this module.
These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.bundledDeps

___

### bundlerOptions

• `Optional` `Readonly` **bundlerOptions**: `BundlerOptions`

Options for `Bundler`.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.bundlerOptions

___

### clobber

• `Optional` `Readonly` **clobber**: `boolean`

Add a `clobber` task which resets the repo to origin.

**`Default`**

```ts
- true, but false for subprojects
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.clobber

___

### codeArtifactOptions

• `Optional` `Readonly` **codeArtifactOptions**: `CodeArtifactOptions`

Options for npm packages using AWS CodeArtifact.
This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

**`Default`**

```ts
- undefined
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.codeArtifactOptions

___

### codeCov

• `Optional` `Readonly` **codeCov**: `boolean`

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.codeCov

___

### codeCovTokenSecret

• `Optional` `Readonly` **codeCovTokenSecret**: `string`

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

**`Default`**

```ts
- if this option is not specified, only public repositories are supported
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.codeCovTokenSecret

___

### commitGenerated

• `Optional` `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.commitGenerated

___

### copyrightOwner

• `Optional` `Readonly` **copyrightOwner**: `string`

License copyright owner.

**`Default`**

- defaults to the value of authorName or "" if `authorName` is undefined.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.copyrightOwner

___

### copyrightPeriod

• `Optional` `Readonly` **copyrightPeriod**: `string`

The copyright years to put in the LICENSE file.

**`Default`**

```ts
- current year
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.copyrightPeriod

___

### defaultReleaseBranch

• `Optional` `Readonly` **defaultReleaseBranch**: `string`

The name of the main release branch.

**`Default`**

```ts
"main"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.defaultReleaseBranch

___

### dependabot

• `Optional` `Readonly` **dependabot**: `boolean`

Use dependabot to handle dependency upgrades.
Cannot be used in conjunction with `depsUpgrade`.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.dependabot

___

### dependabotOptions

• `Optional` `Readonly` **dependabotOptions**: `DependabotOptions`

Options for dependabot.

**`Default`**

```ts
- default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.dependabotOptions

___

### deps

• `Optional` `Readonly` **deps**: `string`[]

Runtime dependencies of this module.
The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

**`Default`**

```ts
[]
```

**`Stability`**

experimental

**`Featured`**

false

#### Inherited from

monorepo.MonorepoTsProjectOptions.deps

___

### depsUpgrade

• `Optional` `Readonly` **depsUpgrade**: `boolean`

Use tasks and github workflows to handle dependency upgrades.
Cannot be used in conjunction with `dependabot`.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.depsUpgrade

___

### depsUpgradeOptions

• `Optional` `Readonly` **depsUpgradeOptions**: [`UpgradeDependenciesOptions`](UpgradeDependenciesOptions.md)

#### Overrides

monorepo.MonorepoTsProjectOptions.depsUpgradeOptions

___

### description

• `Optional` `Readonly` **description**: `string`

The description is just a string that helps people understand the purpose of the package.
It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

**`Stability`**

experimental

**`Featured`**

false

#### Inherited from

monorepo.MonorepoTsProjectOptions.description

___

### devContainer

• `Optional` `Readonly` **devContainer**: `boolean`

Add a VSCode development environment (used for GitHub Codespaces).

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.devContainer

___

### devDeps

• `Optional` `Readonly` **devDeps**: `string`[]

Build dependencies for this module.
These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

**`Default`**

```ts
[]
```

**`Stability`**

experimental

**`Featured`**

true

#### Inherited from

monorepo.MonorepoTsProjectOptions.devDeps

___

### disableNodeWarnings

• `Optional` `Readonly` **disableNodeWarnings**: `boolean`

Disable node warnings from being emitted during build tasks

**`Default`**

```ts
false
```

#### Inherited from

monorepo.MonorepoTsProjectOptions.disableNodeWarnings

___

### disableTsconfig

• `Optional` `Readonly` **disableTsconfig**: `boolean`

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.disableTsconfig

___

### disableTsconfigDev

• `Optional` `Readonly` **disableTsconfigDev**: `boolean`

Do not generate a `tsconfig.dev.json` file.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.disableTsconfigDev

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

Docgen by Typedoc.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.docgen

___

### docsDirectory

• `Optional` `Readonly` **docsDirectory**: `string`

Docs directory.

**`Default`**

```ts
"docs"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.docsDirectory

___

### entrypoint

• `Optional` `Readonly` **entrypoint**: `string`

Module entrypoint (`main` in `package.json`).
Set to an empty string to not include `main` in your package.json

**`Default`**

```ts
"lib/index.js"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.entrypoint

___

### entrypointTypes

• `Optional` `Readonly` **entrypointTypes**: `string`

The .d.ts file that includes the type declarations for this module.

**`Default`**

```ts
- .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.entrypointTypes

___

### eslint

• `Optional` `Readonly` **eslint**: `boolean`

Setup eslint.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.eslint

___

### eslintOptions

• `Optional` `Readonly` **eslintOptions**: `EslintOptions`

Eslint options.

**`Default`**

```ts
- opinionated default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.eslintOptions

___

### gitIgnoreOptions

• `Optional` `Readonly` **gitIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .gitignore file.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.gitIgnoreOptions

___

### gitOptions

• `Optional` `Readonly` **gitOptions**: `GitOptions`

Configuration options for git.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.gitOptions

___

### github

• `Optional` `Readonly` **github**: `boolean`

Enable GitHub integration.
Enabled by default for root projects. Disabled for non-root projects.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.github

___

### githubOptions

• `Optional` `Readonly` **githubOptions**: `GitHubOptions`

Options for GitHub integration.

**`Default`**

```ts
- see GitHubOptions
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.githubOptions

___

### gitignore

• `Optional` `Readonly` **gitignore**: `string`[]

Additional entries to .gitignore.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.gitignore

___

### gitpod

• `Optional` `Readonly` **gitpod**: `boolean`

Add a Gitpod development environment.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.gitpod

___

### homepage

• `Optional` `Readonly` **homepage**: `string`

Package's Homepage / Website.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.homepage

___

### jest

• `Optional` `Readonly` **jest**: `boolean`

Setup jest unit tests.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.jest

___

### jestOptions

• `Optional` `Readonly` **jestOptions**: `JestOptions`

Jest options.

**`Default`**

```ts
- default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.jestOptions

___

### jsiiReleaseVersion

• `Optional` `Readonly` **jsiiReleaseVersion**: `string`

Version requirement of `publib` which is used to publish modules to npm.

**`Default`**

```ts
"latest"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.jsiiReleaseVersion

___

### keywords

• `Optional` `Readonly` **keywords**: `string`[]

Keywords to include in `package.json`.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.keywords

___

### libdir

• `Optional` `Readonly` **libdir**: `string`

Typescript  artifacts output directory.

**`Default`**

```ts
"lib"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.libdir

___

### license

• `Optional` `Readonly` **license**: `string`

License's SPDX identifier.
See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

**`Default`**

```ts
"Apache-2.0"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.license

___

### licensed

• `Optional` `Readonly` **licensed**: `boolean`

Indicates if a license should be added.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.licensed

___

### logging

• `Optional` `Readonly` **logging**: `LoggerOptions`

Configure logging options such as verbosity.

**`Default`**

```ts
{}
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.logging

___

### majorVersion

• `Optional` `Readonly` **majorVersion**: `number`

Major version to release from the default branch.
If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

**`Default`**

```ts
- Major version is not enforced.
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.majorVersion

___

### maxNodeVersion

• `Optional` `Readonly` **maxNodeVersion**: `string`

Minimum node.js version to require via `engines` (inclusive).

**`Default`**

```ts
- no max
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.maxNodeVersion

___

### mergify

• `Optional` `Readonly` **mergify**: `boolean`

Whether mergify should be enabled on this repository or not.

**`Default`**

```ts
true
```

**`Deprecated`**

use `githubOptions.mergify` instead

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.mergify

___

### mergifyOptions

• `Optional` `Readonly` **mergifyOptions**: `MergifyOptions`

Options for mergify.

**`Default`**

```ts
- default options
```

**`Deprecated`**

use `githubOptions.mergifyOptions` instead

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.mergifyOptions

___

### minMajorVersion

• `Optional` `Readonly` **minMajorVersion**: `number`

Minimal Major version to release.
This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

**`Default`**

```ts
- No minimum version is being enforced
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.minMajorVersion

___

### minNodeVersion

• `Optional` `Readonly` **minNodeVersion**: `string`

Minimum Node.js version to require via package.json `engines` (inclusive).

**`Default`**

```ts
- no "engines" specified
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.minNodeVersion

___

### monorepoUpgradeDeps

• `Optional` `Readonly` **monorepoUpgradeDeps**: `boolean`

Whether to include an upgrade-deps task at the root of the monorepo which will upgrade all dependencies.

**`Default`**

```ts
true
```

#### Inherited from

monorepo.MonorepoTsProjectOptions.monorepoUpgradeDeps

___

### monorepoUpgradeDepsOptions

• `Optional` `Readonly` **monorepoUpgradeDepsOptions**: `MonorepoUpgradeDepsOptions`

Monorepo Upgrade Deps options.

This is only used if monorepoUpgradeDeps is true.

**`Default`**

```ts
undefined
```

#### Inherited from

monorepo.MonorepoTsProjectOptions.monorepoUpgradeDepsOptions

___

### mutableBuild

• `Optional` `Readonly` **mutableBuild**: `boolean`

Automatically update files modified during builds to pull-request branches.
This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.mutableBuild

___

### name

• `Readonly` **name**: `string`

**`Default`**

```ts
$BASEDIR
```

#### Inherited from

monorepo.MonorepoTsProjectOptions.name

___

### npmAccess

• `Optional` `Readonly` **npmAccess**: `NpmAccess`

Access level of the npm package.

**`Default`**

- for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.npmAccess

___

### npmDistTag

• `Optional` `Readonly` **npmDistTag**: `string`

The npmDistTag to use when publishing from the default branch.
To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

**`Default`**

```ts
"latest"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.npmDistTag

___

### npmIgnoreOptions

• `Optional` `Readonly` **npmIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .npmignore file.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.npmIgnoreOptions

___

### npmRegistry

• `Optional` `Readonly` **npmRegistry**: `string`

The host name of the npm registry to publish to.
Cannot be set together with `npmRegistryUrl`.

**`Deprecated`**

use `npmRegistryUrl` instead

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.npmRegistry

___

### npmRegistryUrl

• `Optional` `Readonly` **npmRegistryUrl**: `string`

The base URL of the npm package registry.
Must be a URL (e.g. start with "https://" or "http://")

**`Default`**

```ts
"https://registry.npmjs.org"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.npmRegistryUrl

___

### npmTokenSecret

• `Optional` `Readonly` **npmTokenSecret**: `string`

GitHub secret which contains the NPM token to use when publishing packages.

**`Default`**

```ts
"NPM_TOKEN"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.npmTokenSecret

___

### npmignore

• `Optional` `Readonly` **npmignore**: `string`[]

Additional entries to .npmignore.

**`Deprecated`**

- use `project.addPackageIgnore`

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.npmignore

___

### npmignoreEnabled

• `Optional` `Readonly` **npmignoreEnabled**: `boolean`

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.npmignoreEnabled

___

### outdir

• `Optional` `Readonly` **outdir**: `string`

The root directory of the project.
Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

**`Default`**

```ts
"."
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.outdir

___

### package

• `Optional` `Readonly` **package**: `boolean`

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.package

___

### packageManager

• `Optional` `Readonly` **packageManager**: `NodePackageManager`

The Node Package Manager used to execute scripts.

**`Default`**

```ts
NodePackageManager.YARN_CLASSIC
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.packageManager

___

### packageName

• `Optional` `Readonly` **packageName**: `string`

The "name" in package.json.

**`Default`**

```ts
- defaults to project name
```

**`Stability`**

experimental

**`Featured`**

false

#### Inherited from

monorepo.MonorepoTsProjectOptions.packageName

___

### parent

• `Optional` `Readonly` **parent**: `Project`

The parent project, if this project is part of a bigger project.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.parent

___

### peerDependencyOptions

• `Optional` `Readonly` **peerDependencyOptions**: `PeerDependencyOptions`

Options for `peerDeps`.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.peerDependencyOptions

___

### peerDeps

• `Optional` `Readonly` **peerDeps**: `string`[]

Peer dependencies for this module.
Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

**`Default`**

```ts
[]
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.peerDeps

___

### pnpmVersion

• `Optional` `Readonly` **pnpmVersion**: `string`

The version of PNPM to use if using PNPM as a package manager.

**`Default`**

```ts
"7"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.pnpmVersion

___

### postBuildSteps

• `Optional` `Readonly` **postBuildSteps**: `JobStep`[]

Steps to execute after build as part of the release workflow.

**`Default`**

```ts
[]
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.postBuildSteps

___

### prerelease

• `Optional` `Readonly` **prerelease**: `string`

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

**`Default`**

```ts
- normal semantic versions
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.prerelease

___

### prettier

• `Optional` `Readonly` **prettier**: `boolean`

Setup prettier.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.prettier

___

### prettierOptions

• `Optional` `Readonly` **prettierOptions**: `PrettierOptions`

Prettier options.

**`Default`**

```ts
- default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.prettierOptions

___

### projectType

• `Optional` `Readonly` **projectType**: `ProjectType`

Which type of project this is (library/app).

**`Default`**

```ts
ProjectType.UNKNOWN
```

**`Deprecated`**

no longer supported at the base project level

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.projectType

___

### projenCommand

• `Optional` `Readonly` **projenCommand**: `string`

The shell command to use in order to run the projen CLI.
Can be used to customize in special environments.

**`Default`**

```ts
"npx projen"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenCommand

___

### projenCredentials

• `Optional` `Readonly` **projenCredentials**: `GithubCredentials`

Choose a method of providing GitHub API access for projen workflows.

**`Default`**

```ts
- use a personal access token named PROJEN_GITHUB_TOKEN
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenCredentials

___

### projenDevDependency

• `Optional` `Readonly` **projenDevDependency**: `boolean`

Indicates of "projen" should be installed as a devDependency.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenDevDependency

___

### projenTokenSecret

• `Optional` `Readonly` **projenTokenSecret**: `string`

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.
This token needs to have the `repo`, `workflows`
and `packages` scope.

**`Default`**

```ts
"PROJEN_GITHUB_TOKEN"
```

**`Deprecated`**

use `projenCredentials`

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenTokenSecret

___

### projenVersion

• `Optional` `Readonly` **projenVersion**: `string`

Version of projen to install.

**`Default`**

```ts
- Defaults to the latest version.
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenVersion

___

### projenrcJs

• `Optional` `Readonly` **projenrcJs**: `boolean`

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

**`Default`**

```ts
- true if projenrcJson is false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenrcJs

___

### projenrcJsOptions

• `Optional` `Readonly` **projenrcJsOptions**: `ProjenrcOptions`

Options for .projenrc.js.

**`Default`**

```ts
- default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenrcJsOptions

___

### projenrcJson

• `Optional` `Readonly` **projenrcJson**: `boolean`

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenrcJson

___

### projenrcJsonOptions

• `Optional` `Readonly` **projenrcJsonOptions**: `ProjenrcJsonOptions`

Options for .projenrc.json.

**`Default`**

```ts
- default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenrcJsonOptions

___

### projenrcTs

• `Optional` `Readonly` **projenrcTs**: `boolean`

Use TypeScript for your projenrc file (`.projenrc.ts`).

**`Default`**

```ts
false
```

**`Stability`**

experimental

**`Pjnew`**

true

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenrcTs

___

### projenrcTsOptions

• `Optional` `Readonly` **projenrcTsOptions**: `ProjenrcOptions`

Options for .projenrc.ts.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.projenrcTsOptions

___

### publishDryRun

• `Optional` `Readonly` **publishDryRun**: `boolean`

Instead of actually publishing to package managers, just print the publishing command.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.publishDryRun

___

### publishTasks

• `Optional` `Readonly` **publishTasks**: `boolean`

Define publishing tasks that can be executed manually as well as workflows.
Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.publishTasks

___

### pullRequestTemplate

• `Optional` `Readonly` **pullRequestTemplate**: `boolean`

Include a GitHub pull request template.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.pullRequestTemplate

___

### pullRequestTemplateContents

• `Optional` `Readonly` **pullRequestTemplateContents**: `string`[]

The contents of the pull request template.

**`Default`**

```ts
- default content
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.pullRequestTemplateContents

___

### readme

• `Optional` `Readonly` **readme**: `SampleReadmeProps`

The README setup.

**`Default`**

```ts
- { filename: 'README.md', contents: '# replace this' }
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.readme

___

### releasableCommits

• `Optional` `Readonly` **releasableCommits**: `ReleasableCommits`

Find commits that should be considered releasable Used to decide if a release is required.

**`Default`**

```ts
ReleasableCommits.everyCommit()
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releasableCommits

___

### release

• `Optional` `Readonly` **release**: `boolean`

Add release management to this project.

**`Default`**

```ts
- true (false for subprojects)
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.release

___

### releaseBranches

• `Optional` `Readonly` **releaseBranches**: `Record`\<`string`, `BranchOptions`\>

Defines additional release branches.
A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

**`Default`**

- no additional branches are used for release. you can use
`addBranch()` to add additional branches.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseBranches

___

### releaseEveryCommit

• `Optional` `Readonly` **releaseEveryCommit**: `boolean`

Automatically release new versions every commit to one of branches in `releaseBranches`.

**`Default`**

```ts
true
```

**`Deprecated`**

Use `releaseTrigger: ReleaseTrigger.continuous()` instead

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseEveryCommit

___

### releaseFailureIssue

• `Optional` `Readonly` **releaseFailureIssue**: `boolean`

Create a github issue on every failed publishing task.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseFailureIssue

___

### releaseFailureIssueLabel

• `Optional` `Readonly` **releaseFailureIssueLabel**: `string`

The label to apply to issues indicating publish failures.
Only applies if `releaseFailureIssue` is true.

**`Default`**

```ts
"failed-release"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseFailureIssueLabel

___

### releaseSchedule

• `Optional` `Readonly` **releaseSchedule**: `string`

CRON schedule to trigger new releases.

**`Default`**

```ts
- no scheduled releases
```

**`Deprecated`**

Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseSchedule

___

### releaseTagPrefix

• `Optional` `Readonly` **releaseTagPrefix**: `string`

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

**`Default`**

```ts
"v"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseTagPrefix

___

### releaseToNpm

• `Optional` `Readonly` **releaseToNpm**: `boolean`

Automatically release to npm when new versions are introduced.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseToNpm

___

### releaseTrigger

• `Optional` `Readonly` **releaseTrigger**: `ReleaseTrigger`

The release trigger to use.

**`Default`**

- Continuous releases (`ReleaseTrigger.continuous()`)

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseTrigger

___

### releaseWorkflow

• `Optional` `Readonly` **releaseWorkflow**: `boolean`

DEPRECATED: renamed to `release`.

**`Default`**

```ts
- true if not a subproject
```

**`Deprecated`**

see `release`.

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseWorkflow

___

### releaseWorkflowName

• `Optional` `Readonly` **releaseWorkflowName**: `string`

The name of the default release workflow.

**`Default`**

```ts
"Release"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseWorkflowName

___

### releaseWorkflowSetupSteps

• `Optional` `Readonly` **releaseWorkflowSetupSteps**: `JobStep`[]

A set of workflow steps to execute in order to setup the workflow container.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.releaseWorkflowSetupSteps

___

### renovatebot

• `Optional` `Readonly` **renovatebot**: `boolean`

Use renovatebot to handle dependency upgrades.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.renovatebot

___

### renovatebotOptions

• `Optional` `Readonly` **renovatebotOptions**: `RenovatebotOptions`

Options for renovatebot.

**`Default`**

```ts
- default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.renovatebotOptions

___

### repository

• `Optional` `Readonly` **repository**: `string`

The repository is the location where the actual code for your package lives.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.repository

___

### repositoryDirectory

• `Optional` `Readonly` **repositoryDirectory**: `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.repositoryDirectory

___

### sampleCode

• `Optional` `Readonly` **sampleCode**: `boolean`

Generate one-time sample in `src/` and `test/` if there are no files there.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.sampleCode

___

### scopedPackagesOptions

• `Optional` `Readonly` **scopedPackagesOptions**: `ScopedPackagesOptions`[]

Options for privately hosted scoped packages.

**`Default`**

```ts
- fetch all scoped packages from the public npm registry
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.scopedPackagesOptions

___

### scripts

• `Optional` `Readonly` **scripts**: `Record`\<`string`, `string`\>

npm scripts to include.
If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

**`Default`**

```ts
{}
```

**`Deprecated`**

use `project.addTask()` or `package.setScript()`

**`Stability`**

deprecated

#### Inherited from

monorepo.MonorepoTsProjectOptions.scripts

___

### srcdir

• `Optional` `Readonly` **srcdir**: `string`

Typescript sources directory.

**`Default`**

```ts
"src"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.srcdir

___

### stability

• `Optional` `Readonly` **stability**: `string`

Package's Stability.

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.stability

___

### stale

• `Optional` `Readonly` **stale**: `boolean`

Auto-close of stale issues and pull request.
See `staleOptions` for options.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.stale

___

### staleOptions

• `Optional` `Readonly` **staleOptions**: `StaleOptions`

Auto-close stale issues and pull requests.
To disable set `stale` to `false`.

**`Default`**

- see defaults in `StaleOptions`

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.staleOptions

___

### testdir

• `Optional` `Readonly` **testdir**: `string`

Jest tests directory. Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

**`Default`**

```ts
"test"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.testdir

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfigOptions`

Custom TSConfig.

**`Default`**

```ts
- default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.tsconfig

___

### tsconfigDev

• `Optional` `Readonly` **tsconfigDev**: `TypescriptConfigOptions`

Custom tsconfig options for the development tsconfig.json file (used for testing).

**`Default`**

```ts
- use the production tsconfig options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.tsconfigDev

___

### tsconfigDevFile

• `Optional` `Readonly` **tsconfigDevFile**: `string`

The name of the development tsconfig.json file.

**`Default`**

```ts
"tsconfig.dev.json"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.tsconfigDevFile

___

### typescriptVersion

• `Optional` `Readonly` **typescriptVersion**: `string`

TypeScript version to use.
NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

**`Default`**

```ts
"latest"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.typescriptVersion

___

### versionrcOptions

• `Optional` `Readonly` **versionrcOptions**: `Record`\<`string`, `any`\>

Custom configuration used when creating changelog with standard-version package.
Given values either append to default configuration or overwrite values in it.

**`Default`**

```ts
- standard configuration applicable for GitHub repositories
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.versionrcOptions

___

### vscode

• `Optional` `Readonly` **vscode**: `boolean`

Enable VSCode integration.
Enabled by default for root projects. Disabled for non-root projects.

**`Default`**

```ts
true
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.vscode

___

### workflowBootstrapSteps

• `Optional` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

Workflow steps to use in order to bootstrap this repo.

**`Default`**

```ts
"yarn install --frozen-lockfile && yarn projen"
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.workflowBootstrapSteps

___

### workflowContainerImage

• `Optional` `Readonly` **workflowContainerImage**: `string`

Container image to use for GitHub workflows.

**`Default`**

```ts
- default image
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.workflowContainerImage

___

### workflowGitIdentity

• `Optional` `Readonly` **workflowGitIdentity**: `GitIdentity`

The git identity to use in workflows.

**`Default`**

```ts
- GitHub Actions
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.workflowGitIdentity

___

### workflowNodeVersion

• `Optional` `Readonly` **workflowNodeVersion**: `string`

The node version to use in GitHub workflows.

**`Default`**

- same as `minNodeVersion`

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.workflowNodeVersion

___

### workflowPackageCache

• `Optional` `Readonly` **workflowPackageCache**: `boolean`

Enable Node.js package cache in GitHub workflows.

**`Default`**

```ts
false
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.workflowPackageCache

___

### workflowRunsOn

• `Optional` `Readonly` **workflowRunsOn**: `string`[]

Github Runner selection labels.

**`Default`**

```ts
["ubuntu-latest"]
```

**`Stability`**

experimental

**`Description`**

Defines a target Runner by labels

**`Throws`**

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

monorepo.MonorepoTsProjectOptions.workflowRunsOn

___

### workflowRunsOnGroup

• `Optional` `Readonly` **workflowRunsOnGroup**: `GroupRunnerOptions`

Github Runner Group selection options.

**`Stability`**

experimental

**`Description`**

Defines a target Runner Group by name and/or labels

**`Throws`**

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

monorepo.MonorepoTsProjectOptions.workflowRunsOnGroup

___

### workspaceConfig

• `Optional` `Readonly` **workspaceConfig**: `WorkspaceConfig`

Configuration for workspace.

#### Inherited from

monorepo.MonorepoTsProjectOptions.workspaceConfig

___

### yarnBerryOptions

• `Optional` `Readonly` **yarnBerryOptions**: `YarnBerryOptions`

Options for Yarn Berry.

**`Default`**

```ts
- Yarn Berry v4 with all default options
```

**`Stability`**

experimental

#### Inherited from

monorepo.MonorepoTsProjectOptions.yarnBerryOptions
