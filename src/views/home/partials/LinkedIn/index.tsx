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
            <S.Button onClick={() => {
              window.location.href = "https://www.linkedin.com/in/italoservio/";
            }}>
              My LinkedIn
            </S.Button>
          </Col>
          <S.ImageCol md={4}>
            <img
              height={'250'}
              src={DeveloperActivity}
              alt={'Developer Activity'}
            />
          </S.ImageCol>
        </Row>
      </Container>
    </S.LinkedInContainer>
  );
}
