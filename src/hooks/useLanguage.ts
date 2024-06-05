import LanguageContext from "@contexts/language.context";
import { useContext } from "react";

export default function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("LanguageProvider is missing!");
    return ctx;
}