[**dkershner6-projen-typescript**](../README.md) • **Docs**

***

[dkershner6-projen-typescript](../globals.md) / Node20TypeScriptProjectJestOptions

# Interface: Node20TypeScriptProjectJestOptions

## Extends

- `JestOptions`.[`JestTransformerOptions`](JestTransformerOptions.md)

## Properties

### configFilePath?

> `readonly` `optional` **configFilePath**: `string`

Path to JSON config file for Jest

#### Default

```ts
- No separate config file, jest settings are stored in package.json
```

#### Inherited from

`JestOptions.configFilePath`

***

### ~~coverage?~~

> `readonly` `optional` **coverage**: `boolean`

Collect coverage. Deprecated

#### Default

```ts
true
```

#### Deprecated

use jestConfig.collectCoverage

#### Inherited from

`JestOptions.coverage`

***

### coverageText?

> `readonly` `optional` **coverageText**: `boolean`

Include the `text` coverage reporter, which means that coverage summary is printed
at the end of the jest execution.

#### Default

```ts
true
```

#### Inherited from

`JestOptions.coverageText`

***

### extraCliOptions?

> `readonly` `optional` **extraCliOptions**: `string`[]

Additional options to pass to the Jest CLI invocation

#### Default

```ts
- no extra options
```

#### Inherited from

`JestOptions.extraCliOptions`

***

### ~~ignorePatterns?~~

> `readonly` `optional` **ignorePatterns**: `string`[]

Defines `testPathIgnorePatterns` and `coveragePathIgnorePatterns`

#### Default

```ts
["/node_modules/"]
```

#### Deprecated

use jestConfig.coveragePathIgnorePatterns or jestConfig.testPathIgnorePatterns respectively

#### Inherited from

`JestOptions.ignorePatterns`

***

### jestConfig?

> `readonly` `optional` **jestConfig**: `JestConfigOptions`

Jest configuration.

#### Default

```ts
- default jest configuration
```

#### Inherited from

`JestOptions.jestConfig`

***

### jestVersion?

> `readonly` `optional` **jestVersion**: `string`

The version of jest to use.

Note that same version is used as version of `@types/jest` and `ts-jest` (if Typescript in use), so given version should work also for those.

#### Default

```ts
- installs the latest jest version
```

#### Inherited from

`JestOptions.jestVersion`

***

### junitReporting?

> `readonly` `optional` **junitReporting**: `boolean`

Result processing with jest-junit.

Output directory is `test-reports/`.

#### Default

```ts
true
```

#### Inherited from

`JestOptions.junitReporting`

***

### modulesToTransform?

> `readonly` `optional` **modulesToTransform**: `string`[]

Additional modules for jest to transform, typically ESM modules.

#### Default

```ts
- A list of known ESM modules commonly used in projects
```

#### Inherited from

[`JestTransformerOptions`](JestTransformerOptions.md).[`modulesToTransform`](JestTransformerOptions.md#modulestotransform)

***

### preserveDefaultReporters?

> `readonly` `optional` **preserveDefaultReporters**: `boolean`

Preserve the default Jest reporter when additional reporters are added.

#### Default

```ts
true
```

#### Inherited from

`JestOptions.preserveDefaultReporters`

***

### updateSnapshot?

> `readonly` `optional` **updateSnapshot**: `UpdateSnapshot`

Whether to update snapshots in task "test" (which is executed in task "build" and build workflows),
or create a separate task "test:update" for updating snapshots.

#### Default

```ts
- ALWAYS
```

#### Inherited from

`JestOptions.updateSnapshot`
