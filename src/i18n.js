import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Utiliser le backend pour charger les fichiers de traduction
  .use(initReactI18next) // Intégration avec React
  .init({
    lng: "en", // Langue par défaut
    fallbackLng: "en",
    backend: {
      loadPath: "/traductions/{{lng}}/common.json", // Où charger les fichiers JSON
    },
    interpolation: {
      escapeValue: false, // React s'occupe déjà d'échapper les valeurs
    },
  });

export default i18n;
