import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram'; // 👈 Agregado

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        py: 3,
        textAlign: 'center',
        mt: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
        <IconButton
          color="inherit"
          href="https://www.instagram.com/elcanaldelat/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.facebook.com/ElCanalDelAT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.facebook.com/AbordandoSaludMental/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://t.me/+LHSwc904SMFiNzBh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2">
        © 2025 Abordando Salud Mental - Todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;