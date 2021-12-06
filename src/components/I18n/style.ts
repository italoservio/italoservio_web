import styled from 'styled-components';

export const BrandsContainer = styled.div`
  h4 {
    font-size: 20px;
    margin-bottom: .5rem;
  }


`

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
      filter: opacity(.25);
    }
  }
`
