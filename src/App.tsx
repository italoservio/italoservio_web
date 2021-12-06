import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppContext } from './contexts/app';
import { EnumTheme } from './shared/enum/theme';
import { GlobalStyle, light, night } from './shared/theme';
import { Home } from './views';

const pubs = [{ path: '/', element: <Home /> }];

export function App() {
  const { theme } = React.useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === EnumTheme.LIGHT ? light : night}>
        <BrowserRouter>
          <Routes>
            {pubs.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
