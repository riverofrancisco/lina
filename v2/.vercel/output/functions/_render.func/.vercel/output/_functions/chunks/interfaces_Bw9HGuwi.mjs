import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro } from './astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/node_modules/astro/components/ViewTransitions.astro", void 0);

const logo = new Proxy({"src":"/_astro/Logo.D3BJNREr.png","width":1563,"height":1563,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/public/media/pictures/Logo.png";
							}
							
							return target[name];
						}
					});

const logodark = new Proxy({"src":"/_astro/Logodark.B_CPhm8u.png","width":1563,"height":1563,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/public/media/pictures/Logodark.png";
							}
							
							return target[name];
						}
					});

const ContactInfo = {
  mail: "info@linarivero.com.ar",
  mailLink: "mailto:info@linarivero.com.ar",
  whatsapp: "+549 11 58764044",
  whatsappLink: "https://wa.me/5491158764044",
  instagramLink: "https://www.instagram.com/_linarivero/",
  instagramMD: "https://ig.me/m/_linarivero",
  youtubeLink: "https://www.youtube.com/@_linarivero",
  tiktokLink: "https://www.tiktok.com/@_linarivero",
  spotifyLink: "https://open.spotify.com/artist/3binED05LZgUfuz7ODLCMX?si=9yS8RHbTTEieMvOW7aygig",
  mediaUser: "_linarivero",
  profilePic: "",
  logoLight: logo.src,
  logoDark: logodark.src
};
const EmptyClient = {
  name: "",
  lastName: "",
  email: "",
  phone: 0,
  other: ""
};
const EmptyEvent = {
  guests: null,
  date: "",
  country: "",
  city: "",
  locationLink: "",
  type: ""
};
const EmptyContactForm = {
  event: EmptyEvent,
  client: EmptyClient,
  coments: ""
};

export { $$ViewTransitions as $, ContactInfo as C, EmptyContactForm as E };
