[dkershner6-projen-typescript](README.md) / Exports

# dkershner6-projen-typescript

## Table of contents

### Enumerations

- [DKTaskName](enums/DKTaskName.md)

### Classes

- [DKBugFixes](classes/DKBugFixes.md)
- [DKJest](classes/DKJest.md)
- [DKTasks](classes/DKTasks.md)
- [EslintConfig](classes/EslintConfig.md)
- [Node20TypeScriptProject](classes/Node20TypeScriptProject.md)

### Interfaces

- [Node20TypeScriptExtraJestOptions](interfaces/Node20TypeScriptExtraJestOptions.md)
- [Node20TypeScriptProjectJestOptions](interfaces/Node20TypeScriptProjectJestOptions.md)
- [Node20TypeScriptProjectOptions](interfaces/Node20TypeScriptProjectOptions.md)

### Variables

- [DEV\_FILE\_PATTERNS](modules.md#dev_file_patterns)
- [PUBLISH\_FILE\_PATTERNS](modules.md#publish_file_patterns)
- [RECOMMENDED\_ESLINT\_CONFIG](modules.md#recommended_eslint_config)
- [RECOMMENDED\_JEST\_CONFIG](modules.md#recommended_jest_config)
- [RECOMMENDED\_NODE\_20](modules.md#recommended_node_20)
- [RECOMMENDED\_NODE\_20\_PROJECT\_OPTIONS](modules.md#recommended_node_20_project_options)
- [RECOMMENDED\_PNPM\_8](modules.md#recommended_pnpm_8)
- [RECOMMENDED\_PRETTIER\_CONFIG](modules.md#recommended_prettier_config)
- [RECOMMENDED\_TSCONFIG\_COMPILER\_OPTIONS](modules.md#recommended_tsconfig_compiler_options)
- [RECOMMENDED\_TSCONFIG\_NODE\_20](modules.md#recommended_tsconfig_node_20)
- [TEST\_FILE\_SUFFIXES](modules.md#test_file_suffixes)
- [TEST\_FOLDERS](modules.md#test_folders)

### Functions

- [buildJestTransformIgnorePatterns](modules.md#buildjesttransformignorepatterns)

## Variables

### DEV\_FILE\_PATTERNS

• `Const` **DEV\_FILE\_PATTERNS**: `string`[]

___

### PUBLISH\_FILE\_PATTERNS

• `Const` **PUBLISH\_FILE\_PATTERNS**: `string`[]

___

### RECOMMENDED\_ESLINT\_CONFIG

• `Const` **RECOMMENDED\_ESLINT\_CONFIG**: `Partial`\<`TypeScriptProjectOptions`\>

___

### RECOMMENDED\_JEST\_CONFIG

• `Const` **RECOMMENDED\_JEST\_CONFIG**: `Partial`\<`TypeScriptProjectOptions`\>

___

### RECOMMENDED\_NODE\_20

• `Const` **RECOMMENDED\_NODE\_20**: `Partial`\<`TypeScriptProjectOptions`\>

___

### RECOMMENDED\_NODE\_20\_PROJECT\_OPTIONS

• `Const` **RECOMMENDED\_NODE\_20\_PROJECT\_OPTIONS**: `Omit`\<`ProjectOptions` & `NodeProjectOptions` & `TypeScriptProjectOptions`, ``"defaultReleaseBranch"`` \| ``"name"``\>

___

### RECOMMENDED\_PNPM\_8

• `Const` **RECOMMENDED\_PNPM\_8**: `Partial`\<`TypeScriptProjectOptions`\>

___

### RECOMMENDED\_PRETTIER\_CONFIG

• `Const` **RECOMMENDED\_PRETTIER\_CONFIG**: `Partial`\<`NodeProjectOptions`\>

___

### RECOMMENDED\_TSCONFIG\_COMPILER\_OPTIONS

• `Const` **RECOMMENDED\_TSCONFIG\_COMPILER\_OPTIONS**: `TypeScriptCompilerOptions`

___

### RECOMMENDED\_TSCONFIG\_NODE\_20

• `Const` **RECOMMENDED\_TSCONFIG\_NODE\_20**: `Partial`\<`TypeScriptProjectOptions`\>

___

### TEST\_FILE\_SUFFIXES

• `Const` **TEST\_FILE\_SUFFIXES**: `string`[]

___

### TEST\_FOLDERS

• `Const` **TEST\_FOLDERS**: `string`[]

## Functions

### buildJestTransformIgnorePatterns

▸ **buildJestTransformIgnorePatterns**(`nodeModulesToTransform?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeModulesToTransform?` | `string`[] |

#### Returns

`string`[]
