[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / NodePackageUtils

# Namespace: NodePackageUtils

Utility functions for working with different Node package managers.

## Table of contents

### Namespaces

- [command](NodePackageUtils.command.md)

### Functions

- [findNodePackage](NodePackageUtils.md#findnodepackage)
- [getNodePackageManager](NodePackageUtils.md#getnodepackagemanager)
- [isNodeProject](NodePackageUtils.md#isnodeproject)
- [removeProjenScript](NodePackageUtils.md#removeprojenscript)
- [tryFindNodePackage](NodePackageUtils.md#tryfindnodepackage)

## Functions

### findNodePackage

▸ **findNodePackage**(`scope`, `recursive?`): `NodePackage`

Find the nearest NodePackage within scope. This will traverse parent
tree until finds projen with NodePackage component, or will throw
error if none found. Use #tryFindNodePackage if you do not want to
throw error.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `scope` | `Project` | `undefined` | The leaf project scope |
| `recursive?` | `boolean` | `false` | Indicates if ancestral tree should be traversed |

#### Returns

`NodePackage`

The NodeProject component for scope

**`Throws`**

Error if NodePackage not found in tree of scope

___

### getNodePackageManager

▸ **getNodePackageManager**(`project`, `defaultPackageManager?`): `NodePackageManager`

Finds the NodePackageManager for the given project or returns a default type.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `project` | `Project` | `undefined` | a project to retrieve the package manager for. |
| `defaultPackageManager` | `NodePackageManager` | `NodePackageManager.YARN` | - |

#### Returns

`NodePackageManager`

NodePackageManager

___

### isNodeProject

▸ **isNodeProject**(`project`): project is NodeProject

Indicates if project is a node based project

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `Project` |

#### Returns

project is NodeProject

___

### removeProjenScript

▸ **removeProjenScript**(`project`): `void`

Remove the "projen" script from package.json scripts, which causes recursive projen execution
for other scripts in format of "yarn projen [command]".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | `NodeProject` | NodeProject to remove "projen" script |

#### Returns

`void`

**`See`**

https://github.com/projen/projen/blob/37983be94b37ee839ef3337a1b24b014a6c29f4f/src/javascript/node-project.ts#L512

___

### tryFindNodePackage

▸ **tryFindNodePackage**(`scope`, `recursive?`): `NodePackage` \| `undefined`

Try to find the nearest NodePackage within scope. This will traverse parent
tree until finds projen with NodePackage component.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `scope` | `Project` | `undefined` | The leaf project scope |
| `recursive?` | `boolean` | `false` | Indicates if ancestral tree should be traversed |

#### Returns

`NodePackage` \| `undefined`

The NodeProject component for scope, or undefined if no projects are node based.
