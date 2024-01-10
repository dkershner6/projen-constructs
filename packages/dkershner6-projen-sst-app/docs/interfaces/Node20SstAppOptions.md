[dkershner6-projen-sst-app](../README.md) / [Exports](../modules.md) / Node20SstAppOptions

# Interface: Node20SstAppOptions

## Hierarchy

- `SstTypescriptAppOptions`

  ↳ **`Node20SstAppOptions`**

## Table of contents

### Properties

- [allowLibraryDependencies](Node20SstAppOptions.md#allowlibrarydependencies)
- [appEntrypoint](Node20SstAppOptions.md#appentrypoint)
- [artifactsDirectory](Node20SstAppOptions.md#artifactsdirectory)
- [authorEmail](Node20SstAppOptions.md#authoremail)
- [authorName](Node20SstAppOptions.md#authorname)
- [authorOrganization](Node20SstAppOptions.md#authororganization)
- [authorUrl](Node20SstAppOptions.md#authorurl)
- [autoApproveOptions](Node20SstAppOptions.md#autoapproveoptions)
- [autoApproveUpgrades](Node20SstAppOptions.md#autoapproveupgrades)
- [autoDetectBin](Node20SstAppOptions.md#autodetectbin)
- [autoMerge](Node20SstAppOptions.md#automerge)
- [autoMergeOptions](Node20SstAppOptions.md#automergeoptions)
- [bin](Node20SstAppOptions.md#bin)
- [branchNameToSstStageMap](Node20SstAppOptions.md#branchnametosststagemap)
- [bugsEmail](Node20SstAppOptions.md#bugsemail)
- [bugsUrl](Node20SstAppOptions.md#bugsurl)
- [buildCommand](Node20SstAppOptions.md#buildcommand)
- [buildWorkflow](Node20SstAppOptions.md#buildworkflow)
- [buildWorkflowTriggers](Node20SstAppOptions.md#buildworkflowtriggers)
- [bundledDeps](Node20SstAppOptions.md#bundleddeps)
- [bundlerOptions](Node20SstAppOptions.md#bundleroptions)
- [cdkAssert](Node20SstAppOptions.md#cdkassert)
- [cdkAssertions](Node20SstAppOptions.md#cdkassertions)
- [cdkDependencies](Node20SstAppOptions.md#cdkdependencies)
- [cdkDependenciesAsDeps](Node20SstAppOptions.md#cdkdependenciesasdeps)
- [cdkTestDependencies](Node20SstAppOptions.md#cdktestdependencies)
- [cdkVersion](Node20SstAppOptions.md#cdkversion)
- [cdkVersionPinning](Node20SstAppOptions.md#cdkversionpinning)
- [cdkout](Node20SstAppOptions.md#cdkout)
- [checkLicenses](Node20SstAppOptions.md#checklicenses)
- [clobber](Node20SstAppOptions.md#clobber)
- [codeArtifactOptions](Node20SstAppOptions.md#codeartifactoptions)
- [codeCov](Node20SstAppOptions.md#codecov)
- [codeCovTokenSecret](Node20SstAppOptions.md#codecovtokensecret)
- [commitGenerated](Node20SstAppOptions.md#commitgenerated)
- [constructsVersion](Node20SstAppOptions.md#constructsversion)
- [constructsVersionPinning](Node20SstAppOptions.md#constructsversionpinning)
- [context](Node20SstAppOptions.md#context)
- [copyrightOwner](Node20SstAppOptions.md#copyrightowner)
- [copyrightPeriod](Node20SstAppOptions.md#copyrightperiod)
- [defaultReleaseBranch](Node20SstAppOptions.md#defaultreleasebranch)
- [dependabot](Node20SstAppOptions.md#dependabot)
- [dependabotOptions](Node20SstAppOptions.md#dependabotoptions)
- [deps](Node20SstAppOptions.md#deps)
- [depsUpgrade](Node20SstAppOptions.md#depsupgrade)
- [depsUpgradeOptions](Node20SstAppOptions.md#depsupgradeoptions)
- [description](Node20SstAppOptions.md#description)
- [devContainer](Node20SstAppOptions.md#devcontainer)
- [devDeps](Node20SstAppOptions.md#devdeps)
- [disableTsconfig](Node20SstAppOptions.md#disabletsconfig)
- [disableTsconfigDev](Node20SstAppOptions.md#disabletsconfigdev)
- [docgen](Node20SstAppOptions.md#docgen)
- [docsDirectory](Node20SstAppOptions.md#docsdirectory)
- [edgeLambdaAutoDiscover](Node20SstAppOptions.md#edgelambdaautodiscover)
- [entrypoint](Node20SstAppOptions.md#entrypoint)
- [entrypointTypes](Node20SstAppOptions.md#entrypointtypes)
- [eslint](Node20SstAppOptions.md#eslint)
- [eslintOptions](Node20SstAppOptions.md#eslintoptions)
- [experimentalIntegRunner](Node20SstAppOptions.md#experimentalintegrunner)
- [featureFlags](Node20SstAppOptions.md#featureflags)
- [gitIgnoreOptions](Node20SstAppOptions.md#gitignoreoptions)
- [gitOptions](Node20SstAppOptions.md#gitoptions)
- [github](Node20SstAppOptions.md#github)
- [githubOptions](Node20SstAppOptions.md#githuboptions)
- [gitignore](Node20SstAppOptions.md#gitignore)
- [gitpod](Node20SstAppOptions.md#gitpod)
- [homepage](Node20SstAppOptions.md#homepage)
- [integrationTestAutoDiscover](Node20SstAppOptions.md#integrationtestautodiscover)
- [jest](Node20SstAppOptions.md#jest)
- [jestOptions](Node20SstAppOptions.md#jestoptions)
- [jsiiReleaseVersion](Node20SstAppOptions.md#jsiireleaseversion)
- [keywords](Node20SstAppOptions.md#keywords)
- [lambdaAutoDiscover](Node20SstAppOptions.md#lambdaautodiscover)
- [lambdaExtensionAutoDiscover](Node20SstAppOptions.md#lambdaextensionautodiscover)
- [lambdaOptions](Node20SstAppOptions.md#lambdaoptions)
- [libdir](Node20SstAppOptions.md#libdir)
- [license](Node20SstAppOptions.md#license)
- [licensed](Node20SstAppOptions.md#licensed)
- [logging](Node20SstAppOptions.md#logging)
- [majorVersion](Node20SstAppOptions.md#majorversion)
- [maxNodeVersion](Node20SstAppOptions.md#maxnodeversion)
- [mergify](Node20SstAppOptions.md#mergify)
- [mergifyOptions](Node20SstAppOptions.md#mergifyoptions)
- [minMajorVersion](Node20SstAppOptions.md#minmajorversion)
- [minNodeVersion](Node20SstAppOptions.md#minnodeversion)
- [mutableBuild](Node20SstAppOptions.md#mutablebuild)
- [name](Node20SstAppOptions.md#name)
- [npmAccess](Node20SstAppOptions.md#npmaccess)
- [npmDistTag](Node20SstAppOptions.md#npmdisttag)
- [npmIgnoreOptions](Node20SstAppOptions.md#npmignoreoptions)
- [npmRegistry](Node20SstAppOptions.md#npmregistry)
- [npmRegistryUrl](Node20SstAppOptions.md#npmregistryurl)
- [npmTokenSecret](Node20SstAppOptions.md#npmtokensecret)
- [npmignore](Node20SstAppOptions.md#npmignore)
- [npmignoreEnabled](Node20SstAppOptions.md#npmignoreenabled)
- [outdir](Node20SstAppOptions.md#outdir)
- [package](Node20SstAppOptions.md#package)
- [packageManager](Node20SstAppOptions.md#packagemanager)
- [packageName](Node20SstAppOptions.md#packagename)
- [parent](Node20SstAppOptions.md#parent)
- [peerDependencyOptions](Node20SstAppOptions.md#peerdependencyoptions)
- [peerDeps](Node20SstAppOptions.md#peerdeps)
- [pnpmVersion](Node20SstAppOptions.md#pnpmversion)
- [postBuildSteps](Node20SstAppOptions.md#postbuildsteps)
- [prerelease](Node20SstAppOptions.md#prerelease)
- [prettier](Node20SstAppOptions.md#prettier)
- [prettierOptions](Node20SstAppOptions.md#prettieroptions)
- [projectType](Node20SstAppOptions.md#projecttype)
- [projenCommand](Node20SstAppOptions.md#projencommand)
- [projenCredentials](Node20SstAppOptions.md#projencredentials)
- [projenDevDependency](Node20SstAppOptions.md#projendevdependency)
- [projenTokenSecret](Node20SstAppOptions.md#projentokensecret)
- [projenVersion](Node20SstAppOptions.md#projenversion)
- [projenrcJs](Node20SstAppOptions.md#projenrcjs)
- [projenrcJsOptions](Node20SstAppOptions.md#projenrcjsoptions)
- [projenrcJson](Node20SstAppOptions.md#projenrcjson)
- [projenrcJsonOptions](Node20SstAppOptions.md#projenrcjsonoptions)
- [projenrcTs](Node20SstAppOptions.md#projenrcts)
- [projenrcTsOptions](Node20SstAppOptions.md#projenrctsoptions)
- [publishDryRun](Node20SstAppOptions.md#publishdryrun)
- [publishTasks](Node20SstAppOptions.md#publishtasks)
- [publishToAws](Node20SstAppOptions.md#publishtoaws)
- [publishToAwsOptions](Node20SstAppOptions.md#publishtoawsoptions)
- [pullRequestTemplate](Node20SstAppOptions.md#pullrequesttemplate)
- [pullRequestTemplateContents](Node20SstAppOptions.md#pullrequesttemplatecontents)
- [readme](Node20SstAppOptions.md#readme)
- [releasableCommits](Node20SstAppOptions.md#releasablecommits)
- [release](Node20SstAppOptions.md#release)
- [releaseBranches](Node20SstAppOptions.md#releasebranches)
- [releaseEveryCommit](Node20SstAppOptions.md#releaseeverycommit)
- [releaseFailureIssue](Node20SstAppOptions.md#releasefailureissue)
- [releaseFailureIssueLabel](Node20SstAppOptions.md#releasefailureissuelabel)
- [releaseSchedule](Node20SstAppOptions.md#releaseschedule)
- [releaseTagPrefix](Node20SstAppOptions.md#releasetagprefix)
- [releaseToNpm](Node20SstAppOptions.md#releasetonpm)
- [releaseTrigger](Node20SstAppOptions.md#releasetrigger)
- [releaseWorkflow](Node20SstAppOptions.md#releaseworkflow)
- [releaseWorkflowName](Node20SstAppOptions.md#releaseworkflowname)
- [releaseWorkflowSetupSteps](Node20SstAppOptions.md#releaseworkflowsetupsteps)
- [renovatebot](Node20SstAppOptions.md#renovatebot)
- [renovatebotOptions](Node20SstAppOptions.md#renovatebotoptions)
- [repository](Node20SstAppOptions.md#repository)
- [repositoryDirectory](Node20SstAppOptions.md#repositorydirectory)
- [requireApproval](Node20SstAppOptions.md#requireapproval)
- [sampleCode](Node20SstAppOptions.md#samplecode)
- [scopedPackagesOptions](Node20SstAppOptions.md#scopedpackagesoptions)
- [scripts](Node20SstAppOptions.md#scripts)
- [srcdir](Node20SstAppOptions.md#srcdir)
- [sstOut](Node20SstAppOptions.md#sstout)
- [sstVersion](Node20SstAppOptions.md#sstversion)
- [stability](Node20SstAppOptions.md#stability)
- [stale](Node20SstAppOptions.md#stale)
- [staleOptions](Node20SstAppOptions.md#staleoptions)
- [testdir](Node20SstAppOptions.md#testdir)
- [tsJestOptions](Node20SstAppOptions.md#tsjestoptions)
- [tsconfig](Node20SstAppOptions.md#tsconfig)
- [tsconfigDev](Node20SstAppOptions.md#tsconfigdev)
- [tsconfigDevFile](Node20SstAppOptions.md#tsconfigdevfile)
- [typescriptVersion](Node20SstAppOptions.md#typescriptversion)
- [versionrcOptions](Node20SstAppOptions.md#versionrcoptions)
- [vscode](Node20SstAppOptions.md#vscode)
- [watchExcludes](Node20SstAppOptions.md#watchexcludes)
- [watchIncludes](Node20SstAppOptions.md#watchincludes)
- [workflowBootstrapSteps](Node20SstAppOptions.md#workflowbootstrapsteps)
- [workflowContainerImage](Node20SstAppOptions.md#workflowcontainerimage)
- [workflowGitIdentity](Node20SstAppOptions.md#workflowgitidentity)
- [workflowNodeVersion](Node20SstAppOptions.md#workflownodeversion)
- [workflowPackageCache](Node20SstAppOptions.md#workflowpackagecache)
- [workflowRunsOn](Node20SstAppOptions.md#workflowrunson)
- [workflowRunsOnGroup](Node20SstAppOptions.md#workflowrunsongroup)
- [yarnBerryOptions](Node20SstAppOptions.md#yarnberryoptions)

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

SstTypescriptAppOptions.allowLibraryDependencies

___

### appEntrypoint

• `Optional` `Readonly` **appEntrypoint**: `string`

The CDK app's entrypoint (relative to the source directory, which is
"src" by default).

**`Default`**

```ts
"main.ts"
```

#### Inherited from

SstTypescriptAppOptions.appEntrypoint

___

### artifactsDirectory

• `Optional` `Readonly` **artifactsDirectory**: `string`

A directory which will contain build artifacts.

**`Default`**

```ts
"dist"
```

#### Inherited from

SstTypescriptAppOptions.artifactsDirectory

___

### authorEmail

• `Optional` `Readonly` **authorEmail**: `string`

Author's e-mail

#### Inherited from

SstTypescriptAppOptions.authorEmail

___

### authorName

• `Optional` `Readonly` **authorName**: `string`

Author's name

#### Inherited from

SstTypescriptAppOptions.authorName

___

### authorOrganization

• `Optional` `Readonly` **authorOrganization**: `boolean`

Is the author an organization

#### Inherited from

SstTypescriptAppOptions.authorOrganization

___

### authorUrl

• `Optional` `Readonly` **authorUrl**: `string`

Author's URL / Website

#### Inherited from

SstTypescriptAppOptions.authorUrl

___

### autoApproveOptions

• `Optional` `Readonly` **autoApproveOptions**: `AutoApproveOptions`

Enable and configure the 'auto approve' workflow.

**`Default`**

```ts
- auto approve is disabled
```

#### Inherited from

SstTypescriptAppOptions.autoApproveOptions

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

SstTypescriptAppOptions.autoApproveUpgrades

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

SstTypescriptAppOptions.autoDetectBin

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

SstTypescriptAppOptions.autoMerge

___

### autoMergeOptions

• `Optional` `Readonly` **autoMergeOptions**: `AutoMergeOptions`

Configure options for automatic merging on GitHub. Has no effect if
`github.mergify` or `autoMerge` is set to false.

**`Default`**

- see defaults in `AutoMergeOptions`

#### Inherited from

SstTypescriptAppOptions.autoMergeOptions

___

### bin

• `Optional` `Readonly` **bin**: `Record`\<`string`, `string`\>

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

#### Inherited from

SstTypescriptAppOptions.bin

___

### branchNameToSstStageMap

• `Optional` `Readonly` **branchNameToSstStageMap**: `Record`\<`string`, `string`\>

Maps branchNames to SST Stages.

**`Default`**

```ts
- The branchName will be used as the stage name.
```

#### Inherited from

SstTypescriptAppOptions.branchNameToSstStageMap

___

### bugsEmail

• `Optional` `Readonly` **bugsEmail**: `string`

The email address to which issues should be reported.

#### Inherited from

SstTypescriptAppOptions.bugsEmail

___

### bugsUrl

• `Optional` `Readonly` **bugsUrl**: `string`

The url to your project's issue tracker.

#### Inherited from

SstTypescriptAppOptions.bugsUrl

___

### buildCommand

• `Optional` `Readonly` **buildCommand**: `string`

A command to execute before synthesis. This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

**`Default`**

```ts
- no build command
```

#### Inherited from

SstTypescriptAppOptions.buildCommand

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `boolean`

Define a GitHub workflow for building PRs.

**`Default`**

```ts
- true if not a subproject
```

#### Inherited from

SstTypescriptAppOptions.buildWorkflow

___

### buildWorkflowTriggers

• `Optional` `Readonly` **buildWorkflowTriggers**: `Triggers`

Build workflow triggers

**`Default`**

```ts
"{ pullRequest: {}, workflowDispatch: {} }"
```

#### Inherited from

SstTypescriptAppOptions.buildWorkflowTriggers

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

SstTypescriptAppOptions.bundledDeps

___

### bundlerOptions

• `Optional` `Readonly` **bundlerOptions**: `BundlerOptions`

Options for `Bundler`.

#### Inherited from

SstTypescriptAppOptions.bundlerOptions

___

### cdkAssert

• `Optional` `Readonly` **cdkAssert**: `boolean`

Warning: NodeJS only.
Install the @aws-cdk/assert library?

**`Default`**

```ts
- will be included by default for AWS CDK >= 1.0.0 < 2.0.0
```

**`Deprecated`**

The @aws-cdk/assert library is deprecated in favor of
@aws-cdk/assertions (in V1) and included in `aws-cdk-lib` for V2.

#### Inherited from

SstTypescriptAppOptions.cdkAssert

___

### cdkAssertions

• `Optional` `Readonly` **cdkAssertions**: `boolean`

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

**`Default`**

```ts
- will be included by default for AWS CDK >= 1.111.0 < 2.0.0
```

#### Inherited from

SstTypescriptAppOptions.cdkAssertions

___

### cdkDependencies

• `Optional` `Readonly` **cdkDependencies**: `string`[]

Which AWS CDKv1 modules this project requires

**`Deprecated`**

For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

#### Inherited from

SstTypescriptAppOptions.cdkDependencies

___

### cdkDependenciesAsDeps

• `Optional` `Readonly` **cdkDependenciesAsDeps**: `boolean`

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as
normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

**`Default`**

```ts
true
```

**`Deprecated`**

Not supported in CDK v2.

#### Inherited from

SstTypescriptAppOptions.cdkDependenciesAsDeps

___

### cdkTestDependencies

• `Optional` `Readonly` **cdkTestDependencies**: `string`[]

AWS CDK modules required for testing.

**`Deprecated`**

For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

#### Inherited from

SstTypescriptAppOptions.cdkTestDependencies

___

### cdkVersion

• `Readonly` **cdkVersion**: `string`

Minimum version of the AWS CDK to depend on.

**`Default`**

```ts
"2.1.0"
```

#### Inherited from

SstTypescriptAppOptions.cdkVersion

___

### cdkVersionPinning

• `Optional` `Readonly` **cdkVersionPinning**: `boolean`

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

#### Inherited from

SstTypescriptAppOptions.cdkVersionPinning

___

### cdkout

• `Optional` `Readonly` **cdkout**: `string`

cdk.out directory.

**`Default`**

```ts
"cdk.out"
```

#### Inherited from

SstTypescriptAppOptions.cdkout

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

SstTypescriptAppOptions.checkLicenses

___

### clobber

• `Optional` `Readonly` **clobber**: `boolean`

Add a `clobber` task which resets the repo to origin.

**`Default`**

```ts
- true, but false for subprojects
```

#### Inherited from

SstTypescriptAppOptions.clobber

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

SstTypescriptAppOptions.codeArtifactOptions

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

SstTypescriptAppOptions.codeCov

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

SstTypescriptAppOptions.codeCovTokenSecret

___

### commitGenerated

• `Optional` `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.commitGenerated

___

### constructsVersion

• `Optional` `Readonly` **constructsVersion**: `string`

Minimum version of the `constructs` library to depend on.

**`Default`**

```ts
- for CDK 1.x the default is "3.2.27", for CDK 2.x the default is
"10.0.5".
```

#### Inherited from

SstTypescriptAppOptions.constructsVersion

___

### constructsVersionPinning

• `Optional` **constructsVersionPinning**: `boolean`

Whether or not to pin the version of constructs to the version specified in the
`constructsVersion` property.

___

### context

• `Optional` `Readonly` **context**: `Object`

Additional context to include in `cdk.json`.

**`Default`**

```ts
- no additional context
```

#### Index signature

▪ [key: `string`]: `any`

#### Inherited from

SstTypescriptAppOptions.context

___

### copyrightOwner

• `Optional` `Readonly` **copyrightOwner**: `string`

License copyright owner.

**`Default`**

- defaults to the value of authorName or "" if `authorName` is undefined.

#### Inherited from

SstTypescriptAppOptions.copyrightOwner

___

### copyrightPeriod

• `Optional` `Readonly` **copyrightPeriod**: `string`

The copyright years to put in the LICENSE file.

**`Default`**

```ts
- current year
```

#### Inherited from

SstTypescriptAppOptions.copyrightPeriod

___

### defaultReleaseBranch

• `Readonly` **defaultReleaseBranch**: `string`

The name of the main release branch.

**`Default`**

```ts
"main"
```

#### Inherited from

SstTypescriptAppOptions.defaultReleaseBranch

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

SstTypescriptAppOptions.dependabot

___

### dependabotOptions

• `Optional` `Readonly` **dependabotOptions**: `DependabotOptions`

Options for dependabot.

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.dependabotOptions

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

SstTypescriptAppOptions.deps

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

SstTypescriptAppOptions.depsUpgrade

___

### depsUpgradeOptions

• `Optional` `Readonly` **depsUpgradeOptions**: `UpgradeDependenciesOptions`

Options for `UpgradeDependencies`.

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.depsUpgradeOptions

___

### description

• `Optional` `Readonly` **description**: `string`

The description is just a string that helps people understand the purpose of the package.
It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

**`Featured`**

#### Inherited from

SstTypescriptAppOptions.description

___

### devContainer

• `Optional` `Readonly` **devContainer**: `boolean`

Add a VSCode development environment (used for GitHub Codespaces)

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.devContainer

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

SstTypescriptAppOptions.devDeps

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

SstTypescriptAppOptions.disableTsconfig

___

### disableTsconfigDev

• `Optional` `Readonly` **disableTsconfigDev**: `boolean`

Do not generate a `tsconfig.dev.json` file.

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.disableTsconfigDev

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

Docgen by Typedoc

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.docgen

___

### docsDirectory

• `Optional` `Readonly` **docsDirectory**: `string`

Docs directory

**`Default`**

```ts
"docs"
```

#### Inherited from

SstTypescriptAppOptions.docsDirectory

___

### edgeLambdaAutoDiscover

• `Optional` `Readonly` **edgeLambdaAutoDiscover**: `boolean`

Automatically adds an `cloudfront.experimental.EdgeFunction` for each
`.edge-lambda.ts` handler in your source tree. If this is disabled, you can
manually add an `awscdk.AutoDiscover` component to your project.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.edgeLambdaAutoDiscover

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

SstTypescriptAppOptions.entrypoint

___

### entrypointTypes

• `Optional` `Readonly` **entrypointTypes**: `string`

The .d.ts file that includes the type declarations for this module.

**`Default`**

```ts
- .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
```

#### Inherited from

SstTypescriptAppOptions.entrypointTypes

___

### eslint

• `Optional` `Readonly` **eslint**: `boolean`

Setup eslint.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.eslint

___

### eslintOptions

• `Optional` `Readonly` **eslintOptions**: `EslintOptions`

Eslint options

**`Default`**

```ts
- opinionated default options
```

#### Inherited from

SstTypescriptAppOptions.eslintOptions

___

### experimentalIntegRunner

• `Optional` `Readonly` **experimentalIntegRunner**: `boolean`

Enable experimental support for the AWS CDK integ-runner.

**`Default`**

```ts
false
@experimental
```

#### Inherited from

SstTypescriptAppOptions.experimentalIntegRunner

___

### featureFlags

• `Optional` `Readonly` **featureFlags**: `boolean`

Include all feature flags in cdk.json

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.featureFlags

___

### gitIgnoreOptions

• `Optional` `Readonly` **gitIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .gitignore file

#### Inherited from

SstTypescriptAppOptions.gitIgnoreOptions

___

### gitOptions

• `Optional` `Readonly` **gitOptions**: `GitOptions`

Configuration options for git

#### Inherited from

SstTypescriptAppOptions.gitOptions

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

SstTypescriptAppOptions.github

___

### githubOptions

• `Optional` `Readonly` **githubOptions**: `GitHubOptions`

Options for GitHub integration

**`Default`**

```ts
- see GitHubOptions
```

#### Inherited from

SstTypescriptAppOptions.githubOptions

___

### gitignore

• `Optional` `Readonly` **gitignore**: `string`[]

Additional entries to .gitignore

#### Inherited from

SstTypescriptAppOptions.gitignore

___

### gitpod

• `Optional` `Readonly` **gitpod**: `boolean`

Add a Gitpod development environment

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.gitpod

___

### homepage

• `Optional` `Readonly` **homepage**: `string`

Package's Homepage / Website

#### Inherited from

SstTypescriptAppOptions.homepage

___

### integrationTestAutoDiscover

• `Optional` `Readonly` **integrationTestAutoDiscover**: `boolean`

Automatically discovers and creates integration tests for each `.integ.ts`
file in under your test directory.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.integrationTestAutoDiscover

___

### jest

• `Optional` `Readonly` **jest**: `boolean`

Setup jest unit tests

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.jest

___

### jestOptions

• `Optional` `Readonly` **jestOptions**: `JestOptions`

Jest options

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.jestOptions

___

### jsiiReleaseVersion

• `Optional` `Readonly` **jsiiReleaseVersion**: `string`

Version requirement of `publib` which is used to publish modules to npm.

**`Default`**

```ts
"latest"
```

#### Inherited from

SstTypescriptAppOptions.jsiiReleaseVersion

___

### keywords

• `Optional` `Readonly` **keywords**: `string`[]

Keywords to include in `package.json`.

#### Inherited from

SstTypescriptAppOptions.keywords

___

### lambdaAutoDiscover

• `Optional` `Readonly` **lambdaAutoDiscover**: `boolean`

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler
in your source tree. If this is disabled, you can manually add an
`awscdk.AutoDiscover` component to your project.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.lambdaAutoDiscover

___

### lambdaExtensionAutoDiscover

• `Optional` `Readonly` **lambdaExtensionAutoDiscover**: `boolean`

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts`
entrypoint in your source tree. If this is disabled, you can manually add an
`awscdk.AutoDiscover` component to your project

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.lambdaExtensionAutoDiscover

___

### lambdaOptions

• `Optional` `Readonly` **lambdaOptions**: `LambdaFunctionCommonOptions`

Common options for all AWS Lambda functions.

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.lambdaOptions

___

### libdir

• `Optional` `Readonly` **libdir**: `string`

Typescript  artifacts output directory

**`Default`**

```ts
"lib"
```

#### Inherited from

SstTypescriptAppOptions.libdir

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

SstTypescriptAppOptions.license

___

### licensed

• `Optional` `Readonly` **licensed**: `boolean`

Indicates if a license should be added.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.licensed

___

### logging

• `Optional` `Readonly` **logging**: `LoggerOptions`

Configure logging options such as verbosity.

**`Default`**

```ts
{}
```

#### Inherited from

SstTypescriptAppOptions.logging

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

SstTypescriptAppOptions.majorVersion

___

### maxNodeVersion

• `Optional` `Readonly` **maxNodeVersion**: `string`

Minimum node.js version to require via `engines` (inclusive).

**`Default`**

```ts
- no max
```

#### Inherited from

SstTypescriptAppOptions.maxNodeVersion

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

SstTypescriptAppOptions.mergify

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

SstTypescriptAppOptions.mergifyOptions

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

SstTypescriptAppOptions.minMajorVersion

___

### minNodeVersion

• `Optional` `Readonly` **minNodeVersion**: `string`

Minimum Node.js version to require via package.json `engines` (inclusive).

**`Default`**

```ts
- no "engines" specified
```

#### Inherited from

SstTypescriptAppOptions.minNodeVersion

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

SstTypescriptAppOptions.mutableBuild

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

SstTypescriptAppOptions.name

___

### npmAccess

• `Optional` `Readonly` **npmAccess**: `PUBLIC` \| `RESTRICTED`

Access level of the npm package.

**`Default`**

- for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

#### Inherited from

SstTypescriptAppOptions.npmAccess

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

SstTypescriptAppOptions.npmDistTag

___

### npmIgnoreOptions

• `Optional` `Readonly` **npmIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .npmignore file

#### Inherited from

SstTypescriptAppOptions.npmIgnoreOptions

___

### npmRegistry

• `Optional` `Readonly` **npmRegistry**: `string`

The host name of the npm registry to publish to. Cannot be set together with `npmRegistryUrl`.

**`Deprecated`**

use `npmRegistryUrl` instead

#### Inherited from

SstTypescriptAppOptions.npmRegistry

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

SstTypescriptAppOptions.npmRegistryUrl

___

### npmTokenSecret

• `Optional` `Readonly` **npmTokenSecret**: `string`

GitHub secret which contains the NPM token to use when publishing packages.

**`Default`**

```ts
"NPM_TOKEN"
```

#### Inherited from

SstTypescriptAppOptions.npmTokenSecret

___

### npmignore

• `Optional` `Readonly` **npmignore**: `string`[]

Additional entries to .npmignore.

**`Deprecated`**

- use `project.addPackageIgnore`

#### Inherited from

SstTypescriptAppOptions.npmignore

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

SstTypescriptAppOptions.npmignoreEnabled

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

SstTypescriptAppOptions.outdir

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

SstTypescriptAppOptions.package

___

### packageManager

• `Optional` `Readonly` **packageManager**: `YARN` \| `YARN2` \| `YARN_CLASSIC` \| `YARN_BERRY` \| `NPM` \| `PNPM` \| `BUN`

The Node Package Manager used to execute scripts

**`Default`**

```ts
NodePackageManager.YARN_CLASSIC
```

#### Inherited from

SstTypescriptAppOptions.packageManager

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

SstTypescriptAppOptions.packageName

___

### parent

• `Optional` `Readonly` **parent**: `Project`

The parent project, if this project is part of a bigger project.

#### Inherited from

SstTypescriptAppOptions.parent

___

### peerDependencyOptions

• `Optional` `Readonly` **peerDependencyOptions**: `PeerDependencyOptions`

Options for `peerDeps`.

#### Inherited from

SstTypescriptAppOptions.peerDependencyOptions

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

SstTypescriptAppOptions.peerDeps

___

### pnpmVersion

• `Optional` `Readonly` **pnpmVersion**: `string`

The version of PNPM to use if using PNPM as a package manager.

**`Default`**

```ts
"7"
```

#### Inherited from

SstTypescriptAppOptions.pnpmVersion

___

### postBuildSteps

• `Optional` `Readonly` **postBuildSteps**: `JobStep`[]

Steps to execute after build as part of the release workflow.

**`Default`**

```ts
[]
```

#### Inherited from

SstTypescriptAppOptions.postBuildSteps

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

SstTypescriptAppOptions.prerelease

___

### prettier

• `Optional` `Readonly` **prettier**: `boolean`

Setup prettier.

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.prettier

___

### prettierOptions

• `Optional` `Readonly` **prettierOptions**: `PrettierOptions`

Prettier options

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.prettierOptions

___

### projectType

• `Optional` `Readonly` **projectType**: `UNKNOWN` \| `LIB` \| `APP`

Which type of project this is (library/app).

**`Default`**

```ts
ProjectType.UNKNOWN
```

**`Deprecated`**

no longer supported at the base project level

#### Inherited from

SstTypescriptAppOptions.projectType

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

SstTypescriptAppOptions.projenCommand

___

### projenCredentials

• `Optional` `Readonly` **projenCredentials**: `GithubCredentials`

Choose a method of providing GitHub API access for projen workflows.

**`Default`**

```ts
- use a personal access token named PROJEN_GITHUB_TOKEN
```

#### Inherited from

SstTypescriptAppOptions.projenCredentials

___

### projenDevDependency

• `Optional` `Readonly` **projenDevDependency**: `boolean`

Indicates of "projen" should be installed as a devDependency.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.projenDevDependency

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

SstTypescriptAppOptions.projenTokenSecret

___

### projenVersion

• `Optional` `Readonly` **projenVersion**: `string`

Version of projen to install.

**`Default`**

```ts
- Defaults to the latest version.
```

#### Inherited from

SstTypescriptAppOptions.projenVersion

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

SstTypescriptAppOptions.projenrcJs

___

### projenrcJsOptions

• `Optional` `Readonly` **projenrcJsOptions**: `ProjenrcOptions`

Options for .projenrc.js

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.projenrcJsOptions

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

SstTypescriptAppOptions.projenrcJson

___

### projenrcJsonOptions

• `Optional` `Readonly` **projenrcJsonOptions**: `ProjenrcJsonOptions`

Options for .projenrc.json

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.projenrcJsonOptions

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

SstTypescriptAppOptions.projenrcTs

___

### projenrcTsOptions

• `Optional` `Readonly` **projenrcTsOptions**: `ProjenrcOptions`

Options for .projenrc.ts

#### Inherited from

SstTypescriptAppOptions.projenrcTsOptions

___

### publishDryRun

• `Optional` `Readonly` **publishDryRun**: `boolean`

Instead of actually publishing to package managers, just print the publishing command.

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.publishDryRun

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

SstTypescriptAppOptions.publishTasks

___

### publishToAws

• `Optional` `Readonly` **publishToAws**: `boolean`

Whether to publish this App to AWS.

___

### publishToAwsOptions

• `Optional` `Readonly` **publishToAwsOptions**: `Omit`\<`AwsAppPublisherOptions`, ``"deployJobStepBuilder"`` \| ``"defaultReleaseBranch"`` \| ``"publishTasks"`` \| ``"runsOn"`` \| ``"runsOnGroup"`` \| ``"workflowBootstrapSteps"`` \| ``"workflowNodeVersion"``\>

Populate in order to add a deploy to AWS job to the release workflow.

___

### pullRequestTemplate

• `Optional` `Readonly` **pullRequestTemplate**: `boolean`

Include a GitHub pull request template.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.pullRequestTemplate

___

### pullRequestTemplateContents

• `Optional` `Readonly` **pullRequestTemplateContents**: `string`[]

The contents of the pull request template.

**`Default`**

```ts
- default content
```

#### Inherited from

SstTypescriptAppOptions.pullRequestTemplateContents

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

SstTypescriptAppOptions.readme

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

SstTypescriptAppOptions.releasableCommits

___

### release

• `Optional` `Readonly` **release**: `boolean`

Add release management to this project.

**`Default`**

```ts
- true (false for subprojects)
```

#### Inherited from

SstTypescriptAppOptions.release

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

SstTypescriptAppOptions.releaseBranches

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

SstTypescriptAppOptions.releaseEveryCommit

___

### releaseFailureIssue

• `Optional` `Readonly` **releaseFailureIssue**: `boolean`

Create a github issue on every failed publishing task.

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.releaseFailureIssue

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

SstTypescriptAppOptions.releaseFailureIssueLabel

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

SstTypescriptAppOptions.releaseSchedule

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

SstTypescriptAppOptions.releaseTagPrefix

___

### releaseToNpm

• `Optional` `Readonly` **releaseToNpm**: `boolean`

Automatically release to npm when new versions are introduced.

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.releaseToNpm

___

### releaseTrigger

• `Optional` `Readonly` **releaseTrigger**: `ReleaseTrigger`

The release trigger to use.

**`Default`**

- Continuous releases (`ReleaseTrigger.continuous()`)

#### Inherited from

SstTypescriptAppOptions.releaseTrigger

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

SstTypescriptAppOptions.releaseWorkflow

___

### releaseWorkflowName

• `Optional` `Readonly` **releaseWorkflowName**: `string`

The name of the default release workflow.

**`Default`**

```ts
"release"
```

#### Inherited from

SstTypescriptAppOptions.releaseWorkflowName

___

### releaseWorkflowSetupSteps

• `Optional` `Readonly` **releaseWorkflowSetupSteps**: `JobStep`[]

A set of workflow steps to execute in order to setup the workflow
container.

#### Inherited from

SstTypescriptAppOptions.releaseWorkflowSetupSteps

___

### renovatebot

• `Optional` `Readonly` **renovatebot**: `boolean`

Use renovatebot to handle dependency upgrades.

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.renovatebot

___

### renovatebotOptions

• `Optional` `Readonly` **renovatebotOptions**: `RenovatebotOptions`

Options for renovatebot.

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.renovatebotOptions

___

### repository

• `Optional` `Readonly` **repository**: `string`

The repository is the location where the actual code for your package lives.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

#### Inherited from

SstTypescriptAppOptions.repository

___

### repositoryDirectory

• `Optional` `Readonly` **repositoryDirectory**: `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo),
you can specify the directory in which it lives.

#### Inherited from

SstTypescriptAppOptions.repositoryDirectory

___

### requireApproval

• `Optional` `Readonly` **requireApproval**: `NEVER` \| `ANY_CHANGE` \| `BROADENING`

To protect you against unintended changes that affect your security posture,
the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

**`Default`**

```ts
ApprovalLevel.BROADENING
```

#### Inherited from

SstTypescriptAppOptions.requireApproval

___

### sampleCode

• `Optional` `Readonly` **sampleCode**: `boolean`

Generate one-time sample in `src/` and `test/` if there are no files there.

**`Default`**

```ts
true
```

#### Inherited from

SstTypescriptAppOptions.sampleCode

___

### scopedPackagesOptions

• `Optional` `Readonly` **scopedPackagesOptions**: `ScopedPackagesOptions`[]

Options for privately hosted scoped packages

**`Default`**

```ts
- fetch all scoped packages from the public npm registry
```

#### Inherited from

SstTypescriptAppOptions.scopedPackagesOptions

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

SstTypescriptAppOptions.scripts

___

### srcdir

• `Optional` `Readonly` **srcdir**: `string`

Typescript sources directory.

**`Default`**

```ts
"src"
```

#### Inherited from

SstTypescriptAppOptions.srcdir

___

### sstOut

• `Optional` **sstOut**: `string`

Where to build .sst code to.

**`Default`**

```ts
".sst/dist/"
```

#### Inherited from

SstTypescriptAppOptions.sstOut

___

### sstVersion

• `Optional` **sstVersion**: `string`

The version of SST to use.

**`Default`**

```ts
"2.39.2"
```

#### Inherited from

SstTypescriptAppOptions.sstVersion

___

### stability

• `Optional` `Readonly` **stability**: `string`

Package's Stability

#### Inherited from

SstTypescriptAppOptions.stability

___

### stale

• `Optional` `Readonly` **stale**: `boolean`

Auto-close of stale issues and pull request. See `staleOptions` for options.

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.stale

___

### staleOptions

• `Optional` `Readonly` **staleOptions**: `StaleOptions`

Auto-close stale issues and pull requests. To disable set `stale` to `false`.

**`Default`**

- see defaults in `StaleOptions`

#### Inherited from

SstTypescriptAppOptions.staleOptions

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

SstTypescriptAppOptions.testdir

___

### tsJestOptions

• `Optional` `Readonly` **tsJestOptions**: `TsJestOptions`

Options for ts-jest

#### Inherited from

SstTypescriptAppOptions.tsJestOptions

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfigOptions`

Custom TSConfig

**`Default`**

```ts
- default options
```

#### Inherited from

SstTypescriptAppOptions.tsconfig

___

### tsconfigDev

• `Optional` `Readonly` **tsconfigDev**: `TypescriptConfigOptions`

Custom tsconfig options for the development tsconfig.json file (used for testing).

**`Default`**

```ts
- use the production tsconfig options
```

#### Inherited from

SstTypescriptAppOptions.tsconfigDev

___

### tsconfigDevFile

• `Optional` `Readonly` **tsconfigDevFile**: `string`

The name of the development tsconfig.json file.

**`Default`**

```ts
"tsconfig.dev.json"
```

#### Inherited from

SstTypescriptAppOptions.tsconfigDevFile

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

SstTypescriptAppOptions.typescriptVersion

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

SstTypescriptAppOptions.versionrcOptions

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

SstTypescriptAppOptions.vscode

___

### watchExcludes

• `Optional` `Readonly` **watchExcludes**: `string`[]

Glob patterns to exclude from `cdk watch`.

**`Default`**

```ts
[]
```

#### Inherited from

SstTypescriptAppOptions.watchExcludes

___

### watchIncludes

• `Optional` `Readonly` **watchIncludes**: `string`[]

Glob patterns to include in `cdk watch`.

**`Default`**

```ts
[]
```

#### Inherited from

SstTypescriptAppOptions.watchIncludes

___

### workflowBootstrapSteps

• `Optional` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

Workflow steps to use in order to bootstrap this repo.

**`Default`**

```ts
"yarn install --frozen-lockfile && yarn projen"
```

#### Inherited from

SstTypescriptAppOptions.workflowBootstrapSteps

___

### workflowContainerImage

• `Optional` `Readonly` **workflowContainerImage**: `string`

Container image to use for GitHub workflows.

**`Default`**

```ts
- default image
```

#### Inherited from

SstTypescriptAppOptions.workflowContainerImage

___

### workflowGitIdentity

• `Optional` `Readonly` **workflowGitIdentity**: `GitIdentity`

The git identity to use in workflows.

**`Default`**

```ts
- GitHub Actions
```

#### Inherited from

SstTypescriptAppOptions.workflowGitIdentity

___

### workflowNodeVersion

• `Optional` `Readonly` **workflowNodeVersion**: `string`

The node version to use in GitHub workflows.

**`Default`**

- same as `minNodeVersion`

#### Inherited from

SstTypescriptAppOptions.workflowNodeVersion

___

### workflowPackageCache

• `Optional` `Readonly` **workflowPackageCache**: `boolean`

Enable Node.js package cache in GitHub workflows.

**`Default`**

```ts
false
```

#### Inherited from

SstTypescriptAppOptions.workflowPackageCache

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

SstTypescriptAppOptions.workflowRunsOn

___

### workflowRunsOnGroup

• `Optional` `Readonly` **workflowRunsOnGroup**: `GroupRunnerOptions`

Github Runner Group selection options

**`Description`**

Defines a target Runner Group by name and/or labels

**`Throws`**

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

SstTypescriptAppOptions.workflowRunsOnGroup

___

### yarnBerryOptions

• `Optional` `Readonly` **yarnBerryOptions**: `YarnBerryOptions`

Options for Yarn Berry

**`Default`**

```ts
- Yarn Berry v4 with all default options
```

#### Inherited from

SstTypescriptAppOptions.yarnBerryOptions
