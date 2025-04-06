import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  Container,
} from '@mui/material';
import sec1 from '../assets/img/sec1.png';
import sec2 from '../assets/img/sec2.png';
import sec4 from '../assets/img/sec4.png';
import sec5 from '../assets/img/sec5.png';
import sec6 from '../assets/img/sec6.png';

const features = [
    {
        image: sec5,
        text: 'Accedé rápidamente a tus pacientes',
      },
  {
    image: sec4,
    text: 'Accedé rápidamente a tus pacientes',
  },
 
  {
    image: sec2,
    text: 'Organizá tu agenda desde cualquier lugar',
  },
  {
    image: sec1,
    text: 'Seguimiento de tratamientos al instante',
  },
];

const Session1 = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container sx={{ maxWidth: '1200px', px: { xs: 2, sm: 3, md: 4 } }}>
         {/* Sección de descarga con imagen y botón */}
        
          {/* Título principal */}
          <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          Gestioná tus pacientes de forma sencilla, desde tu celular
        </Typography>

        {/* Sección de descarga */}
        <Box
          mt={6}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
            mb: 8,
          }}
        >
          <Box
            component="img"
            src={sec6}
            alt="Descargá la app"
            sx={{
              width: { xs: '100%', md: '40%' },
              height: 'auto',
             
            }}
          />

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" gutterBottom>
              📲 Descargá la app y empezá a gestionar tus pacientes desde cualquier lugar
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="https://play.google.com/store/apps/details?id=tu.app.id"
              target="_blank"
              sx={{ mt: 2, px: 4, py: 1.5, fontWeight: 'bold' }}
            >
              Descargar desde Google Play
            </Button>
          </Box>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Session1;
