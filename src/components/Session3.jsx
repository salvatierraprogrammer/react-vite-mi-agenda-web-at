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
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const profesionalOptions = [
  'Psicólogo/a',
  'Enfermero/a',
  'Acompañante Terapéutico',
  'Psiquiatra',
  'Trabajador/a Social',
  'Otro',
];

const Session3 = () => {
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
    window.open('https://example.com/descarga-app', '_blank'); // Reemplaza con el link real
  };

  return (
    <Box sx={{ my: 10, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom color="primary">
        📲 Descargar App
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Para acceder a la descarga de la app, completá el formulario. Es rápido y nos ayuda a brindarte una mejor experiencia.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<DownloadIcon />}
        onClick={handleOpenFormModal}
        sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
      >
        Descargar App
      </Button>
      

      {/* Modal del Formulario */}
      <Dialog open={openFormModal} onClose={() => setOpenFormModal(false)} fullWidth maxWidth="sm">
        <DialogTitle>💡 Completa tus datos</DialogTitle>
        <DialogContent dividers sx={{ pt: 2 }}>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Te pedimos algunos datos para enviarte novedades y soporte en el uso de la app.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre y Apellido"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Teléfono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
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
                <Alert severity="warning">Por favor, completá todos los campos.</Alert>
              </Grid>
            )}
          </Grid>
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
        <DialogTitle>✅ ¡Gracias por registrarte!</DialogTitle>
        <DialogContent>
          <Typography>
            Ya casi estás listo. Hacé clic en el botón para comenzar la descarga de la aplicación.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFinish} variant="contained" color="primary">
            Ir a la descarga
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Session3;
