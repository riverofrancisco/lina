import React, { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentPath = window.location.pathname;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getNavLinkClass = (path: string) => {
    return currentPath === path
      ? "md:p-2 text-l opacity-100 border-b-black border-b-2 transition-all ease-in-out duration-300" // Estilo activo
      : "md:p-2 text-l hover:opacity-100 opacity-70 hover:border-b-black hover:border-b-2 transition-all ease-in-out duration-100"; // Estilo normal
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
              <a href="/home" className={getNavLinkClass("/home")}>
                INICIO
              </a>
            </li>
            <li className="w-full text-center py-2 hover:bg-orange-100">
              <a href="/events" className={getNavLinkClass("/events")}>
                FECHAS
              </a>
            </li>
            <li className="w-full text-center py-2 hover:bg-orange-100">
              <a href="/gallery" className={getNavLinkClass("/gallery")}>
                GALERIA
              </a>
            </li>
            <li className="w-full text-center py-2 hover:bg-orange-100">
              <a href="/contact" className={getNavLinkClass("/contact")}>
                CONTACTO
              </a>
            </li>
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

          <li>
            <a href="/contact" className={getNavLinkClass("/contact")}>
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
