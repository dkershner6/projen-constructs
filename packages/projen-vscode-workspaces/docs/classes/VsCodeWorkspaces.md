[projen-vscode-workspaces](../README.md) / [Exports](../modules.md) / VsCodeWorkspaces

# Class: VsCodeWorkspaces

## Hierarchy

- `JsonFile`

  ↳ **`VsCodeWorkspaces`**

## Table of contents

### Constructors

- [constructor](VsCodeWorkspaces.md#constructor)

### Properties

- [absolutePath](VsCodeWorkspaces.md#absolutepath)
- [executable](VsCodeWorkspaces.md#executable)
- [node](VsCodeWorkspaces.md#node)
- [omitEmpty](VsCodeWorkspaces.md#omitempty)
- [path](VsCodeWorkspaces.md#path)
- [project](VsCodeWorkspaces.md#project)
- [readonly](VsCodeWorkspaces.md#readonly)
- [supportsComments](VsCodeWorkspaces.md#supportscomments)

### Accessors

- [changed](VsCodeWorkspaces.md#changed)
- [marker](VsCodeWorkspaces.md#marker)

### Methods

- [addDeletionOverride](VsCodeWorkspaces.md#adddeletionoverride)
- [addOverride](VsCodeWorkspaces.md#addoverride)
- [addToArray](VsCodeWorkspaces.md#addtoarray)
- [patch](VsCodeWorkspaces.md#patch)
- [postSynthesize](VsCodeWorkspaces.md#postsynthesize)
- [preSynthesize](VsCodeWorkspaces.md#presynthesize)
- [synthesize](VsCodeWorkspaces.md#synthesize)
- [synthesizeContent](VsCodeWorkspaces.md#synthesizecontent)
- [toString](VsCodeWorkspaces.md#tostring)
- [isComponent](VsCodeWorkspaces.md#iscomponent)
- [isConstruct](VsCodeWorkspaces.md#isconstruct)

## Constructors

### constructor

• **new VsCodeWorkspaces**(`rootProject`, `options`): [`VsCodeWorkspaces`](VsCodeWorkspaces.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootProject` | `Construct` |
| `options` | [`VsCodeWorkspacesOptions`](../interfaces/VsCodeWorkspacesOptions.md) |

#### Returns

[`VsCodeWorkspaces`](VsCodeWorkspaces.md)

#### Overrides

JsonFile.constructor

## Properties

### absolutePath

• `Readonly` **absolutePath**: `string`

The absolute path of this file.

#### Inherited from

JsonFile.absolutePath

___

### executable

• **executable**: `boolean`

Indicates if the file should be marked as executable

#### Inherited from

JsonFile.executable

___

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

JsonFile.node

___

### omitEmpty

• `Readonly` **omitEmpty**: `boolean`

Indicates if empty objects and arrays are omitted from the output object.

#### Inherited from

JsonFile.omitEmpty

___

### path

• `Readonly` **path**: `string`

The file path, relative to the project's outdir.

#### Inherited from

JsonFile.path

___

### project

• `Readonly` **project**: `Project`

#### Inherited from

JsonFile.project

___

### readonly

• **readonly**: `boolean`

Indicates if the file should be read-only or read-write.

#### Inherited from

JsonFile.readonly

___

### supportsComments

• `Readonly` **supportsComments**: `boolean`

#### Inherited from

JsonFile.supportsComments

## Accessors

### changed

• `get` **changed**(): `undefined` \| `boolean`

Indicates if the file has been changed during synthesis. This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

#### Returns

`undefined` \| `boolean`

#### Inherited from

JsonFile.changed

___

### marker

• `get` **marker**(): `undefined` \| `string`

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

#### Returns

`undefined` \| `string`

#### Inherited from

JsonFile.marker

## Methods

### addDeletionOverride

▸ **addDeletionOverride**(`path`): `void`

Syntactic sugar for `addOverride(path, undefined)`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path of the value to delete |

#### Returns

`void`

#### Inherited from

JsonFile.addDeletionOverride

___

### addOverride

▸ **addOverride**(`path`, `value`): `void`

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path of the property, you can use dot notation to override values in complex types. Any intermediate keys will be created as needed. |
| `value` | `any` | The value. Could be primitive or complex. |

#### Returns

`void`

#### Inherited from

JsonFile.addOverride

___

### addToArray

▸ **addToArray**(`path`, `...values`): `void`

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2019", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path of the property, you can use dot notation to att to arrays in complex types. Any intermediate keys will be created as needed. |
| `...values` | `any` | The values to add. Could be primitive or complex. |

#### Returns

`void`

#### Inherited from

JsonFile.addToArray

___

### patch

▸ **patch**(`...patches`): `void`

Applies an RFC 6902 JSON-patch to the synthesized object file.
See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...patches` | `JsonPatch`[] | The patch operations to apply |

#### Returns

`void`

#### Inherited from

JsonFile.patch

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

JsonFile.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

JsonFile.preSynthesize

___

### synthesize

▸ **synthesize**(): `void`

Writes the file to the project's output directory

#### Returns

`void`

#### Inherited from

JsonFile.synthesize

___

### synthesizeContent

▸ **synthesizeContent**(`resolver`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolver` | `IResolver` |

#### Returns

`undefined` \| `string`

#### Inherited from

JsonFile.synthesizeContent

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

JsonFile.toString

___

### isComponent

▸ **isComponent**(`x`): x is Component

Test whether the given construct is a component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

x is Component

#### Inherited from

JsonFile.isComponent

___

### isConstruct

▸ **isConstruct**(`x`): x is Construct

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `any` | Any object |

#### Returns

x is Construct

true if `x` is an object created from a class which extends `Construct`.

#### Inherited from

JsonFile.isConstruct
