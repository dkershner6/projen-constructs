projen-esm / [Exports](modules.md)

# projen-esm

Helpers for Projen projects that use ESM.

## Docs

See [projen-esm API Docs](docs/modules.md)

## Usage

Install the module:

```typescript
devDeps: ["projen-esm"]
```

Import into your code:

```typescript
import { WhateverConstruct } from "projen-esm";
```

# Contributing

Contributions welcome!

This monorepo uses the AWS PDK, which is just a wrapper around projen. To get started, in the root, run `pnpm i` to install everything.

Then, you can handle things normally with projen, or you can use the PDK CLI instead, which is essentially the same thing. You can install globally or use `npx pdk` as per normal.

## License

This project is licensed under the terms of the [MIT License](LICENSE.md).
