import React from 'react';
import { Box, Typography, Paper, Container, Avatar, Divider } from '@mui/material';

const Session2 = () => (
  <Box sx={{ my: 8, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom color="primary">
        👨‍⚕️ Sobre mí
      </Typography>

      {/* Avatar y presentación */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <Avatar
          alt="Acompañante Terapéutico"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WjS_hXJ9gKTPO0DP2wQa9ho1mxaq2aynxQ&s" // podés reemplazar esta URL con tu foto
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography variant="body1" color="text.secondary">
          Soy acompañante terapéutico y también programador. Mi misión es combinar estas dos pasiones para crear herramientas que ayuden a otros profesionales de la salud mental a enfocarse en lo importante: sus pacientes.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Primera sección */}
      <Box sx={{ my: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            textAlign: 'left',
          }}
        >
          <Typography variant="h6" gutterBottom color="primary">
            Mi enfoque
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Estoy comprometido con acercar soluciones digitales a colegas del ámbito terapéutico.
            Esta app está pensada para que puedas dedicar menos tiempo a lo administrativo
            y más a lo humano.
          </Typography>
        </Paper>
      </Box>

      {/* Segunda sección */}
      <Box sx={{ my: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            textAlign: 'left',
          }}
        >
          <Typography variant="h6" gutterBottom color="primary">
            ¿Por qué esta app?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Porque conozco las necesidades reales del trabajo terapéutico y sé lo difícil que puede ser encontrar herramientas simples, efectivas y pensadas desde la experiencia profesional.
          </Typography>
        </Paper>
      </Box>

      {/* Cierre */}
      <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 6 }}>
        Gracias por ser parte de esta comunidad que une salud y tecnología 💙
      </Typography>
    </Container>
  </Box>
);

export default Session2;
