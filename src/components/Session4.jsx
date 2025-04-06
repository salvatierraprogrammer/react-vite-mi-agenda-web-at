import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
} from '@mui/material';

const Session4 = ({refProp}) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const theme = useTheme();

  const handleOpenPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const plans = [
    {
      title: 'Pago Único',
      price: '$20.000 ARS',
      description: 'Pago único con acceso completo a todas las funcionalidades.',
      benefits: [
        'Soporte técnico incluido',
        'Actualizaciones de por vida',
        'Base de datos local con cifrado',
        'Compilación y entrega personalizada de la app',
      ],
    },
    {
      title: 'Suscripción Mensual',
      price: '$15.000 ARS / mes',
      description: 'Accede a la app sin inversión inicial con pagos mensuales.',
      benefits: [
        'Soporte técnico incluido',
        'Actualizaciones mientras dure la suscripción',
        'Ideal para iniciar sin compromisos a largo plazo',
      ],
    },
  ];

  return (
    <Box ref={refProp} sx={{ my: 10, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'medium', color: theme.palette.primary.main }}
      >
        Seleccioná el Plan que Mejor se Adapte a Tu Proyecto
      </Typography>
      <Typography align="center" variant="body1" color="text.secondary" mb={6}>
        Ambos planes están diseñados para brindarte una solución robusta y confiable desde el inicio.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => (
          <Grid item xs={12} md={5} key={plan.title}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button variant="outlined" onClick={() => handleOpenPlan(plan)}>
                  Ver Detalles
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal de Detalles del Plan */}
      <Dialog open={!!selectedPlan} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>{selectedPlan?.title}</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6" color="primary">
            {selectedPlan?.price}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Beneficios incluidos:
          </Typography>
          <List>
            {selectedPlan?.benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Este plan incluye acompañamiento durante la implementación y despliegue de la aplicación.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleCloseModal();
              alert(`Seleccionaste el plan: ${selectedPlan.title}`);
            }}
          >
            Seleccionar Plan
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Session4;
