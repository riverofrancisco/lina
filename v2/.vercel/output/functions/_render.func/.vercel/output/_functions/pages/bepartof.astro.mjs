/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Pagination } from '../chunks/pagination_Bj7sYs3m.mjs';
import { $ as $$Layout } from '../chunks/Layout_C0EryMjZ.mjs';
export { renderers } from '../renderers.mjs';

const $$BepartofPageCont = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/Bepartof/Pages/BepartofPageCont.astro", void 0);

const prerender = false;
const $$Bepartof = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "S\xE9 parte de Lina" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BepartofPageCont", $$BepartofPageCont, {})} ${renderComponent($$result2, "Pagination", $$Pagination, { "prev": "/home", "next": "/events" })} ` })}`;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/bepartof.astro", void 0);

const $$file = "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/bepartof.astro";
const $$url = "/bepartof";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Bepartof,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
