[**projen-graphql**](../README.md) • **Docs**

***

[projen-graphql](../globals.md) / GraphQLConfigOptions

# Interface: GraphQLConfigOptions

## Extends

- `Omit`\<`JsonFileOptions`, `"obj"`\>

## Properties

### allowComments?

> `readonly` `optional` **allowComments**: `boolean`

Allow the use of comments in this file.

#### Default

```ts
- false for .json files, true for .json5 and .jsonc files
```

#### Inherited from

`Omit.allowComments`

***

### committed?

> `readonly` `optional` **committed**: `boolean`

Indicates whether this file should be committed to git or ignored. By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

#### Default

```ts
true
```

#### Inherited from

`Omit.committed`

***

### config

> `readonly` **config**: `IGraphQLConfig`

***

### editGitignore?

> `readonly` `optional` **editGitignore**: `boolean`

Update the project's .gitignore file

#### Default

```ts
true
```

#### Inherited from

`Omit.editGitignore`

***

### executable?

> `readonly` `optional` **executable**: `boolean`

Whether the generated file should be marked as executable.

#### Default

```ts
false
```

#### Inherited from

`Omit.executable`

***

### marker?

> `readonly` `optional` **marker**: `boolean`

Adds the projen marker to the file.

#### Default

```ts
- marker will be included as long as the project is not ejected
```

#### Inherited from

`Omit.marker`

***

### newline?

> `readonly` `optional` **newline**: `boolean`

Adds a newline at the end of the file.

#### Default

```ts
true
```

#### Inherited from

`Omit.newline`

***

### omitEmpty?

> `readonly` `optional` **omitEmpty**: `boolean`

Omits empty objects and arrays.

#### Default

```ts
false
```

#### Inherited from

`Omit.omitEmpty`

***

### readonly?

> `readonly` `optional` **readonly**: `boolean`

Whether the generated file should be readonly.

#### Default

```ts
true
```

#### Inherited from

`Omit.readonly`
