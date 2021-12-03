import './i18n';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AppProvider } from './contexts/app';

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
);
