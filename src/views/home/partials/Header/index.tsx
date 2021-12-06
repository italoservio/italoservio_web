import React from 'react';
import { I18n } from '../../../../components/I18n';
import { Theme } from '../../../../components/Theme';
import { Col, Container, Row } from 'react-grid-system';
import { useTranslation } from 'react-i18next';
import * as S from './style';

export function Header() {

  const { t } = useTranslation();

  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderRow>
          <Col md={8}>
            <S.Title>
              <h1>{t('home.title')}</h1>
              <h2>{t('home.subtitle')}</h2>
            </S.Title>
          </Col>
          <S.PageSetupCol md={4}>
            <I18n />
            <Theme />
          </S.PageSetupCol>
        </S.HeaderRow>
      </Container>
    </S.HeaderContainer>
  );
}
