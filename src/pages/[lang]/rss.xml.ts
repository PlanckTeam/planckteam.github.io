import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "../../consts";
import t from "../../i18n/strings";
import { i18n } from "astro:config/client";
import type { APIContext } from 'astro';
import { getRelativeLocaleUrl } from "astro:i18n";

export function getStaticPaths() {
    return i18n?.locales.map((locale) => ({
        params: { lang: locale },
    }));
}

export async function GET(context: APIContext) {
    const locale = context.currentLocale ?? i18n?.defaultLocale ?? "";

    const blogs = await getCollection("blog", ({ id }) =>
        id.startsWith(`${locale}/`),
    );

    const posts = blogs
        .map((post) => {
            const [_lang, ...rest] = post.id.split("/");
            return {
                ...post,
                id: rest.join("/"),
            };
        })
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

    return rss({
        title: SITE_TITLE,
        description: t("site_description", context.currentLocale!),
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: getRelativeLocaleUrl(locale, `/blog/${post.id}`),
        })),
    });
}
