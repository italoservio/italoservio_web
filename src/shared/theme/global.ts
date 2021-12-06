import { createGlobalStyle } from 'styled-components';
import DMSerifText from '../../assets/fonts/DMSerifText.ttf'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'DM Serif Text';
    src: url(${DMSerifText});
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
  }

  #root {
    white-space: pre-line;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'DM Serif Text', 'Serif';
    font-weight: 400;
  }
`;
