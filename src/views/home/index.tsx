import React from 'react'
import { Container } from 'react-grid-system'
import { useTranslation } from 'react-i18next';
import { I18n } from '../../components/I18n';

export function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <I18n />
      <h1>{ t('home.message') }</h1>
    </Container>
  )
}
