[**projen-sonar**](../README.md) • **Docs**

***

[projen-sonar](../globals.md) / SonarPropertiesFile

# Class: SonarPropertiesFile

## Extends

- `Component`

## Constructors

### new SonarPropertiesFile()

> **new SonarPropertiesFile**(`project`, `options`): [`SonarPropertiesFile`](SonarPropertiesFile.md)

#### Parameters

• **project**: `Project`

• **options**: `IniFileOptions`

#### Returns

[`SonarPropertiesFile`](SonarPropertiesFile.md)

#### Overrides

`Component.constructor`

## Properties

### node

> `readonly` **node**: `Node`

The tree node.

#### Inherited from

`Component.node`

***

### obj

> `readonly` **obj**: `Record`\<`string`, `string`\>

Escape Hatch

***

### project

> `readonly` **project**: `Project`

#### Inherited from

`Component.project`

***

### JAVASCRIPT\_LCOV\_REPORT\_PATHS\_FIELD\_NAME

> `readonly` `static` **JAVASCRIPT\_LCOV\_REPORT\_PATHS\_FIELD\_NAME**: `"sonar.javascript.lcov.reportPaths"` = `"sonar.javascript.lcov.reportPaths"`

***

### PROJECT\_KEY\_FIELD\_NAME

> `readonly` `static` **PROJECT\_KEY\_FIELD\_NAME**: `"sonar.projectKey"` = `"sonar.projectKey"`

## Accessors

### javascriptLcovReportPaths

> `get` **javascriptLcovReportPaths**(): `string`[]

#### Returns

`string`[]

***

### projectKey

> `get` **projectKey**(): `string`

Get projectKey for your Sonar project.

> `set` **projectKey**(`projectKey`): `void`

Set projectKey for your Sonar project.

#### Parameters

• **projectKey**: `string`

The project key to add to the sonar-project.properties file.

#### Returns

`string`

The project key from the sonar-project.properties file.

## Methods

### addJavascriptLcovReportPaths()

> **addJavascriptLcovReportPaths**(...`paths`): `void`

#### Parameters

• ...**paths**: `string`[]

#### Returns

`void`

***

### postSynthesize()

> **postSynthesize**(): `void`

Called after synthesis. Order is *not* guaranteed.

#### Returns

`void`

#### Inherited from

`Component.postSynthesize`

***

### preSynthesize()

> **preSynthesize**(): `void`

Called before synthesis.

#### Returns

`void`

#### Inherited from

`Component.preSynthesize`

***

### removeJavascriptLcovReportPaths()

> **removeJavascriptLcovReportPaths**(...`paths`): `void`

#### Parameters

• ...**paths**: `string`[]

#### Returns

`void`

***

### synthesize()

> **synthesize**(): `void`

Synthesizes files to the project output directory.

#### Returns

`void`

#### Inherited from

`Component.synthesize`

***

### toString()

> **toString**(): `string`

Returns a string representation of this construct.

#### Returns

`string`

#### Inherited from

`Component.toString`

***

### isComponent()

> `static` **isComponent**(`x`): `x is Component`

Test whether the given construct is a component.

#### Parameters

• **x**: `any`

#### Returns

`x is Component`

#### Inherited from

`Component.isComponent`

***

### isConstruct()

> `static` **isConstruct**(`x`): `x is Construct`

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

• **x**: `any`

Any object

#### Returns

`x is Construct`

true if `x` is an object created from a class which extends `Construct`.

#### Inherited from

`Component.isConstruct`
