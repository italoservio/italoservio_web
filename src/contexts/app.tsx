import React from 'react';
import { EnumTheme } from '../shared/enum/theme';
import {
  AppContextProps,
  AppProviderProps,
  ThemeOption,
} from '../shared/type/contexts/app';

export const AppContext = React.createContext({} as AppContextProps);

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = React.useState<ThemeOption>(EnumTheme.LIGHT);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}
