import { Resource } from "i18next";

export const NumerologyTransKeys = {
    appName: "appName",
    firstName: "firstName",
    lsName: "lsName",
    birthday: "birthday",
    submit: "submit",
    result: "result"
}

export interface NumerologyTransResource extends Resource {
    translation: typeof NumerologyTransKeys;
}