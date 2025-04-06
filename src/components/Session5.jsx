import React from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  Container,
} from '@mui/material';
import sec4 from '../assets/img/sec4.png';

const Session5 = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container sx={{ maxWidth: '1200px', px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Título de la sección */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          Organización total en la palma de tu mano
        </Typography>

        {/* Contenido con texto a la izquierda e imagen a la derecha */}
        <Box
          mt={6}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          {/* Texto */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" gutterBottom>
              🩺 Gestioná fácilmente tus pacientes desde tu celular
            </Typography>
            <Typography variant="body1" paragraph>
              Nuestra app te permite organizar turnos, acceder al historial clínico
              y hacer seguimiento de tratamientos sin importar dónde estés. Con una interfaz
              intuitiva y herramientas pensadas para profesionales de la salud, ahorrás tiempo
              y ganás control sobre tu práctica.
            </Typography>
            <Typography variant="body1" paragraph>
              Además, podés enviar recordatorios automáticos a tus pacientes, cargar
              notas y adjuntar estudios en segundos. Todo en un solo lugar.
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

          {/* Imagen */}
          <Box
            component="img"
            src={sec4}
            alt="App gestión de pacientes"
            sx={{
              width: { xs: '100%', md: '40%' },
              height: 'auto',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Session5;
