import React, { useState } from "react";
import Icon from "./Icon.astro";
//import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-#ffd0bf shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Roboto]">
            <a href="/">Lina Rivero</a>
          </span>
          <span
            className="text-3xl cursor-pointer md:hidden block mx-2"
            onClick={toggleMenu}
          >
            {/* Ícono de menú para dispositivos móviles */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </span>
        </div>

        {menuOpen && (
          <ul className="flex flex-col items-center absolute w-full left-0 top-20 md:hidden z-10 shadow-lg bg-gray-100 ">
            <li className="w-full text-center py-2 hover:bg-orange-100">
              <a href="/home" className="text-lg block">
                INICIO
              </a>
            </li>
            <li className="w-full text-center py-2 hover:bg-orange-100">
              <a href="/gallery" className="text-lg block">
                GALERIA
              </a>
            </li>
            <li className="w-full text-center py-2 hover:bg-orange-100">
              <a href="/events" className="text-lg block">
                FECHAS
              </a>
            </li>
            <li className="w-full text-center py-2 hover:bg-orange-100">
              <a href="/contact" className="text-lg block">
                CONTACTO
              </a>
            </li>
          </ul>
        )}

        {/* Menú de navegación para pantallas grandes */}
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
              href="/gallery"
              className="md:p-2 text-l hover:opacity-100 opacity-70 transition-all ease-in-out duration-300"
            >
              GALERIA
            </a>
          </li>
          <li className="hover:border-b border-b-transparent hover:border-b-black transition-all ease-in-out duration-500">
            <a
              href="/events"
              className="md:p-2 text-l hover:opacity-100 opacity-70 transition-all ease-in-out duration-300 "
            >
              FECHAS
            </a>
          </li>
          <li className="hover:border-b border-b-transparent hover:border-b-black transition-all ease-in-out duration-500">
            <a
              href="/contact"
              className="md:p-2 text-l hover:opacity-100 opacity-70 transition-all ease-in-out duration-300 "
            >
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
