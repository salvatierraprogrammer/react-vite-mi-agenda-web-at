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
import { useGuardarDatosFormularioMutation } from '../service/ecApi';

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
    zona: '',
    localidad: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openThanksModal, setOpenThanksModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [guardarDatosFormulario] = useGuardarDatosFormularioMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limpiar zona y localidad si cambia a otra profesión
    if (name === 'profesion' && value !== 'Acompañante Terapéutico') {
      setForm((prev) => ({
        ...prev,
        profesion: value,
        zona: '',
        localidad: '',
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleConfirmDownload = async () => {
    const isFormComplete =
      form.nombre &&
      form.email &&
      form.telefono &&
      form.profesion &&
      (form.profesion !== 'Acompañante Terapéutico' || (form.zona && form.localidad));

    if (!isFormComplete) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
    setLoading(true);

    try {
      await guardarDatosFormulario(form);
      setOpenFormModal(false);
      setOpenThanksModal(true);
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const handleFinish = () => {
    setOpenThanksModal(false);
  // window.open('https://drive.google.com/file/d/1Og-wMmXYk7GQ1YS2JfsqtelGvviUWATY/view?usp=sharing', '_blank');
    window.open('https://expo.dev/artifacts/eas/9u3nGFq4U4yRrtNvQLzGzr.apk', '_blank');
    
  };

  return (
    <Box ref={refProp} sx={{ my: 10, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
      <Paper elevation={3} sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 5, md: 6 }, borderRadius: 4, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          📲 Descargar App Gratis
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Completá este breve formulario para acceder a la descarga. Nos ayuda a darte mejor soporte.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<DownloadIcon />}
          onClick={() => setOpenFormModal(true)}
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

      {/* Modal del Formulario */}
      <Dialog open={openFormModal} onClose={() => setOpenFormModal(false)} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography variant="h5" fontWeight="bold" color="primary">
            💡 Completá tus datos
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
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
                label="WhatsApp"
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
                placeholder="Ej: 11 2345 6789"
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

              {/* Condicionales si es Acompañante Terapéutico */}
              {form.profesion === 'Acompañante Terapéutico' && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="¿Qué zona de Buenos Aires te gustaría conseguir pacientes?"
                      name="zona"
                      value={form.zona}
                      onChange={handleChange}
                    >
                      <MenuItem value="CABA">CABA</MenuItem>
                      <MenuItem value="Zona Sur">Zona Sur</MenuItem>
                      <MenuItem value="Zona Norte">Zona Norte</MenuItem>
                      <MenuItem value="Zona Oeste">Zona Oeste</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Barrio / Localidad"
                      name="localidad"
                      value={form.localidad}
                      onChange={handleChange}
                    />
                  </Grid>
                </>
              )}

              {showAlert && (
                <Grid item xs={12}>
                  <Alert severity="warning">Por favor, completá todos los campos requeridos.</Alert>
                </Grid>
              )}
            </Grid>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFormModal(false)} color="secondary">
            Cancelar
          </Button>
          <Button
            onClick={handleConfirmDownload}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Continuar'}
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
        
            onClick={() => {
              setOpenThanksModal(false);
              window.open('https://expo.dev/artifacts/eas/9u3nGFq4U4yRrtNvQLzGzr.apk', '_blank');
              handleFinish();
            }}
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
          >
            Descargar App (APK)
          </Button>
          <Button
          
            onClick={() => {
              setOpenThanksModal(false);
              window.open('https://drive.google.com/file/d/1Wf0xE4dW5G1gzevMgaCDFaHqnSE-YSkp/view?usp=drive_link', '_blank');
              handleFinish();
            }}
            variant="outlined"
            color="secondary"
            startIcon={<DownloadIcon />}
          >
            Descargar desde Drive
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Session3;
