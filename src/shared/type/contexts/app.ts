import React, { SetStateAction } from "react";

export type ThemeOption = 'light' | 'night';

export type AppProviderProps = {
  children: React.ReactNode;
}

export interface AppContextProps {
  theme: ThemeOption;
  setTheme: React.Dispatch<SetStateAction<ThemeOption>>;

}
