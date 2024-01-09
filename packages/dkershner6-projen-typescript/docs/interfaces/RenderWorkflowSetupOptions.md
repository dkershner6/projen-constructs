[dkershner6-projen-typescript](../README.md) / [Exports](../modules.md) / RenderWorkflowSetupOptions

# Interface: RenderWorkflowSetupOptions

Options for `renderWorkflowSetup()`.

## Hierarchy

- `RenderWorkflowSetupOptions`

  ↳ **`RenderWorkflowSetupOptions`**

## Table of contents

### Properties

- [installJobStepOverrides](RenderWorkflowSetupOptions.md#installjobstepoverrides)
- [installStepConfiguration](RenderWorkflowSetupOptions.md#installstepconfiguration)
- [mutable](RenderWorkflowSetupOptions.md#mutable)

## Properties

### installJobStepOverrides

• `Optional` `Readonly` **installJobStepOverrides**: `JobStep`

Overrides for the install step in the workflow setup.

**`Default`**

```ts
- No overrides of the install step
```

**`Example`**

```ts
- { workingDirectory: "rootproject-dir" } for subprojects installing from root.
```

**`Example`**

```ts
- { env: { NPM_TOKEN: "token" }} for installing from private npm registry.
```

___

### installStepConfiguration

• `Optional` `Readonly` **installStepConfiguration**: `JobStepConfiguration`

Configure the install step in the workflow setup.

**`Default`**

- `{ name: "Install dependencies" }`

**`Example`**

```ts
- { workingDirectory: "rootproject-dir" } for subprojects installing from root.
```

**`Example`**

```ts
- { env: { NPM_TOKEN: "token" }} for installing from private npm registry.
```

#### Inherited from

javascript.RenderWorkflowSetupOptions.installStepConfiguration

___

### mutable

• `Optional` `Readonly` **mutable**: `boolean`

Should the package lockfile be updated?

**`Default`**

```ts
false
```

#### Inherited from

javascript.RenderWorkflowSetupOptions.mutable
