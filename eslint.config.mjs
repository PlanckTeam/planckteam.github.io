import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
    // Ignore build output, generated directories, and video segments
    { ignores: ["dist/", ".astro/", "node_modules/", "public/bgvideo/"] },

    // TypeScript files
    ...tseslint.configs.recommended,

    // Astro files
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.astro"],
        rules: {
            // Astro's template section is invisible to the TypeScript parser,
            // so disable the TS unused-vars check (eslint-plugin-astro handles it)
            "@typescript-eslint/no-unused-vars": "off",
        },
    },
    {
        rules: {
            // Allow Astro components to use `any` in frontmatter when needed
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },

    // Allow triple-slash references in env.d.ts (standard Astro pattern)
    {
        files: ["src/env.d.ts"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
];
