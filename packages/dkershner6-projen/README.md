# dkershner6-projen

DKershner's preferred configs for Projen projects.

## Docs

See [dkershner6-projen API Docs](https://dkershner6.github.io/projen-constructs/dkershner6-projen)

## Usage

Install the module:

```typescript
devDeps: ["dkershner6-projen"]
```

Import into your code:

```typescript
import { WhateverConstruct } from "dkershner6-projen";
```

# Contributing

Contributions welcome!

This monorepo uses the AWS PDK, which is just a wrapper around projen. To get started, in the root, run `pnpm i` to install everything.

Then, you can handle things normally with projen, or you can use the PDK CLI instead, which is essentially the same thing. You can install globally or use `npx pdk` as per normal.
## License

This project is licensed under the terms of the [MIT License](LICENSE.md).