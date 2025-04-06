import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

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
          href="https://www.linkedin.com/in/dos354ab4/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2">
        © 2025 Abordando Salud Mental - Todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
