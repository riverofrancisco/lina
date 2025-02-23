import Link from 'next/link';
import './Navbar.css';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import { EnvVarWarning } from '@/components/env-var-warning';
import HeaderAuth from '@/components/header-auth';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, width: '100vw' }}>
      <AppBar
        position="static"
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
          <li>
            <Link href={'/home'}>
              <h2>Inicio</h2>
            </Link>
          </li>
          <li>
            <Link href={'/home/about'}>
              <h2>SoyLina</h2>
            </Link>
          </li>
          <li>
            <Link href={'/home/events'}>Fechas</Link>
          </li>
          <li>
            <Link href={'/home/gallery'}>Galeria</Link>
          </li>
          <li>
            <Link href={'/home/contact'}>Contacto</Link>
          </li>
          <li>{!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}</li>
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
