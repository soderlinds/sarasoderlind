import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en.json';
import translationSE from './translations/swe.json';

const resources = {
  en: {
    translation: translationEN,
  },
  swe: {
    translation: translationSE,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
