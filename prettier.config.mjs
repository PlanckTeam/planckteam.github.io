/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
                tabWidth: 4,
            },
        },
    ],
};

export default config;
