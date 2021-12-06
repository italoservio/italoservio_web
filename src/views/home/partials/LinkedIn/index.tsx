import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useTranslation } from 'react-i18next';
import
  DeveloperActivity 
from '../../../../assets/vectors/illustrations/DeveloperActivity.svg';
import * as S from './style';

export function LinkedIn() {
  const { t } = useTranslation();

  return (
    <S.LinkedInContainer>
      <Container>
        <Row>
          <Col md={8}>
            <h2>{t('home.linkedInCTA')}</h2>
            <S.Button>
              LinkedIn
            </S.Button>
          </Col>
          <Col md={4}>
            <img
              height={'250'}
              src={DeveloperActivity}
              alt={'Developer Activity'}
            />
          </Col>
        </Row>
      </Container>
    </S.LinkedInContainer>
  );
}
