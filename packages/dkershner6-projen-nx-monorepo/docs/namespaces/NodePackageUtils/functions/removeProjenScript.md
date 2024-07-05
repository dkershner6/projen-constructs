[**dkershner6-projen-nx-monorepo**](../../../README.md) • **Docs**

***

[dkershner6-projen-nx-monorepo](../../../globals.md) / [NodePackageUtils](../README.md) / removeProjenScript

# Function: removeProjenScript()

> **removeProjenScript**(`project`): `void`

**`Experimental`**

Remove the "projen" script from package.json scripts, which causes recursive projen execution
for other scripts in format of "yarn projen [command]".

## Parameters

• **project**: `NodeProject`

NodeProject to remove "projen" script

## Returns

`void`

## See

https://github.com/projen/projen/blob/37983be94b37ee839ef3337a1b24b014a6c29f4f/src/javascript/node-project.ts#L512
