[projen-esm](README.md) / Exports

# projen-esm

## Table of contents

### Classes

- [EsmLibrary](classes/EsmLibrary.md)

### Interfaces

- [EsmLibraryOptions](interfaces/EsmLibraryOptions.md)

### Variables

- [ESM\_PROJECT\_OPTIONS](modules.md#esm_project_options)
- [TEST\_BABEL\_CONFIG\_FILE](modules.md#test_babel_config_file)
- [TS\_WITH\_JS](modules.md#ts_with_js)

## Variables

### ESM\_PROJECT\_OPTIONS

• `Const` **ESM\_PROJECT\_OPTIONS**: `Object`

Helps Jest and TSJest play nice with ESM.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `jestOptions` | \{ `jestConfig`: \{ `extensionsToTreatAsEsm`: `string`[] ; `moduleNameMapper`: \{ `(.+)\.js`: `string` = "$1" } ; `transform`: \{ `^.+\.[tj]sx?$`: `Transform`  }  }  } |
| `jestOptions.jestConfig` | \{ `extensionsToTreatAsEsm`: `string`[] ; `moduleNameMapper`: \{ `(.+)\.js`: `string` = "$1" } ; `transform`: \{ `^.+\.[tj]sx?$`: `Transform`  }  } |
| `jestOptions.jestConfig.extensionsToTreatAsEsm` | `string`[] |
| `jestOptions.jestConfig.moduleNameMapper` | \{ `(.+)\.js`: `string` = "$1" } |
| jestOptions.jestConfig.moduleNameMapper.(.+)\.js | `string` |
| `jestOptions.jestConfig.transform` | \{ `^.+\.[tj]sx?$`: `Transform`  } |
| jestOptions.jestConfig.transform.^.+\.[tj]sx?$ | `Transform` |
| `tsJestOptions` | \{ `transformOptions`: \{ `isolatedModules`: `boolean` = true; `useESM`: `boolean` = true } ; `transformPattern`: `string` = TS\_WITH\_JS } |
| `tsJestOptions.transformOptions` | \{ `isolatedModules`: `boolean` = true; `useESM`: `boolean` = true } |
| `tsJestOptions.transformOptions.isolatedModules` | `boolean` |
| `tsJestOptions.transformOptions.useESM` | `boolean` |
| `tsJestOptions.transformPattern` | `string` |
| `tsconfig` | \{ `compilerOptions`: \{ `allowJs`: `boolean` = true; `module`: `string` = "esnext"; `moduleResolution`: `TypeScriptModuleResolution` = TypeScriptModuleResolution.NODE }  } |
| `tsconfig.compilerOptions` | \{ `allowJs`: `boolean` = true; `module`: `string` = "esnext"; `moduleResolution`: `TypeScriptModuleResolution` = TypeScriptModuleResolution.NODE } |
| `tsconfig.compilerOptions.allowJs` | `boolean` |
| `tsconfig.compilerOptions.module` | `string` |
| `tsconfig.compilerOptions.moduleResolution` | `TypeScriptModuleResolution` |

___

### TEST\_BABEL\_CONFIG\_FILE

• `Const` **TEST\_BABEL\_CONFIG\_FILE**: ``"babel.test.config.json"``

___

### TS\_WITH\_JS

• `Const` **TS\_WITH\_JS**: ``"^.+\\.[tj]sx?$"``
