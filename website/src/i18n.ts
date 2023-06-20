import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import hero_en from "@components/sections/Hero/Language/en.json";
import hero_ru from "@components/sections/Hero/Language/ru.json";

import header_en from "@components/sections/Header/Language/en.json";
import header_ru from "@components/sections/Header/Language/ru.json";

import footer_en from "@components/sections/Footer/Language/en.json";
import footer_ru from "@components/sections/Footer/Language/ru.json";

import alert_en from "@components/elements/Alert/Language/en.json";
import alert_ru from "@components/elements/Alert/Language/ru.json";

import contacts_en from "@pages/about/Contacts/Language/en.json";
import contacts_ru from "@pages/about/Contacts/Language/ru.json";

import management_en from "@pages/about/Management/Language/en.json";
import management_ru from "@pages/about/Management/Language/ru.json";

import calculation_en from "@pages/individuals/Calculation/Language/en.json";
import calculation_ru from "@pages/individuals/Calculation/Language/ru.json";

import pricing_en from "@pages/business/Pricing/Language/en.json";
import pricing_ru from "@pages/business/Pricing/Language/ru.json";

import pricebox_en from "@components/elements/PriceBox/Language/en.json";
import pricebox_ru from "@components/elements/PriceBox/Language/ru.json";

import points_en from "@pages/individuals/Points/Language/en.json";
import points_ru from "@pages/individuals/Points/Language/ru.json";

import track_en from "@pages/individuals/Track/Language/en.json";
import track_ru from "@pages/individuals/Track/Language/ru.json";

export const resources = {
  en: {
    hero: hero_en,
    header: header_en,
    footer: footer_en,
    alert: alert_en,
    contacts: contacts_en,
    managmeent: management_en,
    calculation: calculation_en,
    pricing: pricing_en,
    pricebox: pricebox_en,
    points: points_en,
    track: track_en
  },
  ru: {
    hero: hero_ru,
    header: header_ru,
    footer: footer_ru,
    alert: alert_ru,
    contacts: contacts_ru,
    managmeent: management_ru,
    calculation: calculation_ru,
    pricing: pricing_ru,
    pricebox: pricebox_ru,
    points: points_ru,
    track: track_ru
  }
} as const;

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