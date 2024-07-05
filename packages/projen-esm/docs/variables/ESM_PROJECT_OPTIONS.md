[**projen-esm**](../README.md) • **Docs**

***

[projen-esm](../globals.md) / ESM\_PROJECT\_OPTIONS

# Variable: ESM\_PROJECT\_OPTIONS

> `const` **ESM\_PROJECT\_OPTIONS**: `object`

Helps Jest and TSJest play nice with ESM.

## Type declaration

### jestOptions

> **jestOptions**: `object`

### jestOptions.jestConfig

> **jestConfig**: `object`

### jestOptions.jestConfig.extensionsToTreatAsEsm

> **extensionsToTreatAsEsm**: `string`[]

### jestOptions.jestConfig.moduleNameMapper

> **moduleNameMapper**: `object`

### jestOptions.jestConfig.moduleNameMapper.(.+)\.js

> **js**: `string` = `"$1"`

### jestOptions.jestConfig.transform

> **transform**: `object`

### jestOptions.jestConfig.transform.^.+\.\[tj\]sx?$

> **\[tj\]sx?$**: `Transform`

### tsJestOptions

> **tsJestOptions**: `object`

### tsJestOptions.transformOptions

> **transformOptions**: `object`

### tsJestOptions.transformOptions.isolatedModules

> **isolatedModules**: `boolean` = `true`

### tsJestOptions.transformOptions.useESM

> **useESM**: `boolean` = `true`

### tsJestOptions.transformPattern

> **transformPattern**: `string` = `TS_WITH_JS`

### tsconfig

> **tsconfig**: `object`

### tsconfig.compilerOptions

> **compilerOptions**: `object`

### tsconfig.compilerOptions.allowJs

> **allowJs**: `boolean` = `true`

### tsconfig.compilerOptions.module

> **module**: `string` = `"esnext"`

### tsconfig.compilerOptions.moduleResolution

> **moduleResolution**: `TypeScriptModuleResolution` = `TypeScriptModuleResolution.NODE`
