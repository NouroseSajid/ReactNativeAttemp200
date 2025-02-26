import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'; // Ensure this import is correct

import en from './resources/en.json';
import fr from './resources/fr.json';
import nl from './resources/nl.json';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      nl: { translation: nl },
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    defaultNS: 'translation',
    ns: ['translation'],
    saveMissing: true,
  });

export default i18next;
