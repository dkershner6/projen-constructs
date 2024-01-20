[projen-graphql](../README.md) / [Exports](../modules.md) / GraphQLConfigOptions

# Interface: GraphQLConfigOptions

## Hierarchy

- `Omit`\<`JsonFileOptions`, ``"obj"``\>

  ↳ **`GraphQLConfigOptions`**

## Table of contents

### Properties

- [allowComments](GraphQLConfigOptions.md#allowcomments)
- [committed](GraphQLConfigOptions.md#committed)
- [config](GraphQLConfigOptions.md#config)
- [editGitignore](GraphQLConfigOptions.md#editgitignore)
- [executable](GraphQLConfigOptions.md#executable)
- [marker](GraphQLConfigOptions.md#marker)
- [newline](GraphQLConfigOptions.md#newline)
- [omitEmpty](GraphQLConfigOptions.md#omitempty)
- [readonly](GraphQLConfigOptions.md#readonly)

## Properties

### allowComments

• `Optional` `Readonly` **allowComments**: `boolean`

Allow the use of comments in this file.

**`Default`**

```ts
- false for .json files, true for .json5 and .jsonc files
```

#### Inherited from

Omit.allowComments

___

### committed

• `Optional` `Readonly` **committed**: `boolean`

Indicates whether this file should be committed to git or ignored. By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

**`Default`**

```ts
true
```

#### Inherited from

Omit.committed

___

### config

• `Readonly` **config**: `IGraphQLConfig`

___

### editGitignore

• `Optional` `Readonly` **editGitignore**: `boolean`

Update the project's .gitignore file

**`Default`**

```ts
true
```

#### Inherited from

Omit.editGitignore

___

### executable

• `Optional` `Readonly` **executable**: `boolean`

Whether the generated file should be marked as executable.

**`Default`**

```ts
false
```

#### Inherited from

Omit.executable

___

### marker

• `Optional` `Readonly` **marker**: `boolean`

Adds the projen marker to the file.

**`Default`**

```ts
- marker will be included as long as the project is not ejected
```

#### Inherited from

Omit.marker

___

### newline

• `Optional` `Readonly` **newline**: `boolean`

Adds a newline at the end of the file.

**`Default`**

```ts
true
```

#### Inherited from

Omit.newline

___

### omitEmpty

• `Optional` `Readonly` **omitEmpty**: `boolean`

Omits empty objects and arrays.

**`Default`**

```ts
false
```

#### Inherited from

Omit.omitEmpty

___

### readonly

• `Optional` `Readonly` **readonly**: `boolean`

Whether the generated file should be readonly.

**`Default`**

```ts
true
```

#### Inherited from

Omit.readonly
