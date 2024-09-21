import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prev, prevTitle, next, nextTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex py-2" data-astro-cid-2kwnr3xf> <!-- Previous Button --> <a${addAttribute(`${prev}`, "href")} class="flex items-center justify-center border-2 border-neutral-700 px-3 h-8 me-3 text-sm font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 rounded" data-astro-cid-2kwnr3xf> <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" data-astro-cid-2kwnr3xf> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" data-astro-cid-2kwnr3xf></path> </svg> ${prevTitle} </a> <a${addAttribute(`${next}`, "href")} class="flex items-center justify-center border-2 border-neutral-700 px-3 h-8 text-sm font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 rounded" data-astro-cid-2kwnr3xf> ${nextTitle} <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" data-astro-cid-2kwnr3xf> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" data-astro-cid-2kwnr3xf></path> </svg> </a> </div> `;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/General/pagination.astro", void 0);

export { $$Pagination as $ };
