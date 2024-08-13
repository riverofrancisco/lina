import React, { useState } from "react";
import Icon from "./Icon.astro";
import linalogo from "../../public/data/pictures/Lina Logo.png";
//import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

 

  return (
    <nav className=" bg-#ffd0bf shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 p-4 md:flex md:items-center md:justify-between ">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Roboto]">
            <a href="/">Lina Rivero</a>
          </span>
          <span
            className="text-3xl cursor-pointer md:hidden block mx-2"
            onClick={toggleDrawer(true)}
          >
            
          </span>
        </div>

        {/*  <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          <a href="/home">
            <ListItem key="DR-Home" disablePadding>
              <ListItemText primary="Inicio" />
            </ListItem>
          </a>
          <Divider />
          <a href="/bepartof">
            <ListItem key="DR-Bepartof" disablePadding>
              <ListItemText primary="Se parte de" />
            </ListItem>
          </a>
          <Divider />
          <a href="/events">
            <ListItem key="DR-Events" disablePadding>
              <ListItemText primary="Eventos y Fechas" />
            </ListItem>
          </a>
          <Divider />
          <a href="/contact">
            <ListItem key="DR-Contact" disablePadding>
              <ListItemText primary="Contacto" />
            </ListItem>
          </a>
          <Divider />
        </List>
      </Drawer> */}

        <ul className="hidden md:flex md:items-center md:z-auto md:w-auto md:static w-full left-0 top-[-400px] transition-all ease-in duration-500">
          <li className="hover:border-b border-b-transparent hover:border-b-black transition-all ease-in-out duration-500">
            <a
              href="/home"
              className="md:p-2 text-l hover:opacity-100 opacity-70 transition-all ease-in-out duration-300"
            >
              INICIO
            </a>
          </li>
          <li className="hover:border-b border-b-transparent hover:border-b-black transition-all ease-in-out duration-500">
            <a
              href="/bepartof"
              className="md:p-2 text-l hover:opacity-100 opacity-70 transition-all ease-in-out duration-300"
            >
              SE PARTE DE
            </a>
          </li>
          <li className="hover:border-b border-b-transparent hover:border-b-black transition-all ease-in-out duration-500">
            <a
              href="/events"
              className="md:p-2 text-l hover:opacity-100 opacity-70 transition-all ease-in-out duration-300 "
            >
              EVENTOS
            </a>
          </li>
          <li className="hover:border-b border-b-transparent hover:border-b-black transition-all ease-in-out duration-500">
            <a
              href="/contact"
              className="md:p-2 text-l hover:opacity-100 opacity-70 transition-all ease-in-out duration-300 "
            >
              CONTACTOS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
