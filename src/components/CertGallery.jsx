import React, { useState, useImperativeHandle, forwardRef } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const certificates = [
  { src: '/src/assets/imgcert/certat.png', title: 'Certificación como Acompañante Terapéutico' },
  { src: '/src/assets/imgcert/certpsicosis.png', title: 'Certificado en abordaje en Psicosis' },
  { src: '/src/assets/imgcert/certdispositivos.png', title: 'Certificado en Dispositivos Terapéuticos' },
  { src: '/src/assets/imgcert/certadulto.png', title: 'Certificado en abordaje en tercera edad' },
  { src: '/src/assets/imgcert/certautismo.png', title: 'Certificado en abordaje en Autismo' },
  { src: '/src/assets/imgcert/certencuadre.png', title: 'Certificado en Encuadre Terapéutico' },
  { src: '/src/assets/imgcert/certadicciones.png', title: 'Certificado en Adicciones' },
  { src: '/src/assets/imgcert/certforo.png', title: 'Participación en Foros Terapéuticos' },
  { src: '/src/assets/imgcert/certrans.png', title: 'Certificado en Niñeces y Adolecencias trans en escuelas' },
];

const CertGallery = forwardRef((props, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    openAtIndex: (index) => {
      setCurrentIndex(index);
      setOpen(true);
    },
  }));

  const handleClose = () => setOpen(false);
  const handleNext = () => setCurrentIndex((i) => (i + 1) % certificates.length);
  const handlePrev = () => setCurrentIndex((i) => (i - 1 + certificates.length) % certificates.length);

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth={isMobile ? 'xs' : 'md'}
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : 3,
            bgcolor: 'background.paper',
            overflow: 'hidden',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            px: 2,
            py: 1.5,
          }}
        >
          <Typography
            variant="subtitle1"
            noWrap
            sx={{ maxWidth: '85%', fontWeight: 500 }}
            title={certificates[currentIndex]?.title}
          >
            {certificates[currentIndex]?.title}
          </Typography>
          <IconButton color="inherit" onClick={handleClose} aria-label="cerrar">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            position: 'relative',
            p: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.paper,
            height: isMobile ? 'calc(100vh - 200px)' : 'auto',
          }}
        >
          <Box
            component="img"
            src={certificates[currentIndex]?.src}
            alt={certificates[currentIndex]?.title}
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          <IconButton
            onClick={handlePrev}
            sx={{ ...navButtonStyle('left'), ...(isMobile && { left: 4 }) }}
            aria-label="anterior"
          >
            <NavigateBeforeIcon fontSize={isMobile ? 'medium' : 'large'} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{ ...navButtonStyle('right'), ...(isMobile && { right: 4 }) }}
            aria-label="siguiente"
          >
            <NavigateNextIcon fontSize={isMobile ? 'medium' : 'large'} />
          </IconButton>
        </DialogContent>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            py: 2,
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '20px',
              px: 4,
              textTransform: 'none',
              fontSize: isMobile ? '0.875rem' : '1rem',
            }}
          >
            Cerrar
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
});

const navButtonStyle = (side) => ({
  position: 'absolute',
  [side]: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white',
  zIndex: 10,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});

export default CertGallery;
