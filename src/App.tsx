import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './shared/theme';
import { ThemeProvider } from 'styled-components';
import { AppContext } from './contexts/app';
import { Home } from './views';
import { EnumTheme } from './shared/enum/theme';
import { light, night } from './shared/theme';

const pubs = [
  { path: '/', element: <Home /> }
];

export function App() {
  const { theme } = React.useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === EnumTheme.LIGHT ? light : night}>
        <BrowserRouter>
          <Routes>
            {pubs.map(route => <Route {...route} />)}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
