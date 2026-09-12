export const i18nStrings = {
    it: {
        site_seo_title: "Planck Team | Team di Robotica Max Planck Villorba",
        site_description: "Planck Team è il programma di robotica FIRST LEGO League e FIRST Tech Challenge dell'Istituto Max Planck, Villorba (Treviso), che compete a livello internazionale dal 2014.",
        blog_description: "Segui il viaggio del Planck Team: competizioni, viaggi e storie dietro le quinte delle nostre stagioni di robotica.",
        index_diveIn: "Esplora",
        index_standard: "Setting the standard since 2014.",
        header_about: "Chi siamo",
        header_instagram: "Unisciti alla community del Planck Team su Instagram",
        header_facebook: "Unisciti alla community del Planck Team su Facebook",
        header_linkedin: "Unisciti alla community del Planck Team su LinkedIn",
        header_youtube: "Unisciti alla community del Planck Team su YouTube",
        header_github: "Unisciti alla community del Planck Team su GitHub",
        sidebar_open: "Apri il menu di navigazione",
        sidebar_close: "Chiudi il menu di navigazione",
    },
    en: {
        site_seo_title: "Planck Team | Robotics Team Max Planck Villorba",
        site_description: "Planck Team is the FIRST LEGO League and FIRST Tech Challenge robotics program of Istituto Max Planck, Villorba (Treviso), competing internationally since 2014.",
        blog_description: "Follow Planck Team's journey: competitions, trips, and behind-the-scenes stories from our robotics seasons.",
        index_diveIn: "Dive in",
        index_standard: "Setting the standard since 2014.",
        header_about: "About us",
        header_instagram: "Join the Planck Team community on Instagram",
        header_facebook: "Join the Planck Team community on Facebook",
        header_linkedin: "Join the Planck Team community on LinkedIn",
        header_youtube: "Join the Planck Team community on YouTube",
        header_github: "Join the Planck Team community on GitHub",
        sidebar_open: "Open navigation menu",
        sidebar_close: "Close navigation menu",
    }
};

export type Lang = keyof typeof i18nStrings;
export type Keys = keyof typeof i18nStrings[Lang];

export default function translate(key: Keys, locale: string): string {
    const strings = i18nStrings[locale as Lang];

    if (!strings) {
        throw new Error(`Locale '${locale}' not found in i18nStrings.`);
    }

    const translation = strings[key as Keys];

    if (!translation) {
        throw new Error(`Key '${key}' not found in i18nStrings for locale '${locale}'.`);
    }

    return translation;
}
