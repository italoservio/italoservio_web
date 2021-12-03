import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3 {
    font-family: Vidaloka;
    font-weight: 400;
  }
`;
