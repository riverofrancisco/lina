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
import MenuIcon from '@mui/icons-material/Menu';

interface NavBarProps {
  links: string[];
}

export default function NavBar(props: NavBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ color: '#000000' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/*    <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box>
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

          <Box>
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
