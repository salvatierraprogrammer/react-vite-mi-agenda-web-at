import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { GiBrain } from 'react-icons/gi'; // Ícono tipo "brain"

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#022031' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo + texto */}
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

          {/* Spacer para empujar el menú a la derecha */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Menú hamburguesa */}
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
            <ListItem button>
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Sobre mí" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Descargar App" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contacto" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
