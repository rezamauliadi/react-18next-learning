import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextHttpBackend from "i18next-http-backend";

import Cookies from "js-cookie";

i18n
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: Cookies.get("locale") || "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
