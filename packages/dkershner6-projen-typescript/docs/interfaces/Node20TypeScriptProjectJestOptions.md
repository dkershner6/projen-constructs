[dkershner6-projen-typescript](../README.md) / [Exports](../modules.md) / Node20TypeScriptProjectJestOptions

# Interface: Node20TypeScriptProjectJestOptions

## Hierarchy

- `JestOptions`

- [`JestTransformerOptions`](JestTransformerOptions.md)

  ↳ **`Node20TypeScriptProjectJestOptions`**

## Table of contents

### Properties

- [configFilePath](Node20TypeScriptProjectJestOptions.md#configfilepath)
- [coverage](Node20TypeScriptProjectJestOptions.md#coverage)
- [coverageText](Node20TypeScriptProjectJestOptions.md#coveragetext)
- [extraCliOptions](Node20TypeScriptProjectJestOptions.md#extraclioptions)
- [ignorePatterns](Node20TypeScriptProjectJestOptions.md#ignorepatterns)
- [jestConfig](Node20TypeScriptProjectJestOptions.md#jestconfig)
- [jestVersion](Node20TypeScriptProjectJestOptions.md#jestversion)
- [junitReporting](Node20TypeScriptProjectJestOptions.md#junitreporting)
- [modulesToTransform](Node20TypeScriptProjectJestOptions.md#modulestotransform)
- [preserveDefaultReporters](Node20TypeScriptProjectJestOptions.md#preservedefaultreporters)
- [updateSnapshot](Node20TypeScriptProjectJestOptions.md#updatesnapshot)

## Properties

### configFilePath

• `Optional` `Readonly` **configFilePath**: `string`

Path to JSON config file for Jest

**`Default`**

```ts
- No separate config file, jest settings are stored in package.json
```

#### Inherited from

JestOptions.configFilePath

___

### coverage

• `Optional` `Readonly` **coverage**: `boolean`

Collect coverage. Deprecated

**`Default`**

```ts
true
```

**`Deprecated`**

use jestConfig.collectCoverage

#### Inherited from

JestOptions.coverage

___

### coverageText

• `Optional` `Readonly` **coverageText**: `boolean`

Include the `text` coverage reporter, which means that coverage summary is printed
at the end of the jest execution.

**`Default`**

```ts
true
```

#### Inherited from

JestOptions.coverageText

___

### extraCliOptions

• `Optional` `Readonly` **extraCliOptions**: `string`[]

Additional options to pass to the Jest CLI invocation

**`Default`**

```ts
- no extra options
```

#### Inherited from

JestOptions.extraCliOptions

___

### ignorePatterns

• `Optional` `Readonly` **ignorePatterns**: `string`[]

Defines `testPathIgnorePatterns` and `coveragePathIgnorePatterns`

**`Default`**

```ts
["/node_modules/"]
```

**`Deprecated`**

use jestConfig.coveragePathIgnorePatterns or jestConfig.testPathIgnorePatterns respectively

#### Inherited from

JestOptions.ignorePatterns

___

### jestConfig

• `Optional` `Readonly` **jestConfig**: `JestConfigOptions`

Jest configuration.

**`Default`**

```ts
- default jest configuration
```

#### Inherited from

JestOptions.jestConfig

___

### jestVersion

• `Optional` `Readonly` **jestVersion**: `string`

The version of jest to use.

Note that same version is used as version of `@types/jest` and `ts-jest` (if Typescript in use), so given version should work also for those.

**`Default`**

```ts
- installs the latest jest version
```

#### Inherited from

JestOptions.jestVersion

___

### junitReporting

• `Optional` `Readonly` **junitReporting**: `boolean`

Result processing with jest-junit.

Output directory is `test-reports/`.

**`Default`**

```ts
true
```

#### Inherited from

JestOptions.junitReporting

___

### modulesToTransform

• `Optional` `Readonly` **modulesToTransform**: `string`[]

Additional modules for jest to transform, typically ESM modules.

**`Default`**

```ts
- A list of known ESM modules commonly used in projects
```

#### Inherited from

[JestTransformerOptions](JestTransformerOptions.md).[modulesToTransform](JestTransformerOptions.md#modulestotransform)

___

### preserveDefaultReporters

• `Optional` `Readonly` **preserveDefaultReporters**: `boolean`

Preserve the default Jest reporter when additional reporters are added.

**`Default`**

```ts
true
```

#### Inherited from

JestOptions.preserveDefaultReporters

___

### updateSnapshot

• `Optional` `Readonly` **updateSnapshot**: `UpdateSnapshot`

Whether to update snapshots in task "test" (which is executed in task "build" and build workflows),
or create a separate task "test:update" for updating snapshots.

**`Default`**

```ts
- ALWAYS
```

#### Inherited from

JestOptions.updateSnapshot
