[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / ProjectUtils

# Namespace: ProjectUtils

Utility for projen projects

## Table of contents

### Functions

- [isNamedInstanceOf](ProjectUtils.md#isnamedinstanceof)

## Functions

### isNamedInstanceOf

▸ **isNamedInstanceOf**\<`TParent`, `TChild`\>(`instance`, `clazz`): instance is TChild

Returns whether the given project is an instance of the given project class.
Uses the class name to perform this check, such that the check still passes for
classes imported from mismatching package versions.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParent` | extends `Project` \| `Component` |
| `TChild` | extends `Project` \| `Component` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `TParent` |
| `clazz` | (...`args`: `any`[]) => `TChild` |

#### Returns

instance is TChild
