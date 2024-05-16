import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./translation/en.json";
import common_fr from "./translation/fr.json";
import common_ge from "./translation/ge.json";
import common_es from "./translation/es.json";
import common_it from "./translation/it.json";
import common_ru from "./translation/ru.json";
import common_dt from "./translation/dt.json";
import common_pg from "./translation/pg.json";
import common_gk from "./translation/gk.json";

const resources = {
  en: {
    translation: common_en,
  },
  fr: {
    translation: common_fr,
  },
  ge: {
    translation: common_ge,
  },
  es: {
    translation: common_es,
  },
  it: {
    translation: common_it,
  },
  ru: {
    translation: common_ru,
  },
  dt: {
    translation: common_dt,
  },
  pg: {
    translation: common_pg,
  },
  gk: {
    translation: common_gk,
  },
  
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
