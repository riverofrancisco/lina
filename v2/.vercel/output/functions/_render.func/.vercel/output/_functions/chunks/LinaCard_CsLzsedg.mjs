import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro } from './astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_DjE2pqgR.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$LinaCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinaCard;
  const { title, link, logo } = Astro2.props;
  let targetType = "";
  if (link[0] != "/") {
    targetType = "_blank";
  }
  return renderTemplate`${maybeRenderHead()}<div class="link-card" data-astro-cid-vg4hkzmw> <a${addAttribute(link, "href")}${addAttribute(targetType, "target")} rel="noopener noreferrer" data-astro-cid-vg4hkzmw> <h2 data-astro-cid-vg4hkzmw> ${title} </h2> ${renderComponent($$result, "Icon", $$Icon, { "icon": `${logo}`, "data-astro-cid-vg4hkzmw": true })} </a> </div> `;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/General/LinaCard.astro", void 0);

export { $$LinaCard as $ };
