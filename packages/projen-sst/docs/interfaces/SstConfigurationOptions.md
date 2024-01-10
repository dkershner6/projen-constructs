[projen-sst](../README.md) / [Exports](../modules.md) / SstConfigurationOptions

# Interface: SstConfigurationOptions

## Hierarchy

- **`SstConfigurationOptions`**

  ↳ [`SstTypescriptAppOptions`](SstTypescriptAppOptions.md)

## Table of contents

### Properties

- [branchNameToSstStageMap](SstConfigurationOptions.md#branchnametosststagemap)
- [sstOut](SstConfigurationOptions.md#sstout)
- [sstVersion](SstConfigurationOptions.md#sstversion)

## Properties

### branchNameToSstStageMap

• `Optional` `Readonly` **branchNameToSstStageMap**: `Record`\<`string`, `string`\>

Maps branchNames to SST Stages.

**`Default`**

```ts
- The branchName will be used as the stage name.
```

___

### sstOut

• `Optional` **sstOut**: `string`

Where to build .sst code to.

**`Default`**

```ts
".sst/dist/"
```

___

### sstVersion

• `Optional` **sstVersion**: `string`

The version of SST to use.

**`Default`**

```ts
"2.39.2"
```
