/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro, e as renderHead, f as renderSlot } from '../chunks/astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../chunks/Icon_DjE2pqgR.mjs';
/* empty css                                       */
import { $ as $$ViewTransitions, C as ContactInfo } from '../chunks/interfaces_Bw9HGuwi.mjs';
import { $ as $$LinaCard } from '../chunks/LinaCard_CsLzsedg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SocialMediaCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialMediaCard;
  const { logo, link, color, title, user } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`media-${logo}`, "class")} data-astro-cid-oqks27zs> <div class="flex sm:flex-col justify-between items-start mr-3 w-full" data-astro-cid-oqks27zs> <h2 class="hidden sm:flex" data-astro-cid-oqks27zs>${title}</h2> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-oqks27zs> <button class="follow" data-astro-cid-oqks27zs>Follow<p data-astro-cid-oqks27zs>${user}</p></button> </a> </div> <a class="icon-link"${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-oqks27zs> ${renderComponent($$result, "Icon", $$Icon, { "icon": `${logo}`, "data-astro-cid-oqks27zs": true })} </a> </div> `;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/SocialMedia/Cards/SocialMediaCard.astro", void 0);

const $$Astro = createAstro();
const $$SocialMediaLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialMediaLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/Linalogo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/layouts/SocialMediaLayout.astro", void 0);

const prerender = false;
const $$Socialmedia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SocialMediaLayout", $$SocialMediaLayout, { "title": "Social Media", "data-astro-cid-tzft54gn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-tzft54gn> <div class="social-media-grid" data-astro-cid-tzft54gn> ${renderComponent($$result2, "SocialMediaCard", $$SocialMediaCard, { "link": `${ContactInfo.youtubeLink}`, "title": "Youtube", "logo": "youtube", "user": `@${ContactInfo.mediaUser}`, "data-astro-cid-tzft54gn": true })} ${renderComponent($$result2, "SocialMediaCard", $$SocialMediaCard, { "link": `${ContactInfo.spotifyLink}`, "title": "Spotify", "logo": "spoty2", "user": "Lina Rivero", "data-astro-cid-tzft54gn": true })} ${renderComponent($$result2, "SocialMediaCard", $$SocialMediaCard, { "link": `${ContactInfo.instagramLink}`, "title": "Instagram", "logo": "insta", "user": `@${ContactInfo.mediaUser}`, "data-astro-cid-tzft54gn": true })} ${renderComponent($$result2, "SocialMediaCard", $$SocialMediaCard, { "link": `${ContactInfo.tiktokLink}`, "title": "Tiktok", "logo": "tiktok", "user": `${ContactInfo.mediaUser}`, "data-astro-cid-tzft54gn": true })} </div> <div class="nav" data-astro-cid-tzft54gn> ${renderComponent($$result2, "LinaCard", $$LinaCard, { "link": "/", "title": "Volver", "logo": "back", "data-astro-cid-tzft54gn": true })} ${renderComponent($$result2, "LinaCard", $$LinaCard, { "link": "/home", "title": "Ver M\xE1s", "logo": "add", "data-astro-cid-tzft54gn": true })} </div> </main> ` })} `;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/socialmedia.astro", void 0);

const $$file = "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/socialmedia.astro";
const $$url = "/socialmedia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Socialmedia,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
