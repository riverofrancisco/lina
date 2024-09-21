import React, { useState, useEffect } from "react";
import { ContactInfo } from "../../utils/interfaces/interfaces";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/home')
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getNavLinkClass = (path: string) => {
    return currentPath === path
      ? "md:p-2 text-l opacity-100 border-b-black border-b-2 transition-all ease-in-out duration-300" // Estilo activo
      : "md:p-2 text-l hover:opacity-100 opacity-70 hover:border-b-black hover:border-b-2 transition-all ease-in-out duration-100"; // Estilo normal
  };

   useEffect(() => {
     setCurrentPath(window.location.pathname);
   }, []);

  return (
    <nav className="shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-6 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Roboto]">
            <a href="/" className="flex">
              <img
                src={ContactInfo.logoLight}
                className="h-16 me-3"
                alt="logo"
                loading="lazy"
              />
              <span className="self-center text-2xl font-bold whitespace-nowrap">
                Lina Rivero
              </span>
            </a>
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
          <ul className="flex flex-col text-orange-100 items-center absolute w-full left-0 top-20 md:hidden z-10 shadow-lg bg-gray-950 ">
            <li className="w-full text-center py-2 hover:bg-orange-100 hover:text-black">
              <a href="/home" className={getNavLinkClass("/home")}>
                INICIO
              </a>
            </li>
            <li className="w-full text-center py-2 hover:bg-orange-100 hover:text-black">
              <a href="/events" className={getNavLinkClass("/events")}>
                FECHAS
              </a>
            </li>
            <li className="w-full text-center py-2 hover:bg-orange-100 hover:text-black">
              <a href="/gallery" className={getNavLinkClass("/gallery")}>
                GALERIA
              </a>
            </li>
           {/*  <li className="w-full text-center py-2 hover:bg-orange-100 hover:text-black">
              <a href="/contact" className={getNavLinkClass("/contact")}>
                CONTACTO
              </a>
            </li> */}
          </ul>
        )}

        {/* Menú de navegación para pantallas grandes */}
        <ul className="hidden md:flex md:items-center md:z-auto md:w-auto md:static w-full left-0 top-[-400px] transition-all ease-in duration-500">
          <li>
            <a href="/home" className={getNavLinkClass("/home")}>
              INICIO
            </a>
          </li>
          <li>
            <a href="/events" className={getNavLinkClass("/events")}>
              FECHAS
            </a>
          </li>
          <li>
            <a href="/gallery" className={getNavLinkClass("/gallery")}>
              GALERIA
            </a>
          </li>

        {/*   <li>
            <a href="/contact" className={getNavLinkClass("/contact")}>
              CONTACTO
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
