[**dkershner6-projen-nx-monorepo**](../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../globals.md) / UpgradeDependenciesOptions

# Interface: UpgradeDependenciesOptions

## Extends

- `UpgradeDependenciesOptions`

## Properties

### exclude?

> `readonly` `optional` **exclude**: `string`[]

List of package names to exclude during the upgrade.

#### Default

```ts
- Nothing is excluded.
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.exclude`

***

### include?

> `readonly` `optional` **include**: `string`[]

List of package names to include during the upgrade.

#### Default

```ts
- Everything is included.
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.include`

***

### pullRequestTitle?

> `readonly` `optional` **pullRequestTitle**: `string`

Title of the pull request to use (should be all lower-case).

#### Default

```ts
"upgrade dependencies"
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.pullRequestTitle`

***

### satisfyPeerDependencies?

> `readonly` `optional` **satisfyPeerDependencies**: `boolean`

Check peer dependencies of installed packages and filter updates to compatible versions.

By default, the upgrade workflow will adhere to version constraints from peer dependencies.
Sometimes this is not desirable and can be disabled.

#### See

https://github.com/raineorshine/npm-check-updates#peer

#### Default

```ts
true
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.satisfyPeerDependencies`

***

### semanticCommit?

> `readonly` `optional` **semanticCommit**: `string`

The semantic commit type.

#### Default

```ts
'chore'
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.semanticCommit`

***

### signoff?

> `readonly` `optional` **signoff**: `boolean`

Add Signed-off-by line by the committer at the end of the commit log message.

#### Default

```ts
true
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.signoff`

***

### target?

> `readonly` `optional` **target**: `string`

Determines the target version to upgrade dependencies to.

#### See

https://github.com/raineorshine/npm-check-updates#target

#### Default

```ts
"minor"
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.target`

***

### taskName?

> `readonly` `optional` **taskName**: `string`

The name of the task that will be created.
This will also be the workflow name.

#### Default

```ts
"upgrade".
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.taskName`

***

### types?

> `readonly` `optional` **types**: `DependencyType`[]

Specify which dependency types the upgrade should operate on.

#### Default

```ts
- All dependency types.
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.types`

***

### workflow?

> `readonly` `optional` **workflow**: `boolean`

Include a github workflow for creating PR's that upgrades the
required dependencies, either by manual dispatch, or by a schedule.

If this is `false`, only a local projen task is created, which can be executed manually to
upgrade the dependencies.

#### Default

```ts
- true for root projects, false for subprojects.
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.workflow`

***

### workflowOptions?

> `readonly` `optional` **workflowOptions**: `UpgradeDependenciesWorkflowOptions`

Options for the github workflow. Only applies if `workflow` is true.

#### Default

```ts
- default options.
```

#### Inherited from

`javascript.UpgradeDependenciesOptions.workflowOptions`
