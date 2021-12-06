import React, { SetStateAction } from 'react';
import { EnumTheme } from '../../enum/theme';

export type AppProviderProps = {
  children: React.ReactNode;
};

export interface AppContextProps {
  theme: EnumTheme;
  setTheme: React.Dispatch<SetStateAction<EnumTheme>>;
}
