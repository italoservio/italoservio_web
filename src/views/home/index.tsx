import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next';
import { I18n } from '../../components/I18n';
import * as S from './style';

export function Home() {
  const { t } = useTranslation();

  return (
    <S.HeaderContainer>
      <Container>
        <Row>
          <Col md={6}>
            <S.Title>
              <h1>{ t('home.title') }</h1>
              <h3>{ t('home.subtitle') }</h3>
            </S.Title>
          </Col>
          <Col md={6}>
            <I18n />
          </Col>
        </Row>
      </Container>
    </S.HeaderContainer>
  )
}
