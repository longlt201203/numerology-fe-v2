import { createContext } from "react";

export interface LanguageContextProps {
    currentLanguage: string;
    changeCurrentLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

export default LanguageContext;