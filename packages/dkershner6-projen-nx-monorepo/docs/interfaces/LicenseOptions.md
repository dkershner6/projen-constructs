[dkershner6-projen-nx-monorepo](../README.md) / [Exports](../modules.md) / LicenseOptions

# Interface: LicenseOptions

License options.

## Table of contents

### Properties

- [copyrightOwner](LicenseOptions.md#copyrightowner)
- [disableDefaultLicenses](LicenseOptions.md#disabledefaultlicenses)
- [licenseText](LicenseOptions.md#licensetext)
- [spdx](LicenseOptions.md#spdx)

## Properties

### copyrightOwner

• `Optional` `Readonly` **copyrightOwner**: `string`

Copyright owner.

If the license text for the given spdx has $copyright_owner, this option must be specified.

___

### disableDefaultLicenses

• `Optional` `Readonly` **disableDefaultLicenses**: `boolean`

Whether to disable the generation of default licenses.

**`Default`**

```ts
false
```

___

### licenseText

• `Optional` `Readonly` **licenseText**: `string`

Arbitrary license text.

___

### spdx

• `Optional` `Readonly` **spdx**: `string`

License type (SPDX).

**`See`**

https://github.com/projen/projen/tree/main/license-text for list of supported licenses
