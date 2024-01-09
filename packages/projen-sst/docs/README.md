projen-sst / [Exports](modules.md)

# projen-sst

Helpers for Projen projects that use SST.

## Docs

See [projen-sst API Docs](docs)

## Usage

Install the module:

```typescript
devDeps: ["projen-sst"]
```

Import into your code:

```typescript
import { WhateverConstruct } from "projen-sst";
```

# Contributing

Contributions welcome!

This monorepo uses the AWS PDK, which is just a wrapper around projen. To get started, in the root, run `pnpm i` to install everything.

Then, you can handle things normally with projen, or you can use the PDK CLI instead, which is essentially the same thing. You can install globally or use `npx pdk` as per normal.

## License

This project is licensed under the terms of the [MIT License](LICENSE.md).
