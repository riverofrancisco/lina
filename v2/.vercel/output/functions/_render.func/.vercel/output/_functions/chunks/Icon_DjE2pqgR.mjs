import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment } from './astro/server_DzhRdlMD.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon } = Astro2.props;
  const { default: innerHTML } = await import(
    /* @vite-ignore */
    `/media/icons/${icon}.svg?raw`
  );
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(innerHTML)}` })}`;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/General/Icon.astro", void 0);

export { $$Icon as $ };
