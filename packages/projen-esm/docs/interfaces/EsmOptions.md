[projen-esm](../README.md) / [Exports](../modules.md) / EsmOptions

# Interface: EsmOptions

## Table of contents

### Properties

- [tsconfig](EsmOptions.md#tsconfig)

## Properties

### tsconfig

• `Optional` `Readonly` **tsconfig**: `TypescriptConfigOptions`

ESM App specific tsconfig options.
Due to conflicts between projen, things like the AWS CDK, and ESM tsconfig settings, a separate tsconfig is used for ESM Apps.
