import { Resource } from "i18next";

export const NumerologyTransKeys = {
    appName: "appName",
    firstName: "firstName",
    lsName: "lsName",
    birthday: "birthday",
    year: "year",
    submit: "submit",
    addPerson: "addPerson",
    remove: "remove",
    result: "result",
    errorTitle: "errorTitle",
    validation_err: "validation_err",
    unknown_err: "unknown_err",
    numerologyReadingTitle: "numerologyReadingTitle",
    numerologyComparingTitle: "numerologyComparingTitle",
    numerologyCalculateYear: "numerologyCalculateYear",
    aboutTitle: "aboutTitle",
}

export interface NumerologyTransResource extends Resource {
    translation: typeof NumerologyTransKeys;
}