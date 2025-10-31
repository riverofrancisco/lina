'use client'
import * as React from 'react';
import {Box,   IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Menu } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import EventIcon from '@mui/icons-material/Event';
import { MenuNavigationProps } from '@/app/home/layout';

interface NavBarProps {
  links: MenuNavigationProps[];
}

const Icons = [ <HomeIcon />,  <EventIcon />, <CollectionsIcon />,<MailIcon /> ];

export default function MobileMenu(props: NavBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '100%', color:"#232323" }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {props.links.map((link, index) =>  {
          let menuPath = link.menuPathName;
          if (menuPath === 'home') {
            menuPath = '';
          }
          return (
            <Link key={link.menuPathName}
                href={`/home/${menuPath}`}
                    style={{ textDecoration: 'none', color: '#000000' }}
                  >
          <ListItem  disablePadding>
          
            <ListItemButton>
              <ListItemIcon sx={{ color: '#232323'}}>
                {Icons[index] || <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={link.menuName.toLocaleUpperCase()} />
            </ListItemButton>
          
          </ListItem>  </Link>
        )})}
      </List>
      
    </Box>
  );

  return (
    <Box >
      <IconButton sx={{ color: '#232323'}} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
