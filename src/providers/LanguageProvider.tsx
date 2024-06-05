import LanguageContext from "@contexts/language.context";
import languages from "@language/languages";
import { PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageProvider({ children }: PropsWithChildren) {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(languages.vn.code);

    const changeCurrentLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
    }

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeCurrentLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}