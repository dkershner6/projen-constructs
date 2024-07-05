[**dkershner6-projen-sst-app**](../README.md) • **Docs**

***

[dkershner6-projen-sst-app](../globals.md) / Node20SstAppOptions

# Interface: Node20SstAppOptions

## Extends

- `SstTypescriptAppOptions`

## Properties

### allowLibraryDependencies?

> `readonly` `optional` **allowLibraryDependencies**: `boolean`

Allow the project to include `peerDependencies` and `bundledDependencies`.
This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.allowLibraryDependencies`

***

### appEntrypoint?

> `readonly` `optional` **appEntrypoint**: `string`

The CDK app's entrypoint (relative to the source directory, which is
"src" by default).

#### Default

```ts
"main.ts"
```

#### Inherited from

`SstTypescriptAppOptions.appEntrypoint`

***

### artifactsDirectory?

> `readonly` `optional` **artifactsDirectory**: `string`

A directory which will contain build artifacts.

#### Default

```ts
"dist"
```

#### Inherited from

`SstTypescriptAppOptions.artifactsDirectory`

***

### authorEmail?

> `readonly` `optional` **authorEmail**: `string`

Author's e-mail

#### Inherited from

`SstTypescriptAppOptions.authorEmail`

***

### authorName?

> `readonly` `optional` **authorName**: `string`

Author's name

#### Inherited from

`SstTypescriptAppOptions.authorName`

***

### authorOrganization?

> `readonly` `optional` **authorOrganization**: `boolean`

Is the author an organization

#### Inherited from

`SstTypescriptAppOptions.authorOrganization`

***

### authorUrl?

> `readonly` `optional` **authorUrl**: `string`

Author's URL / Website

#### Inherited from

`SstTypescriptAppOptions.authorUrl`

***

### autoApproveOptions?

> `readonly` `optional` **autoApproveOptions**: `AutoApproveOptions`

Enable and configure the 'auto approve' workflow.

#### Default

```ts
- auto approve is disabled
```

#### Inherited from

`SstTypescriptAppOptions.autoApproveOptions`

***

### autoApproveUpgrades?

> `readonly` `optional` **autoApproveUpgrades**: `boolean`

Automatically approve deps upgrade PRs, allowing them to be
merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

#### Default

```ts
- true
```

#### Inherited from

`SstTypescriptAppOptions.autoApproveUpgrades`

***

### autoDetectBin?

> `readonly` `optional` **autoDetectBin**: `boolean`

Automatically add all executables under the `bin` directory to your
`package.json` file under the `bin` section.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.autoDetectBin`

***

### autoMerge?

> `readonly` `optional` **autoMerge**: `boolean`

Enable automatic merging on GitHub. Has no effect if `github.mergify`
is set to false.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.autoMerge`

***

### autoMergeOptions?

> `readonly` `optional` **autoMergeOptions**: `AutoMergeOptions`

Configure options for automatic merging on GitHub. Has no effect if
`github.mergify` or `autoMerge` is set to false.

#### Default

- see defaults in `AutoMergeOptions`

#### Inherited from

`SstTypescriptAppOptions.autoMergeOptions`

***

### bin?

> `readonly` `optional` **bin**: `Record`\<`string`, `string`\>

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

#### Inherited from

`SstTypescriptAppOptions.bin`

***

### branchNameToSstStageMap?

> `readonly` `optional` **branchNameToSstStageMap**: `Record`\<`string`, `string`\>

Maps branchNames to SST Stages.

#### Default

```ts
- The branchName will be used as the stage name.
```

#### Inherited from

`SstTypescriptAppOptions.branchNameToSstStageMap`

***

### bugsEmail?

> `readonly` `optional` **bugsEmail**: `string`

The email address to which issues should be reported.

#### Inherited from

`SstTypescriptAppOptions.bugsEmail`

***

### bugsUrl?

> `readonly` `optional` **bugsUrl**: `string`

The url to your project's issue tracker.

#### Inherited from

`SstTypescriptAppOptions.bugsUrl`

***

### buildCommand?

> `readonly` `optional` **buildCommand**: `string`

A command to execute before synthesis. This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

#### Default

```ts
- no build command
```

#### Inherited from

`SstTypescriptAppOptions.buildCommand`

***

### buildWorkflow?

> `readonly` `optional` **buildWorkflow**: `boolean`

Define a GitHub workflow for building PRs.

#### Default

```ts
- true if not a subproject
```

#### Inherited from

`SstTypescriptAppOptions.buildWorkflow`

***

### buildWorkflowOptions?

> `readonly` `optional` **buildWorkflowOptions**: `BuildWorkflowOptions`

Options for PR build workflow.

#### Inherited from

`SstTypescriptAppOptions.buildWorkflowOptions`

***

### ~~buildWorkflowTriggers?~~

> `readonly` `optional` **buildWorkflowTriggers**: `Triggers`

Build workflow triggers

#### Default

```ts
"{ pullRequest: {}, workflowDispatch: {} }"
```

#### Deprecated

- Use `buildWorkflowOptions.workflowTriggers`

#### Inherited from

`SstTypescriptAppOptions.buildWorkflowTriggers`

***

### bundledDeps?

> `readonly` `optional` **bundledDeps**: `string`[]

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

`SstTypescriptAppOptions.bundledDeps`

***

### bundlerOptions?

> `readonly` `optional` **bundlerOptions**: `BundlerOptions`

Options for `Bundler`.

#### Inherited from

`SstTypescriptAppOptions.bundlerOptions`

***

### ~~cdkAssert?~~

> `readonly` `optional` **cdkAssert**: `boolean`

Warning: NodeJS only.
Install the @aws-cdk/assert library?

#### Default

```ts
- will be included by default for AWS CDK >= 1.0.0 < 2.0.0
```

#### Deprecated

The @aws-cdk/assert library is deprecated in favor of
@aws-cdk/assertions (in V1) and included in `aws-cdk-lib` for V2.

#### Inherited from

`SstTypescriptAppOptions.cdkAssert`

***

### cdkAssertions?

> `readonly` `optional` **cdkAssertions**: `boolean`

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

#### Default

```ts
- will be included by default for AWS CDK >= 1.111.0 < 2.0.0
```

#### Inherited from

`SstTypescriptAppOptions.cdkAssertions`

***

### ~~cdkDependencies?~~

> `readonly` `optional` **cdkDependencies**: `string`[]

Which AWS CDKv1 modules this project requires

#### Deprecated

For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

#### Inherited from

`SstTypescriptAppOptions.cdkDependencies`

***

### ~~cdkDependenciesAsDeps?~~

> `readonly` `optional` **cdkDependenciesAsDeps**: `boolean`

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as
normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

#### Default

```ts
true
```

#### Deprecated

Not supported in CDK v2.

#### Inherited from

`SstTypescriptAppOptions.cdkDependenciesAsDeps`

***

### ~~cdkTestDependencies?~~

> `readonly` `optional` **cdkTestDependencies**: `string`[]

AWS CDK modules required for testing.

#### Deprecated

For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

#### Inherited from

`SstTypescriptAppOptions.cdkTestDependencies`

***

### cdkVersion

> `readonly` **cdkVersion**: `string`

Minimum version of the AWS CDK to depend on.

#### Default

```ts
"2.1.0"
```

#### Inherited from

`SstTypescriptAppOptions.cdkVersion`

***

### cdkVersionPinning?

> `readonly` `optional` **cdkVersionPinning**: `boolean`

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

#### Inherited from

`SstTypescriptAppOptions.cdkVersionPinning`

***

### cdkout?

> `readonly` `optional` **cdkout**: `string`

cdk.out directory.

#### Default

```ts
"cdk.out"
```

#### Inherited from

`SstTypescriptAppOptions.cdkout`

***

### checkLicenses?

> `readonly` `optional` **checkLicenses**: `LicenseCheckerOptions`

Configure which licenses should be deemed acceptable for use by dependencies

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

#### Default

```ts
- no license checks are run during the build and all licenses will be accepted
```

#### Inherited from

`SstTypescriptAppOptions.checkLicenses`

***

### clobber?

> `readonly` `optional` **clobber**: `boolean`

Add a `clobber` task which resets the repo to origin.

#### Default

```ts
- true, but false for subprojects
```

#### Inherited from

`SstTypescriptAppOptions.clobber`

***

### codeArtifactOptions?

> `readonly` `optional` **codeArtifactOptions**: `CodeArtifactOptions`

Options for npm packages using AWS CodeArtifact.
This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

#### Default

```ts
- undefined
```

#### Inherited from

`SstTypescriptAppOptions.codeArtifactOptions`

***

### codeCov?

> `readonly` `optional` **codeCov**: `boolean`

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/
Uses codecov/codecov-action@v4
A secret is required for private repos. Configured with `@codeCovTokenSecret`

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.codeCov`

***

### codeCovTokenSecret?

> `readonly` `optional` **codeCovTokenSecret**: `string`

Define the secret name for a specified https://codecov.io/ token
A secret is required to send coverage for private repositories

#### Default

```ts
- if this option is not specified, only public repositories are supported
```

#### Inherited from

`SstTypescriptAppOptions.codeCovTokenSecret`

***

### commitGenerated?

> `readonly` `optional` **commitGenerated**: `boolean`

Whether to commit the managed files by default.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.commitGenerated`

***

### constructsVersion?

> `readonly` `optional` **constructsVersion**: `string`

Minimum version of the `constructs` library to depend on.

#### Default

```ts
- for CDK 1.x the default is "3.2.27", for CDK 2.x the default is
"10.0.5".
```

#### Inherited from

`SstTypescriptAppOptions.constructsVersion`

***

### constructsVersionPinning?

> `readonly` `optional` **constructsVersionPinning**: `boolean`

Whether or not to pin the version of constructs to the version specified in the
`constructsVersion` property.

***

### context?

> `readonly` `optional` **context**: `object`

Additional context to include in `cdk.json`.

#### Index Signature

 \[`key`: `string`\]: `any`

#### Default

```ts
- no additional context
```

#### Inherited from

`SstTypescriptAppOptions.context`

***

### copyrightOwner?

> `readonly` `optional` **copyrightOwner**: `string`

License copyright owner.

#### Default

- defaults to the value of authorName or "" if `authorName` is undefined.

#### Inherited from

`SstTypescriptAppOptions.copyrightOwner`

***

### copyrightPeriod?

> `readonly` `optional` **copyrightPeriod**: `string`

The copyright years to put in the LICENSE file.

#### Default

```ts
- current year
```

#### Inherited from

`SstTypescriptAppOptions.copyrightPeriod`

***

### defaultReleaseBranch

> `readonly` **defaultReleaseBranch**: `string`

The name of the main release branch.

#### Default

```ts
"main"
```

#### Inherited from

`SstTypescriptAppOptions.defaultReleaseBranch`

***

### dependabot?

> `readonly` `optional` **dependabot**: `boolean`

Use dependabot to handle dependency upgrades.
Cannot be used in conjunction with `depsUpgrade`.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.dependabot`

***

### dependabotOptions?

> `readonly` `optional` **dependabotOptions**: `DependabotOptions`

Options for dependabot.

#### Default

```ts
- default options
```

#### Inherited from

`SstTypescriptAppOptions.dependabotOptions`

***

### deps?

> `readonly` `optional` **deps**: `string`[]

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

#### Example

```ts
[ 'express', 'lodash', 'foo@^2' ]
```

#### Default

```ts
[]
```

#### Featured

#### Inherited from

`SstTypescriptAppOptions.deps`

***

### depsUpgrade?

> `readonly` `optional` **depsUpgrade**: `boolean`

Use tasks and github workflows to handle dependency upgrades.
Cannot be used in conjunction with `dependabot`.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.depsUpgrade`

***

### depsUpgradeOptions?

> `readonly` `optional` **depsUpgradeOptions**: `UpgradeDependenciesOptions`

Options for `UpgradeDependencies`.

#### Default

```ts
- default options
```

#### Inherited from

`SstTypescriptAppOptions.depsUpgradeOptions`

***

### description?

> `readonly` `optional` **description**: `string`

The description is just a string that helps people understand the purpose of the package.
It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

#### Featured

#### Inherited from

`SstTypescriptAppOptions.description`

***

### devContainer?

> `readonly` `optional` **devContainer**: `boolean`

Add a VSCode development environment (used for GitHub Codespaces)

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.devContainer`

***

### devDeps?

> `readonly` `optional` **devDeps**: `string`[]

Build dependencies for this module. These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

#### Example

```ts
[ 'typescript', '@types/express' ]
```

#### Default

```ts
[]
```

#### Featured

#### Inherited from

`SstTypescriptAppOptions.devDeps`

***

### disableTsconfig?

> `readonly` `optional` **disableTsconfig**: `boolean`

Do not generate a `tsconfig.json` file (used by jsii projects since
tsconfig.json is generated by the jsii compiler).

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.disableTsconfig`

***

### disableTsconfigDev?

> `readonly` `optional` **disableTsconfigDev**: `boolean`

Do not generate a `tsconfig.dev.json` file.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.disableTsconfigDev`

***

### docgen?

> `readonly` `optional` **docgen**: `boolean`

Docgen by Typedoc

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.docgen`

***

### docsDirectory?

> `readonly` `optional` **docsDirectory**: `string`

Docs directory

#### Default

```ts
"docs"
```

#### Inherited from

`SstTypescriptAppOptions.docsDirectory`

***

### edgeLambdaAutoDiscover?

> `readonly` `optional` **edgeLambdaAutoDiscover**: `boolean`

Automatically adds an `cloudfront.experimental.EdgeFunction` for each
`.edge-lambda.ts` handler in your source tree. If this is disabled, you can
manually add an `awscdk.AutoDiscover` component to your project.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.edgeLambdaAutoDiscover`

***

### entrypoint?

> `readonly` `optional` **entrypoint**: `string`

Module entrypoint (`main` in `package.json`)

Set to an empty string to not include `main` in your package.json

#### Default

```ts
"lib/index.js"
```

#### Inherited from

`SstTypescriptAppOptions.entrypoint`

***

### entrypointTypes?

> `readonly` `optional` **entrypointTypes**: `string`

The .d.ts file that includes the type declarations for this module.

#### Default

```ts
- .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
```

#### Inherited from

`SstTypescriptAppOptions.entrypointTypes`

***

### eslint?

> `readonly` `optional` **eslint**: `boolean`

Setup eslint.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.eslint`

***

### eslintOptions?

> `readonly` `optional` **eslintOptions**: `EslintOptions`

Eslint options

#### Default

```ts
- opinionated default options
```

#### Inherited from

`SstTypescriptAppOptions.eslintOptions`

***

### experimentalIntegRunner?

> `readonly` `optional` **experimentalIntegRunner**: `boolean`

**`Experimental`**

Enable experimental support for the AWS CDK integ-runner.

#### Default

```ts
false
@experimental
```

#### Inherited from

`SstTypescriptAppOptions.experimentalIntegRunner`

***

### featureFlags?

> `readonly` `optional` **featureFlags**: `boolean`

Include all feature flags in cdk.json

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.featureFlags`

***

### gitIgnoreOptions?

> `readonly` `optional` **gitIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .gitignore file

#### Inherited from

`SstTypescriptAppOptions.gitIgnoreOptions`

***

### gitOptions?

> `readonly` `optional` **gitOptions**: `GitOptions`

Configuration options for git

#### Inherited from

`SstTypescriptAppOptions.gitOptions`

***

### github?

> `readonly` `optional` **github**: `boolean`

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.github`

***

### githubOptions?

> `readonly` `optional` **githubOptions**: `GitHubOptions`

Options for GitHub integration

#### Default

```ts
- see GitHubOptions
```

#### Inherited from

`SstTypescriptAppOptions.githubOptions`

***

### gitignore?

> `readonly` `optional` **gitignore**: `string`[]

Additional entries to .gitignore

#### Inherited from

`SstTypescriptAppOptions.gitignore`

***

### gitpod?

> `readonly` `optional` **gitpod**: `boolean`

Add a Gitpod development environment

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.gitpod`

***

### homepage?

> `readonly` `optional` **homepage**: `string`

Package's Homepage / Website

#### Inherited from

`SstTypescriptAppOptions.homepage`

***

### integrationTestAutoDiscover?

> `readonly` `optional` **integrationTestAutoDiscover**: `boolean`

Automatically discovers and creates integration tests for each `.integ.ts`
file in under your test directory.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.integrationTestAutoDiscover`

***

### jest?

> `readonly` `optional` **jest**: `boolean`

Setup jest unit tests

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.jest`

***

### jestOptions?

> `readonly` `optional` **jestOptions**: `Node20TypeScriptProjectJestOptions`

Jest options

#### Default

```ts
- default options
```

#### Overrides

`SstTypescriptAppOptions.jestOptions`

***

### jsiiReleaseVersion?

> `readonly` `optional` **jsiiReleaseVersion**: `string`

Version requirement of `publib` which is used to publish modules to npm.

#### Default

```ts
"latest"
```

#### Inherited from

`SstTypescriptAppOptions.jsiiReleaseVersion`

***

### keywords?

> `readonly` `optional` **keywords**: `string`[]

Keywords to include in `package.json`.

#### Inherited from

`SstTypescriptAppOptions.keywords`

***

### lambdaAutoDiscover?

> `readonly` `optional` **lambdaAutoDiscover**: `boolean`

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler
in your source tree. If this is disabled, you can manually add an
`awscdk.AutoDiscover` component to your project.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.lambdaAutoDiscover`

***

### lambdaExtensionAutoDiscover?

> `readonly` `optional` **lambdaExtensionAutoDiscover**: `boolean`

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts`
entrypoint in your source tree. If this is disabled, you can manually add an
`awscdk.AutoDiscover` component to your project

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.lambdaExtensionAutoDiscover`

***

### lambdaOptions?

> `readonly` `optional` **lambdaOptions**: `LambdaFunctionCommonOptions`

Common options for all AWS Lambda functions.

#### Default

```ts
- default options
```

#### Inherited from

`SstTypescriptAppOptions.lambdaOptions`

***

### libdir?

> `readonly` `optional` **libdir**: `string`

Typescript  artifacts output directory

#### Default

```ts
"lib"
```

#### Inherited from

`SstTypescriptAppOptions.libdir`

***

### license?

> `readonly` `optional` **license**: `string`

License's SPDX identifier.
See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

#### Default

```ts
"Apache-2.0"
```

#### Inherited from

`SstTypescriptAppOptions.license`

***

### licensed?

> `readonly` `optional` **licensed**: `boolean`

Indicates if a license should be added.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.licensed`

***

### logging?

> `readonly` `optional` **logging**: `LoggerOptions`

Configure logging options such as verbosity.

#### Default

```ts
{}
```

#### Inherited from

`SstTypescriptAppOptions.logging`

***

### majorVersion?

> `readonly` `optional` **majorVersion**: `number`

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

#### Default

```ts
- Major version is not enforced.
```

#### Inherited from

`SstTypescriptAppOptions.majorVersion`

***

### maxNodeVersion?

> `readonly` `optional` **maxNodeVersion**: `string`

Minimum node.js version to require via `engines` (inclusive).

#### Default

```ts
- no max
```

#### Inherited from

`SstTypescriptAppOptions.maxNodeVersion`

***

### ~~mergify?~~

> `readonly` `optional` **mergify**: `boolean`

Whether mergify should be enabled on this repository or not.

#### Default

```ts
true
```

#### Deprecated

use `githubOptions.mergify` instead

#### Inherited from

`SstTypescriptAppOptions.mergify`

***

### ~~mergifyOptions?~~

> `readonly` `optional` **mergifyOptions**: `MergifyOptions`

Options for mergify

#### Default

```ts
- default options
```

#### Deprecated

use `githubOptions.mergifyOptions` instead

#### Inherited from

`SstTypescriptAppOptions.mergifyOptions`

***

### minMajorVersion?

> `readonly` `optional` **minMajorVersion**: `number`

Minimal Major version to release

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

#### Default

```ts
- No minimum version is being enforced
```

#### Inherited from

`SstTypescriptAppOptions.minMajorVersion`

***

### minNodeVersion?

> `readonly` `optional` **minNodeVersion**: `string`

Minimum Node.js version to require via package.json `engines` (inclusive).

#### Default

```ts
- no "engines" specified
```

#### Inherited from

`SstTypescriptAppOptions.minNodeVersion`

***

### ~~mutableBuild?~~

> `readonly` `optional` **mutableBuild**: `boolean`

Automatically update files modified during builds to pull-request branches. This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

#### Default

```ts
true
```

#### Deprecated

- Use `buildWorkflowOptions.mutableBuild`

#### Inherited from

`SstTypescriptAppOptions.mutableBuild`

***

### name

> `readonly` **name**: `string`

This is the name of your project.

#### Default

```ts
$BASEDIR
```

#### Featured

#### Inherited from

`SstTypescriptAppOptions.name`

***

### npmAccess?

> `readonly` `optional` **npmAccess**: `NpmAccess`

Access level of the npm package.

#### Default

- for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

#### Inherited from

`SstTypescriptAppOptions.npmAccess`

***

### npmDistTag?

> `readonly` `optional` **npmDistTag**: `string`

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

#### Default

```ts
"latest"
```

#### Inherited from

`SstTypescriptAppOptions.npmDistTag`

***

### npmIgnoreOptions?

> `readonly` `optional` **npmIgnoreOptions**: `IgnoreFileOptions`

Configuration options for .npmignore file

#### Inherited from

`SstTypescriptAppOptions.npmIgnoreOptions`

***

### npmProvenance?

> `readonly` `optional` **npmProvenance**: `boolean`

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

#### See

https://docs.npmjs.com/generating-provenance-statements

#### Default

```ts
- true for public packages, false otherwise
```

#### Inherited from

`SstTypescriptAppOptions.npmProvenance`

***

### ~~npmRegistry?~~

> `readonly` `optional` **npmRegistry**: `string`

The host name of the npm registry to publish to. Cannot be set together with `npmRegistryUrl`.

#### Deprecated

use `npmRegistryUrl` instead

#### Inherited from

`SstTypescriptAppOptions.npmRegistry`

***

### npmRegistryUrl?

> `readonly` `optional` **npmRegistryUrl**: `string`

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

#### Default

```ts
"https://registry.npmjs.org"
```

#### Inherited from

`SstTypescriptAppOptions.npmRegistryUrl`

***

### npmTokenSecret?

> `readonly` `optional` **npmTokenSecret**: `string`

GitHub secret which contains the NPM token to use when publishing packages.

#### Default

```ts
"NPM_TOKEN"
```

#### Inherited from

`SstTypescriptAppOptions.npmTokenSecret`

***

### ~~npmignore?~~

> `readonly` `optional` **npmignore**: `string`[]

Additional entries to .npmignore.

#### Deprecated

- use `project.addPackageIgnore`

#### Inherited from

`SstTypescriptAppOptions.npmignore`

***

### npmignoreEnabled?

> `readonly` `optional` **npmignoreEnabled**: `boolean`

Defines an .npmignore file. Normally this is only needed for libraries that
are packaged as tarballs.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.npmignoreEnabled`

***

### outdir?

> `readonly` `optional` **outdir**: `string`

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

#### Default

```ts
"."
```

#### Inherited from

`SstTypescriptAppOptions.outdir`

***

### package?

> `readonly` `optional` **package**: `boolean`

Defines a `package` task that will produce an npm tarball under the
artifacts directory (e.g. `dist`).

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.package`

***

### packageManager?

> `readonly` `optional` **packageManager**: `NodePackageManager`

The Node Package Manager used to execute scripts

#### Default

```ts
NodePackageManager.YARN_CLASSIC
```

#### Inherited from

`SstTypescriptAppOptions.packageManager`

***

### packageName?

> `readonly` `optional` **packageName**: `string`

The "name" in package.json

#### Default

```ts
- defaults to project name
```

#### Featured

#### Inherited from

`SstTypescriptAppOptions.packageName`

***

### parent?

> `readonly` `optional` **parent**: `Project`

The parent project, if this project is part of a bigger project.

#### Inherited from

`SstTypescriptAppOptions.parent`

***

### peerDependencyOptions?

> `readonly` `optional` **peerDependencyOptions**: `PeerDependencyOptions`

Options for `peerDeps`.

#### Inherited from

`SstTypescriptAppOptions.peerDependencyOptions`

***

### peerDeps?

> `readonly` `optional` **peerDeps**: `string`[]

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

#### Default

```ts
[]
```

#### Inherited from

`SstTypescriptAppOptions.peerDeps`

***

### pnpmVersion?

> `readonly` `optional` **pnpmVersion**: `string`

The version of PNPM to use if using PNPM as a package manager.

#### Default

```ts
"7"
```

#### Inherited from

`SstTypescriptAppOptions.pnpmVersion`

***

### postBuildSteps?

> `readonly` `optional` **postBuildSteps**: `JobStep`[]

Steps to execute after build as part of the release workflow.

#### Default

```ts
[]
```

#### Inherited from

`SstTypescriptAppOptions.postBuildSteps`

***

### prerelease?

> `readonly` `optional` **prerelease**: `string`

Bump versions from the default branch as pre-releases (e.g. "beta",
"alpha", "pre").

#### Default

```ts
- normal semantic versions
```

#### Inherited from

`SstTypescriptAppOptions.prerelease`

***

### prettier?

> `readonly` `optional` **prettier**: `boolean`

Setup prettier.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.prettier`

***

### prettierOptions?

> `readonly` `optional` **prettierOptions**: `PrettierOptions`

Prettier options

#### Default

```ts
- default options
```

#### Inherited from

`SstTypescriptAppOptions.prettierOptions`

***

### ~~projectType?~~

> `readonly` `optional` **projectType**: `ProjectType`

Which type of project this is (library/app).

#### Default

```ts
ProjectType.UNKNOWN
```

#### Deprecated

no longer supported at the base project level

#### Inherited from

`SstTypescriptAppOptions.projectType`

***

### projenCommand?

> `readonly` `optional` **projenCommand**: `string`

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

#### Default

```ts
"npx projen"
```

#### Inherited from

`SstTypescriptAppOptions.projenCommand`

***

### projenCredentials?

> `readonly` `optional` **projenCredentials**: `GithubCredentials`

Choose a method of providing GitHub API access for projen workflows.

#### Default

```ts
- use a personal access token named PROJEN_GITHUB_TOKEN
```

#### Inherited from

`SstTypescriptAppOptions.projenCredentials`

***

### projenDevDependency?

> `readonly` `optional` **projenDevDependency**: `boolean`

Indicates of "projen" should be installed as a devDependency.

#### Default

```ts
- true if not a subproject
```

#### Inherited from

`SstTypescriptAppOptions.projenDevDependency`

***

### ~~projenTokenSecret?~~

> `readonly` `optional` **projenTokenSecret**: `string`

The name of a secret which includes a GitHub Personal Access Token to be
used by projen workflows. This token needs to have the `repo`, `workflows`
and `packages` scope.

#### Default

```ts
"PROJEN_GITHUB_TOKEN"
```

#### Deprecated

use `projenCredentials`

#### Inherited from

`SstTypescriptAppOptions.projenTokenSecret`

***

### projenVersion?

> `readonly` `optional` **projenVersion**: `string`

Version of projen to install.

#### Default

```ts
- Defaults to the latest version.
```

#### Inherited from

`SstTypescriptAppOptions.projenVersion`

***

### projenrcJs?

> `readonly` `optional` **projenrcJs**: `boolean`

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable
.projenrc.js generation.

#### Default

```ts
- true if projenrcJson is false
```

#### Inherited from

`SstTypescriptAppOptions.projenrcJs`

***

### projenrcJsOptions?

> `readonly` `optional` **projenrcJsOptions**: `ProjenrcOptions`

Options for .projenrc.js

#### Default

```ts
- default options
```

#### Inherited from

`SstTypescriptAppOptions.projenrcJsOptions`

***

### projenrcJson?

> `readonly` `optional` **projenrcJson**: `boolean`

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable
.projenrc.json generation.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.projenrcJson`

***

### projenrcJsonOptions?

> `readonly` `optional` **projenrcJsonOptions**: `ProjenrcJsonOptions`

Options for .projenrc.json

#### Default

```ts
- default options
```

#### Inherited from

`SstTypescriptAppOptions.projenrcJsonOptions`

***

### projenrcTs?

> `readonly` `optional` **projenrcTs**: `boolean`

Use TypeScript for your projenrc file (`.projenrc.ts`).

#### Default

```ts
false
```

#### Pjnew

true

#### Inherited from

`SstTypescriptAppOptions.projenrcTs`

***

### projenrcTsOptions?

> `readonly` `optional` **projenrcTsOptions**: `ProjenrcOptions`

Options for .projenrc.ts

#### Inherited from

`SstTypescriptAppOptions.projenrcTsOptions`

***

### publishDryRun?

> `readonly` `optional` **publishDryRun**: `boolean`

Instead of actually publishing to package managers, just print the publishing command.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.publishDryRun`

***

### publishTasks?

> `readonly` `optional` **publishTasks**: `boolean`

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.publishTasks`

***

### publishToAws?

> `readonly` `optional` **publishToAws**: `boolean`

Whether to publish this App to AWS.

***

### publishToAwsOptions?

> `readonly` `optional` **publishToAwsOptions**: `PublishToAwsOptions`

Populate in order to add a deploy to AWS job to the release workflow.

***

### pullRequestTemplate?

> `readonly` `optional` **pullRequestTemplate**: `boolean`

Include a GitHub pull request template.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.pullRequestTemplate`

***

### pullRequestTemplateContents?

> `readonly` `optional` **pullRequestTemplateContents**: `string`[]

The contents of the pull request template.

#### Default

```ts
- default content
```

#### Inherited from

`SstTypescriptAppOptions.pullRequestTemplateContents`

***

### readme?

> `readonly` `optional` **readme**: `SampleReadmeProps`

The README setup.

#### Default

```ts
- { filename: 'README.md', contents: '# replace this' }
```

#### Example

```ts
"{ filename: 'readme.md', contents: '# title' }"
```

#### Inherited from

`SstTypescriptAppOptions.readme`

***

### releasableCommits?

> `readonly` `optional` **releasableCommits**: `ReleasableCommits`

Find commits that should be considered releasable
Used to decide if a release is required.

#### Default

```ts
ReleasableCommits.everyCommit()
```

#### Inherited from

`SstTypescriptAppOptions.releasableCommits`

***

### release?

> `readonly` `optional` **release**: `boolean`

Add release management to this project.

#### Default

```ts
- true (false for subprojects)
```

#### Inherited from

`SstTypescriptAppOptions.release`

***

### releaseBranches?

> `readonly` `optional` **releaseBranches**: `object`

Defines additional release branches. A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

#### Index Signature

 \[`name`: `string`\]: `BranchOptions`

#### Default

- no additional branches are used for release. you can use
`addBranch()` to add additional branches.

#### Inherited from

`SstTypescriptAppOptions.releaseBranches`

***

### ~~releaseEveryCommit?~~

> `readonly` `optional` **releaseEveryCommit**: `boolean`

Automatically release new versions every commit to one of branches in `releaseBranches`.

#### Default

```ts
true
```

#### Deprecated

Use `releaseTrigger: ReleaseTrigger.continuous()` instead

#### Inherited from

`SstTypescriptAppOptions.releaseEveryCommit`

***

### releaseFailureIssue?

> `readonly` `optional` **releaseFailureIssue**: `boolean`

Create a github issue on every failed publishing task.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.releaseFailureIssue`

***

### releaseFailureIssueLabel?

> `readonly` `optional` **releaseFailureIssueLabel**: `string`

The label to apply to issues indicating publish failures.
Only applies if `releaseFailureIssue` is true.

#### Default

```ts
"failed-release"
```

#### Inherited from

`SstTypescriptAppOptions.releaseFailureIssueLabel`

***

### ~~releaseSchedule?~~

> `readonly` `optional` **releaseSchedule**: `string`

CRON schedule to trigger new releases.

#### Default

```ts
- no scheduled releases
```

#### Deprecated

Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

#### Inherited from

`SstTypescriptAppOptions.releaseSchedule`

***

### releaseTagPrefix?

> `readonly` `optional` **releaseTagPrefix**: `string`

Automatically add the given prefix to release tags.
Useful if you are releasing on multiple branches with overlapping
version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

#### Default

```ts
"v"
```

#### Inherited from

`SstTypescriptAppOptions.releaseTagPrefix`

***

### releaseToNpm?

> `readonly` `optional` **releaseToNpm**: `boolean`

Automatically release to npm when new versions are introduced.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.releaseToNpm`

***

### releaseTrigger?

> `readonly` `optional` **releaseTrigger**: `ReleaseTrigger`

The release trigger to use.

#### Default

- Continuous releases (`ReleaseTrigger.continuous()`)

#### Inherited from

`SstTypescriptAppOptions.releaseTrigger`

***

### ~~releaseWorkflow?~~

> `readonly` `optional` **releaseWorkflow**: `boolean`

DEPRECATED: renamed to `release`.

#### Default

```ts
- true if not a subproject
```

#### Deprecated

see `release`.

#### Inherited from

`SstTypescriptAppOptions.releaseWorkflow`

***

### releaseWorkflowName?

> `readonly` `optional` **releaseWorkflowName**: `string`

The name of the default release workflow.

#### Default

```ts
"release"
```

#### Inherited from

`SstTypescriptAppOptions.releaseWorkflowName`

***

### releaseWorkflowSetupSteps?

> `readonly` `optional` **releaseWorkflowSetupSteps**: `JobStep`[]

A set of workflow steps to execute in order to setup the workflow
container.

#### Inherited from

`SstTypescriptAppOptions.releaseWorkflowSetupSteps`

***

### renovatebot?

> `readonly` `optional` **renovatebot**: `boolean`

Use renovatebot to handle dependency upgrades.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.renovatebot`

***

### renovatebotOptions?

> `readonly` `optional` **renovatebotOptions**: `RenovatebotOptions`

Options for renovatebot.

#### Default

```ts
- default options
```

#### Inherited from

`SstTypescriptAppOptions.renovatebotOptions`

***

### repository?

> `readonly` `optional` **repository**: `string`

The repository is the location where the actual code for your package lives.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

#### Inherited from

`SstTypescriptAppOptions.repository`

***

### repositoryDirectory?

> `readonly` `optional` **repositoryDirectory**: `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo),
you can specify the directory in which it lives.

#### Inherited from

`SstTypescriptAppOptions.repositoryDirectory`

***

### requireApproval?

> `readonly` `optional` **requireApproval**: `ApprovalLevel`

To protect you against unintended changes that affect your security posture,
the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

#### Default

```ts
ApprovalLevel.BROADENING
```

#### Inherited from

`SstTypescriptAppOptions.requireApproval`

***

### sampleCode?

> `readonly` `optional` **sampleCode**: `boolean`

Generate one-time sample in `src/` and `test/` if there are no files there.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.sampleCode`

***

### scopedPackagesOptions?

> `readonly` `optional` **scopedPackagesOptions**: `ScopedPackagesOptions`[]

Options for privately hosted scoped packages

#### Default

```ts
- fetch all scoped packages from the public npm registry
```

#### Inherited from

`SstTypescriptAppOptions.scopedPackagesOptions`

***

### ~~scripts?~~

> `readonly` `optional` **scripts**: `object`

npm scripts to include. If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

#### Index Signature

 \[`name`: `string`\]: `string`

#### Default

```ts
{}
```

#### Deprecated

use `project.addTask()` or `package.setScript()`

#### Inherited from

`SstTypescriptAppOptions.scripts`

***

### srcdir?

> `readonly` `optional` **srcdir**: `string`

Typescript sources directory.

#### Default

```ts
"src"
```

#### Inherited from

`SstTypescriptAppOptions.srcdir`

***

### sstOut?

> `optional` **sstOut**: `string`

Where to build .sst code to.

#### Default

```ts
".sst/dist/"
```

#### Inherited from

`SstTypescriptAppOptions.sstOut`

***

### sstVersion?

> `optional` **sstVersion**: `string`

The version of SST to use.

#### Default

```ts
"2.39.2"
```

#### Inherited from

`SstTypescriptAppOptions.sstVersion`

***

### stability?

> `readonly` `optional` **stability**: `string`

Package's Stability

#### Inherited from

`SstTypescriptAppOptions.stability`

***

### stale?

> `readonly` `optional` **stale**: `boolean`

Auto-close of stale issues and pull request. See `staleOptions` for options.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.stale`

***

### staleOptions?

> `readonly` `optional` **staleOptions**: `StaleOptions`

Auto-close stale issues and pull requests. To disable set `stale` to `false`.

#### Default

- see defaults in `StaleOptions`

#### Inherited from

`SstTypescriptAppOptions.staleOptions`

***

### testdir?

> `readonly` `optional` **testdir**: `string`

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

#### Default

```ts
"test"
```

#### Inherited from

`SstTypescriptAppOptions.testdir`

***

### tsJestOptions?

> `readonly` `optional` **tsJestOptions**: `TsJestOptions`

Options for ts-jest

#### Inherited from

`SstTypescriptAppOptions.tsJestOptions`

***

### tsconfig?

> `readonly` `optional` **tsconfig**: `TypescriptConfigOptions`

Custom TSConfig

#### Default

```ts
- default options
```

#### Inherited from

`SstTypescriptAppOptions.tsconfig`

***

### tsconfigDev?

> `readonly` `optional` **tsconfigDev**: `TypescriptConfigOptions`

Custom tsconfig options for the development tsconfig.json file (used for testing).

#### Default

```ts
- use the production tsconfig options
```

#### Inherited from

`SstTypescriptAppOptions.tsconfigDev`

***

### tsconfigDevFile?

> `readonly` `optional` **tsconfigDevFile**: `string`

The name of the development tsconfig.json file.

#### Default

```ts
"tsconfig.dev.json"
```

#### Inherited from

`SstTypescriptAppOptions.tsconfigDevFile`

***

### typescriptVersion?

> `readonly` `optional` **typescriptVersion**: `string`

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

#### Default

```ts
"latest"
```

#### Inherited from

`SstTypescriptAppOptions.typescriptVersion`

***

### versionrcOptions?

> `readonly` `optional` **versionrcOptions**: `Record`\<`string`, `any`\>

Custom configuration used when creating changelog with standard-version package.
Given values either append to default configuration or overwrite values in it.

#### Default

```ts
- standard configuration applicable for GitHub repositories
```

#### Inherited from

`SstTypescriptAppOptions.versionrcOptions`

***

### vscode?

> `readonly` `optional` **vscode**: `boolean`

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

#### Default

```ts
true
```

#### Inherited from

`SstTypescriptAppOptions.vscode`

***

### watchExcludes?

> `readonly` `optional` **watchExcludes**: `string`[]

Glob patterns to exclude from `cdk watch`.

#### Default

```ts
[]
```

#### Inherited from

`SstTypescriptAppOptions.watchExcludes`

***

### watchIncludes?

> `readonly` `optional` **watchIncludes**: `string`[]

Glob patterns to include in `cdk watch`.

#### Default

```ts
[]
```

#### Inherited from

`SstTypescriptAppOptions.watchIncludes`

***

### workflowBootstrapSteps?

> `readonly` `optional` **workflowBootstrapSteps**: `JobStep`[]

Workflow steps to use in order to bootstrap this repo.

#### Default

```ts
"yarn install --frozen-lockfile && yarn projen"
```

#### Inherited from

`SstTypescriptAppOptions.workflowBootstrapSteps`

***

### workflowContainerImage?

> `readonly` `optional` **workflowContainerImage**: `string`

Container image to use for GitHub workflows.

#### Default

```ts
- default image
```

#### Inherited from

`SstTypescriptAppOptions.workflowContainerImage`

***

### workflowGitIdentity?

> `readonly` `optional` **workflowGitIdentity**: `GitIdentity`

The git identity to use in workflows.

#### Default

```ts
- GitHub Actions
```

#### Inherited from

`SstTypescriptAppOptions.workflowGitIdentity`

***

### workflowNodeVersion?

> `readonly` `optional` **workflowNodeVersion**: `string`

The node version to use in GitHub workflows.

#### Default

- same as `minNodeVersion`

#### Inherited from

`SstTypescriptAppOptions.workflowNodeVersion`

***

### workflowPackageCache?

> `readonly` `optional` **workflowPackageCache**: `boolean`

Enable Node.js package cache in GitHub workflows.

#### Default

```ts
false
```

#### Inherited from

`SstTypescriptAppOptions.workflowPackageCache`

***

### workflowRunsOn?

> `readonly` `optional` **workflowRunsOn**: `string`[]

Github Runner selection labels

#### Default

```ts
["ubuntu-latest"]
```

#### Description

Defines a target Runner by labels

#### Throws

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

`SstTypescriptAppOptions.workflowRunsOn`

***

### workflowRunsOnGroup?

> `readonly` `optional` **workflowRunsOnGroup**: `GroupRunnerOptions`

Github Runner Group selection options

#### Description

Defines a target Runner Group by name and/or labels

#### Throws

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

`SstTypescriptAppOptions.workflowRunsOnGroup`

***

### yarnBerryOptions?

> `readonly` `optional` **yarnBerryOptions**: `YarnBerryOptions`

Options for Yarn Berry

#### Default

```ts
- Yarn Berry v4 with all default options
```

#### Inherited from

`SstTypescriptAppOptions.yarnBerryOptions`
