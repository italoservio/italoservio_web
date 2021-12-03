import React from 'react';
import { useTranslation } from 'react-i18next';
import { EnumI18n } from '../../shared/enum/i18n';

export function I18n() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: EnumI18n) {
    i18n.changeLanguage(language);
  }

  return (
    <div className='flags-container'>
      <button
        disabled={i18n.language === EnumI18n.PT_BR}
        onClick={() => handleChangeLanguage(EnumI18n.PT_BR)}
      >
        Português
      </button>

      <button
        disabled={i18n.language === EnumI18n.EN_US}
        onClick={() => handleChangeLanguage(EnumI18n.EN_US)}
      >
        Inglês
      </button>
    </div>
  );
}
