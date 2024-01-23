[projen-graphql](../README.md) / [Exports](../modules.md) / GraphQLEslintOptions

# Interface: GraphQLEslintOptions

## Table of contents

### Properties

- [fileExtensions](GraphQLEslintOptions.md#fileextensions)
- [operationsRules](GraphQLEslintOptions.md#operationsrules)
- [taskArgs](GraphQLEslintOptions.md#taskargs)
- [tsOverrideConfig](GraphQLEslintOptions.md#tsoverrideconfig)

## Properties

### fileExtensions

• `Optional` **fileExtensions**: `string`[]

The file extensions to lint with graphql-eslint.

**`Default`**

```ts
- [".ts", ".tsx", ".graphql"]
```

___

### operationsRules

• `Optional` **operationsRules**: `boolean`

Whether or not to enable graphql-eslint operations rules in eslint.

**`Default`**

```ts
true
```

___

### taskArgs

• `Optional` **taskArgs**: `string`[]

Extra args to add to the ESLint task command

___

### tsOverrideConfig

• `Optional` **tsOverrideConfig**: `EslintOverride`

Override some settings for the ts file graphql-eslint processor.
