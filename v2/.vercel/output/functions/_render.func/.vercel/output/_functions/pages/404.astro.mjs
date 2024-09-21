/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import { $ as $$ButtonHome } from '../chunks/ButtonHome_C54Jl3Hx.mjs';
import { $ as $$Layout } from '../chunks/Layout_C0EryMjZ.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 not found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-zetdm5md> <h1 class="title" data-astro-cid-zetdm5md>Página no encontrada</h1> <p class="description" data-astro-cid-zetdm5md>Lo sentimos, pero la página que buscas no existe.</p> ${renderComponent($$result2, "ButtonHome", $$ButtonHome, { "data-astro-cid-zetdm5md": true })} </div> ` })} `;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/404.astro", void 0);

const $$file = "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
