export interface LanguageType {
    code: string;
    label: string;
}

const languages: { [key: string]: LanguageType } = {
    vn: {
        code: "vn",
        label: "Tiếng Việt"
    },
    en: {
        code: "en",
        label: "English"
    }
};

export default languages;