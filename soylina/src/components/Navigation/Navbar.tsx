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
import { MenuNavigationProps } from '@/app/home/layout';


interface NavBarProps {
  links: MenuNavigationProps[];
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
            {props.links.map((menu: MenuNavigationProps) => {
              let menuPath = menu.menuPathName;
              
              return (
                <Button key={menuPath} color="inherit">
                  <Link
                    href={`/home/${menuPath}`}
                    style={{ textDecoration: 'none', color: '#000000' }}
                  >
                    {menu.menuName}
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
