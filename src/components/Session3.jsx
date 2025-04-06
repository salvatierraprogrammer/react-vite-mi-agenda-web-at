import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  Paper,
} from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkIcon from '@mui/icons-material/Work';

const profesionalOptions = [
  'Psicólogo/a',
  'Enfermero/a',
  'Acompañante Terapéutico',
  'Psiquiatra',
  'Trabajador/a Social',
  'Otro',
];

const Session3 = ({ refProp }) => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    profesion: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openThanksModal, setOpenThanksModal] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenFormModal = () => {
    setOpenFormModal(true);
  };

  const handleConfirmDownload = () => {
    const isFormComplete =
      form.nombre && form.email && form.telefono && form.profesion;

    if (isFormComplete) {
      setShowAlert(false);
      setOpenFormModal(false);
      setOpenThanksModal(true);
    } else {
      setShowAlert(true);
    }
  };

  const handleFinish = () => {
    setOpenThanksModal(false);
    window.open('https://drive.google.com/file/d/1Og-wMmXYk7GQ1YS2JfsqtelGvviUWATY/view?usp=sharing', '_blank'); // <-- Cambiar a URL real
  };

  return (
    <Box
      ref={refProp}
      sx={{
        my: 10,
        px: { xs: 2, md: 4 },
        textAlign: 'center',
      }}
    >
      <Box
  ref={refProp}
  sx={{
    my: 10,
    px: { xs: 2, md: 4 },
  }}
>
  <Paper
    elevation={3}
    sx={{
      px: { xs: 3, md: 6 },
      py: 6,
      textAlign: 'center',
      borderRadius: 4,
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      color="primary"
      sx={{
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      📲 Descargar App
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      mb={4}
      sx={{ maxWidth: 500, mx: 'auto' }}
    >
      Completá este breve formulario para acceder a la descarga. Nos ayuda a darte mejor soporte.
    </Typography>

    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<DownloadIcon />}
      onClick={handleOpenFormModal}
      sx={{
        px: 4,
        py: 1.5,
        fontWeight: 'bold',
        borderRadius: 3,
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-2px)',
        },
      }}
    >
      Descargar App
    </Button>
  </Paper>
</Box>


      {/* Modal del Formulario */}
      <Dialog
        open={openFormModal}
        onClose={() => setOpenFormModal(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <Typography variant="h5" fontWeight="bold" color="primary">
            💡 Completá tus datos
          </Typography>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 2 }}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Así podemos enviarte novedades, soporte y acceso a nuevas funciones.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nombre y Apellido"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Teléfono"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Tipo de Profesional en Salud"
                  name="profesion"
                  value={form.profesion}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WorkIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                >
                  {profesionalOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {showAlert && (
                <Grid item xs={12}>
                  <Alert severity="warning">
                    Por favor, completá todos los campos.
                  </Alert>
                </Grid>
              )}
            </Grid>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFormModal(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDownload} variant="contained" color="primary">
            Continuar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal de Agradecimiento */}
      <Dialog open={openThanksModal} onClose={handleFinish}>
        <DialogTitle>
          <Typography variant="h6" fontWeight="bold" color="success.main">
            ✅ ¡Gracias por registrarte!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 1 }}>
            Ya casi estás listo. Hacé clic abajo para comenzar la descarga de la app.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleFinish}
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
          >
            Ir a la descarga
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Session3;
