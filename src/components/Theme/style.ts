import styled from 'styled-components';
import { EnumTheme } from '../../shared/enum/theme';
import {
  ThemeButton as ThemeButtonType 
} from '../../shared/type/components/Theme';

export const ThemesContainer = styled.div`
  h4 {
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.text.title};
  }
`;

export const ThemeButton = styled.button<ThemeButtonType>`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ variant }) =>
    variant === EnumTheme.LIGHT ? '#fff' : '#2b2b2b'
  };
  box-shadow: inset 0 0 0 1px #d1d1d1;
  margin-right: 1rem;
`;
