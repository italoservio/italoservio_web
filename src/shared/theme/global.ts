import { createGlobalStyle } from 'styled-components';
import DMSerifText from '../../assets/fonts/DMSerifText.ttf';
import
  MontserratAlternatesSemiBold 
from '../../assets/fonts/MontserratAlternatesSemiBold.ttf';
import 
  MontserratAlternatesRegular 
from '../../assets/fonts/MontserratAlternatesRegular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DM Serif Text';
    src: url(${DMSerifText});
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat Alternates';
    src: url(${MontserratAlternatesRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat Alternates';
    src: url(${MontserratAlternatesSemiBold});
    font-weight: 500;
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
