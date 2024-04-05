[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / NxMonorepoProjectOptions

# Interface: NxMonorepoProjectOptions

Configuration options for the MonorepoTsProject.

## Hierarchy

- [`MonorepoTsProjectOptions`](MonorepoTsProjectOptions.md)

  ↳ **`NxMonorepoProjectOptions`**

## Table of contents

### Properties

- [allowLibraryDependencies](NxMonorepoProjectOptions.md#allowlibrarydependencies)
- [artifactsDirectory](NxMonorepoProjectOptions.md#artifactsdirectory)
- [authorEmail](NxMonorepoProjectOptions.md#authoremail)
- [authorName](NxMonorepoProjectOptions.md#authorname)
- [authorOrganization](NxMonorepoProjectOptions.md#authororganization)
- [authorUrl](NxMonorepoProjectOptions.md#authorurl)
- [autoApproveOptions](NxMonorepoProjectOptions.md#autoapproveoptions)
- [autoApproveUpgrades](NxMonorepoProjectOptions.md#autoapproveupgrades)
- [autoDetectBin](NxMonorepoProjectOptions.md#autodetectbin)
- [autoMerge](NxMonorepoProjectOptions.md#automerge)
- [autoMergeOptions](NxMonorepoProjectOptions.md#automergeoptions)
- [bin](NxMonorepoProjectOptions.md#bin)
- [bugsEmail](NxMonorepoProjectOptions.md#bugsemail)
- [bugsUrl](NxMonorepoProjectOptions.md#bugsurl)
- [buildWorkflow](NxMonorepoProjectOptions.md#buildworkflow)
- [buildWorkflowOptions](NxMonorepoProjectOptions.md#buildworkflowoptions)
- [buildWorkflowTriggers](NxMonorepoProjectOptions.md#buildworkflowtriggers)
- [bundledDeps](NxMonorepoProjectOptions.md#bundleddeps)
- [bundlerOptions](NxMonorepoProjectOptions.md#bundleroptions)
- [checkLicenses](NxMonorepoProjectOptions.md#checklicenses)
- [clobber](NxMonorepoProjectOptions.md#clobber)
- [codeArtifactOptions](NxMonorepoProjectOptions.md#codeartifactoptions)
- [codeCov](NxMonorepoProjectOptions.md#codecov)
- [codeCovTokenSecret](NxMonorepoProjectOptions.md#codecovtokensecret)
- [commitGenerated](NxMonorepoProjectOptions.md#commitgenerated)
- [copyrightOwner](NxMonorepoProjectOptions.md#copyrightowner)
- [copyrightPeriod](NxMonorepoProjectOptions.md#copyrightperiod)
- [defaultReleaseBranch](NxMonorepoProjectOptions.md#defaultreleasebranch)
- [dependabot](NxMonorepoProjectOptions.md#dependabot)
- [dependabotOptions](NxMonorepoProjectOptions.md#dependabotoptions)
- [deps](NxMonorepoProjectOptions.md#deps)
- [depsUpgrade](NxMonorepoProjectOptions.md#depsupgrade)
- [depsUpgradeOptions](NxMonorepoProjectOptions.md#depsupgradeoptions)
- [description](NxMonorepoProjectOptions.md#description)
- [devContainer](NxMonorepoProjectOptions.md#devcontainer)
- [devDeps](NxMonorepoProjectOptions.md#devdeps)
- [disableNodeWarnings](NxMonorepoProjectOptions.md#disablenodewarnings)
- [disableTsconfig](NxMonorepoProjectOptions.md#disabletsconfig)
- [disableTsconfigDev](NxMonorepoProjectOptions.md#disabletsconfigdev)
- [docgen](NxMonorepoProjectOptions.md#docgen)
- [docsDirectory](NxMonorepoProjectOptions.md#docsdirectory)
- [entrypoint](NxMonorepoProjectOptions.md#entrypoint)
- [entrypointTypes](NxMonorepoProjectOptions.md#entrypointtypes)
- [eslint](NxMonorepoProjectOptions.md#eslint)
- [eslintOptions](NxMonorepoProjectOptions.md#eslintoptions)
- [gitIgnoreOptions](NxMonorepoProjectOptions.md#gitignoreoptions)
- [gitOptions](NxMonorepoProjectOptions.md#gitoptions)
- [github](NxMonorepoProjectOptions.md#github)
- [githubOptions](NxMonorepoProjectOptions.md#githuboptions)
- [gitignore](NxMonorepoProjectOptions.md#gitignore)
- [gitpod](NxMonorepoProjectOptions.md#gitpod)
- [homepage](NxMonorepoProjectOptions.md#homepage)
- [jest](NxMonorepoProjectOptions.md#jest)
- [jestOptions](NxMonorepoProjectOptions.md#jestoptions)
- [jsiiReleaseVersion](NxMonorepoProjectOptions.md#jsiireleaseversion)
- [keywords](NxMonorepoProjectOptions.md#keywords)
- [libdir](NxMonorepoProjectOptions.md#libdir)
- [license](NxMonorepoProjectOptions.md#license)
- [licensed](NxMonorepoProjectOptions.md#licensed)
- [logging](NxMonorepoProjectOptions.md#logging)
- [majorVersion](NxMonorepoProjectOptions.md#majorversion)
- [maxNodeVersion](NxMonorepoProjectOptions.md#maxnodeversion)
- [mergify](NxMonorepoProjectOptions.md#mergify)
- [mergifyOptions](NxMonorepoProjectOptions.md#mergifyoptions)
- [minMajorVersion](NxMonorepoProjectOptions.md#minmajorversion)
- [minNodeVersion](NxMonorepoProjectOptions.md#minnodeversion)
- [mutableBuild](NxMonorepoProjectOptions.md#mutablebuild)
- [name](NxMonorepoProjectOptions.md#name)
- [npmAccess](NxMonorepoProjectOptions.md#npmaccess)
- [npmDistTag](NxMonorepoProjectOptions.md#npmdisttag)
- [npmIgnoreOptions](NxMonorepoProjectOptions.md#npmignoreoptions)
- [npmProvenance](NxMonorepoProjectOptions.md#npmprovenance)
- [npmRegistry](NxMonorepoProjectOptions.md#npmregistry)
- [npmRegistryUrl](NxMonorepoProjectOptions.md#npmregistryurl)
- [npmTokenSecret](NxMonorepoProjectOptions.md#npmtokensecret)
- [npmignore](NxMonorepoProjectOptions.md#npmignore)
- [npmignoreEnabled](NxMonorepoProjectOptions.md#npmignoreenabled)
- [outdir](NxMonorepoProjectOptions.md#outdir)
- [package](NxMonorepoProjectOptions.md#package)
- [packageManager](NxMonorepoProjectOptions.md#packagemanager)
- [packageName](NxMonorepoProjectOptions.md#packagename)
- [parent](NxMonorepoProjectOptions.md#parent)
- [peerDependencyOptions](NxMonorepoProjectOptions.md#peerdependencyoptions)
- [peerDeps](NxMonorepoProjectOptions.md#peerdeps)
- [pnpmVersion](NxMonorepoProjectOptions.md#pnpmversion)
- [postBuildSteps](NxMonorepoProjectOptions.md#postbuildsteps)
- [prerelease](NxMonorepoProjectOptions.md#prerelease)
- [prettier](NxMonorepoProjectOptions.md#prettier)
- [prettierOptions](NxMonorepoProjectOptions.md#prettieroptions)
- [projectType](NxMonorepoProjectOptions.md#projecttype)
- [projenCommand](NxMonorepoProjectOptions.md#projencommand)
- [projenCredentials](NxMonorepoProjectOptions.md#projencredentials)
- [projenDevDependency](NxMonorepoProjectOptions.md#projendevdependency)
- [projenTokenSecret](NxMonorepoProjectOptions.md#projentokensecret)
- [projenVersion](NxMonorepoProjectOptions.md#projenversion)
- [projenrcJs](NxMonorepoProjectOptions.md#projenrcjs)
- [projenrcJsOptions](NxMonorepoProjectOptions.md#projenrcjsoptions)
- [projenrcJson](NxMonorepoProjectOptions.md#projenrcjson)
- [projenrcJsonOptions](NxMonorepoProjectOptions.md#projenrcjsonoptions)
- [projenrcTs](NxMonorepoProjectOptions.md#projenrcts)
- [projenrcTsOptions](NxMonorepoProjectOptions.md#projenrctsoptions)
- [publishDryRun](NxMonorepoProjectOptions.md#publishdryrun)
- [publishTasks](NxMonorepoProjectOptions.md#publishtasks)
- [pullRequestTemplate](NxMonorepoProjectOptions.md#pullrequesttemplate)
- [pullRequestTemplateContents](NxMonorepoProjectOptions.md#pullrequesttemplatecontents)
- [readme](NxMonorepoProjectOptions.md#readme)
- [releasableCommits](NxMonorepoProjectOptions.md#releasablecommits)
- [release](NxMonorepoProjectOptions.md#release)
- [releaseBranches](NxMonorepoProjectOptions.md#releasebranches)
- [releaseEveryCommit](NxMonorepoProjectOptions.md#releaseeverycommit)
- [releaseFailureIssue](NxMonorepoProjectOptions.md#releasefailureissue)
- [releaseFailureIssueLabel](NxMonorepoProjectOptions.md#releasefailureissuelabel)
- [releaseSchedule](NxMonorepoProjectOptions.md#releaseschedule)
- [releaseTagPrefix](NxMonorepoProjectOptions.md#releasetagprefix)
- [releaseToNpm](NxMonorepoProjectOptions.md#releasetonpm)
- [releaseTrigger](NxMonorepoProjectOptions.md#releasetrigger)
- [releaseWorkflow](NxMonorepoProjectOptions.md#releaseworkflow)
- [releaseWorkflowName](NxMonorepoProjectOptions.md#releaseworkflowname)
- [releaseWorkflowSetupSteps](NxMonorepoProjectOptions.md#releaseworkflowsetupsteps)
- [renovatebot](NxMonorepoProjectOptions.md#renovatebot)
- [renovatebotOptions](NxMonorepoProjectOptions.md#renovatebotoptions)
- [repository](NxMonorepoProjectOptions.md#repository)
- [repositoryDirectory](NxMonorepoProjectOptions.md#repositorydirectory)
- [sampleCode](NxMonorepoProjectOptions.md#samplecode)
- [scopedPackagesOptions](NxMonorepoProjectOptions.md#scopedpackagesoptions)
- [scripts](NxMonorepoProjectOptions.md#scripts)
- [srcdir](NxMonorepoProjectOptions.md#srcdir)
- [stability](NxMonorepoProjectOptions.md#stability)
- [stale](NxMonorepoProjectOptions.md#stale)
- [staleOptions](NxMonorepoProjectOptions.md#staleoptions)
- [testdir](NxMonorepoProjectOptions.md#testdir)
- [tsJestOptions](NxMonorepoProjectOptions.md#tsjestoptions)
- [tsconfig](NxMonorepoProjectOptions.md#tsconfig)
- [tsconfigDev](NxMonorepoProjectOptions.md#tsconfigdev)
- [tsconfigDevFile](NxMonorepoProjectOptions.md#tsconfigdevfile)
- [typescriptVersion](NxMonorepoProjectOptions.md#typescriptversion)
- [versionrcOptions](NxMonorepoProjectOptions.md#versionrcoptions)
- [vscode](NxMonorepoProjectOptions.md#vscode)
- [workflowBootstrapSteps](NxMonorepoProjectOptions.md#workflowbootstrapsteps)
- [workflowContainerImage](NxMonorepoProjectOptions.md#workflowcontainerimage)
- [workflowGitIdentity](NxMonorepoProjectOptions.md#workflowgitidentity)
- [workflowNodeVersion](NxMonorepoProjectOptions.md#workflownodeversion)
- [workflowPackageCache](NxMonorepoProjectOptions.md#workflowpackagecache)
- [workflowRunsOn](NxMonorepoProjectOptions.md#workflowrunson)
- [workflowRunsOnGroup](NxMonorepoProjectOptions.md#workflowrunsongroup)
- [workspaceConfig](NxMonorepoProjectOptions.md#workspaceconfig)
- [yarnBerryOptions](NxMonorepoProjectOptions.md#yarnberryoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[allowLibraryDependencies](MonorepoTsProjectOptions.md#allowlibrarydependencies)

___

### artifactsDirectory

• `Optional` `Readonly` **artifactsDirectory**: `string`

A directory which will contain build artifacts.

**`Default`**

```ts
"dist"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[artifactsDirectory](MonorepoTsProjectOptions.md#artifactsdirectory)

___

### authorEmail

• `Optional` `Readonly` **authorEmail**: `string`

Author's e-mail

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[authorEmail](MonorepoTsProjectOptions.md#authoremail)

___

### authorName

• `Optional` `Readonly` **authorName**: `string`

Author's name

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[authorName](MonorepoTsProjectOptions.md#authorname)

___

### authorOrganization

• `Optional` `Readonly` **authorOrganization**: `boolean`

Is the author an organization

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[authorOrganization](MonorepoTsProjectOptions.md#authororganization)

___

### authorUrl

• `Optional` `Readonly` **authorUrl**: `string`

Author's URL / Website

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[authorUrl](MonorepoTsProjectOptions.md#authorurl)

___

### autoApproveOptions

• `Optional` `Readonly` **autoApproveOptions**: `AutoApproveOptions`

Enable and configure the 'auto approve' workflow.

**`Default`**

```ts
- auto approve is disabled
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[autoApproveOptions](MonorepoTsProjectOptions.md#autoapproveoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[autoApproveUpgrades](MonorepoTsProjectOptions.md#autoapproveupgrades)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[autoDetectBin](MonorepoTsProjectOptions.md#autodetectbin)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[autoMerge](MonorepoTsProjectOptions.md#automerge)

___

### autoMergeOptions

• `Optional` `Readonly` **autoMergeOptions**: `AutoMergeOptions`

Configure options for automatic merging on GitHub. Has no effect if
`github.mergify` or `autoMerge` is set to false.

**`Default`**

- see defaults in `AutoMergeOptions`

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[autoMergeOptions](MonorepoTsProjectOptions.md#automergeoptions)

___

### bin

• `Optional` `Readonly` **bin**: `Record`\<`string`, `string`\>

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[bin](MonorepoTsProjectOptions.md#bin)

___

### bugsEmail

• `Optional` `Readonly` **bugsEmail**: `string`

The email address to which issues should be reported.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[bugsEmail](MonorepoTsProjectOptions.md#bugsemail)

___

### bugsUrl

• `Optional` `Readonly` **bugsUrl**: `string`

The url to your project's issue tracker.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[bugsUrl](MonorepoTsProjectOptions.md#bugsurl)

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `boolean`

Define a GitHub workflow for building PRs.

**`Default`**

```ts
- true if not a subproject
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[buildWorkflow](MonorepoTsProjectOptions.md#buildworkflow)

___

### buildWorkflowOptions

• `Optional` `Readonly` **buildWorkflowOptions**: `BuildWorkflowOptions`

Options for PR build workflow.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[buildWorkflowOptions](MonorepoTsProjectOptions.md#buildworkflowoptions)

___

### buildWorkflowTriggers

• `Optional` `Readonly` **buildWorkflowTriggers**: `Triggers`

Build workflow triggers

**`Default`**

```ts
"{ pullRequest: {}, workflowDispatch: {} }"
```

**`Deprecated`**

- Use `buildWorkflowOptions.workflowTriggers`

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[buildWorkflowTriggers](MonorepoTsProjectOptions.md#buildworkflowtriggers)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[bundledDeps](MonorepoTsProjectOptions.md#bundleddeps)

___

### bundlerOptions

• `Optional` `Readonly` **bundlerOptions**: `BundlerOptions`

Options for `Bundler`.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[bundlerOptions](MonorepoTsProjectOptions.md#bundleroptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[checkLicenses](MonorepoTsProjectOptions.md#checklicenses)

___

### clobber

• `Optional` `Readonly` **clobber**: `boolean`

Add a `clobber` task which resets the repo to origin.

**`Default`**

```ts
- true, but false for subprojects
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[clobber](MonorepoTsProjectOptions.md#clobber)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[codeArtifactOptions](MonorepoTsProjectOptions.md#codeartifactoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[codeCov](MonorepoTsProjectOptions.md#codecov)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[codeCovTokenSecret](MonorepoTsProjectOptions.md#codecovtokensecret)

___

### commitGenerated

• `Optional` `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

**`Default`**

```ts
true
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[commitGenerated](MonorepoTsProjectOptions.md#commitgenerated)

___

### copyrightOwner

• `Optional` `Readonly` **copyrightOwner**: `string`

License copyright owner.

**`Default`**

- defaults to the value of authorName or "" if `authorName` is undefined.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[copyrightOwner](MonorepoTsProjectOptions.md#copyrightowner)

___

### copyrightPeriod

• `Optional` `Readonly` **copyrightPeriod**: `string`

The copyright years to put in the LICENSE file.

**`Default`**

```ts
- current year
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[copyrightPeriod](MonorepoTsProjectOptions.md#copyrightperiod)

___

### defaultReleaseBranch

• `Readonly` **defaultReleaseBranch**: `string`

The name of the main release branch.

**`Default`**

```ts
"main"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[defaultReleaseBranch](MonorepoTsProjectOptions.md#defaultreleasebranch)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[dependabot](MonorepoTsProjectOptions.md#dependabot)

___

### dependabotOptions

• `Optional` `Readonly` **dependabotOptions**: `DependabotOptions`

Options for dependabot.

**`Default`**

```ts
- default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[dependabotOptions](MonorepoTsProjectOptions.md#dependabotoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[deps](MonorepoTsProjectOptions.md#deps)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[depsUpgrade](MonorepoTsProjectOptions.md#depsupgrade)

___

### depsUpgradeOptions

• `Optional` `Readonly` **depsUpgradeOptions**: [`UpgradeDependenciesOptions`](UpgradeDependenciesOptions.md)

Options for `UpgradeDependencies`.

**`Default`**

```ts
- default options
```

#### Overrides

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[depsUpgradeOptions](MonorepoTsProjectOptions.md#depsupgradeoptions)

___

### description

• `Optional` `Readonly` **description**: `string`

The description is just a string that helps people understand the purpose of the package.
It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

**`Featured`**

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[description](MonorepoTsProjectOptions.md#description)

___

### devContainer

• `Optional` `Readonly` **devContainer**: `boolean`

Add a VSCode development environment (used for GitHub Codespaces)

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[devContainer](MonorepoTsProjectOptions.md#devcontainer)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[devDeps](MonorepoTsProjectOptions.md#devdeps)

___

### disableNodeWarnings

• `Optional` `Readonly` **disableNodeWarnings**: `boolean`

Disable node warnings from being emitted during build tasks

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[disableNodeWarnings](MonorepoTsProjectOptions.md#disablenodewarnings)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[disableTsconfig](MonorepoTsProjectOptions.md#disabletsconfig)

___

### disableTsconfigDev

• `Optional` `Readonly` **disableTsconfigDev**: `boolean`

Do not generate a `tsconfig.dev.json` file.

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[disableTsconfigDev](MonorepoTsProjectOptions.md#disabletsconfigdev)

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

Docgen by Typedoc

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[docgen](MonorepoTsProjectOptions.md#docgen)

___

### docsDirectory

• `Optional` `Readonly` **docsDirectory**: `string`

Docs directory

**`Default`**

```ts
"docs"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[docsDirectory](MonorepoTsProjectOptions.md#docsdirectory)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[entrypoint](MonorepoTsProjectOptions.md#entrypoint)

___

### entrypointTypes

• `Optional` `Readonly` **entrypointTypes**: `string`

The .d.ts file that includes the type declarations for this module.

**`Default`**

```ts
- .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[entrypointTypes](MonorepoTsProjectOptions.md#entrypointtypes)

___

### eslint

• `Optional` `Readonly` **eslint**: `boolean`

Setup eslint.

**`Default`**

```ts
true
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[eslint](MonorepoTsProjectOptions.md#eslint)

___

### eslintOptions

• `Optional` `Readonly` **eslintOptions**: `EslintOptions`

Eslint options

**`Default`**

```ts
- opinionated default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[eslintOptions](MonorepoTsProjectOptions.md#eslintoptions)

___

### gitIgnoreOptions

• `Optional` `Readonly` **gitIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .gitignore file

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[gitIgnoreOptions](MonorepoTsProjectOptions.md#gitignoreoptions)

___

### gitOptions

• `Optional` `Readonly` **gitOptions**: `GitOptions`

Configuration options for git

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[gitOptions](MonorepoTsProjectOptions.md#gitoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[github](MonorepoTsProjectOptions.md#github)

___

### githubOptions

• `Optional` `Readonly` **githubOptions**: `GitHubOptions`

Options for GitHub integration

**`Default`**

```ts
- see GitHubOptions
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[githubOptions](MonorepoTsProjectOptions.md#githuboptions)

___

### gitignore

• `Optional` `Readonly` **gitignore**: `string`[]

Additional entries to .gitignore

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[gitignore](MonorepoTsProjectOptions.md#gitignore)

___

### gitpod

• `Optional` `Readonly` **gitpod**: `boolean`

Add a Gitpod development environment

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[gitpod](MonorepoTsProjectOptions.md#gitpod)

___

### homepage

• `Optional` `Readonly` **homepage**: `string`

Package's Homepage / Website

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[homepage](MonorepoTsProjectOptions.md#homepage)

___

### jest

• `Optional` `Readonly` **jest**: `boolean`

Setup jest unit tests

**`Default`**

```ts
true
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[jest](MonorepoTsProjectOptions.md#jest)

___

### jestOptions

• `Optional` `Readonly` **jestOptions**: `JestOptions`

Jest options

**`Default`**

```ts
- default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[jestOptions](MonorepoTsProjectOptions.md#jestoptions)

___

### jsiiReleaseVersion

• `Optional` `Readonly` **jsiiReleaseVersion**: `string`

Version requirement of `publib` which is used to publish modules to npm.

**`Default`**

```ts
"latest"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[jsiiReleaseVersion](MonorepoTsProjectOptions.md#jsiireleaseversion)

___

### keywords

• `Optional` `Readonly` **keywords**: `string`[]

Keywords to include in `package.json`.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[keywords](MonorepoTsProjectOptions.md#keywords)

___

### libdir

• `Optional` `Readonly` **libdir**: `string`

Typescript  artifacts output directory

**`Default`**

```ts
"lib"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[libdir](MonorepoTsProjectOptions.md#libdir)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[license](MonorepoTsProjectOptions.md#license)

___

### licensed

• `Optional` `Readonly` **licensed**: `boolean`

Indicates if a license should be added.

**`Default`**

```ts
true
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[licensed](MonorepoTsProjectOptions.md#licensed)

___

### logging

• `Optional` `Readonly` **logging**: `LoggerOptions`

Configure logging options such as verbosity.

**`Default`**

```ts
{}
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[logging](MonorepoTsProjectOptions.md#logging)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[majorVersion](MonorepoTsProjectOptions.md#majorversion)

___

### maxNodeVersion

• `Optional` `Readonly` **maxNodeVersion**: `string`

Minimum node.js version to require via `engines` (inclusive).

**`Default`**

```ts
- no max
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[maxNodeVersion](MonorepoTsProjectOptions.md#maxnodeversion)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[mergify](MonorepoTsProjectOptions.md#mergify)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[mergifyOptions](MonorepoTsProjectOptions.md#mergifyoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[minMajorVersion](MonorepoTsProjectOptions.md#minmajorversion)

___

### minNodeVersion

• `Optional` `Readonly` **minNodeVersion**: `string`

Minimum Node.js version to require via package.json `engines` (inclusive).

**`Default`**

```ts
- no "engines" specified
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[minNodeVersion](MonorepoTsProjectOptions.md#minnodeversion)

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

**`Deprecated`**

- Use `buildWorkflowOptions.mutableBuild`

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[mutableBuild](MonorepoTsProjectOptions.md#mutablebuild)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[name](MonorepoTsProjectOptions.md#name)

___

### npmAccess

• `Optional` `Readonly` **npmAccess**: `NpmAccess`

Access level of the npm package.

**`Default`**

- for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmAccess](MonorepoTsProjectOptions.md#npmaccess)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmDistTag](MonorepoTsProjectOptions.md#npmdisttag)

___

### npmIgnoreOptions

• `Optional` `Readonly` **npmIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .npmignore file

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmIgnoreOptions](MonorepoTsProjectOptions.md#npmignoreoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmProvenance](MonorepoTsProjectOptions.md#npmprovenance)

___

### npmRegistry

• `Optional` `Readonly` **npmRegistry**: `string`

The host name of the npm registry to publish to. Cannot be set together with `npmRegistryUrl`.

**`Deprecated`**

use `npmRegistryUrl` instead

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmRegistry](MonorepoTsProjectOptions.md#npmregistry)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmRegistryUrl](MonorepoTsProjectOptions.md#npmregistryurl)

___

### npmTokenSecret

• `Optional` `Readonly` **npmTokenSecret**: `string`

GitHub secret which contains the NPM token to use when publishing packages.

**`Default`**

```ts
"NPM_TOKEN"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmTokenSecret](MonorepoTsProjectOptions.md#npmtokensecret)

___

### npmignore

• `Optional` `Readonly` **npmignore**: `string`[]

Additional entries to .npmignore.

**`Deprecated`**

- use `project.addPackageIgnore`

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmignore](MonorepoTsProjectOptions.md#npmignore)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[npmignoreEnabled](MonorepoTsProjectOptions.md#npmignoreenabled)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[outdir](MonorepoTsProjectOptions.md#outdir)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[package](MonorepoTsProjectOptions.md#package)

___

### packageManager

• `Optional` `Readonly` **packageManager**: `NodePackageManager`

The Node Package Manager used to execute scripts

**`Default`**

```ts
NodePackageManager.YARN_CLASSIC
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[packageManager](MonorepoTsProjectOptions.md#packagemanager)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[packageName](MonorepoTsProjectOptions.md#packagename)

___

### parent

• `Optional` `Readonly` **parent**: `Project`

The parent project, if this project is part of a bigger project.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[parent](MonorepoTsProjectOptions.md#parent)

___

### peerDependencyOptions

• `Optional` `Readonly` **peerDependencyOptions**: `PeerDependencyOptions`

Options for `peerDeps`.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[peerDependencyOptions](MonorepoTsProjectOptions.md#peerdependencyoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[peerDeps](MonorepoTsProjectOptions.md#peerdeps)

___

### pnpmVersion

• `Optional` `Readonly` **pnpmVersion**: `string`

The version of PNPM to use if using PNPM as a package manager.

**`Default`**

```ts
"7"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[pnpmVersion](MonorepoTsProjectOptions.md#pnpmversion)

___

### postBuildSteps

• `Optional` `Readonly` **postBuildSteps**: `JobStep`[]

Steps to execute after build as part of the release workflow.

**`Default`**

```ts
[]
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[postBuildSteps](MonorepoTsProjectOptions.md#postbuildsteps)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[prerelease](MonorepoTsProjectOptions.md#prerelease)

___

### prettier

• `Optional` `Readonly` **prettier**: `boolean`

Setup prettier.

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[prettier](MonorepoTsProjectOptions.md#prettier)

___

### prettierOptions

• `Optional` `Readonly` **prettierOptions**: `PrettierOptions`

Prettier options

**`Default`**

```ts
- default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[prettierOptions](MonorepoTsProjectOptions.md#prettieroptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projectType](MonorepoTsProjectOptions.md#projecttype)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenCommand](MonorepoTsProjectOptions.md#projencommand)

___

### projenCredentials

• `Optional` `Readonly` **projenCredentials**: `GithubCredentials`

Choose a method of providing GitHub API access for projen workflows.

**`Default`**

```ts
- use a personal access token named PROJEN_GITHUB_TOKEN
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenCredentials](MonorepoTsProjectOptions.md#projencredentials)

___

### projenDevDependency

• `Optional` `Readonly` **projenDevDependency**: `boolean`

Indicates of "projen" should be installed as a devDependency.

**`Default`**

```ts
true
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenDevDependency](MonorepoTsProjectOptions.md#projendevdependency)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenTokenSecret](MonorepoTsProjectOptions.md#projentokensecret)

___

### projenVersion

• `Optional` `Readonly` **projenVersion**: `string`

Version of projen to install.

**`Default`**

```ts
- Defaults to the latest version.
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenVersion](MonorepoTsProjectOptions.md#projenversion)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenrcJs](MonorepoTsProjectOptions.md#projenrcjs)

___

### projenrcJsOptions

• `Optional` `Readonly` **projenrcJsOptions**: `ProjenrcOptions`

Options for .projenrc.js

**`Default`**

```ts
- default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenrcJsOptions](MonorepoTsProjectOptions.md#projenrcjsoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenrcJson](MonorepoTsProjectOptions.md#projenrcjson)

___

### projenrcJsonOptions

• `Optional` `Readonly` **projenrcJsonOptions**: `ProjenrcJsonOptions`

Options for .projenrc.json

**`Default`**

```ts
- default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenrcJsonOptions](MonorepoTsProjectOptions.md#projenrcjsonoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenrcTs](MonorepoTsProjectOptions.md#projenrcts)

___

### projenrcTsOptions

• `Optional` `Readonly` **projenrcTsOptions**: `ProjenrcOptions`

Options for .projenrc.ts

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[projenrcTsOptions](MonorepoTsProjectOptions.md#projenrctsoptions)

___

### publishDryRun

• `Optional` `Readonly` **publishDryRun**: `boolean`

Instead of actually publishing to package managers, just print the publishing command.

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[publishDryRun](MonorepoTsProjectOptions.md#publishdryrun)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[publishTasks](MonorepoTsProjectOptions.md#publishtasks)

___

### pullRequestTemplate

• `Optional` `Readonly` **pullRequestTemplate**: `boolean`

Include a GitHub pull request template.

**`Default`**

```ts
true
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[pullRequestTemplate](MonorepoTsProjectOptions.md#pullrequesttemplate)

___

### pullRequestTemplateContents

• `Optional` `Readonly` **pullRequestTemplateContents**: `string`[]

The contents of the pull request template.

**`Default`**

```ts
- default content
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[pullRequestTemplateContents](MonorepoTsProjectOptions.md#pullrequesttemplatecontents)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[readme](MonorepoTsProjectOptions.md#readme)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releasableCommits](MonorepoTsProjectOptions.md#releasablecommits)

___

### release

• `Optional` `Readonly` **release**: `boolean`

Add release management to this project.

**`Default`**

```ts
- true (false for subprojects)
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[release](MonorepoTsProjectOptions.md#release)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseBranches](MonorepoTsProjectOptions.md#releasebranches)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseEveryCommit](MonorepoTsProjectOptions.md#releaseeverycommit)

___

### releaseFailureIssue

• `Optional` `Readonly` **releaseFailureIssue**: `boolean`

Create a github issue on every failed publishing task.

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseFailureIssue](MonorepoTsProjectOptions.md#releasefailureissue)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseFailureIssueLabel](MonorepoTsProjectOptions.md#releasefailureissuelabel)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseSchedule](MonorepoTsProjectOptions.md#releaseschedule)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseTagPrefix](MonorepoTsProjectOptions.md#releasetagprefix)

___

### releaseToNpm

• `Optional` `Readonly` **releaseToNpm**: `boolean`

Automatically release to npm when new versions are introduced.

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseToNpm](MonorepoTsProjectOptions.md#releasetonpm)

___

### releaseTrigger

• `Optional` `Readonly` **releaseTrigger**: `ReleaseTrigger`

The release trigger to use.

**`Default`**

- Continuous releases (`ReleaseTrigger.continuous()`)

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseTrigger](MonorepoTsProjectOptions.md#releasetrigger)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseWorkflow](MonorepoTsProjectOptions.md#releaseworkflow)

___

### releaseWorkflowName

• `Optional` `Readonly` **releaseWorkflowName**: `string`

The name of the default release workflow.

**`Default`**

```ts
"release"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseWorkflowName](MonorepoTsProjectOptions.md#releaseworkflowname)

___

### releaseWorkflowSetupSteps

• `Optional` `Readonly` **releaseWorkflowSetupSteps**: `JobStep`[]

A set of workflow steps to execute in order to setup the workflow
container.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[releaseWorkflowSetupSteps](MonorepoTsProjectOptions.md#releaseworkflowsetupsteps)

___

### renovatebot

• `Optional` `Readonly` **renovatebot**: `boolean`

Use renovatebot to handle dependency upgrades.

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[renovatebot](MonorepoTsProjectOptions.md#renovatebot)

___

### renovatebotOptions

• `Optional` `Readonly` **renovatebotOptions**: `RenovatebotOptions`

Options for renovatebot.

**`Default`**

```ts
- default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[renovatebotOptions](MonorepoTsProjectOptions.md#renovatebotoptions)

___

### repository

• `Optional` `Readonly` **repository**: `string`

The repository is the location where the actual code for your package lives.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[repository](MonorepoTsProjectOptions.md#repository)

___

### repositoryDirectory

• `Optional` `Readonly` **repositoryDirectory**: `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo),
you can specify the directory in which it lives.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[repositoryDirectory](MonorepoTsProjectOptions.md#repositorydirectory)

___

### sampleCode

• `Optional` `Readonly` **sampleCode**: `boolean`

Generate one-time sample in `src/` and `test/` if there are no files there.

**`Default`**

```ts
true
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[sampleCode](MonorepoTsProjectOptions.md#samplecode)

___

### scopedPackagesOptions

• `Optional` `Readonly` **scopedPackagesOptions**: `ScopedPackagesOptions`[]

Options for privately hosted scoped packages

**`Default`**

```ts
- fetch all scoped packages from the public npm registry
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[scopedPackagesOptions](MonorepoTsProjectOptions.md#scopedpackagesoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[scripts](MonorepoTsProjectOptions.md#scripts)

___

### srcdir

• `Optional` `Readonly` **srcdir**: `string`

Typescript sources directory.

**`Default`**

```ts
"src"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[srcdir](MonorepoTsProjectOptions.md#srcdir)

___

### stability

• `Optional` `Readonly` **stability**: `string`

Package's Stability

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[stability](MonorepoTsProjectOptions.md#stability)

___

### stale

• `Optional` `Readonly` **stale**: `boolean`

Auto-close of stale issues and pull request. See `staleOptions` for options.

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[stale](MonorepoTsProjectOptions.md#stale)

___

### staleOptions

• `Optional` `Readonly` **staleOptions**: `StaleOptions`

Auto-close stale issues and pull requests. To disable set `stale` to `false`.

**`Default`**

- see defaults in `StaleOptions`

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[staleOptions](MonorepoTsProjectOptions.md#staleoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[testdir](MonorepoTsProjectOptions.md#testdir)

___

### tsJestOptions

• `Optional` `Readonly` **tsJestOptions**: `TsJestOptions`

Options for ts-jest

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[tsJestOptions](MonorepoTsProjectOptions.md#tsjestoptions)

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfigOptions`

Custom TSConfig

**`Default`**

```ts
- default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[tsconfig](MonorepoTsProjectOptions.md#tsconfig)

___

### tsconfigDev

• `Optional` `Readonly` **tsconfigDev**: `TypescriptConfigOptions`

Custom tsconfig options for the development tsconfig.json file (used for testing).

**`Default`**

```ts
- use the production tsconfig options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[tsconfigDev](MonorepoTsProjectOptions.md#tsconfigdev)

___

### tsconfigDevFile

• `Optional` `Readonly` **tsconfigDevFile**: `string`

The name of the development tsconfig.json file.

**`Default`**

```ts
"tsconfig.dev.json"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[tsconfigDevFile](MonorepoTsProjectOptions.md#tsconfigdevfile)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[typescriptVersion](MonorepoTsProjectOptions.md#typescriptversion)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[versionrcOptions](MonorepoTsProjectOptions.md#versionrcoptions)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[vscode](MonorepoTsProjectOptions.md#vscode)

___

### workflowBootstrapSteps

• `Optional` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

Workflow steps to use in order to bootstrap this repo.

**`Default`**

```ts
"yarn install --frozen-lockfile && yarn projen"
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[workflowBootstrapSteps](MonorepoTsProjectOptions.md#workflowbootstrapsteps)

___

### workflowContainerImage

• `Optional` `Readonly` **workflowContainerImage**: `string`

Container image to use for GitHub workflows.

**`Default`**

```ts
- default image
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[workflowContainerImage](MonorepoTsProjectOptions.md#workflowcontainerimage)

___

### workflowGitIdentity

• `Optional` `Readonly` **workflowGitIdentity**: `GitIdentity`

The git identity to use in workflows.

**`Default`**

```ts
- GitHub Actions
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[workflowGitIdentity](MonorepoTsProjectOptions.md#workflowgitidentity)

___

### workflowNodeVersion

• `Optional` `Readonly` **workflowNodeVersion**: `string`

The node version to use in GitHub workflows.

**`Default`**

- same as `minNodeVersion`

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[workflowNodeVersion](MonorepoTsProjectOptions.md#workflownodeversion)

___

### workflowPackageCache

• `Optional` `Readonly` **workflowPackageCache**: `boolean`

Enable Node.js package cache in GitHub workflows.

**`Default`**

```ts
false
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[workflowPackageCache](MonorepoTsProjectOptions.md#workflowpackagecache)

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

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[workflowRunsOn](MonorepoTsProjectOptions.md#workflowrunson)

___

### workflowRunsOnGroup

• `Optional` `Readonly` **workflowRunsOnGroup**: `GroupRunnerOptions`

Github Runner Group selection options

**`Description`**

Defines a target Runner Group by name and/or labels

**`Throws`**

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[workflowRunsOnGroup](MonorepoTsProjectOptions.md#workflowrunsongroup)

___

### workspaceConfig

• `Optional` `Readonly` **workspaceConfig**: [`WorkspaceConfig`](WorkspaceConfig.md)

Configuration for workspace.

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[workspaceConfig](MonorepoTsProjectOptions.md#workspaceconfig)

___

### yarnBerryOptions

• `Optional` `Readonly` **yarnBerryOptions**: `YarnBerryOptions`

Options for Yarn Berry

**`Default`**

```ts
- Yarn Berry v4 with all default options
```

#### Inherited from

[MonorepoTsProjectOptions](MonorepoTsProjectOptions.md).[yarnBerryOptions](MonorepoTsProjectOptions.md#yarnberryoptions)
