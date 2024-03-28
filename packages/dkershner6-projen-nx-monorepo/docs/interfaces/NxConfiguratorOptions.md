[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / NxConfiguratorOptions

# Interface: NxConfiguratorOptions

NXConfigurator options.

## Table of contents

### Properties

- [defaultReleaseBranch](NxConfiguratorOptions.md#defaultreleasebranch)
- [licenseOptions](NxConfiguratorOptions.md#licenseoptions)

## Properties

### defaultReleaseBranch

• `Optional` `Readonly` **defaultReleaseBranch**: `string`

Branch that NX affected should run against.

___

### licenseOptions

• `Optional` `Readonly` **licenseOptions**: [`LicenseOptions`](LicenseOptions.md)

Default package license config.

If nothing is specified, all packages will default to Apache-2.0 (unless they have their own License component).
