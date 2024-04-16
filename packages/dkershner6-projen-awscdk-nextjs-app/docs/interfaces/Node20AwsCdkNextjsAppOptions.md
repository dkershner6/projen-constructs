[dkershner6-projen-awscdk-nextjs-app](../README.md) / [Exports](../modules.md) / Node20AwsCdkNextjsAppOptions

# Interface: Node20AwsCdkNextjsAppOptions

## Hierarchy

- `Node20AwsCdkAppOptions`

  ↳ **`Node20AwsCdkNextjsAppOptions`**

## Table of contents

### Properties

- [allowLibraryDependencies](Node20AwsCdkNextjsAppOptions.md#allowlibrarydependencies)
- [appEntrypoint](Node20AwsCdkNextjsAppOptions.md#appentrypoint)
- [artifactsDirectory](Node20AwsCdkNextjsAppOptions.md#artifactsdirectory)
- [authorEmail](Node20AwsCdkNextjsAppOptions.md#authoremail)
- [authorName](Node20AwsCdkNextjsAppOptions.md#authorname)
- [authorOrganization](Node20AwsCdkNextjsAppOptions.md#authororganization)
- [authorUrl](Node20AwsCdkNextjsAppOptions.md#authorurl)
- [autoApproveOptions](Node20AwsCdkNextjsAppOptions.md#autoapproveoptions)
- [autoApproveUpgrades](Node20AwsCdkNextjsAppOptions.md#autoapproveupgrades)
- [autoDetectBin](Node20AwsCdkNextjsAppOptions.md#autodetectbin)
- [autoMerge](Node20AwsCdkNextjsAppOptions.md#automerge)
- [autoMergeOptions](Node20AwsCdkNextjsAppOptions.md#automergeoptions)
- [bin](Node20AwsCdkNextjsAppOptions.md#bin)
- [bugsEmail](Node20AwsCdkNextjsAppOptions.md#bugsemail)
- [bugsUrl](Node20AwsCdkNextjsAppOptions.md#bugsurl)
- [buildCommand](Node20AwsCdkNextjsAppOptions.md#buildcommand)
- [buildWorkflow](Node20AwsCdkNextjsAppOptions.md#buildworkflow)
- [buildWorkflowOptions](Node20AwsCdkNextjsAppOptions.md#buildworkflowoptions)
- [buildWorkflowTriggers](Node20AwsCdkNextjsAppOptions.md#buildworkflowtriggers)
- [bundledDeps](Node20AwsCdkNextjsAppOptions.md#bundleddeps)
- [bundlerOptions](Node20AwsCdkNextjsAppOptions.md#bundleroptions)
- [cdkAssert](Node20AwsCdkNextjsAppOptions.md#cdkassert)
- [cdkAssertions](Node20AwsCdkNextjsAppOptions.md#cdkassertions)
- [cdkDependencies](Node20AwsCdkNextjsAppOptions.md#cdkdependencies)
- [cdkDependenciesAsDeps](Node20AwsCdkNextjsAppOptions.md#cdkdependenciesasdeps)
- [cdkTestDependencies](Node20AwsCdkNextjsAppOptions.md#cdktestdependencies)
- [cdkVersion](Node20AwsCdkNextjsAppOptions.md#cdkversion)
- [cdkVersionPinning](Node20AwsCdkNextjsAppOptions.md#cdkversionpinning)
- [cdkout](Node20AwsCdkNextjsAppOptions.md#cdkout)
- [checkLicenses](Node20AwsCdkNextjsAppOptions.md#checklicenses)
- [clobber](Node20AwsCdkNextjsAppOptions.md#clobber)
- [codeArtifactOptions](Node20AwsCdkNextjsAppOptions.md#codeartifactoptions)
- [codeCov](Node20AwsCdkNextjsAppOptions.md#codecov)
- [codeCovTokenSecret](Node20AwsCdkNextjsAppOptions.md#codecovtokensecret)
- [commitGenerated](Node20AwsCdkNextjsAppOptions.md#commitgenerated)
- [constructsVersion](Node20AwsCdkNextjsAppOptions.md#constructsversion)
- [constructsVersionPinning](Node20AwsCdkNextjsAppOptions.md#constructsversionpinning)
- [context](Node20AwsCdkNextjsAppOptions.md#context)
- [copyrightOwner](Node20AwsCdkNextjsAppOptions.md#copyrightowner)
- [copyrightPeriod](Node20AwsCdkNextjsAppOptions.md#copyrightperiod)
- [defaultReleaseBranch](Node20AwsCdkNextjsAppOptions.md#defaultreleasebranch)
- [dependabot](Node20AwsCdkNextjsAppOptions.md#dependabot)
- [dependabotOptions](Node20AwsCdkNextjsAppOptions.md#dependabotoptions)
- [deps](Node20AwsCdkNextjsAppOptions.md#deps)
- [depsUpgrade](Node20AwsCdkNextjsAppOptions.md#depsupgrade)
- [depsUpgradeOptions](Node20AwsCdkNextjsAppOptions.md#depsupgradeoptions)
- [description](Node20AwsCdkNextjsAppOptions.md#description)
- [devContainer](Node20AwsCdkNextjsAppOptions.md#devcontainer)
- [devDeps](Node20AwsCdkNextjsAppOptions.md#devdeps)
- [disableTsconfig](Node20AwsCdkNextjsAppOptions.md#disabletsconfig)
- [disableTsconfigDev](Node20AwsCdkNextjsAppOptions.md#disabletsconfigdev)
- [docgen](Node20AwsCdkNextjsAppOptions.md#docgen)
- [docsDirectory](Node20AwsCdkNextjsAppOptions.md#docsdirectory)
- [edgeLambdaAutoDiscover](Node20AwsCdkNextjsAppOptions.md#edgelambdaautodiscover)
- [entrypoint](Node20AwsCdkNextjsAppOptions.md#entrypoint)
- [entrypointTypes](Node20AwsCdkNextjsAppOptions.md#entrypointtypes)
- [eslint](Node20AwsCdkNextjsAppOptions.md#eslint)
- [eslintOptions](Node20AwsCdkNextjsAppOptions.md#eslintoptions)
- [experimentalIntegRunner](Node20AwsCdkNextjsAppOptions.md#experimentalintegrunner)
- [featureFlags](Node20AwsCdkNextjsAppOptions.md#featureflags)
- [gitIgnoreOptions](Node20AwsCdkNextjsAppOptions.md#gitignoreoptions)
- [gitOptions](Node20AwsCdkNextjsAppOptions.md#gitoptions)
- [github](Node20AwsCdkNextjsAppOptions.md#github)
- [githubOptions](Node20AwsCdkNextjsAppOptions.md#githuboptions)
- [gitignore](Node20AwsCdkNextjsAppOptions.md#gitignore)
- [gitpod](Node20AwsCdkNextjsAppOptions.md#gitpod)
- [homepage](Node20AwsCdkNextjsAppOptions.md#homepage)
- [integrationTestAutoDiscover](Node20AwsCdkNextjsAppOptions.md#integrationtestautodiscover)
- [jest](Node20AwsCdkNextjsAppOptions.md#jest)
- [jestOptions](Node20AwsCdkNextjsAppOptions.md#jestoptions)
- [jsiiReleaseVersion](Node20AwsCdkNextjsAppOptions.md#jsiireleaseversion)
- [keywords](Node20AwsCdkNextjsAppOptions.md#keywords)
- [lambdaAutoDiscover](Node20AwsCdkNextjsAppOptions.md#lambdaautodiscover)
- [lambdaExtensionAutoDiscover](Node20AwsCdkNextjsAppOptions.md#lambdaextensionautodiscover)
- [lambdaOptions](Node20AwsCdkNextjsAppOptions.md#lambdaoptions)
- [libdir](Node20AwsCdkNextjsAppOptions.md#libdir)
- [license](Node20AwsCdkNextjsAppOptions.md#license)
- [licensed](Node20AwsCdkNextjsAppOptions.md#licensed)
- [logging](Node20AwsCdkNextjsAppOptions.md#logging)
- [majorVersion](Node20AwsCdkNextjsAppOptions.md#majorversion)
- [maxNodeVersion](Node20AwsCdkNextjsAppOptions.md#maxnodeversion)
- [mergify](Node20AwsCdkNextjsAppOptions.md#mergify)
- [mergifyOptions](Node20AwsCdkNextjsAppOptions.md#mergifyoptions)
- [minMajorVersion](Node20AwsCdkNextjsAppOptions.md#minmajorversion)
- [minNodeVersion](Node20AwsCdkNextjsAppOptions.md#minnodeversion)
- [mutableBuild](Node20AwsCdkNextjsAppOptions.md#mutablebuild)
- [name](Node20AwsCdkNextjsAppOptions.md#name)
- [nextjsJest](Node20AwsCdkNextjsAppOptions.md#nextjsjest)
- [nextjsJestConfigFileOptions](Node20AwsCdkNextjsAppOptions.md#nextjsjestconfigfileoptions)
- [nextjsTsconfig](Node20AwsCdkNextjsAppOptions.md#nextjstsconfig)
- [npmAccess](Node20AwsCdkNextjsAppOptions.md#npmaccess)
- [npmDistTag](Node20AwsCdkNextjsAppOptions.md#npmdisttag)
- [npmIgnoreOptions](Node20AwsCdkNextjsAppOptions.md#npmignoreoptions)
- [npmProvenance](Node20AwsCdkNextjsAppOptions.md#npmprovenance)
- [npmRegistry](Node20AwsCdkNextjsAppOptions.md#npmregistry)
- [npmRegistryUrl](Node20AwsCdkNextjsAppOptions.md#npmregistryurl)
- [npmTokenSecret](Node20AwsCdkNextjsAppOptions.md#npmtokensecret)
- [npmignore](Node20AwsCdkNextjsAppOptions.md#npmignore)
- [npmignoreEnabled](Node20AwsCdkNextjsAppOptions.md#npmignoreenabled)
- [outdir](Node20AwsCdkNextjsAppOptions.md#outdir)
- [package](Node20AwsCdkNextjsAppOptions.md#package)
- [packageManager](Node20AwsCdkNextjsAppOptions.md#packagemanager)
- [packageName](Node20AwsCdkNextjsAppOptions.md#packagename)
- [parent](Node20AwsCdkNextjsAppOptions.md#parent)
- [peerDependencyOptions](Node20AwsCdkNextjsAppOptions.md#peerdependencyoptions)
- [peerDeps](Node20AwsCdkNextjsAppOptions.md#peerdeps)
- [pnpmVersion](Node20AwsCdkNextjsAppOptions.md#pnpmversion)
- [postBuildSteps](Node20AwsCdkNextjsAppOptions.md#postbuildsteps)
- [prerelease](Node20AwsCdkNextjsAppOptions.md#prerelease)
- [prettier](Node20AwsCdkNextjsAppOptions.md#prettier)
- [prettierOptions](Node20AwsCdkNextjsAppOptions.md#prettieroptions)
- [projectType](Node20AwsCdkNextjsAppOptions.md#projecttype)
- [projenCommand](Node20AwsCdkNextjsAppOptions.md#projencommand)
- [projenCredentials](Node20AwsCdkNextjsAppOptions.md#projencredentials)
- [projenDevDependency](Node20AwsCdkNextjsAppOptions.md#projendevdependency)
- [projenTokenSecret](Node20AwsCdkNextjsAppOptions.md#projentokensecret)
- [projenVersion](Node20AwsCdkNextjsAppOptions.md#projenversion)
- [projenrcJs](Node20AwsCdkNextjsAppOptions.md#projenrcjs)
- [projenrcJsOptions](Node20AwsCdkNextjsAppOptions.md#projenrcjsoptions)
- [projenrcJson](Node20AwsCdkNextjsAppOptions.md#projenrcjson)
- [projenrcJsonOptions](Node20AwsCdkNextjsAppOptions.md#projenrcjsonoptions)
- [projenrcTs](Node20AwsCdkNextjsAppOptions.md#projenrcts)
- [projenrcTsOptions](Node20AwsCdkNextjsAppOptions.md#projenrctsoptions)
- [publishDryRun](Node20AwsCdkNextjsAppOptions.md#publishdryrun)
- [publishTasks](Node20AwsCdkNextjsAppOptions.md#publishtasks)
- [publishToAws](Node20AwsCdkNextjsAppOptions.md#publishtoaws)
- [publishToAwsOptions](Node20AwsCdkNextjsAppOptions.md#publishtoawsoptions)
- [pullRequestTemplate](Node20AwsCdkNextjsAppOptions.md#pullrequesttemplate)
- [pullRequestTemplateContents](Node20AwsCdkNextjsAppOptions.md#pullrequesttemplatecontents)
- [readme](Node20AwsCdkNextjsAppOptions.md#readme)
- [releasableCommits](Node20AwsCdkNextjsAppOptions.md#releasablecommits)
- [release](Node20AwsCdkNextjsAppOptions.md#release)
- [releaseBranches](Node20AwsCdkNextjsAppOptions.md#releasebranches)
- [releaseEveryCommit](Node20AwsCdkNextjsAppOptions.md#releaseeverycommit)
- [releaseFailureIssue](Node20AwsCdkNextjsAppOptions.md#releasefailureissue)
- [releaseFailureIssueLabel](Node20AwsCdkNextjsAppOptions.md#releasefailureissuelabel)
- [releaseSchedule](Node20AwsCdkNextjsAppOptions.md#releaseschedule)
- [releaseTagPrefix](Node20AwsCdkNextjsAppOptions.md#releasetagprefix)
- [releaseToNpm](Node20AwsCdkNextjsAppOptions.md#releasetonpm)
- [releaseTrigger](Node20AwsCdkNextjsAppOptions.md#releasetrigger)
- [releaseWorkflow](Node20AwsCdkNextjsAppOptions.md#releaseworkflow)
- [releaseWorkflowName](Node20AwsCdkNextjsAppOptions.md#releaseworkflowname)
- [releaseWorkflowSetupSteps](Node20AwsCdkNextjsAppOptions.md#releaseworkflowsetupsteps)
- [renovatebot](Node20AwsCdkNextjsAppOptions.md#renovatebot)
- [renovatebotOptions](Node20AwsCdkNextjsAppOptions.md#renovatebotoptions)
- [repository](Node20AwsCdkNextjsAppOptions.md#repository)
- [repositoryDirectory](Node20AwsCdkNextjsAppOptions.md#repositorydirectory)
- [requireApproval](Node20AwsCdkNextjsAppOptions.md#requireapproval)
- [sampleCode](Node20AwsCdkNextjsAppOptions.md#samplecode)
- [scopedPackagesOptions](Node20AwsCdkNextjsAppOptions.md#scopedpackagesoptions)
- [scripts](Node20AwsCdkNextjsAppOptions.md#scripts)
- [srcdir](Node20AwsCdkNextjsAppOptions.md#srcdir)
- [stability](Node20AwsCdkNextjsAppOptions.md#stability)
- [stale](Node20AwsCdkNextjsAppOptions.md#stale)
- [staleOptions](Node20AwsCdkNextjsAppOptions.md#staleoptions)
- [testdir](Node20AwsCdkNextjsAppOptions.md#testdir)
- [tsJestOptions](Node20AwsCdkNextjsAppOptions.md#tsjestoptions)
- [tsconfig](Node20AwsCdkNextjsAppOptions.md#tsconfig)
- [tsconfigDev](Node20AwsCdkNextjsAppOptions.md#tsconfigdev)
- [tsconfigDevFile](Node20AwsCdkNextjsAppOptions.md#tsconfigdevfile)
- [typescriptVersion](Node20AwsCdkNextjsAppOptions.md#typescriptversion)
- [versionrcOptions](Node20AwsCdkNextjsAppOptions.md#versionrcoptions)
- [vscode](Node20AwsCdkNextjsAppOptions.md#vscode)
- [watchExcludes](Node20AwsCdkNextjsAppOptions.md#watchexcludes)
- [watchIncludes](Node20AwsCdkNextjsAppOptions.md#watchincludes)
- [workflowBootstrapSteps](Node20AwsCdkNextjsAppOptions.md#workflowbootstrapsteps)
- [workflowContainerImage](Node20AwsCdkNextjsAppOptions.md#workflowcontainerimage)
- [workflowGitIdentity](Node20AwsCdkNextjsAppOptions.md#workflowgitidentity)
- [workflowNodeVersion](Node20AwsCdkNextjsAppOptions.md#workflownodeversion)
- [workflowPackageCache](Node20AwsCdkNextjsAppOptions.md#workflowpackagecache)
- [workflowRunsOn](Node20AwsCdkNextjsAppOptions.md#workflowrunson)
- [workflowRunsOnGroup](Node20AwsCdkNextjsAppOptions.md#workflowrunsongroup)
- [yarnBerryOptions](Node20AwsCdkNextjsAppOptions.md#yarnberryoptions)

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

Node20AwsCdkAppOptions.allowLibraryDependencies

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

Node20AwsCdkAppOptions.appEntrypoint

___

### artifactsDirectory

• `Optional` `Readonly` **artifactsDirectory**: `string`

A directory which will contain build artifacts.

**`Default`**

```ts
"dist"
```

#### Inherited from

Node20AwsCdkAppOptions.artifactsDirectory

___

### authorEmail

• `Optional` `Readonly` **authorEmail**: `string`

Author's e-mail

#### Inherited from

Node20AwsCdkAppOptions.authorEmail

___

### authorName

• `Optional` `Readonly` **authorName**: `string`

Author's name

#### Inherited from

Node20AwsCdkAppOptions.authorName

___

### authorOrganization

• `Optional` `Readonly` **authorOrganization**: `boolean`

Is the author an organization

#### Inherited from

Node20AwsCdkAppOptions.authorOrganization

___

### authorUrl

• `Optional` `Readonly` **authorUrl**: `string`

Author's URL / Website

#### Inherited from

Node20AwsCdkAppOptions.authorUrl

___

### autoApproveOptions

• `Optional` `Readonly` **autoApproveOptions**: `AutoApproveOptions`

Enable and configure the 'auto approve' workflow.

**`Default`**

```ts
- auto approve is disabled
```

#### Inherited from

Node20AwsCdkAppOptions.autoApproveOptions

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

Node20AwsCdkAppOptions.autoApproveUpgrades

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

Node20AwsCdkAppOptions.autoDetectBin

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

Node20AwsCdkAppOptions.autoMerge

___

### autoMergeOptions

• `Optional` `Readonly` **autoMergeOptions**: `AutoMergeOptions`

Configure options for automatic merging on GitHub. Has no effect if
`github.mergify` or `autoMerge` is set to false.

**`Default`**

- see defaults in `AutoMergeOptions`

#### Inherited from

Node20AwsCdkAppOptions.autoMergeOptions

___

### bin

• `Optional` `Readonly` **bin**: `Record`\<`string`, `string`\>

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

#### Inherited from

Node20AwsCdkAppOptions.bin

___

### bugsEmail

• `Optional` `Readonly` **bugsEmail**: `string`

The email address to which issues should be reported.

#### Inherited from

Node20AwsCdkAppOptions.bugsEmail

___

### bugsUrl

• `Optional` `Readonly` **bugsUrl**: `string`

The url to your project's issue tracker.

#### Inherited from

Node20AwsCdkAppOptions.bugsUrl

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

Node20AwsCdkAppOptions.buildCommand

___

### buildWorkflow

• `Optional` `Readonly` **buildWorkflow**: `boolean`

Define a GitHub workflow for building PRs.

**`Default`**

```ts
- true if not a subproject
```

#### Inherited from

Node20AwsCdkAppOptions.buildWorkflow

___

### buildWorkflowOptions

• `Optional` `Readonly` **buildWorkflowOptions**: `BuildWorkflowOptions`

Options for PR build workflow.

#### Inherited from

Node20AwsCdkAppOptions.buildWorkflowOptions

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

Node20AwsCdkAppOptions.buildWorkflowTriggers

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

Node20AwsCdkAppOptions.bundledDeps

___

### bundlerOptions

• `Optional` `Readonly` **bundlerOptions**: `BundlerOptions`

Options for `Bundler`.

#### Inherited from

Node20AwsCdkAppOptions.bundlerOptions

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

Node20AwsCdkAppOptions.cdkAssert

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

Node20AwsCdkAppOptions.cdkAssertions

___

### cdkDependencies

• `Optional` `Readonly` **cdkDependencies**: `string`[]

Which AWS CDKv1 modules this project requires

**`Deprecated`**

For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

#### Inherited from

Node20AwsCdkAppOptions.cdkDependencies

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

Node20AwsCdkAppOptions.cdkDependenciesAsDeps

___

### cdkTestDependencies

• `Optional` `Readonly` **cdkTestDependencies**: `string`[]

AWS CDK modules required for testing.

**`Deprecated`**

For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

#### Inherited from

Node20AwsCdkAppOptions.cdkTestDependencies

___

### cdkVersion

• `Readonly` **cdkVersion**: `string`

Minimum version of the AWS CDK to depend on.

**`Default`**

```ts
"2.1.0"
```

#### Inherited from

Node20AwsCdkAppOptions.cdkVersion

___

### cdkVersionPinning

• `Optional` `Readonly` **cdkVersionPinning**: `boolean`

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

#### Inherited from

Node20AwsCdkAppOptions.cdkVersionPinning

___

### cdkout

• `Optional` `Readonly` **cdkout**: `string`

cdk.out directory.

**`Default`**

```ts
"cdk.out"
```

#### Inherited from

Node20AwsCdkAppOptions.cdkout

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

Node20AwsCdkAppOptions.checkLicenses

___

### clobber

• `Optional` `Readonly` **clobber**: `boolean`

Add a `clobber` task which resets the repo to origin.

**`Default`**

```ts
- true, but false for subprojects
```

#### Inherited from

Node20AwsCdkAppOptions.clobber

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

Node20AwsCdkAppOptions.codeArtifactOptions

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

Node20AwsCdkAppOptions.codeCov

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

Node20AwsCdkAppOptions.codeCovTokenSecret

___

### commitGenerated

• `Optional` `Readonly` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

**`Default`**

```ts
true
```

#### Inherited from

Node20AwsCdkAppOptions.commitGenerated

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

Node20AwsCdkAppOptions.constructsVersion

___

### constructsVersionPinning

• `Optional` **constructsVersionPinning**: `boolean`

Whether or not to pin the version of constructs to the version specified in the
`constructsVersion` property.

#### Inherited from

Node20AwsCdkAppOptions.constructsVersionPinning

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

Node20AwsCdkAppOptions.context

___

### copyrightOwner

• `Optional` `Readonly` **copyrightOwner**: `string`

License copyright owner.

**`Default`**

- defaults to the value of authorName or "" if `authorName` is undefined.

#### Inherited from

Node20AwsCdkAppOptions.copyrightOwner

___

### copyrightPeriod

• `Optional` `Readonly` **copyrightPeriod**: `string`

The copyright years to put in the LICENSE file.

**`Default`**

```ts
- current year
```

#### Inherited from

Node20AwsCdkAppOptions.copyrightPeriod

___

### defaultReleaseBranch

• `Readonly` **defaultReleaseBranch**: `string`

The name of the main release branch.

**`Default`**

```ts
"main"
```

#### Inherited from

Node20AwsCdkAppOptions.defaultReleaseBranch

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

Node20AwsCdkAppOptions.dependabot

___

### dependabotOptions

• `Optional` `Readonly` **dependabotOptions**: `DependabotOptions`

Options for dependabot.

**`Default`**

```ts
- default options
```

#### Inherited from

Node20AwsCdkAppOptions.dependabotOptions

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

Node20AwsCdkAppOptions.deps

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

Node20AwsCdkAppOptions.depsUpgrade

___

### depsUpgradeOptions

• `Optional` `Readonly` **depsUpgradeOptions**: `UpgradeDependenciesOptions`

Options for `UpgradeDependencies`.

**`Default`**

```ts
- default options
```

#### Inherited from

Node20AwsCdkAppOptions.depsUpgradeOptions

___

### description

• `Optional` `Readonly` **description**: `string`

The description is just a string that helps people understand the purpose of the package.
It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

**`Featured`**

#### Inherited from

Node20AwsCdkAppOptions.description

___

### devContainer

• `Optional` `Readonly` **devContainer**: `boolean`

Add a VSCode development environment (used for GitHub Codespaces)

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.devContainer

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

Node20AwsCdkAppOptions.devDeps

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

Node20AwsCdkAppOptions.disableTsconfig

___

### disableTsconfigDev

• `Optional` `Readonly` **disableTsconfigDev**: `boolean`

Do not generate a `tsconfig.dev.json` file.

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.disableTsconfigDev

___

### docgen

• `Optional` `Readonly` **docgen**: `boolean`

Docgen by Typedoc

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.docgen

___

### docsDirectory

• `Optional` `Readonly` **docsDirectory**: `string`

Docs directory

**`Default`**

```ts
"docs"
```

#### Inherited from

Node20AwsCdkAppOptions.docsDirectory

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

Node20AwsCdkAppOptions.edgeLambdaAutoDiscover

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

Node20AwsCdkAppOptions.entrypoint

___

### entrypointTypes

• `Optional` `Readonly` **entrypointTypes**: `string`

The .d.ts file that includes the type declarations for this module.

**`Default`**

```ts
- .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
```

#### Inherited from

Node20AwsCdkAppOptions.entrypointTypes

___

### eslint

• `Optional` `Readonly` **eslint**: `boolean`

Setup eslint.

**`Default`**

```ts
true
```

#### Inherited from

Node20AwsCdkAppOptions.eslint

___

### eslintOptions

• `Optional` `Readonly` **eslintOptions**: `EslintOptions`

Eslint options

**`Default`**

```ts
- opinionated default options
```

#### Inherited from

Node20AwsCdkAppOptions.eslintOptions

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

Node20AwsCdkAppOptions.experimentalIntegRunner

___

### featureFlags

• `Optional` `Readonly` **featureFlags**: `boolean`

Include all feature flags in cdk.json

**`Default`**

```ts
true
```

#### Inherited from

Node20AwsCdkAppOptions.featureFlags

___

### gitIgnoreOptions

• `Optional` `Readonly` **gitIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .gitignore file

#### Inherited from

Node20AwsCdkAppOptions.gitIgnoreOptions

___

### gitOptions

• `Optional` `Readonly` **gitOptions**: `GitOptions`

Configuration options for git

#### Inherited from

Node20AwsCdkAppOptions.gitOptions

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

Node20AwsCdkAppOptions.github

___

### githubOptions

• `Optional` `Readonly` **githubOptions**: `GitHubOptions`

Options for GitHub integration

**`Default`**

```ts
- see GitHubOptions
```

#### Inherited from

Node20AwsCdkAppOptions.githubOptions

___

### gitignore

• `Optional` `Readonly` **gitignore**: `string`[]

Additional entries to .gitignore

#### Inherited from

Node20AwsCdkAppOptions.gitignore

___

### gitpod

• `Optional` `Readonly` **gitpod**: `boolean`

Add a Gitpod development environment

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.gitpod

___

### homepage

• `Optional` `Readonly` **homepage**: `string`

Package's Homepage / Website

#### Inherited from

Node20AwsCdkAppOptions.homepage

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

Node20AwsCdkAppOptions.integrationTestAutoDiscover

___

### jest

• `Optional` `Readonly` **jest**: `boolean`

Setup jest unit tests

**`Default`**

```ts
true
```

#### Inherited from

Node20AwsCdkAppOptions.jest

___

### jestOptions

• `Optional` **jestOptions**: `Node20TypeScriptProjectJestOptions`

#### Inherited from

Node20AwsCdkAppOptions.jestOptions

___

### jsiiReleaseVersion

• `Optional` `Readonly` **jsiiReleaseVersion**: `string`

Version requirement of `publib` which is used to publish modules to npm.

**`Default`**

```ts
"latest"
```

#### Inherited from

Node20AwsCdkAppOptions.jsiiReleaseVersion

___

### keywords

• `Optional` `Readonly` **keywords**: `string`[]

Keywords to include in `package.json`.

#### Inherited from

Node20AwsCdkAppOptions.keywords

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

Node20AwsCdkAppOptions.lambdaAutoDiscover

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

Node20AwsCdkAppOptions.lambdaExtensionAutoDiscover

___

### lambdaOptions

• `Optional` `Readonly` **lambdaOptions**: `LambdaFunctionCommonOptions`

Common options for all AWS Lambda functions.

**`Default`**

```ts
- default options
```

#### Inherited from

Node20AwsCdkAppOptions.lambdaOptions

___

### libdir

• `Optional` `Readonly` **libdir**: `string`

Typescript  artifacts output directory

**`Default`**

```ts
"lib"
```

#### Inherited from

Node20AwsCdkAppOptions.libdir

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

Node20AwsCdkAppOptions.license

___

### licensed

• `Optional` `Readonly` **licensed**: `boolean`

Indicates if a license should be added.

**`Default`**

```ts
true
```

#### Inherited from

Node20AwsCdkAppOptions.licensed

___

### logging

• `Optional` `Readonly` **logging**: `LoggerOptions`

Configure logging options such as verbosity.

**`Default`**

```ts
{}
```

#### Inherited from

Node20AwsCdkAppOptions.logging

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

Node20AwsCdkAppOptions.majorVersion

___

### maxNodeVersion

• `Optional` `Readonly` **maxNodeVersion**: `string`

Minimum node.js version to require via `engines` (inclusive).

**`Default`**

```ts
- no max
```

#### Inherited from

Node20AwsCdkAppOptions.maxNodeVersion

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

Node20AwsCdkAppOptions.mergify

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

Node20AwsCdkAppOptions.mergifyOptions

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

Node20AwsCdkAppOptions.minMajorVersion

___

### minNodeVersion

• `Optional` `Readonly` **minNodeVersion**: `string`

Minimum Node.js version to require via package.json `engines` (inclusive).

**`Default`**

```ts
- no "engines" specified
```

#### Inherited from

Node20AwsCdkAppOptions.minNodeVersion

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

Node20AwsCdkAppOptions.mutableBuild

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

Node20AwsCdkAppOptions.name

___

### nextjsJest

• `Optional` **nextjsJest**: `boolean`

Implement next/jest on the project's jestConfig.

**`Default`**

```ts
true
```

___

### nextjsJestConfigFileOptions

• `Optional` **nextjsJestConfigFileOptions**: `NextjsJestConfigFileOptions`

___

### nextjsTsconfig

• `Optional` **nextjsTsconfig**: `TypescriptConfigOptions`

A custom tsconfig for nextjs development, separate from Projen's tsconfig.

**`Default`**

```ts
- Recommended tsconfig for Next.js development by Vercel.
```

___

### npmAccess

• `Optional` `Readonly` **npmAccess**: `NpmAccess`

Access level of the npm package.

**`Default`**

- for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

#### Inherited from

Node20AwsCdkAppOptions.npmAccess

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

Node20AwsCdkAppOptions.npmDistTag

___

### npmIgnoreOptions

• `Optional` `Readonly` **npmIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .npmignore file

#### Inherited from

Node20AwsCdkAppOptions.npmIgnoreOptions

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

Node20AwsCdkAppOptions.npmProvenance

___

### npmRegistry

• `Optional` `Readonly` **npmRegistry**: `string`

The host name of the npm registry to publish to. Cannot be set together with `npmRegistryUrl`.

**`Deprecated`**

use `npmRegistryUrl` instead

#### Inherited from

Node20AwsCdkAppOptions.npmRegistry

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

Node20AwsCdkAppOptions.npmRegistryUrl

___

### npmTokenSecret

• `Optional` `Readonly` **npmTokenSecret**: `string`

GitHub secret which contains the NPM token to use when publishing packages.

**`Default`**

```ts
"NPM_TOKEN"
```

#### Inherited from

Node20AwsCdkAppOptions.npmTokenSecret

___

### npmignore

• `Optional` `Readonly` **npmignore**: `string`[]

Additional entries to .npmignore.

**`Deprecated`**

- use `project.addPackageIgnore`

#### Inherited from

Node20AwsCdkAppOptions.npmignore

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

Node20AwsCdkAppOptions.npmignoreEnabled

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

Node20AwsCdkAppOptions.outdir

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

Node20AwsCdkAppOptions.package

___

### packageManager

• `Optional` `Readonly` **packageManager**: `NodePackageManager`

The Node Package Manager used to execute scripts

**`Default`**

```ts
NodePackageManager.YARN_CLASSIC
```

#### Inherited from

Node20AwsCdkAppOptions.packageManager

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

Node20AwsCdkAppOptions.packageName

___

### parent

• `Optional` `Readonly` **parent**: `Project`

The parent project, if this project is part of a bigger project.

#### Inherited from

Node20AwsCdkAppOptions.parent

___

### peerDependencyOptions

• `Optional` `Readonly` **peerDependencyOptions**: `PeerDependencyOptions`

Options for `peerDeps`.

#### Inherited from

Node20AwsCdkAppOptions.peerDependencyOptions

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

Node20AwsCdkAppOptions.peerDeps

___

### pnpmVersion

• `Optional` `Readonly` **pnpmVersion**: `string`

The version of PNPM to use if using PNPM as a package manager.

**`Default`**

```ts
"7"
```

#### Inherited from

Node20AwsCdkAppOptions.pnpmVersion

___

### postBuildSteps

• `Optional` `Readonly` **postBuildSteps**: `JobStep`[]

Steps to execute after build as part of the release workflow.

**`Default`**

```ts
[]
```

#### Inherited from

Node20AwsCdkAppOptions.postBuildSteps

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

Node20AwsCdkAppOptions.prerelease

___

### prettier

• `Optional` `Readonly` **prettier**: `boolean`

Setup prettier.

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.prettier

___

### prettierOptions

• `Optional` `Readonly` **prettierOptions**: `PrettierOptions`

Prettier options

**`Default`**

```ts
- default options
```

#### Inherited from

Node20AwsCdkAppOptions.prettierOptions

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

Node20AwsCdkAppOptions.projectType

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

Node20AwsCdkAppOptions.projenCommand

___

### projenCredentials

• `Optional` `Readonly` **projenCredentials**: `GithubCredentials`

Choose a method of providing GitHub API access for projen workflows.

**`Default`**

```ts
- use a personal access token named PROJEN_GITHUB_TOKEN
```

#### Inherited from

Node20AwsCdkAppOptions.projenCredentials

___

### projenDevDependency

• `Optional` `Readonly` **projenDevDependency**: `boolean`

Indicates of "projen" should be installed as a devDependency.

**`Default`**

```ts
true
```

#### Inherited from

Node20AwsCdkAppOptions.projenDevDependency

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

Node20AwsCdkAppOptions.projenTokenSecret

___

### projenVersion

• `Optional` `Readonly` **projenVersion**: `string`

Version of projen to install.

**`Default`**

```ts
- Defaults to the latest version.
```

#### Inherited from

Node20AwsCdkAppOptions.projenVersion

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

Node20AwsCdkAppOptions.projenrcJs

___

### projenrcJsOptions

• `Optional` `Readonly` **projenrcJsOptions**: `ProjenrcOptions`

Options for .projenrc.js

**`Default`**

```ts
- default options
```

#### Inherited from

Node20AwsCdkAppOptions.projenrcJsOptions

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

Node20AwsCdkAppOptions.projenrcJson

___

### projenrcJsonOptions

• `Optional` `Readonly` **projenrcJsonOptions**: `ProjenrcJsonOptions`

Options for .projenrc.json

**`Default`**

```ts
- default options
```

#### Inherited from

Node20AwsCdkAppOptions.projenrcJsonOptions

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

Node20AwsCdkAppOptions.projenrcTs

___

### projenrcTsOptions

• `Optional` `Readonly` **projenrcTsOptions**: `ProjenrcOptions`

Options for .projenrc.ts

#### Inherited from

Node20AwsCdkAppOptions.projenrcTsOptions

___

### publishDryRun

• `Optional` `Readonly` **publishDryRun**: `boolean`

Instead of actually publishing to package managers, just print the publishing command.

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.publishDryRun

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

Node20AwsCdkAppOptions.publishTasks

___

### publishToAws

• `Optional` `Readonly` **publishToAws**: `boolean`

Whether to publish this App to AWS.

#### Inherited from

Node20AwsCdkAppOptions.publishToAws

___

### publishToAwsOptions

• `Optional` `Readonly` **publishToAwsOptions**: `PublishToAwsOptions`

Populate in order to add a deploy to AWS job to the release workflow.

#### Inherited from

Node20AwsCdkAppOptions.publishToAwsOptions

___

### pullRequestTemplate

• `Optional` `Readonly` **pullRequestTemplate**: `boolean`

Include a GitHub pull request template.

**`Default`**

```ts
true
```

#### Inherited from

Node20AwsCdkAppOptions.pullRequestTemplate

___

### pullRequestTemplateContents

• `Optional` `Readonly` **pullRequestTemplateContents**: `string`[]

The contents of the pull request template.

**`Default`**

```ts
- default content
```

#### Inherited from

Node20AwsCdkAppOptions.pullRequestTemplateContents

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

Node20AwsCdkAppOptions.readme

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

Node20AwsCdkAppOptions.releasableCommits

___

### release

• `Optional` `Readonly` **release**: `boolean`

Add release management to this project.

**`Default`**

```ts
- true (false for subprojects)
```

#### Inherited from

Node20AwsCdkAppOptions.release

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

Node20AwsCdkAppOptions.releaseBranches

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

Node20AwsCdkAppOptions.releaseEveryCommit

___

### releaseFailureIssue

• `Optional` `Readonly` **releaseFailureIssue**: `boolean`

Create a github issue on every failed publishing task.

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.releaseFailureIssue

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

Node20AwsCdkAppOptions.releaseFailureIssueLabel

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

Node20AwsCdkAppOptions.releaseSchedule

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

Node20AwsCdkAppOptions.releaseTagPrefix

___

### releaseToNpm

• `Optional` `Readonly` **releaseToNpm**: `boolean`

Automatically release to npm when new versions are introduced.

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.releaseToNpm

___

### releaseTrigger

• `Optional` `Readonly` **releaseTrigger**: `ReleaseTrigger`

The release trigger to use.

**`Default`**

- Continuous releases (`ReleaseTrigger.continuous()`)

#### Inherited from

Node20AwsCdkAppOptions.releaseTrigger

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

Node20AwsCdkAppOptions.releaseWorkflow

___

### releaseWorkflowName

• `Optional` `Readonly` **releaseWorkflowName**: `string`

The name of the default release workflow.

**`Default`**

```ts
"release"
```

#### Inherited from

Node20AwsCdkAppOptions.releaseWorkflowName

___

### releaseWorkflowSetupSteps

• `Optional` `Readonly` **releaseWorkflowSetupSteps**: `JobStep`[]

A set of workflow steps to execute in order to setup the workflow
container.

#### Inherited from

Node20AwsCdkAppOptions.releaseWorkflowSetupSteps

___

### renovatebot

• `Optional` `Readonly` **renovatebot**: `boolean`

Use renovatebot to handle dependency upgrades.

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.renovatebot

___

### renovatebotOptions

• `Optional` `Readonly` **renovatebotOptions**: `RenovatebotOptions`

Options for renovatebot.

**`Default`**

```ts
- default options
```

#### Inherited from

Node20AwsCdkAppOptions.renovatebotOptions

___

### repository

• `Optional` `Readonly` **repository**: `string`

The repository is the location where the actual code for your package lives.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

#### Inherited from

Node20AwsCdkAppOptions.repository

___

### repositoryDirectory

• `Optional` `Readonly` **repositoryDirectory**: `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo),
you can specify the directory in which it lives.

#### Inherited from

Node20AwsCdkAppOptions.repositoryDirectory

___

### requireApproval

• `Optional` `Readonly` **requireApproval**: `ApprovalLevel`

To protect you against unintended changes that affect your security posture,
the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

**`Default`**

```ts
ApprovalLevel.BROADENING
```

#### Inherited from

Node20AwsCdkAppOptions.requireApproval

___

### sampleCode

• `Optional` `Readonly` **sampleCode**: `boolean`

Generate one-time sample in `src/` and `test/` if there are no files there.

**`Default`**

```ts
true
```

#### Inherited from

Node20AwsCdkAppOptions.sampleCode

___

### scopedPackagesOptions

• `Optional` `Readonly` **scopedPackagesOptions**: `ScopedPackagesOptions`[]

Options for privately hosted scoped packages

**`Default`**

```ts
- fetch all scoped packages from the public npm registry
```

#### Inherited from

Node20AwsCdkAppOptions.scopedPackagesOptions

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

Node20AwsCdkAppOptions.scripts

___

### srcdir

• `Optional` `Readonly` **srcdir**: `string`

Typescript sources directory.

**`Default`**

```ts
"src"
```

#### Inherited from

Node20AwsCdkAppOptions.srcdir

___

### stability

• `Optional` `Readonly` **stability**: `string`

Package's Stability

#### Inherited from

Node20AwsCdkAppOptions.stability

___

### stale

• `Optional` `Readonly` **stale**: `boolean`

Auto-close of stale issues and pull request. See `staleOptions` for options.

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.stale

___

### staleOptions

• `Optional` `Readonly` **staleOptions**: `StaleOptions`

Auto-close stale issues and pull requests. To disable set `stale` to `false`.

**`Default`**

- see defaults in `StaleOptions`

#### Inherited from

Node20AwsCdkAppOptions.staleOptions

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

Node20AwsCdkAppOptions.testdir

___

### tsJestOptions

• `Optional` `Readonly` **tsJestOptions**: `TsJestOptions`

Options for ts-jest

#### Inherited from

Node20AwsCdkAppOptions.tsJestOptions

___

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfigOptions`

Custom TSConfig

**`Default`**

```ts
- default options
```

#### Inherited from

Node20AwsCdkAppOptions.tsconfig

___

### tsconfigDev

• `Optional` `Readonly` **tsconfigDev**: `TypescriptConfigOptions`

Custom tsconfig options for the development tsconfig.json file (used for testing).

**`Default`**

```ts
- use the production tsconfig options
```

#### Inherited from

Node20AwsCdkAppOptions.tsconfigDev

___

### tsconfigDevFile

• `Optional` `Readonly` **tsconfigDevFile**: `string`

The name of the development tsconfig.json file.

**`Default`**

```ts
"tsconfig.dev.json"
```

#### Inherited from

Node20AwsCdkAppOptions.tsconfigDevFile

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

Node20AwsCdkAppOptions.typescriptVersion

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

Node20AwsCdkAppOptions.versionrcOptions

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

Node20AwsCdkAppOptions.vscode

___

### watchExcludes

• `Optional` `Readonly` **watchExcludes**: `string`[]

Glob patterns to exclude from `cdk watch`.

**`Default`**

```ts
[]
```

#### Inherited from

Node20AwsCdkAppOptions.watchExcludes

___

### watchIncludes

• `Optional` `Readonly` **watchIncludes**: `string`[]

Glob patterns to include in `cdk watch`.

**`Default`**

```ts
[]
```

#### Inherited from

Node20AwsCdkAppOptions.watchIncludes

___

### workflowBootstrapSteps

• `Optional` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

Workflow steps to use in order to bootstrap this repo.

**`Default`**

```ts
"yarn install --frozen-lockfile && yarn projen"
```

#### Inherited from

Node20AwsCdkAppOptions.workflowBootstrapSteps

___

### workflowContainerImage

• `Optional` `Readonly` **workflowContainerImage**: `string`

Container image to use for GitHub workflows.

**`Default`**

```ts
- default image
```

#### Inherited from

Node20AwsCdkAppOptions.workflowContainerImage

___

### workflowGitIdentity

• `Optional` `Readonly` **workflowGitIdentity**: `GitIdentity`

The git identity to use in workflows.

**`Default`**

```ts
- GitHub Actions
```

#### Inherited from

Node20AwsCdkAppOptions.workflowGitIdentity

___

### workflowNodeVersion

• `Optional` `Readonly` **workflowNodeVersion**: `string`

The node version to use in GitHub workflows.

**`Default`**

- same as `minNodeVersion`

#### Inherited from

Node20AwsCdkAppOptions.workflowNodeVersion

___

### workflowPackageCache

• `Optional` `Readonly` **workflowPackageCache**: `boolean`

Enable Node.js package cache in GitHub workflows.

**`Default`**

```ts
false
```

#### Inherited from

Node20AwsCdkAppOptions.workflowPackageCache

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

Node20AwsCdkAppOptions.workflowRunsOn

___

### workflowRunsOnGroup

• `Optional` `Readonly` **workflowRunsOnGroup**: `GroupRunnerOptions`

Github Runner Group selection options

**`Description`**

Defines a target Runner Group by name and/or labels

**`Throws`**

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

Node20AwsCdkAppOptions.workflowRunsOnGroup

___

### yarnBerryOptions

• `Optional` `Readonly` **yarnBerryOptions**: `YarnBerryOptions`

Options for Yarn Berry

**`Default`**

```ts
- Yarn Berry v4 with all default options
```

#### Inherited from

Node20AwsCdkAppOptions.yarnBerryOptions
