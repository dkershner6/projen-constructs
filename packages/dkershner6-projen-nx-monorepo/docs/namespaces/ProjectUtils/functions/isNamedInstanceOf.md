[**dkershner6-projen-nx-monorepo**](../../../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../../../globals.md) / [ProjectUtils](../README.md) / isNamedInstanceOf

# Function: isNamedInstanceOf()

> **isNamedInstanceOf**\<`TParent`, `TChild`\>(`instance`, `clazz`): `instance is TChild`

**`Experimental`**

Returns whether the given project is an instance of the given project class.
Uses the class name to perform this check, such that the check still passes for
classes imported from mismatching package versions.

## Type Parameters

• **TParent** *extends* `Project` \| `Component`

• **TChild** *extends* `Project` \| `Component`

## Parameters

• **instance**: `TParent`

• **clazz**

## Returns

`instance is TChild`
