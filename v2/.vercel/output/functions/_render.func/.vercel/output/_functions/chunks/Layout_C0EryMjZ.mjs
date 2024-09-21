import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import { C as ContactInfo, $ as $$ViewTransitions } from './interfaces_Bw9HGuwi.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';
/* empty css                            */

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/home");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const getNavLinkClass = (path) => {
    return currentPath === path ? "md:p-2 text-l opacity-100 border-b-black border-b-2 transition-all ease-in-out duration-300" : "md:p-2 text-l hover:opacity-100 opacity-70 hover:border-b-black hover:border-b-2 transition-all ease-in-out duration-100";
  };
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  return /* @__PURE__ */ jsx("nav", { className: "shadow", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-6 md:flex md:items-center md:justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-2xl font-[Roboto]", children: /* @__PURE__ */ jsxs("a", { href: "/", className: "flex", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: ContactInfo.logoLight,
            className: "h-16 me-3",
            alt: "logo",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "self-center text-2xl font-bold whitespace-nowrap", children: "Lina Rivero" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-3xl cursor-pointer md:hidden block mx-2",
          onClick: toggleMenu,
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16m-7 6h7"
                }
              )
            }
          )
        }
      )
    ] }),
    menuOpen && /* @__PURE__ */ jsxs("ul", { className: "flex flex-col text-orange-100 items-center absolute w-full left-0 top-20 md:hidden z-10 shadow-lg bg-gray-950 ", children: [
      /* @__PURE__ */ jsx("li", { className: "w-full text-center py-2 hover:bg-orange-100 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "/home", className: getNavLinkClass("/home"), children: "INICIO" }) }),
      /* @__PURE__ */ jsx("li", { className: "w-full text-center py-2 hover:bg-orange-100 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "/events", className: getNavLinkClass("/events"), children: "FECHAS" }) }),
      /* @__PURE__ */ jsx("li", { className: "w-full text-center py-2 hover:bg-orange-100 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "/gallery", className: getNavLinkClass("/gallery"), children: "GALERIA" }) })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "hidden md:flex md:items-center md:z-auto md:w-auto md:static w-full left-0 top-[-400px] transition-all ease-in duration-500", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/home", className: getNavLinkClass("/home"), children: "INICIO" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/events", className: getNavLinkClass("/events"), children: "FECHAS" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/gallery", className: getNavLinkClass("/gallery"), children: "GALERIA" }) })
    ] })
  ] }) });
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white dark:bg-black"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="/" class="flex items-center"> <img${addAttribute(ContactInfo.logoDark, "src")} class="h-16 me-3" alt="logo" loading="lazy"> <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Lina Rivero</span> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Calendario</h2> <ul class="text-gray-500 dark:text-gray-400 "> <li class="mb-4"> <a href="/events" class="hover:underline">Fechas y eventos</a> </li> <!--                       <li>
                          <a href="/contact" class="hover:underline ">Pedí una fecha</a>
                      </li> --> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Lina en redes</h2> <ul class="text-gray-500 dark:text-gray-400 "> <li class="mb-4"> <a${addAttribute(ContactInfo.instagramLink, "href")} target="_blank" class="hover:underline ">Instagram</a> </li> <li> <a${addAttribute(ContactInfo.spotifyLink, "href")} target="_blank" class="hover:underline ">Spotify</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2> <ul class="text-gray-500 dark:text-gray-400"> <li class="mb-4"> <a${addAttribute(ContactInfo.instagramMD, "href")} target="_blank" class="hover:underline">MD a Instagram</a> </li> <li> <a${addAttribute(ContactInfo.mailLink, "href")} target="_self" class="hover:underline">${ContactInfo.mail}</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <div class="flex mt-4 sm:justify-center sm:mt-0 sm:mb-0 mb-5"> <a${addAttribute(ContactInfo.spotifyLink, "href")} target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all duration-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-spotify"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-2.168 11.605c-1.285 -1.927 -4.354 -2.132 -6.387 -.777a1 1 0 0 0 1.11 1.664c1.195 -.797 3.014 -.675 3.613 .223a1 1 0 1 0 1.664 -1.11m1.268 -3.245c-2.469 -1.852 -5.895 -2.187 -8.608 -.589a1 1 0 0 0 1.016 1.724c1.986 -1.171 4.544 -.92 6.392 .465a1 1 0 0 0 1.2 -1.6m1.43 -3.048c-3.677 -2.298 -7.766 -2.152 -10.977 -.546a1 1 0 0 0 .894 1.788c2.635 -1.317 5.997 -1.437 9.023 .454a1 1 0 1 0 1.06 -1.696"></path></svg> <span class="sr-only">Lina en Spotify</span> </a> <a${addAttribute(ContactInfo.tiktokLink, "href")} target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 transition-all duration-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path></svg> <span class="sr-only">TikTok</span> </a> <a${addAttribute(ContactInfo.instagramLink, "href")} target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 transition-all duration-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg> <span class="sr-only">Instagram</span> </a> <a${addAttribute(ContactInfo.youtubeLink, "href")} target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 transition-all duration-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"></path></svg> <span class="sr-only">Youtube</span> </a> </div> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://frivero.com.ar/" target="_blank" class="hover:underline">FREDI™</a>. All Rights Reserved.
</span> </div> </div> </footer>`;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/General/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/Linalogo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/General/Navbar", "client:component-export": "Navbar" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
