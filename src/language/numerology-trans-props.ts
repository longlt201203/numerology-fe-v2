import { Resource } from "i18next";

export const NumerologyTransKeys = {
    appName: "appName",
    firstName: "firstName",
    lsName: "lsName",
    birthday: "birthday",
    submit: "submit",
    result: "result",
    errorTitle: "errorTitle",
    validation_err: "validation_err",
    unknown_err: "unknown_err"
}

export interface NumerologyTransResource extends Resource {
    translation: typeof NumerologyTransKeys;
}