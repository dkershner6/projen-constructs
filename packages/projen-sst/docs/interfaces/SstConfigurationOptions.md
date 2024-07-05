[**projen-sst**](../README.md) • **Docs**

***

[projen-sst](../globals.md) / SstConfigurationOptions

# Interface: SstConfigurationOptions

## Extended by

- [`SstTypescriptAppOptions`](SstTypescriptAppOptions.md)

## Properties

### branchNameToSstStageMap?

> `readonly` `optional` **branchNameToSstStageMap**: `Record`\<`string`, `string`\>

Maps branchNames to SST Stages.

#### Default

```ts
- The branchName will be used as the stage name.
```

***

### sstOut?

> `optional` **sstOut**: `string`

Where to build .sst code to.

#### Default

```ts
".sst/dist/"
```

***

### sstVersion?

> `optional` **sstVersion**: `string`

The version of SST to use.

#### Default

```ts
"2.39.2"
```
