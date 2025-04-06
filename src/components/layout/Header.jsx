import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { GiBrain } from 'react-icons/gi';

const Header = ({ onNavigate }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: theme.palette.background.default,
          position: { xs: 'fixed', md: 'static' },
          boxShadow: 'none', 
        }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center',  backgroundColor: theme.palette.background.default }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <GiBrain size={40} color="#32EE88" style={{ marginRight: 10 }} />
            <Box>
              <Typography variant="h6" sx={{ lineHeight: 1, color: '#FFFFFF', fontWeight: 'bold' }}>
                Abordando
              </Typography>
              <Typography variant="body2" sx={{ color: '#2FE383', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Salud mental
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" onClick={onNavigate.inicio}>Inicio</Button>
            <Button color="inherit" onClick={onNavigate.servicios}>Servicios</Button>
            <Button color="inherit" onClick={onNavigate.descargar}>Descargar App</Button>
            <Button color="inherit" onClick={onNavigate.sobreMi}>Sobre mí</Button>
            <Button color="inherit" onClick={onNavigate.contacto}>Contacto</Button>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem button onClick={onNavigate.inicio}>
              <ListItemIcon><HomeIcon sx={{ color: '#2FE383' }} /></ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem button onClick={onNavigate.servicios}>
              <ListItemIcon><MiscellaneousServicesIcon sx={{ color: '#2FE383' }} /></ListItemIcon>
              <ListItemText primary="Servicios" />
            </ListItem>
            <ListItem button onClick={onNavigate.descargar}>
              <ListItemIcon><DownloadIcon sx={{ color: '#2FE383' }} /></ListItemIcon>
              <ListItemText primary="Descargar App" />
            </ListItem>
            <ListItem button onClick={onNavigate.sobreMi}>
              <ListItemIcon><InfoIcon sx={{ color: '#2FE383' }} /></ListItemIcon>
              <ListItemText primary="Sobre mí" />
            </ListItem>
            <ListItem button onClick={onNavigate.contacto}>
              <ListItemIcon><ContactMailIcon sx={{ color: '#2FE383' }} /></ListItemIcon>
              <ListItemText primary="Contacto" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
