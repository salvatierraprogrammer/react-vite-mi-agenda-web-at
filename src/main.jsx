import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme'; // importamos el tema

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Aplica el fondo y tipografía automáticamente */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
