/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import { $ as $$LinaCard } from '../chunks/LinaCard_CsLzsedg.mjs';
import { $ as $$ViewTransitions, C as ContactInfo } from '../chunks/interfaces_Bw9HGuwi.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PhotoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PhotoLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/Linalogo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/layouts/PhotoLayout.astro", void 0);

const videoSrc = "/_astro/homeToma1.CDJxdmCx.mp4";

const $$VideoWelcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<video muted autoplay loop data-astro-cid-ecqwxofi> <source${addAttribute(videoSrc, "src")} type="video/mp4" data-astro-cid-ecqwxofi> </video> <div class="capa" data-astro-cid-ecqwxofi></div> `;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/Gallery/Cards/VideoWelcome.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PhotoLayout", $$PhotoLayout, { "title": "Lina Rivero Links", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "VideoWelcome", $$VideoWelcome, { "data-astro-cid-j7pv25f6": true })} <div class="welcome" data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6><span class="text-gradient" data-astro-cid-j7pv25f6>Lina Rivero</span></h1> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LinaCard", $$LinaCard, { "link": "/socialmedia", "title": "Lina en Redes sociales", "logo": "share", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "LinaCard", $$LinaCard, { "link": ContactInfo.spotifyLink, "title": "Escucha mis canciones", "logo": "sing", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "LinaCard", $$LinaCard, { "link": ContactInfo.mailLink, "title": "Contratar Show", "logo": "mail", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "LinaCard", $$LinaCard, { "link": "/home", "title": "Ver M\xE1s", "logo": "add", "data-astro-cid-j7pv25f6": true })} </ul> </div></main> ` })} `;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/index.astro", void 0);

const $$file = "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
