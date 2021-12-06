import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useTranslation } from 'react-i18next';
import { I18n } from '../../components/I18n';
import { Theme } from '../../components/Theme';
import * as S from './style';

export function Home() {
  const { t } = useTranslation();

  return (
    <S.HeaderContainer>
      <Container>
        <S.StyledRow>
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
        </S.StyledRow>
      </Container>
    </S.HeaderContainer>
  );
}
