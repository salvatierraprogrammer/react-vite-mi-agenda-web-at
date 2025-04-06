import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme'; // importamos el tema
import {store} from './redux/store.jsx'; // corregido si el path es así
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Aplica el fondo y tipografía automáticamente */}
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
