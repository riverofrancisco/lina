import Link from 'next/link';
import './Navbar.css';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import { EnvVarWarning } from '@/components/env-var-warning';
import HeaderAuth from '@/components/header-auth';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItemButton } from '@mui/material';
import { ThemeSwitcher } from '@/components/theme-switcher';


export default function Navbar() {
  return (
    <Box 
      sx={{
        flexGrow: 1,
        width: '100vw',
        boxShadow: 5,
        position: 'fixed',
        top: 0,
        zIndex: 100
      }}
    >
      <AppBar
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', md: 'space-around' },
          alignItems: 'center',
          width: '100%',
          flexDirection: 'row',
          p: 2,
        }}
      >
        <h1>Soy LINA</h1>

        <List
          sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}
        >
          <ListItemButton>
            <Link href={'/home'}>
              <h2>Inicio</h2>
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link href={'/home/about'}>
              <h2>SoyLina</h2>
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link href={'/home/events'}>Fechas</Link>
          </ListItemButton>
          <ListItemButton>
            <Link href={'/home/gallery'}>Galeria</Link>
          </ListItemButton>
          <ListItemButton>
            <Link href={'/home/contact'}>Contacto</Link>
          </ListItemButton>
          <ListItemButton>
            <ThemeSwitcher />
          </ListItemButton>
          <ListItemButton>
            {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
          </ListItemButton>
        </List>
        <Toolbar sx={{ display: { xs: 'inherit', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
