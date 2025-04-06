import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  Container,
  Skeleton,
  Fade,
} from '@mui/material';
import sec4 from '../assets/img/sec4.png';

const Session2 = () => {
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, color: theme.palette.primary.main }}
        >
          Acompañamiento terapéutico más humano y organizado
        </Typography>

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
          {/* Texto informativo */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              🤝 Apoyo cercano, registro claro y continuidad del abordaje
            </Typography>

            <Typography variant="body1" paragraph>
              El acompañante terapéutico cumple un rol fundamental en los procesos de tratamiento, ofreciendo presencia, contención y seguimiento diario. Nuestra app facilita tu labor, permitiéndote registrar cada intervención, anotar observaciones clínicas y mantener comunicación constante con el equipo interdisciplinario.
            </Typography>

            <Typography variant="body1" paragraph>
              Generá reportes de evolución, accedé a la historia del paciente y llevá un control detallado desde cualquier lugar. Todo pensado para que tu acompañamiento sea más eficiente, profesional y humano.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              href="https://play.google.com/store/apps/details?id=tu.app.id"
              target="_blank"
              sx={{ mt: 2, px: 5, py: 1.5, fontWeight: 'bold' }}
            >
              Descargar desde Google Play
            </Button>
          </Box>

          {/* Imagen ilustrativa con Skeleton y Fade */}
          <Box sx={{ width: { xs: '100%', md: '45%' } }}>
            {!imageLoaded && (
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{ width: '100%', aspectRatio: '4 / 3', borderRadius: 2 }}
              />
            )}
            <Fade in={imageLoaded}>
              <Box
                component="img"
                src={sec4}
                alt="Acompañamiento terapéutico digital"
                onLoad={() => setImageLoaded(true)}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: imageLoaded ? 'block' : 'none',
                  borderRadius: 2,
                }}
              />
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Session2;
