import './Navbar.css';
import Link from 'next/link';
import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import MobileMenu from './MobileMenu';

interface NavBarProps {
  links: string[];
}

export default function NavBar(props: NavBarProps) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{  zIndex: 100 , height:'65px',color: '#232323', justifyContent: 'center' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box >
            <Link
              href="/"
              style={{
                display: 'flex',
                textDecoration: 'none',
                color: '#000000',
              }}
            >
              <img src="/pictures/logodark.png" alt="" />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Lina Rivero
              </Typography>
            </Link>
          </Box>
     <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
            <MobileMenu links={props.links} />
            </Box>
          <Box sx={{ display: {xs: "none", sm:'flex'}, alignItems: 'center' }}>
            {props.links.map((menu: string) => {
              let menuName = menu;
              if (menuName === 'home') {
                menuName = '';
              }
              return (
                <Button key={menuName} color="inherit">
                  <Link
                    href={`/home/${menuName}`}
                    style={{ textDecoration: 'none', color: '#000000' }}
                  >
                    {menu}
                  </Link>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
