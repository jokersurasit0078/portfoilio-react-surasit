import TH from "./LangTH";
import EN from "./LangEN";

declare const window: any;

export function word() {
    let language: any = window.localStorage.getItem("lang");
    if (language === null || language === undefined ) {
        language = window.LIST_LANGUAGES[0].value;
    }
    if (language === window.LIST_LANGUAGES[0].value) {
        return EN.word;
    } else if (language === window.LIST_LANGUAGES[1].value) {
        return TH.word;
    } else return EN.word;
}