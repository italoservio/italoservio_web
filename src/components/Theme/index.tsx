import React from 'react';
import { AppContext } from '../../contexts/app';
import { EnumTheme } from '../../shared/enum/theme';
import * as S from './style';

export function Theme() {
  const { theme, setTheme } = React.useContext(AppContext);

  function handleChange(choice: EnumTheme) {
    if (choice !== theme) setTheme(choice);
    return;
  }

  return (
    <S.ThemesContainer>
      <h4>Theme</h4>
      <S.ThemeButton
        variant={EnumTheme.LIGHT}
        disabled={false}
        onClick={() => handleChange(EnumTheme.LIGHT)}
      />
      <S.ThemeButton
        variant={EnumTheme.NIGHT}
        disabled={false}
        onClick={() => handleChange(EnumTheme.NIGHT)}
      />
    </S.ThemesContainer>
  );
}
