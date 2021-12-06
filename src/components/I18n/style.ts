import styled from 'styled-components';
import { EnumBreakpoints } from '../../shared/enum/breakpoint';

export const BrandsContainer = styled.div`
  h4 {
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.text.title};
  }

  @media (max-width: ${EnumBreakpoints.MD}) {
    padding-top: 2.5rem;
  }
`;

export const BrandButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 1rem;
  cursor: pointer;

  img {
    height: 3.5rem;
    width: 3.5rem;
  }

  :not(:disabled) {
    img {
      filter: opacity(0.25);
    }
  }
`;
