import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    hero: {
      title: "Delivery Service",
      description:
        "Based on the blockchain, which guarantees complete security and transparency of the system. And another something ads text should be here?",
      trackButton: "Track",
      trackInputPlaceholder: "Enter your track"
    },
    header: {
      forBusiness: "For business",
      forOnlineStores: "For online stores",
      about: "About",
      forIndividuals: "For individuals",
      signIn: "Sign In"
    },
  },
  ru: {
    hero: {
      title: "Сервис доставки",
      description:
        "Основанный на блокчейне, что гарантирует полную безопасность и прозрачность системы. И ещё какой-то рекламный текст тут должен быть?",
      trackButton: "Отследить",
      trackInputPlaceholder: "Укажите номер заказа"
    },
    header: {
      forBusiness: "Бизнесу",
      forOnlineStores: "Интернет-магазинам",
      about: "О компании",
      forIndividuals: "Частным лицам",
      signIn: "Войти"
    },
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
