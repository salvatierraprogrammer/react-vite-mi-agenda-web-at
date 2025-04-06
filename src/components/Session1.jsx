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

import sec6 from '../assets/img/sec6.png';

const Session1 = ({ scrollToDownload }) => {
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
          La forma más simple de gestionar a tus pacientes
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: 700,
            mx: 'auto',
            mb: 6,
          }}
        >
          Organizá tus consultas, accedé al historial clínico y conectate con tus pacientes desde cualquier lugar. Todo desde tu celular.
        </Typography>

        <Box
          mt={6}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
            mb: 8,
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '40%' } }}>
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
                src={sec6}
                alt="Descargá la app"
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

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" gutterBottom>
              📲 Descargá la app y empezá a gestionar tus pacientes desde cualquier lugar
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={scrollToDownload}
              sx={{ mt: 2, px: 5, py: 1.5, fontWeight: 'bold' }}
            >
              Descargar para Android
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Session1;
