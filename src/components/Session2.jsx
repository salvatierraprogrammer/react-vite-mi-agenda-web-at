import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  Container,
  Skeleton,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import sec4 from '../assets/img/sec4.png';

const Session2 = () => {
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.main,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
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
            gap: { xs: 5, md: 8 },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              🤝 Apoyo cercano, registro claro y continuidad del abordaje
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
              El acompañante terapéutico cumple un rol fundamental en los procesos de tratamiento, ofreciendo presencia, contención y seguimiento diario. Nuestra app facilita tu labor, permitiéndote registrar cada intervención, anotar observaciones clínicas y mantener comunicación constante con el equipo interdisciplinario.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
              Generá reportes de evolución, accedé a la historia del paciente y llevá un control detallado desde cualquier lugar. Todo pensado para que tu acompañamiento sea más eficiente, profesional y humano.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setOpenModal(true)}
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: 3,
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 4,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Descargar desde Google Play
            </Button>
          </Box>

          <Box sx={{ width: { xs: '100%', md: '45%' }, mx: 'auto' }}>
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
                  boxShadow: 1,
                }}
              />
            </Fade>
          </Box>
        </Box>
      </Container>

      {/* Modal para informar sobre Google Play */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>
          <Typography variant="h6" fontWeight="bold" color="primary">
            🚧 ¡Aún no estamos en Google Play!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mt: 1 }}>
            La app todavía no se encuentra publicada en Google Play. El proceso de publicación requiere cubrir un costo único de <strong>25 USD</strong>.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
            Si querés ayudarnos a llegar a más profesionales, podés apoyar con una donación.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)} color="secondary">
            Cerrar
          </Button>
          <Button
            variant="contained"
            color="success"
            href="https://cafecito.app/tudonacion"
            target="_blank"
          >
            Donar ahora
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Session2;
