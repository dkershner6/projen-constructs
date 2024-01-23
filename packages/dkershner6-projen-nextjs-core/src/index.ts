import {
    TypeScriptJsxMode,
    TypeScriptModuleResolution,
    TypescriptConfig,
} from "projen/lib/javascript";

export const NEXTJS_TSCONFIG_OPTIONS: TypescriptConfig = {
    include: ["**/*.ts", "**/*.tsx", "next-env.d.ts", ".next/types/**/*.ts"],
    compilerOptions: {
        // required by Next.js - https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/app/ts/tsconfig.json
        esModuleInterop: true,
        module: "esnext",
        moduleResolution: TypeScriptModuleResolution.BUNDLER,
        isolatedModules: true,
        resolveJsonModule: true,
        jsx: TypeScriptJsxMode.PRESERVE,

        // recommended by Next.js
        allowJs: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
        noEmit: true,
        lib: ["dom", "dom.iterable", "esnext"],
        strict: true,
        target: "es5",
        // @ts-expect-error - projen type bug
        incremental: true,
        plugins: [
            {
                name: "next",
            },
        ],
    },
};
