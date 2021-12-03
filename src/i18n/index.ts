import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ptBr from './locales/pt-br';
import enUs from './locales/en-us';
import { EnumI18n } from '../shared/enum/i18n';

const locales = {
  [EnumI18n.PT_BR]: ptBr,
  [EnumI18n.EN_US]: enUs,
};

const i18nConfig = {
  resources: locales,
  fallbackLng: EnumI18n.PT_BR,
  defaultNS: 'translations',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

export default i18n;
