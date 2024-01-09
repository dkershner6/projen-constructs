[projen-sonar](../README.md) / [Exports](../modules.md) / SonarPropertiesFile

# Class: SonarPropertiesFile

## Hierarchy

- `Component`

  ↳ **`SonarPropertiesFile`**

## Table of contents

### Constructors

- [constructor](SonarPropertiesFile.md#constructor)

### Properties

- [node](SonarPropertiesFile.md#node)
- [obj](SonarPropertiesFile.md#obj)
- [project](SonarPropertiesFile.md#project)
- [JAVASCRIPT\_LCOV\_REPORT\_PATHS\_FIELD\_NAME](SonarPropertiesFile.md#javascript_lcov_report_paths_field_name)
- [PROJECT\_KEY\_FIELD\_NAME](SonarPropertiesFile.md#project_key_field_name)

### Accessors

- [javascriptLcovReportPaths](SonarPropertiesFile.md#javascriptlcovreportpaths)
- [projectKey](SonarPropertiesFile.md#projectkey)

### Methods

- [addJavascriptLcovReportPaths](SonarPropertiesFile.md#addjavascriptlcovreportpaths)
- [postSynthesize](SonarPropertiesFile.md#postsynthesize)
- [preSynthesize](SonarPropertiesFile.md#presynthesize)
- [removeJavascriptLcovReportPaths](SonarPropertiesFile.md#removejavascriptlcovreportpaths)
- [synthesize](SonarPropertiesFile.md#synthesize)
- [toString](SonarPropertiesFile.md#tostring)
- [isComponent](SonarPropertiesFile.md#iscomponent)
- [isConstruct](SonarPropertiesFile.md#isconstruct)

## Constructors

### constructor

• **new SonarPropertiesFile**(`project`, `options`): [`SonarPropertiesFile`](SonarPropertiesFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `Project` |
| `options` | `IniFileOptions` |

#### Returns

[`SonarPropertiesFile`](SonarPropertiesFile.md)

#### Overrides

Component.constructor

## Properties

### node

• `Readonly` **node**: `Node`

The tree node.

#### Inherited from

Component.node

___

### obj

• `Readonly` **obj**: `Record`\<`string`, `string`\>

Escape Hatch

___

### project

• `Readonly` **project**: `Project`

#### Inherited from

Component.project

___

### JAVASCRIPT\_LCOV\_REPORT\_PATHS\_FIELD\_NAME

▪ `Static` `Readonly` **JAVASCRIPT\_LCOV\_REPORT\_PATHS\_FIELD\_NAME**: ``"sonar.javascript.lcov.reportPaths"``

___

### PROJECT\_KEY\_FIELD\_NAME

▪ `Static` `Readonly` **PROJECT\_KEY\_FIELD\_NAME**: ``"sonar.projectKey"``

## Accessors

### javascriptLcovReportPaths

• `get` **javascriptLcovReportPaths**(): `string`[]

#### Returns

`string`[]

___

### projectKey

• `get` **projectKey**(): `string`

Get projectKey for your Sonar project.

#### Returns

`string`

The project key from the sonar-project.properties file.

• `set` **projectKey**(`projectKey`): `void`

Set projectKey for your Sonar project.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projectKey` | `string` | The project key to add to the sonar-project.properties file. |

#### Returns

`void`

## Methods

### addJavascriptLcovReportPaths

▸ **addJavascriptLcovReportPaths**(`...paths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`void`

___

### postSynthesize

▸ **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

Component.postSynthesize

___

### preSynthesize

▸ **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

Component.preSynthesize

___

### removeJavascriptLcovReportPaths

▸ **removeJavascriptLcovReportPaths**(`...paths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`void`

___

### synthesize

▸ **synthesize**(): `void`

Synthesizes files to the project output directory.

#### Returns

`void`

#### Inherited from

Component.synthesize

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

Component.toString

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

Component.isComponent

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

Component.isConstruct
