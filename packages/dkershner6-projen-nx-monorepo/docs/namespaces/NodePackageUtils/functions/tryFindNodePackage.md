[**dkershner6-projen-nx-monorepo**](../../../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../../../globals.md) / [NodePackageUtils](../README.md) / tryFindNodePackage

# Function: tryFindNodePackage()

> **tryFindNodePackage**(`scope`, `recursive`?): `NodePackage` \| `undefined`

**`Experimental`**

Try to find the nearest NodePackage within scope. This will traverse parent
tree until finds projen with NodePackage component.

## Parameters

• **scope**: `Project`

The leaf project scope

• **recursive?**: `boolean` = `false`

Indicates if ancestral tree should be traversed

## Returns

`NodePackage` \| `undefined`

The NodeProject component for scope, or undefined if no projects are node based.
