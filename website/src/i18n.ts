import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import hero_en from "@components/sections/Hero/Language/en.json";
import hero_ru from "@components/sections/Hero/Language/ru.json";

import header_en from "@components/sections/Header/Language/en.json";
import header_ru from "@components/sections/Header/Language/ru.json";

import footer_en from "@components/sections/Footer/Language/en.json";
import footer_ru from "@components/sections/Footer/Language/ru.json";

const resources = {
  en: {
    hero: hero_en,
    header: header_en,
    footer: footer_en
  },
  ru: {
    hero: hero_ru,
    header: header_ru,
    footer: footer_ru
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
  
export default i18n;
