import React from 'react';
import { useTranslation } from 'react-i18next';
import { EnumI18n } from '../../shared/enum/i18n';
import BRBrand from '../../assets/vectors/i18n/Brazilian.svg';
import USBrand from '../../assets/vectors/i18n/UnitedStates.svg';
import ESBrand from '../../assets/vectors/i18n/Spanish.svg';
import * as S from './style';

const languages = [
  {
    language: EnumI18n.PT_BR,
    brand: BRBrand,
    description: 'Brazilian Portuguese'
  },
  {
    language: EnumI18n.EN_US,
    brand: USBrand,
    description: 'US English'
  },
  {
    language: EnumI18n.ES_ES,
    brand: ESBrand,
    description: 'Spanish Spain'
  },
]

export function I18n() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: EnumI18n) {
    i18n.changeLanguage(language);
  }

  return (
    <S.BrandsContainer>
      <h4>Language</h4>
      {languages.map((el, i) => (
        <S.BrandButton
          key={i}
          disabled={i18n.language === el.language}
          onClick={() => handleChangeLanguage(el.language)}
        >
          <img src={el.brand} alt={el.description} />
        </S.BrandButton>
      ))}
    </S.BrandsContainer>
  );
}
