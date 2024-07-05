[**dkershner6-projen-nx-monorepo**](../../../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../../../globals.md) / [NodePackageUtils](../README.md) / findNodePackage

# Function: findNodePackage()

> **findNodePackage**(`scope`, `recursive`?): `NodePackage`

**`Experimental`**

Find the nearest NodePackage within scope. This will traverse parent
tree until finds projen with NodePackage component, or will throw
error if none found. Use #tryFindNodePackage if you do not want to
throw error.

## Parameters

• **scope**: `Project`

The leaf project scope

• **recursive?**: `boolean` = `false`

Indicates if ancestral tree should be traversed

## Returns

`NodePackage`

The NodeProject component for scope

## Throws

Error if NodePackage not found in tree of scope
