[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / MonorepoTsProjectOptions

# Interface: MonorepoTsProjectOptions

Configuration options for the MonorepoTsProject.

## Hierarchy

- `TypeScriptProjectOptions`

  ↳ **`MonorepoTsProjectOptions`**

  ↳↳ [`NxMonorepoProjectOptions`](NxMonorepoProjectOptions.md)

## Table of contents

### Properties

- [allowLibraryDependencies](MonorepoTsProjectOptions.md#allowlibrarydependencies)
- [artifactsDirectory](MonorepoTsProjectOptions.md#artifactsdirectory)
- [authorEmail](MonorepoTsProjectOptions.md#authoremail)
- [authorName](MonorepoTsProjectOptions.md#authorname)
- [authorOrganization](MonorepoTsProjectOptions.md#authororganization)
- [authorUrl](MonorepoTsProjectOptions.md#authorurl)
- [autoApproveOptions](MonorepoTsProjectOptions.md#autoapproveoptions)
- [autoApproveUpgrades](MonorepoTsProjectOptions.md#autoapproveupgrades)
- [autoDetectBin](MonorepoTsProjectOptions.md#autodetectbin)
- [autoMerge](MonorepoTsProjectOptions.md#automerge)
- [autoMergeOptions](MonorepoTsProjectOptions.md#automergeoptions)
- [bin](MonorepoTsProjectOptions.md#bin)
- [bugsEmail](MonorepoTsProjectOptions.md#bugsemail)
- [bugsUrl](MonorepoTsProjectOptions.md#bugsurl)
- [buildWorkflow](MonorepoTsProjectOptions.md#buildworkflow)
- [buildWorkflowTriggers](MonorepoTsProjectOptions.md#buildworkflowtriggers)
- [bundledDeps](MonorepoTsProjectOptions.md#bundleddeps)
- [bundlerOptions](MonorepoTsProjectOptions.md#bundleroptions)
- [checkLicenses](MonorepoTsProjectOptions.md#checklicenses)
- [clobber](MonorepoTsProjectOptions.md#clobber)
- [codeArtifactOptions](MonorepoTsProjectOptions.md#codeartifactoptions)
- [codeCov](MonorepoTsProjectOptions.md#codecov)
- [codeCovTokenSecret](MonorepoTsProjectOptions.md#codecovtokensecret)
- [commitGenerated](MonorepoTsProjectOptions.md#commitgenerated)
- [copyrightOwner](MonorepoTsProjectOptions.md#copyrightowner)
- [copyrightPeriod](MonorepoTsProjectOptions.md#copyrightperiod)
- [defaultReleaseBranch](MonorepoTsProjectOptions.md#defaultreleasebranch)
- [dependabot](MonorepoTsProjectOptions.md#dependabot)
- [dependabotOptions](MonorepoTsProjectOptions.md#dependabotoptions)
- [deps](MonorepoTsProjectOptions.md#deps)
- [depsUpgrade](MonorepoTsProjectOptions.md#depsupgrade)
- [depsUpgradeOptions](MonorepoTsProjectOptions.md#depsupgradeoptions)
- [description](MonorepoTsProjectOptions.md#description)
- [devContainer](MonorepoTsProjectOptions.md#devcontainer)
- [devDeps](MonorepoTsProjectOptions.md#devdeps)
- [disableNodeWarnings](MonorepoTsProjectOptions.md#disablenodewarnings)
- [disableTsconfig](MonorepoTsProjectOptions.md#disabletsconfig)
- [disableTsconfigDev](MonorepoTsProjectOptions.md#disabletsconfigdev)
- [docgen](MonorepoTsProjectOptions.md#docgen)
- [docsDirectory](MonorepoTsProjectOptions.md#docsdirectory)
- [entrypoint](MonorepoTsProjectOptions.md#entrypoint)
- [entrypointTypes](MonorepoTsProjectOptions.md#entrypointtypes)
- [eslint](MonorepoTsProjectOptions.md#eslint)
- [eslintOptions](MonorepoTsProjectOptions.md#eslintoptions)
- [gitIgnoreOptions](MonorepoTsProjectOptions.md#gitignoreoptions)
- [gitOptions](MonorepoTsProjectOptions.md#gitoptions)
- [github](MonorepoTsProjectOptions.md#github)
- [githubOptions](MonorepoTsProjectOptions.md#githuboptions)
- [gitignore](MonorepoTsProjectOptions.md#gitignore)
- [gitpod](MonorepoTsProjectOptions.md#gitpod)
- [homepage](MonorepoTsProjectOptions.md#homepage)
- [jest](MonorepoTsProjectOptions.md#jest)
- [jestOptions](MonorepoTsProjectOptions.md#jestoptions)
- [jsiiReleaseVersion](MonorepoTsProjectOptions.md#jsiireleaseversion)
- [keywords](MonorepoTsProjectOptions.md#keywords)
- [libdir](MonorepoTsProjectOptions.md#libdir)
- [license](MonorepoTsProjectOptions.md#license)
- [licensed](MonorepoTsProjectOptions.md#licensed)
- [logging](MonorepoTsProjectOptions.md#logging)
- [majorVersion](MonorepoTsProjectOptions.md#majorversion)
- [maxNodeVersion](MonorepoTsProjectOptions.md#maxnodeversion)
- [mergify](MonorepoTsProjectOptions.md#mergify)
- [mergifyOptions](MonorepoTsProjectOptions.md#mergifyoptions)
- [minMajorVersion](MonorepoTsProjectOptions.md#minmajorversion)
- [minNodeVersion](MonorepoTsProjectOptions.md#minnodeversion)
- [mutableBuild](MonorepoTsProjectOptions.md#mutablebuild)
- [name](MonorepoTsProjectOptions.md#name)
- [npmAccess](MonorepoTsProjectOptions.md#npmaccess)
- [npmDistTag](MonorepoTsProjectOptions.md#npmdisttag)
- [npmIgnoreOptions](MonorepoTsProjectOptions.md#npmignoreoptions)
- [npmProvenance](MonorepoTsProjectOptions.md#npmprovenance)
- [npmRegistry](MonorepoTsProjectOptions.md#npmregistry)
- [npmRegistryUrl](MonorepoTsProjectOptions.md#npmregistryurl)
- [npmTokenSecret](MonorepoTsProjectOptions.md#npmtokensecret)
- [npmignore](MonorepoTsProjectOptions.md#npmignore)
- [npmignoreEnabled](MonorepoTsProjectOptions.md#npmignoreenabled)
- [outdir](MonorepoTsProjectOptions.md#outdir)
- [package](MonorepoTsProjectOptions.md#package)
- [packageManager](MonorepoTsProjectOptions.md#packagemanager)
- [packageName](MonorepoTsProjectOptions.md#packagename)
- [parent](MonorepoTsProjectOptions.md#parent)
- [peerDependencyOptions](MonorepoTsProjectOptions.md#peerdependencyoptions)
- [peerDeps](MonorepoTsProjectOptions.md#peerdeps)
- [pnpmVersion](MonorepoTsProjectOptions.md#pnpmversion)
- [postBuildSteps](MonorepoTsProjectOptions.md#postbuildsteps)
- [prerelease](MonorepoTsProjectOptions.md#prerelease)
- [prettier](MonorepoTsProjectOptions.md#prettier)
- [prettierOptions](MonorepoTsProjectOptions.md#prettieroptions)
- [projectType](MonorepoTsProjectOptions.md#projecttype)
- [projenCommand](MonorepoTsProjectOptions.md#projencommand)
- [projenCredentials](MonorepoTsProjectOptions.md#projencredentials)
- [projenDevDependency](MonorepoTsProjectOptions.md#projendevdependency)
- [projenTokenSecret](MonorepoTsProjectOptions.md#projentokensecret)
- [projenVersion](MonorepoTsProjectOptions.md#projenversion)
- [projenrcJs](MonorepoTsProjectOptions.md#projenrcjs)
- [projenrcJsOptions](MonorepoTsProjectOptions.md#projenrcjsoptions)
- [projenrcJson](MonorepoTsProjectOptions.md#projenrcjson)
- [projenrcJsonOptions](MonorepoTsProjectOptions.md#projenrcjsonoptions)
- [projenrcTs](MonorepoTsProjectOptions.md#projenrcts)
- [projenrcTsOptions](MonorepoTsProjectOptions.md#projenrctsoptions)
- [publishDryRun](MonorepoTsProjectOptions.md#publishdryrun)
- [publishTasks](MonorepoTsProjectOptions.md#publishtasks)
- [pullRequestTemplate](MonorepoTsProjectOptions.md#pullrequesttemplate)
- [pullRequestTemplateContents](MonorepoTsProjectOptions.md#pullrequesttemplatecontents)
- [readme](MonorepoTsProjectOptions.md#readme)
- [releasableCommits](MonorepoTsProjectOptions.md#releasablecommits)
- [release](MonorepoTsProjectOptions.md#release)
- [releaseBranches](MonorepoTsProjectOptions.md#releasebranches)
- [releaseEveryCommit](MonorepoTsProjectOptions.md#releaseeverycommit)
- [releaseFailureIssue](MonorepoTsProjectOptions.md#releasefailureissue)
- [releaseFailureIssueLabel](MonorepoTsProjectOptions.md#releasefailureissuelabel)
- [releaseSchedule](MonorepoTsProjectOptions.md#releaseschedule)
- [releaseTagPrefix](MonorepoTsProjectOptions.md#releasetagprefix)
- [releaseToNpm](MonorepoTsProjectOptions.md#releasetonpm)
- [releaseTrigger](MonorepoTsProjectOptions.md#releasetrigger)
- [releaseWorkflow](MonorepoTsProjectOptions.md#releaseworkflow)
- [releaseWorkflowName](MonorepoTsProjectOptions.md#releaseworkflowname)
- [releaseWorkflowSetupSteps](MonorepoTsProjectOptions.md#releaseworkflowsetupsteps)
- [renovatebot](MonorepoTsProjectOptions.md#renovatebot)
- [renovatebotOptions](MonorepoTsProjectOptions.md#renovatebotoptions)
- [repository](MonorepoTsProjectOptions.md#repository)
- [repositoryDirectory](MonorepoTsProjectOptions.md#repositorydirectory)
- [sampleCode](MonorepoTsProjectOptions.md#samplecode)
- [scopedPackagesOptions](MonorepoTsProjectOptions.md#scopedpackagesoptions)
- [scripts](MonorepoTsProjectOptions.md#scripts)
- [srcdir](MonorepoTsProjectOptions.md#srcdir)
- [stability](MonorepoTsProjectOptions.md#stability)
- [stale](MonorepoTsProjectOptions.md#stale)
- [staleOptions](MonorepoTsProjectOptions.md#staleoptions)
- [testdir](MonorepoTsProjectOptions.md#testdir)
- [tsJestOptions](MonorepoTsProjectOptions.md#tsjestoptions)
- [tsconfig](MonorepoTsProjectOptions.md#tsconfig)
- [tsconfigDev](MonorepoTsProjectOptions.md#tsconfigdev)
- [tsconfigDevFile](MonorepoTsProjectOptions.md#tsconfigdevfile)
- [typescriptVersion](MonorepoTsProjectOptions.md#typescriptversion)
- [versionrcOptions](MonorepoTsProjectOptions.md#versionrcoptions)
- [vscode](MonorepoTsProjectOptions.md#vscode)
- [workflowBootstrapSteps](MonorepoTsProjectOptions.md#workflowbootstrapsteps)
- [workflowContainerImage](MonorepoTsProjectOptions.md#workflowcontainerimage)
- [workflowGitIdentity](MonorepoTsProjectOptions.md#workflowgitidentity)
- [workflowNodeVersion](MonorepoTsProjectOptions.md#workflownodeversion)
- [workflowPackageCache](MonorepoTsProjectOptions.md#workflowpackagecache)
- [workflowRunsOn](MonorepoTsProjectOptions.md#workflowrunson)
- [workflowRunsOnGroup](MonorepoTsProjectOptions.md#workflowrunsongroup)
- [workspaceConfig](MonorepoTsProjectOptions.md#workspaceconfig)
- [yarnBerryOptions](MonorepoTsProjectOptions.md#yarnberryoptions)

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

#### Inherited from

TypeScriptProjectOptions.allowLibraryDependencies

___

### artifactsDirectory

• `Optional` `Readonly` **artifactsDirectory**: `string`

A directory which will contain build artifacts.

**`Default`**

```ts
"dist"
```

#### Inherited from

TypeScriptProjectOptions.artifactsDirectory

___

### authorEmail

• `Optional` `Readonly` **authorEmail**: `string`

Author's e-mail

#### Inherited from

TypeScriptProjectOptions.authorEmail

___

### authorName

• `Optional` `Readonly` **authorName**: `string`

Author's name

#### Inherited from

TypeScriptProjectOptions.authorName

___

### authorOrganization

• `Optional` `Readonly` **authorOrganization**: `boolean`

Is the author an organization

#### Inherited from

TypeScriptProjectOptions.authorOrganization

___

### authorUrl

• `Optional` `Readonly` **authorUrl**: `string`

Author's URL / Website

#### Inherited from

TypeScriptProjectOptions.authorUrl

___

### autoApproveOptions

• `Optional` `Readonly` **autoApproveOptions**: `AutoApproveOptions`

Enable and configure the 'auto approve' workflow.

**`Default`**

```ts
- auto approve is disabled
```

#### Inherited from

TypeScriptProjectOptions.autoApproveOptions

___

### autoApproveUpgrades

• `Optional` `Readonly` **autoApproveUpgrades**: `boolean`

Automatically approve deps upgrade PRs, allowing them to be
merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

**`Default`**

```ts
- true
```

#### Inherited from

TypeScriptProjectOptions.autoApproveUpgrades

___

### autoDetectBin

• `Optional` `Readonly` **autoDetectBin**: `boolean`

Automatically add all executables under the `bin` directory to your
`package.json` file under the `bin` section.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.autoDetectBin

___

### autoMerge

• `Optional` `Readonly` **autoMerge**: `boolean`

Enable automatic merging on GitHub. Has no effect if `github.mergify`
is set to false.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.autoMerge

___

### autoMergeOptions

• `Optional` `Readonly` **autoMergeOptions**: `AutoMergeOptions`

Configure options for automatic merging on GitHub. Has no effect if
`github.mergify` or `autoMerge` is set to false.

**`Default`**

- see defaults in `AutoMergeOptions`

#### Inherited from

TypeScriptProjectOptions.autoMergeOptions

___

### bin

• `Optional` `Readonly` **bin**: `Record`\<`string`, `string`\>

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

#### Inherited from

TypeScriptProjectOptions.bin

___

### bugsEmail

• `Optional` `Readonly` **bugsEmail**: `string`

The email address to which issues should be reported.

#### Inherited from

TypeScriptProjectOptions.bugsEmail

___

### bugsUrl

• `Optional` `Readonly` **bugsUrl**: `string`

The url to your project's issue tracker.

#### Inherited from

TypeScriptProjectOptions.bugsUrl

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `boolean`

Define a GitHub workflow for building PRs.

**`Default`**

```ts
- true if not a subproject
```

#### Inherited from

TypeScriptProjectOptions.buildWorkflow

___

### buildWorkflowTriggers

• `Optional` `Readonly` **buildWorkflowTriggers**: `Triggers`

Build workflow triggers

**`Default`**

```ts
"{ pullRequest: {}, workflowDispatch: {} }"
```

#### Inherited from

TypeScriptProjectOptions.buildWorkflowTriggers

___

### bundledDeps

• `Optional` `Readonly` **bundledDeps**: `string`[]

List of dependencies to bundle into this module. These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

#### Inherited from

TypeScriptProjectOptions.bundledDeps

___

### bundlerOptions

• `Optional` `Readonly` **bundlerOptions**: `BundlerOptions`

Options for `Bundler`.

#### Inherited from

TypeScriptProjectOptions.bundlerOptions

___

### checkLicenses

• `Optional` `Readonly` **checkLicenses**: `LicenseCheckerOptions`

Configure which licenses should be deemed acceptable for use by dependencies

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

**`Default`**

```ts
- no license checks are run during the build and all licenses will be accepted
```

#### Inherited from

TypeScriptProjectOptions.checkLicenses

___

### clobber

• `Optional` `Readonly` **clobber**: `boolean`

Add a `clobber` task which resets the repo to origin.

**`Default`**

```ts
- true, but false for subprojects
```

#### Inherited from

TypeScriptProjectOptions.clobber

___

### codeArtifactOptions

• `Optional` `Readonly` **codeArtifactOptions**: `CodeArtifactOptions`

Options for npm packages using AWS CodeArtifact.
This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

**`Default`**

```ts
- undefined
```

#### Inherited from

TypeScriptProjectOptions.codeArtifactOptions

___

### codeCov

• `Optional` `Readonly` **codeCov**: `boolean`

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/
Uses codecov/codecov-action@v3
A secret is required for private repos. Configured with `@codeCovTokenSecret`

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.codeCov

___

### codeCovTokenSecret

• `Optional` `Readonly` **codeCovTokenSecret**: `string`

Define the secret name for a specified https://codecov.io/ token
A secret is required to send coverage for private repositories

**`Default`**

```ts
- if this option is not specified, only public repositories are supported
```

#### Inherited from

TypeScriptProjectOptions.codeCovTokenSecret

___

### commitGenerated

• `Optional` `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.commitGenerated

___

### copyrightOwner

• `Optional` `Readonly` **copyrightOwner**: `string`

License copyright owner.

**`Default`**

- defaults to the value of authorName or "" if `authorName` is undefined.

#### Inherited from

TypeScriptProjectOptions.copyrightOwner

___

### copyrightPeriod

• `Optional` `Readonly` **copyrightPeriod**: `string`

The copyright years to put in the LICENSE file.

**`Default`**

```ts
- current year
```

#### Inherited from

TypeScriptProjectOptions.copyrightPeriod

___

### defaultReleaseBranch

• `Readonly` **defaultReleaseBranch**: `string`

The name of the main release branch.

**`Default`**

```ts
"main"
```

#### Inherited from

TypeScriptProjectOptions.defaultReleaseBranch

___

### dependabot

• `Optional` `Readonly` **dependabot**: `boolean`

Use dependabot to handle dependency upgrades.
Cannot be used in conjunction with `depsUpgrade`.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.dependabot

___

### dependabotOptions

• `Optional` `Readonly` **dependabotOptions**: `DependabotOptions`

Options for dependabot.

**`Default`**

```ts
- default options
```

#### Inherited from

TypeScriptProjectOptions.dependabotOptions

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

**`Example`**

```ts
[ 'express', 'lodash', 'foo@^2' ]
```

**`Default`**

```ts
[]
```

**`Featured`**

#### Inherited from

TypeScriptProjectOptions.deps

___

### depsUpgrade

• `Optional` `Readonly` **depsUpgrade**: `boolean`

Use tasks and github workflows to handle dependency upgrades.
Cannot be used in conjunction with `dependabot`.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.depsUpgrade

___

### depsUpgradeOptions

• `Optional` `Readonly` **depsUpgradeOptions**: `UpgradeDependenciesOptions`

Options for `UpgradeDependencies`.

**`Default`**

```ts
- default options
```

#### Inherited from

TypeScriptProjectOptions.depsUpgradeOptions

___

### description

• `Optional` `Readonly` **description**: `string`

The description is just a string that helps people understand the purpose of the package.
It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

**`Featured`**

#### Inherited from

TypeScriptProjectOptions.description

___

### devContainer

• `Optional` `Readonly` **devContainer**: `boolean`

Add a VSCode development environment (used for GitHub Codespaces)

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.devContainer

___

### devDeps

• `Optional` `Readonly` **devDeps**: `string`[]

Build dependencies for this module. These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

**`Example`**

```ts
[ 'typescript', '@types/express' ]
```

**`Default`**

```ts
[]
```

**`Featured`**

#### Inherited from

TypeScriptProjectOptions.devDeps

___

### disableNodeWarnings

• `Optional` `Readonly` **disableNodeWarnings**: `boolean`

Disable node warnings from being emitted during build tasks

**`Default`**

```ts
false
```

___

### disableTsconfig

• `Optional` `Readonly` **disableTsconfig**: `boolean`

Do not generate a `tsconfig.json` file (used by jsii projects since
tsconfig.json is generated by the jsii compiler).

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.disableTsconfig

___

### disableTsconfigDev

• `Optional` `Readonly` **disableTsconfigDev**: `boolean`

Do not generate a `tsconfig.dev.json` file.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.disableTsconfigDev

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

Docgen by Typedoc

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.docgen

___

### docsDirectory

• `Optional` `Readonly` **docsDirectory**: `string`

Docs directory

**`Default`**

```ts
"docs"
```

#### Inherited from

TypeScriptProjectOptions.docsDirectory

___

### entrypoint

• `Optional` `Readonly` **entrypoint**: `string`

Module entrypoint (`main` in `package.json`)

Set to an empty string to not include `main` in your package.json

**`Default`**

```ts
"lib/index.js"
```

#### Inherited from

TypeScriptProjectOptions.entrypoint

___

### entrypointTypes

• `Optional` `Readonly` **entrypointTypes**: `string`

The .d.ts file that includes the type declarations for this module.

**`Default`**

```ts
- .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
```

#### Inherited from

TypeScriptProjectOptions.entrypointTypes

___

### eslint

• `Optional` `Readonly` **eslint**: `boolean`

Setup eslint.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.eslint

___

### eslintOptions

• `Optional` `Readonly` **eslintOptions**: `EslintOptions`

Eslint options

**`Default`**

```ts
- opinionated default options
```

#### Inherited from

TypeScriptProjectOptions.eslintOptions

___

### gitIgnoreOptions

• `Optional` `Readonly` **gitIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .gitignore file

#### Inherited from

TypeScriptProjectOptions.gitIgnoreOptions

___

### gitOptions

• `Optional` `Readonly` **gitOptions**: `GitOptions`

Configuration options for git

#### Inherited from

TypeScriptProjectOptions.gitOptions

___

### github

• `Optional` `Readonly` **github**: `boolean`

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.github

___

### githubOptions

• `Optional` `Readonly` **githubOptions**: `GitHubOptions`

Options for GitHub integration

**`Default`**

```ts
- see GitHubOptions
```

#### Inherited from

TypeScriptProjectOptions.githubOptions

___

### gitignore

• `Optional` `Readonly` **gitignore**: `string`[]

Additional entries to .gitignore

#### Inherited from

TypeScriptProjectOptions.gitignore

___

### gitpod

• `Optional` `Readonly` **gitpod**: `boolean`

Add a Gitpod development environment

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.gitpod

___

### homepage

• `Optional` `Readonly` **homepage**: `string`

Package's Homepage / Website

#### Inherited from

TypeScriptProjectOptions.homepage

___

### jest

• `Optional` `Readonly` **jest**: `boolean`

Setup jest unit tests

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.jest

___

### jestOptions

• `Optional` `Readonly` **jestOptions**: `JestOptions`

Jest options

**`Default`**

```ts
- default options
```

#### Inherited from

TypeScriptProjectOptions.jestOptions

___

### jsiiReleaseVersion

• `Optional` `Readonly` **jsiiReleaseVersion**: `string`

Version requirement of `publib` which is used to publish modules to npm.

**`Default`**

```ts
"latest"
```

#### Inherited from

TypeScriptProjectOptions.jsiiReleaseVersion

___

### keywords

• `Optional` `Readonly` **keywords**: `string`[]

Keywords to include in `package.json`.

#### Inherited from

TypeScriptProjectOptions.keywords

___

### libdir

• `Optional` `Readonly` **libdir**: `string`

Typescript  artifacts output directory

**`Default`**

```ts
"lib"
```

#### Inherited from

TypeScriptProjectOptions.libdir

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

#### Inherited from

TypeScriptProjectOptions.license

___

### licensed

• `Optional` `Readonly` **licensed**: `boolean`

Indicates if a license should be added.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.licensed

___

### logging

• `Optional` `Readonly` **logging**: `LoggerOptions`

Configure logging options such as verbosity.

**`Default`**

```ts
{}
```

#### Inherited from

TypeScriptProjectOptions.logging

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

#### Inherited from

TypeScriptProjectOptions.majorVersion

___

### maxNodeVersion

• `Optional` `Readonly` **maxNodeVersion**: `string`

Minimum node.js version to require via `engines` (inclusive).

**`Default`**

```ts
- no max
```

#### Inherited from

TypeScriptProjectOptions.maxNodeVersion

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

#### Inherited from

TypeScriptProjectOptions.mergify

___

### mergifyOptions

• `Optional` `Readonly` **mergifyOptions**: `MergifyOptions`

Options for mergify

**`Default`**

```ts
- default options
```

**`Deprecated`**

use `githubOptions.mergifyOptions` instead

#### Inherited from

TypeScriptProjectOptions.mergifyOptions

___

### minMajorVersion

• `Optional` `Readonly` **minMajorVersion**: `number`

Minimal Major version to release

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

**`Default`**

```ts
- No minimum version is being enforced
```

#### Inherited from

TypeScriptProjectOptions.minMajorVersion

___

### minNodeVersion

• `Optional` `Readonly` **minNodeVersion**: `string`

Minimum Node.js version to require via package.json `engines` (inclusive).

**`Default`**

```ts
- no "engines" specified
```

#### Inherited from

TypeScriptProjectOptions.minNodeVersion

___

### mutableBuild

• `Optional` `Readonly` **mutableBuild**: `boolean`

Automatically update files modified during builds to pull-request branches. This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.mutableBuild

___

### name

• `Readonly` **name**: `string`

This is the name of your project.

**`Default`**

```ts
$BASEDIR
```

**`Featured`**

#### Inherited from

TypeScriptProjectOptions.name

___

### npmAccess

• `Optional` `Readonly` **npmAccess**: `NpmAccess`

Access level of the npm package.

**`Default`**

- for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

#### Inherited from

TypeScriptProjectOptions.npmAccess

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

#### Inherited from

TypeScriptProjectOptions.npmDistTag

___

### npmIgnoreOptions

• `Optional` `Readonly` **npmIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .npmignore file

#### Inherited from

TypeScriptProjectOptions.npmIgnoreOptions

___

### npmProvenance

• `Optional` `Readonly` **npmProvenance**: `boolean`

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

**`See`**

https://docs.npmjs.com/generating-provenance-statements

**`Default`**

```ts
- true for public packages, false otherwise
```

#### Inherited from

TypeScriptProjectOptions.npmProvenance

___

### npmRegistry

• `Optional` `Readonly` **npmRegistry**: `string`

The host name of the npm registry to publish to. Cannot be set together with `npmRegistryUrl`.

**`Deprecated`**

use `npmRegistryUrl` instead

#### Inherited from

TypeScriptProjectOptions.npmRegistry

___

### npmRegistryUrl

• `Optional` `Readonly` **npmRegistryUrl**: `string`

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

**`Default`**

```ts
"https://registry.npmjs.org"
```

#### Inherited from

TypeScriptProjectOptions.npmRegistryUrl

___

### npmTokenSecret

• `Optional` `Readonly` **npmTokenSecret**: `string`

GitHub secret which contains the NPM token to use when publishing packages.

**`Default`**

```ts
"NPM_TOKEN"
```

#### Inherited from

TypeScriptProjectOptions.npmTokenSecret

___

### npmignore

• `Optional` `Readonly` **npmignore**: `string`[]

Additional entries to .npmignore.

**`Deprecated`**

- use `project.addPackageIgnore`

#### Inherited from

TypeScriptProjectOptions.npmignore

___

### npmignoreEnabled

• `Optional` `Readonly` **npmignoreEnabled**: `boolean`

Defines an .npmignore file. Normally this is only needed for libraries that
are packaged as tarballs.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.npmignoreEnabled

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

#### Inherited from

TypeScriptProjectOptions.outdir

___

### package

• `Optional` `Readonly` **package**: `boolean`

Defines a `package` task that will produce an npm tarball under the
artifacts directory (e.g. `dist`).

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.package

___

### packageManager

• `Optional` `Readonly` **packageManager**: `NodePackageManager`

The Node Package Manager used to execute scripts

**`Default`**

```ts
NodePackageManager.YARN_CLASSIC
```

#### Inherited from

TypeScriptProjectOptions.packageManager

___

### packageName

• `Optional` `Readonly` **packageName**: `string`

The "name" in package.json

**`Default`**

```ts
- defaults to project name
```

**`Featured`**

#### Inherited from

TypeScriptProjectOptions.packageName

___

### parent

• `Optional` `Readonly` **parent**: `Project`

The parent project, if this project is part of a bigger project.

#### Inherited from

TypeScriptProjectOptions.parent

___

### peerDependencyOptions

• `Optional` `Readonly` **peerDependencyOptions**: `PeerDependencyOptions`

Options for `peerDeps`.

#### Inherited from

TypeScriptProjectOptions.peerDependencyOptions

___

### peerDeps

• `Optional` `Readonly` **peerDeps**: `string`[]

Peer dependencies for this module. Dependencies listed here are required to
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

#### Inherited from

TypeScriptProjectOptions.peerDeps

___

### pnpmVersion

• `Optional` `Readonly` **pnpmVersion**: `string`

The version of PNPM to use if using PNPM as a package manager.

**`Default`**

```ts
"7"
```

#### Inherited from

TypeScriptProjectOptions.pnpmVersion

___

### postBuildSteps

• `Optional` `Readonly` **postBuildSteps**: `JobStep`[]

Steps to execute after build as part of the release workflow.

**`Default`**

```ts
[]
```

#### Inherited from

TypeScriptProjectOptions.postBuildSteps

___

### prerelease

• `Optional` `Readonly` **prerelease**: `string`

Bump versions from the default branch as pre-releases (e.g. "beta",
"alpha", "pre").

**`Default`**

```ts
- normal semantic versions
```

#### Inherited from

TypeScriptProjectOptions.prerelease

___

### prettier

• `Optional` `Readonly` **prettier**: `boolean`

Setup prettier.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.prettier

___

### prettierOptions

• `Optional` `Readonly` **prettierOptions**: `PrettierOptions`

Prettier options

**`Default`**

```ts
- default options
```

#### Inherited from

TypeScriptProjectOptions.prettierOptions

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

#### Inherited from

TypeScriptProjectOptions.projectType

___

### projenCommand

• `Optional` `Readonly` **projenCommand**: `string`

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

**`Default`**

```ts
"npx projen"
```

#### Inherited from

TypeScriptProjectOptions.projenCommand

___

### projenCredentials

• `Optional` `Readonly` **projenCredentials**: `GithubCredentials`

Choose a method of providing GitHub API access for projen workflows.

**`Default`**

```ts
- use a personal access token named PROJEN_GITHUB_TOKEN
```

#### Inherited from

TypeScriptProjectOptions.projenCredentials

___

### projenDevDependency

• `Optional` `Readonly` **projenDevDependency**: `boolean`

Indicates of "projen" should be installed as a devDependency.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.projenDevDependency

___

### projenTokenSecret

• `Optional` `Readonly` **projenTokenSecret**: `string`

The name of a secret which includes a GitHub Personal Access Token to be
used by projen workflows. This token needs to have the `repo`, `workflows`
and `packages` scope.

**`Default`**

```ts
"PROJEN_GITHUB_TOKEN"
```

**`Deprecated`**

use `projenCredentials`

#### Inherited from

TypeScriptProjectOptions.projenTokenSecret

___

### projenVersion

• `Optional` `Readonly` **projenVersion**: `string`

Version of projen to install.

**`Default`**

```ts
- Defaults to the latest version.
```

#### Inherited from

TypeScriptProjectOptions.projenVersion

___

### projenrcJs

• `Optional` `Readonly` **projenrcJs**: `boolean`

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable
.projenrc.js generation.

**`Default`**

```ts
- true if projenrcJson is false
```

#### Inherited from

TypeScriptProjectOptions.projenrcJs

___

### projenrcJsOptions

• `Optional` `Readonly` **projenrcJsOptions**: `ProjenrcOptions`

Options for .projenrc.js

**`Default`**

```ts
- default options
```

#### Inherited from

TypeScriptProjectOptions.projenrcJsOptions

___

### projenrcJson

• `Optional` `Readonly` **projenrcJson**: `boolean`

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable
.projenrc.json generation.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.projenrcJson

___

### projenrcJsonOptions

• `Optional` `Readonly` **projenrcJsonOptions**: `ProjenrcJsonOptions`

Options for .projenrc.json

**`Default`**

```ts
- default options
```

#### Inherited from

TypeScriptProjectOptions.projenrcJsonOptions

___

### projenrcTs

• `Optional` `Readonly` **projenrcTs**: `boolean`

Use TypeScript for your projenrc file (`.projenrc.ts`).

**`Default`**

```ts
false
```

**`Pjnew`**

true

#### Inherited from

TypeScriptProjectOptions.projenrcTs

___

### projenrcTsOptions

• `Optional` `Readonly` **projenrcTsOptions**: `ProjenrcOptions`

Options for .projenrc.ts

#### Inherited from

TypeScriptProjectOptions.projenrcTsOptions

___

### publishDryRun

• `Optional` `Readonly` **publishDryRun**: `boolean`

Instead of actually publishing to package managers, just print the publishing command.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.publishDryRun

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

#### Inherited from

TypeScriptProjectOptions.publishTasks

___

### pullRequestTemplate

• `Optional` `Readonly` **pullRequestTemplate**: `boolean`

Include a GitHub pull request template.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.pullRequestTemplate

___

### pullRequestTemplateContents

• `Optional` `Readonly` **pullRequestTemplateContents**: `string`[]

The contents of the pull request template.

**`Default`**

```ts
- default content
```

#### Inherited from

TypeScriptProjectOptions.pullRequestTemplateContents

___

### readme

• `Optional` `Readonly` **readme**: `SampleReadmeProps`

The README setup.

**`Default`**

```ts
- { filename: 'README.md', contents: '# replace this' }
```

**`Example`**

```ts
"{ filename: 'readme.md', contents: '# title' }"
```

#### Inherited from

TypeScriptProjectOptions.readme

___

### releasableCommits

• `Optional` `Readonly` **releasableCommits**: `ReleasableCommits`

Find commits that should be considered releasable
Used to decide if a release is required.

**`Default`**

```ts
ReleasableCommits.everyCommit()
```

#### Inherited from

TypeScriptProjectOptions.releasableCommits

___

### release

• `Optional` `Readonly` **release**: `boolean`

Add release management to this project.

**`Default`**

```ts
- true (false for subprojects)
```

#### Inherited from

TypeScriptProjectOptions.release

___

### releaseBranches

• `Optional` `Readonly` **releaseBranches**: `Object`

Defines additional release branches. A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

**`Default`**

- no additional branches are used for release. you can use
`addBranch()` to add additional branches.

#### Index signature

▪ [name: `string`]: `BranchOptions`

#### Inherited from

TypeScriptProjectOptions.releaseBranches

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

#### Inherited from

TypeScriptProjectOptions.releaseEveryCommit

___

### releaseFailureIssue

• `Optional` `Readonly` **releaseFailureIssue**: `boolean`

Create a github issue on every failed publishing task.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.releaseFailureIssue

___

### releaseFailureIssueLabel

• `Optional` `Readonly` **releaseFailureIssueLabel**: `string`

The label to apply to issues indicating publish failures.
Only applies if `releaseFailureIssue` is true.

**`Default`**

```ts
"failed-release"
```

#### Inherited from

TypeScriptProjectOptions.releaseFailureIssueLabel

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

#### Inherited from

TypeScriptProjectOptions.releaseSchedule

___

### releaseTagPrefix

• `Optional` `Readonly` **releaseTagPrefix**: `string`

Automatically add the given prefix to release tags.
Useful if you are releasing on multiple branches with overlapping
version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

**`Default`**

```ts
"v"
```

#### Inherited from

TypeScriptProjectOptions.releaseTagPrefix

___

### releaseToNpm

• `Optional` `Readonly` **releaseToNpm**: `boolean`

Automatically release to npm when new versions are introduced.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.releaseToNpm

___

### releaseTrigger

• `Optional` `Readonly` **releaseTrigger**: `ReleaseTrigger`

The release trigger to use.

**`Default`**

- Continuous releases (`ReleaseTrigger.continuous()`)

#### Inherited from

TypeScriptProjectOptions.releaseTrigger

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

#### Inherited from

TypeScriptProjectOptions.releaseWorkflow

___

### releaseWorkflowName

• `Optional` `Readonly` **releaseWorkflowName**: `string`

The name of the default release workflow.

**`Default`**

```ts
"release"
```

#### Inherited from

TypeScriptProjectOptions.releaseWorkflowName

___

### releaseWorkflowSetupSteps

• `Optional` `Readonly` **releaseWorkflowSetupSteps**: `JobStep`[]

A set of workflow steps to execute in order to setup the workflow
container.

#### Inherited from

TypeScriptProjectOptions.releaseWorkflowSetupSteps

___

### renovatebot

• `Optional` `Readonly` **renovatebot**: `boolean`

Use renovatebot to handle dependency upgrades.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.renovatebot

___

### renovatebotOptions

• `Optional` `Readonly` **renovatebotOptions**: `RenovatebotOptions`

Options for renovatebot.

**`Default`**

```ts
- default options
```

#### Inherited from

TypeScriptProjectOptions.renovatebotOptions

___

### repository

• `Optional` `Readonly` **repository**: `string`

The repository is the location where the actual code for your package lives.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

#### Inherited from

TypeScriptProjectOptions.repository

___

### repositoryDirectory

• `Optional` `Readonly` **repositoryDirectory**: `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo),
you can specify the directory in which it lives.

#### Inherited from

TypeScriptProjectOptions.repositoryDirectory

___

### sampleCode

• `Optional` `Readonly` **sampleCode**: `boolean`

Generate one-time sample in `src/` and `test/` if there are no files there.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.sampleCode

___

### scopedPackagesOptions

• `Optional` `Readonly` **scopedPackagesOptions**: `ScopedPackagesOptions`[]

Options for privately hosted scoped packages

**`Default`**

```ts
- fetch all scoped packages from the public npm registry
```

#### Inherited from

TypeScriptProjectOptions.scopedPackagesOptions

___

### scripts

• `Optional` `Readonly` **scripts**: `Object`

npm scripts to include. If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

**`Default`**

```ts
{}
```

**`Deprecated`**

use `project.addTask()` or `package.setScript()`

#### Index signature

▪ [name: `string`]: `string`

#### Inherited from

TypeScriptProjectOptions.scripts

___

### srcdir

• `Optional` `Readonly` **srcdir**: `string`

Typescript sources directory.

**`Default`**

```ts
"src"
```

#### Inherited from

TypeScriptProjectOptions.srcdir

___

### stability

• `Optional` `Readonly` **stability**: `string`

Package's Stability

#### Inherited from

TypeScriptProjectOptions.stability

___

### stale

• `Optional` `Readonly` **stale**: `boolean`

Auto-close of stale issues and pull request. See `staleOptions` for options.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.stale

___

### staleOptions

• `Optional` `Readonly` **staleOptions**: `StaleOptions`

Auto-close stale issues and pull requests. To disable set `stale` to `false`.

**`Default`**

- see defaults in `StaleOptions`

#### Inherited from

TypeScriptProjectOptions.staleOptions

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

#### Inherited from

TypeScriptProjectOptions.testdir

___

### tsJestOptions

• `Optional` `Readonly` **tsJestOptions**: `TsJestOptions`

Options for ts-jest

#### Inherited from

TypeScriptProjectOptions.tsJestOptions

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfigOptions`

Custom TSConfig

**`Default`**

```ts
- default options
```

#### Inherited from

TypeScriptProjectOptions.tsconfig

___

### tsconfigDev

• `Optional` `Readonly` **tsconfigDev**: `TypescriptConfigOptions`

Custom tsconfig options for the development tsconfig.json file (used for testing).

**`Default`**

```ts
- use the production tsconfig options
```

#### Inherited from

TypeScriptProjectOptions.tsconfigDev

___

### tsconfigDevFile

• `Optional` `Readonly` **tsconfigDevFile**: `string`

The name of the development tsconfig.json file.

**`Default`**

```ts
"tsconfig.dev.json"
```

#### Inherited from

TypeScriptProjectOptions.tsconfigDevFile

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

#### Inherited from

TypeScriptProjectOptions.typescriptVersion

___

### versionrcOptions

• `Optional` `Readonly` **versionrcOptions**: `Record`\<`string`, `any`\>

Custom configuration used when creating changelog with standard-version package.
Given values either append to default configuration or overwrite values in it.

**`Default`**

```ts
- standard configuration applicable for GitHub repositories
```

#### Inherited from

TypeScriptProjectOptions.versionrcOptions

___

### vscode

• `Optional` `Readonly` **vscode**: `boolean`

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

**`Default`**

```ts
true
```

#### Inherited from

TypeScriptProjectOptions.vscode

___

### workflowBootstrapSteps

• `Optional` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

Workflow steps to use in order to bootstrap this repo.

**`Default`**

```ts
"yarn install --frozen-lockfile && yarn projen"
```

#### Inherited from

TypeScriptProjectOptions.workflowBootstrapSteps

___

### workflowContainerImage

• `Optional` `Readonly` **workflowContainerImage**: `string`

Container image to use for GitHub workflows.

**`Default`**

```ts
- default image
```

#### Inherited from

TypeScriptProjectOptions.workflowContainerImage

___

### workflowGitIdentity

• `Optional` `Readonly` **workflowGitIdentity**: `GitIdentity`

The git identity to use in workflows.

**`Default`**

```ts
- GitHub Actions
```

#### Inherited from

TypeScriptProjectOptions.workflowGitIdentity

___

### workflowNodeVersion

• `Optional` `Readonly` **workflowNodeVersion**: `string`

The node version to use in GitHub workflows.

**`Default`**

- same as `minNodeVersion`

#### Inherited from

TypeScriptProjectOptions.workflowNodeVersion

___

### workflowPackageCache

• `Optional` `Readonly` **workflowPackageCache**: `boolean`

Enable Node.js package cache in GitHub workflows.

**`Default`**

```ts
false
```

#### Inherited from

TypeScriptProjectOptions.workflowPackageCache

___

### workflowRunsOn

• `Optional` `Readonly` **workflowRunsOn**: `string`[]

Github Runner selection labels

**`Default`**

```ts
["ubuntu-latest"]
```

**`Description`**

Defines a target Runner by labels

**`Throws`**

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

TypeScriptProjectOptions.workflowRunsOn

___

### workflowRunsOnGroup

• `Optional` `Readonly` **workflowRunsOnGroup**: `GroupRunnerOptions`

Github Runner Group selection options

**`Description`**

Defines a target Runner Group by name and/or labels

**`Throws`**

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

TypeScriptProjectOptions.workflowRunsOnGroup

___

### workspaceConfig

• `Optional` `Readonly` **workspaceConfig**: [`WorkspaceConfig`](WorkspaceConfig.md)

Configuration for workspace.

___

### yarnBerryOptions

• `Optional` `Readonly` **yarnBerryOptions**: `YarnBerryOptions`

Options for Yarn Berry

**`Default`**

```ts
- Yarn Berry v4 with all default options
```

#### Inherited from

TypeScriptProjectOptions.yarnBerryOptions
