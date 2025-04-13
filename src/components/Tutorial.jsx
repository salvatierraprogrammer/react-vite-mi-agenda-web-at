import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import paso1 from '../assets/imgTutorial/paso1.jpeg';
import paso2 from '../assets/imgTutorial/paso2.jpeg';
import paso3 from '../assets/imgTutorial/paso3.jpeg';
import paso5 from '../assets/imgTutorial/paso5.jpeg';
import paso6 from '../assets/imgTutorial/paso6.jpeg';
import paso7 from '../assets/imgTutorial/paso7.jpeg';
import paso8 from '../assets/imgTutorial/paso8.jpeg';
import paso9 from '../assets/imgTutorial/paso9.jpeg';
import paso10 from '../assets/imgTutorial/paso10.jpeg';
import paso11 from '../assets/imgTutorial/paso11.jpeg';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SecurityIcon from '@mui/icons-material/Security';
const pasos = [
  { numero: 1, descripcion: 'Hacer clic en "Descargar".', imagen: paso1 },
  { numero: 2, descripcion: 'Completar y presionar "Continuar".', imagen: paso2 },
  { numero: 3, descripcion: '"Descargar App" o "Descargar por Drive".', imagen: paso3 },
  { numero: 4, descripcion: 'Dar clic en "Abrir"', imagen: paso5 },
  { numero: 5, descripcion: 'Dar clic en "Instalar"', imagen: paso6 },
  { numero: 6, descripcion: 'Esperar a que finalice la instalación.', imagen: paso7 },
  { numero: 7, descripcion: 'Dar clic en "Más detalles"', imagen: paso8, mostrarBoton: true },
  { numero: 8, descripcion: 'Seleccionar "Instalar de todas formas"', imagen: paso9, mostrarBoton: true },
  { numero: 9, descripcion: 'Dar clic en "Abrir"', imagen: paso10 },
  { numero: 10, descripcion: 'Crear cuenta o iniciar sesión', imagen: paso11 },
];

const dividirEnFilas = (array, cantidadDeFilas) => {
  const resultado = [];
  const elementosPorFila = Math.ceil(array.length / cantidadDeFilas);
  for (let i = 0; i < array.length; i += elementosPorFila) {
    resultado.push(array.slice(i, i + elementosPorFila));
  }
  return resultado;
};

const Tutorial = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [mostrarPasos, setMostrarPasos] = useState(true);
  const [openSecurityModal, setOpenSecurityModal] = useState(false);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#0c1f2c' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#00e676',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          Guía de instalación de la aplicación
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 4, color: 'grey.300' }}>
          Sigue estos 9 pasos para instalar la aplicación en tu dispositivo Android.
        </Typography>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="outlined"
            startIcon={mostrarPasos ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={() => setMostrarPasos(!mostrarPasos)}
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'white',
              },
            }}
          >
            {mostrarPasos ? 'Ocultar pasos de instalación' : 'Mostrar pasos de instalación'}
          </Button>
        </Box>

        {mostrarPasos &&
          dividirEnFilas(pasos, 4).map((fila, filaIndex) => (
            <Grid container spacing={4} key={filaIndex} justifyContent="center" sx={{ mt: 4 }}>
              {fila.map((paso) => (
                <Grid
                  item
                  key={paso.numero}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{
                    px: 1,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    maxWidth: '100%',
                    lineHeight: 1.4,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 3,
                      backgroundColor: '#10222e',
                      height: '100%',
                      py: 3,
                      px: 2,
                      boxShadow: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 240,
                        height: 480,
                        borderRadius: 4,
                        overflow: 'hidden',
                        mb: 2,
                        boxShadow: 4,
                        border: '6px solid #111',
                        backgroundColor: '#000',
                      }}
                    >
                      <Box
                        component="img"
                        src={paso.imagen}
                        alt={`Paso ${paso.numero}`}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <Typography variant="h6" gutterBottom color="white">
                      Paso {paso.numero}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey.300"
                      sx={{
                        mt: 'auto',
                        px: 1,
                        mb: paso.mostrarBoton ? 2 : 0,
                      }}
                    >
                      {paso.descripcion}
                    </Typography>
                    {paso.mostrarBoton && (
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        href="https://cafecito.app/elcanaldelat"
                        target="_blank"
                        sx={{
                          fontWeight: 'bold',
                          borderRadius: 2,
                          boxShadow: 2,
                          mt: 1,
                          textTransform: 'none',
                        }}
                      >
                        Donar para Google Play
                      </Button>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
          ))}

<Box sx={{ 
  display: 'flex', 
  flexDirection: { xs: 'column', md: 'row' }, 
  justifyContent: 'center', 
  mt: 6, 
  gap: 2 
}}>
    <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<PlayCircleFilledIcon />}
            onClick={() => setOpenModal(true)}
            sx={{
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
            Ver tutorial en video
        </Button>
    </Box>
    <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Button
            variant="outlined"
            color="info"
            size="large"
            startIcon={<SecurityIcon />}
            onClick={() => setOpenSecurityModal(true)}
            sx={{
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            borderRadius: 3,
            color: '#00e5ff',
            borderColor: '#00e5ff',
            '&:hover': {
                backgroundColor: 'rgba(0, 229, 255, 0.1)',
                borderColor: '#00e5ff',
            },
            }}
        >
            Revisión de seguridad
        </Button>
    </Box>
</Box>

<Dialog open={openSecurityModal} onClose={() => setOpenSecurityModal(false)} maxWidth="md" fullWidth>
  <DialogTitle sx={{ m: 0, p: 2 }}>
    <Typography variant="h6" fontWeight="bold" color="primary">
      Seguridad y confianza en la instalación
    </Typography>
    <IconButton
      aria-label="close"
      onClick={() => setOpenSecurityModal(false)}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent dividers>
  <Typography variant="body1" sx={{ mb: 2 }}>
  En este video te mostramos cómo analizar una aplicación descargada fuera de Play Store usando antivirus y herramientas de verificación, para que tengas total confianza antes de instalarla. Podés utilizar herramientas como{' '}
  <Link href="https://www.virustotal.com/" target="_blank" rel="noopener">
    VirusTotal
  </Link>
  .
</Typography>
    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
  <iframe
    src="https://www.youtube.com/embed/OVpFHKcJhUM"
    title="Análisis de seguridad de la app"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
  ></iframe>
</Box>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenSecurityModal(false)} color="secondary">
      Cerrar
    </Button>
  </DialogActions>
</Dialog>


        <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="md" fullWidth>
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <Typography variant="h6" fontWeight="bold" color="primary">
              Tutorial en video 
            </Typography>
            <IconButton
              aria-label="close"
              onClick={() => setOpenModal(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/Z-51rFgTd2g"
                title="Tutorial de instalación"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)} color="secondary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Tutorial;
