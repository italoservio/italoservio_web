import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import { EnumBreakpoints } from '../../../../shared/enum/breakpoint';

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.background.primary};
`;

export const Title = styled.div`
  h1 {
    font-size: 50px;
    color: ${props => props.theme.text.title};
  }

  h2 {
    font-size: 20px;
    color: ${props => props.theme.text.subtitle};
  }

  @media (min-width: ${EnumBreakpoints.SM}) {
    h1 {
      font-size: 70px;
    }
    h2 {
      font-size: 30px;
    }
  }
`;

export const PageSetupCol = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const HeaderRow = styled(Row)`
  padding: 3rem 0;
`;
