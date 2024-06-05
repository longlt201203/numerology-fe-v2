import languages from "@language/languages";
import { en, vn } from "@language/packs";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";


i18next
    .use(initReactI18next)
    .init({
        resources: { vn, en },
        fallbackLng: languages.vn.code,
        interpolation: {
            escapeValue: false
        }
    })

export default i18next;