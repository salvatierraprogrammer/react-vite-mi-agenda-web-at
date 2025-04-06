import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        py: 2,
        textAlign: 'center',
        mt: 4,
      }}
    >
      <Typography variant="body2">
        © 2025 Abordando Salud Mental - Todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
