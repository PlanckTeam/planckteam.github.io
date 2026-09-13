import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://planckteam.github.io",
    integrations: [mdx(), sitemap(), icon()],
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Atkinson",
            cssVariable: "--font-atkinson",
            fallbacks: ["sans-serif"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/atkinson-regular.woff"],
                        weight: 400,
                        style: "normal",
                        display: "swap",
                    },
                    {
                        src: ["./src/assets/fonts/atkinson-bold.woff"],
                        weight: 700,
                        style: "normal",
                        display: "swap",
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "Membra",
            cssVariable: "--font-membra",
            fallbacks: ["sans-serif"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/membra.woff"],
                        weight: 500,
                        style: "normal",
                        display: "swap",
                    },
                ],
            },
        },
        {
            provider: fontProviders.fontsource(),
            name: "Tourney",
            cssVariable: "--font-tourney",
            fallbacks: ["sans-serif"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Quicksand",
            cssVariable: "--font-quicksand",
            fallbacks: ["sans-serif"],       
            weights: ["300"],
        }
    ],
    server: {
        port: 4321,
        host: true,
        allowedHosts: ["vitedev.gregweb.it.eu.org", "prodesk"],
    },
    i18n: {
        defaultLocale: "en",
        locales: ["en", "it"],
        routing: {
            prefixDefaultLocale: true,
        }
    },
});
