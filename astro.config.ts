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
            provider: fontProviders.fontsource(),
            name: "DM Sans",
            cssVariable: "--font-dmsans",
            fallbacks: ["sans-serif"],
            weights: ["400", "500", "700"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Quicksand",
            cssVariable: "--font-quicksand",
            fallbacks: ["sans-serif"],       
            weights: ["300"],
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
