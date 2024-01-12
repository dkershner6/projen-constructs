[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / UpgradeDependenciesOptions

# Interface: UpgradeDependenciesOptions

## Hierarchy

- `UpgradeDependenciesOptions`

  ↳ **`UpgradeDependenciesOptions`**

## Table of contents

### Properties

- [exclude](UpgradeDependenciesOptions.md#exclude)
- [include](UpgradeDependenciesOptions.md#include)
- [pullRequestTitle](UpgradeDependenciesOptions.md#pullrequesttitle)
- [satisfyPeerDependencies](UpgradeDependenciesOptions.md#satisfypeerdependencies)
- [semanticCommit](UpgradeDependenciesOptions.md#semanticcommit)
- [signoff](UpgradeDependenciesOptions.md#signoff)
- [target](UpgradeDependenciesOptions.md#target)
- [taskName](UpgradeDependenciesOptions.md#taskname)
- [types](UpgradeDependenciesOptions.md#types)
- [workflow](UpgradeDependenciesOptions.md#workflow)
- [workflowOptions](UpgradeDependenciesOptions.md#workflowoptions)

## Properties

### exclude

• `Optional` `Readonly` **exclude**: `string`[]

List of package names to exclude during the upgrade.

**`Default`**

```ts
- Nothing is excluded.
```

#### Inherited from

javascript.UpgradeDependenciesOptions.exclude

___

### include

• `Optional` `Readonly` **include**: `string`[]

List of package names to include during the upgrade.

**`Default`**

```ts
- Everything is included.
```

#### Inherited from

javascript.UpgradeDependenciesOptions.include

___

### pullRequestTitle

• `Optional` `Readonly` **pullRequestTitle**: `string`

Title of the pull request to use (should be all lower-case).

**`Default`**

```ts
"upgrade dependencies"
```

#### Inherited from

javascript.UpgradeDependenciesOptions.pullRequestTitle

___

### satisfyPeerDependencies

• `Optional` `Readonly` **satisfyPeerDependencies**: `boolean`

Check peer dependencies of installed packages and filter updates to compatible versions.

By default, the upgrade workflow will adhere to version constraints from peer dependencies.
Sometimes this is not desirable and can be disabled.

**`See`**

https://github.com/raineorshine/npm-check-updates#peer

**`Default`**

```ts
true
```

#### Inherited from

javascript.UpgradeDependenciesOptions.satisfyPeerDependencies

___

### semanticCommit

• `Optional` `Readonly` **semanticCommit**: `string`

The semantic commit type.

**`Default`**

```ts
'chore'
```

#### Inherited from

javascript.UpgradeDependenciesOptions.semanticCommit

___

### signoff

• `Optional` `Readonly` **signoff**: `boolean`

Add Signed-off-by line by the committer at the end of the commit log message.

**`Default`**

```ts
true
```

#### Inherited from

javascript.UpgradeDependenciesOptions.signoff

___

### target

• `Optional` `Readonly` **target**: `string`

Determines the target version to upgrade dependencies to.

**`See`**

https://github.com/raineorshine/npm-check-updates#target

**`Default`**

```ts
"minor"
```

#### Inherited from

javascript.UpgradeDependenciesOptions.target

___

### taskName

• `Optional` `Readonly` **taskName**: `string`

The name of the task that will be created.
This will also be the workflow name.

**`Default`**

```ts
"upgrade".
```

#### Inherited from

javascript.UpgradeDependenciesOptions.taskName

___

### types

• `Optional` `Readonly` **types**: `DependencyType`[]

Specify which dependency types the upgrade should operate on.

**`Default`**

```ts
- All dependency types.
```

#### Inherited from

javascript.UpgradeDependenciesOptions.types

___

### workflow

• `Optional` `Readonly` **workflow**: `boolean`

Include a github workflow for creating PR's that upgrades the
required dependencies, either by manual dispatch, or by a schedule.

If this is `false`, only a local projen task is created, which can be executed manually to
upgrade the dependencies.

**`Default`**

```ts
- true for root projects, false for subprojects.
```

#### Inherited from

javascript.UpgradeDependenciesOptions.workflow

___

### workflowOptions

• `Optional` `Readonly` **workflowOptions**: [`UpgradeDependenciesWorkflowOptions`](UpgradeDependenciesWorkflowOptions.md)

#### Overrides

javascript.UpgradeDependenciesOptions.workflowOptions
