[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / UpgradeDependenciesWorkflowOptions

# Interface: UpgradeDependenciesWorkflowOptions

## Hierarchy

- `UpgradeDependenciesWorkflowOptions`

  ↳ **`UpgradeDependenciesWorkflowOptions`**

## Table of contents

### Properties

- [assignees](UpgradeDependenciesWorkflowOptions.md#assignees)
- [branches](UpgradeDependenciesWorkflowOptions.md#branches)
- [container](UpgradeDependenciesWorkflowOptions.md#container)
- [gitIdentity](UpgradeDependenciesWorkflowOptions.md#gitidentity)
- [labels](UpgradeDependenciesWorkflowOptions.md#labels)
- [permissions](UpgradeDependenciesWorkflowOptions.md#permissions)
- [preUpgradeSteps](UpgradeDependenciesWorkflowOptions.md#preupgradesteps)
- [projenCredentials](UpgradeDependenciesWorkflowOptions.md#projencredentials)
- [runsOn](UpgradeDependenciesWorkflowOptions.md#runson)
- [runsOnGroup](UpgradeDependenciesWorkflowOptions.md#runsongroup)
- [schedule](UpgradeDependenciesWorkflowOptions.md#schedule)

## Properties

### assignees

• `Optional` `Readonly` **assignees**: `string`[]

Assignees to add on the PR.

**`Default`**

```ts
- no assignees
```

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.assignees

___

### branches

• `Optional` `Readonly` **branches**: `string`[]

List of branches to create PR's for.

**`Default`**

```ts
- All release branches configured for the project.
```

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.branches

___

### container

• `Optional` `Readonly` **container**: `ContainerOptions`

Job container options.

**`Default`**

```ts
- defaults
```

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.container

___

### gitIdentity

• `Optional` `Readonly` **gitIdentity**: `GitIdentity`

The git identity to use for commits.

**`Default`**

```ts
"github-actions@github.com"
```

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.gitIdentity

___

### labels

• `Optional` `Readonly` **labels**: `string`[]

Labels to apply on the PR.

**`Default`**

```ts
- no labels.
```

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.labels

___

### permissions

• `Optional` `Readonly` **permissions**: `JobPermissions`

Permissions granted to the upgrade job
To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`

**`Default`**

`{ contents: JobPermission.READ }`

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.permissions

___

### preUpgradeSteps

• `Optional` `Readonly` **preUpgradeSteps**: `JobStep`[]

Steps that will be placed just in front of the upgrade step in the upgrade Workflow

___

### projenCredentials

• `Optional` `Readonly` **projenCredentials**: `GithubCredentials`

Choose a method for authenticating with GitHub for creating the PR.

When using the default github token, PR's created by this workflow
will not trigger any subsequent workflows (i.e the build workflow), so
projen requires API access to be provided through e.g. a personal
access token or other method.

**`See`**

https://github.com/peter-evans/create-pull-request/issues/48

**`Default`**

```ts
- personal access token named PROJEN_GITHUB_TOKEN
```

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.projenCredentials

___

### runsOn

• `Optional` `Readonly` **runsOn**: `string`[]

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

javascript.UpgradeDependenciesWorkflowOptions.runsOn

___

### runsOnGroup

• `Optional` `Readonly` **runsOnGroup**: `GroupRunnerOptions`

Github Runner Group selection options

**`Description`**

Defines a target Runner Group by name and/or labels

**`Throws`**

if both `runsOn` and `runsOnGroup` are specified

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.runsOnGroup

___

### schedule

• `Optional` `Readonly` **schedule**: `UpgradeDependenciesSchedule`

Schedule to run on.

**`Default`**

```ts
UpgradeDependenciesSchedule.DAILY
```

#### Inherited from

javascript.UpgradeDependenciesWorkflowOptions.schedule
