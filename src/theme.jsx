

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#022031',
      paper: '#0A2F4F', // fondo tarjetas tipo card
    },
    primary: {
      main: '#2FE383', // botón FAB y elementos primarios
    },
    secondary: {
      main: '#FF5252', // errores/snackbars
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0BEC5',
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          position: 'fixed',
          bottom: 16,
          right: 16,
        },
      },
    },
  },
});

export default theme;
