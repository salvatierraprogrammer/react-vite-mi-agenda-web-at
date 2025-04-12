import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Container,
  Avatar,
  Divider,
  Button,
  Card,
  CardContent,
  CardActions,
  Stack,
  Dialog,
  DialogContent,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import CertGallery from './CertGallery';
import miperfil from '../assets/img/miperfil.jpeg';

const Session5 = ({ refProp }) => {
  const certGalleryRef = useRef();
  const [openImage, setOpenImage] = useState(false);

  const handleShowCertificadoAT = () => {
    certGalleryRef.current?.openAtIndex(3);
  };

  return (
    <Box sx={{ my: 8, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography ref={refProp} variant="h4" gutterBottom color="primary">
          👨‍⚕️ Sobre mí
        </Typography>

        {/* Avatar visible y Dialog funcional */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar
            alt="Acompañante Terapéutico"
            src={miperfil}
            sx={{ width: 120, height: 120, cursor: 'pointer', mb: 2 }}
            onClick={() => setOpenImage(true)}
          />
          <Dialog open={openImage} onClose={() => setOpenImage(false)} maxWidth="sm" fullWidth>
            <DialogContent sx={{ textAlign: 'center' }}>
              <img
                src={miperfil}
                alt="Acompañante Terapéutico"
                style={{ width: '100%', borderRadius: 8 }}
              />
            </DialogContent>
          </Dialog>
          <Typography variant="body1" color="text.secondary">
            Soy acompañante terapéutico y también programador. Mi misión es combinar estas dos pasiones para crear herramientas que ayuden a otros profesionales de la salud mental a enfocarse en lo importante: sus pacientes.
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Secciones informativas */}
        <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, mb: 4, textAlign: 'left' }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <PsychologyAltIcon color="primary" />
            <Typography variant="h6" color="primary">Mi enfoque</Typography>
          </Stack>
          <Typography variant="body1" color="text.secondary">
            Estoy comprometido con acercar soluciones digitales a colegas del ámbito terapéutico. Esta app está pensada para que puedas dedicar menos tiempo a lo administrativo y más a lo humano.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, mb: 4, textAlign: 'left' }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <AppShortcutIcon color="primary" />
            <Typography variant="h6" color="primary">¿Por qué esta app?</Typography>
          </Stack>
          <Typography variant="body1" color="text.secondary">
            Porque conozco las necesidades reales del trabajo terapéutico y sé lo difícil que puede ser encontrar herramientas simples, efectivas y pensadas desde la experiencia profesional.
          </Typography>
        </Paper>

        {/* Tarjetas de enlaces */}
        <Box sx={{ mt: 6 }}>
          <Stack spacing={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              ¿Querés saber más sobre mí?
            </Typography>

            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <WorkIcon color="primary" />
                  <Typography variant="h6">Mi Portafolio como Desarrollador</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Proyectos en los que trabajé, tecnologías que uso y cómo aplico la programación al área terapéutica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<WorkIcon />}
                  size="small"
                  color="primary"
                  href="https://salvatierradev.netlify.app/"
                  target="_blank"
                >
                  Ver portafolio
                </Button>
              </CardActions>
            </Card>

            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <LinkedInIcon color="primary" />
                  <Typography variant="h6">Mi perfil en LinkedIn</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Conocé mi experiencia, formación y conexiones en el mundo tech y terapéutico.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<LinkedInIcon />}
                  size="small"
                  color="primary"
                  href="https://www.linkedin.com/in/dos354ab4/"
                  target="_blank"
                >
                  Ir a LinkedIn
                </Button>
              </CardActions>
            </Card>

            <Card variant="outlined">
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <SchoolIcon color="primary" />
                  <Typography variant="h6">Certificado de Acompañante Terapéutico</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Documento que respalda mi formación y práctica profesional.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<SchoolIcon />}
                  size="small"
                  color="primary"
                  onClick={handleShowCertificadoAT}
                >
                  Ver certificado
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </Box>

        {/* Certificados */}
        <CertGallery ref={certGalleryRef} />

        {/* Mensaje de cierre */}
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 6 }}>
          Gracias por ser parte de esta comunidad que une salud y tecnología 💙
        </Typography>
      </Container>
    </Box>
  );
};

export default Session5;
