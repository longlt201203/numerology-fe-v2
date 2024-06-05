import Typography from "@components/Typography";
import useLanguage from "@hooks/useLanguage";
import languages from "@language/languages";
import { NumerologyTransKeys } from "@language/numerology-trans-props";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { changeCurrentLanguage, currentLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <div className="w-full flex justify-around py-4 px-8 md:px-0">
            <div className="w-1/3 hidden md:block"></div>
            <div className="w-full">
                <Typography variant="h1" className="md:text-center">{t(NumerologyTransKeys.appName)}</Typography>
            </div>
            <div className="md:w-1/3 flex justify-center">
                <select className="outline-none" value={currentLanguage} onChange={(e) => changeCurrentLanguage(e.target.value)}>
                    {Object.keys(languages).map((key) => (<option key={key} value={languages[key].code}>{languages[key].label}</option>))}
                </select>
            </div>
        </div>
    );
}