/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute } from '../chunks/astro/server_DzhRdlMD.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../chunks/Icon_DjE2pqgR.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { E as EmptyContactForm } from '../chunks/interfaces_Bw9HGuwi.mjs';
import '../chunks/ButtonHome_C54Jl3Hx.mjs';
import { c as car2 } from '../chunks/corrientes_vd4kfguO.mjs';
/* empty css                                   */
import { $ as $$Pagination } from '../chunks/pagination_Bj7sYs3m.mjs';
import { $ as $$Layout } from '../chunks/Layout_C0EryMjZ.mjs';
export { renderers } from '../renderers.mjs';

const ContactForm = () => {
  const [other, setOther] = useState("");
  const [currentData, setCurrentData] = useState(EmptyContactForm);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [parentProperty, childProperty] = name.split(".");
      setCurrentData((currentData2) => ({
        ...currentData2,
        [parentProperty]: {
          ...currentData2[parentProperty],
          [childProperty]: value
        }
      }));
    } else if (name === "other") {
      setOther(value);
      if (value !== "Otra") {
        setCurrentData((currentData2) => ({
          ...currentData2,
          stats: value
        }));
      }
    } else {
      setCurrentData({
        ...currentData,
        [name]: value
      });
    }
    console.log(currentData);
  };
  const handleSubmit = async () => {
    const res = await fetch("api/send-email", { method: "POST" });
    console.log(res);
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto bg-orange-50 p-6 shadow-md rounded-md", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-center", children: "Lina en tu evento" }),
    /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:space-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "block text-sm font-medium text-gray-700",
              htmlFor: "firstName",
              children: "Nombre"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "firstName",
              name: "client.name",
              className: "mt-1 p-2 w-full border rounded-md shadow-sm",
              placeholder: "Nombre",
              onChange: handleChange,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "block text-sm font-medium text-gray-700",
              htmlFor: "lastName",
              children: "Apellido"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "lastName",
              name: "client.lastName",
              className: "mt-1 p-2 w-full border rounded-md shadow-sm",
              placeholder: "Apellido",
              onChange: handleChange,
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-sm font-medium text-gray-700",
            htmlFor: "email",
            children: "Email"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "client.email",
            className: "mt-1 p-2 w-full border rounded-md shadow-sm",
            placeholder: "correo@example.com",
            onChange: handleChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-sm font-medium text-gray-700",
            htmlFor: "phone",
            children: "Teléfono"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "phone",
            id: "phone",
            name: "client.phone",
            className: "mt-1 p-2 w-full border rounded-md shadow-sm",
            placeholder: "+54 11 1234 5678",
            onChange: handleChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-sm font-medium text-gray-700",
            htmlFor: "eventType",
            children: "Tipo de Evento"
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "eventType",
            className: "mt-1 p-2 w-full border rounded-md shadow-sm",
            required: true,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Selecciona el tipo de evento" }),
              /* @__PURE__ */ jsx("option", { value: "wedding", children: "Evento privado" }),
              /* @__PURE__ */ jsx("option", { value: "birthday", children: "Festival" }),
              /* @__PURE__ */ jsx("option", { value: "corporate", children: "Corporativo" }),
              /* @__PURE__ */ jsx("option", { value: "other", children: "Otro" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:space-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "block text-sm font-medium text-gray-700",
              htmlFor: "eventDate",
              children: "Fecha del Evento"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              id: "eventDate",
              className: "mt-1 p-2 w-full border rounded-md shadow-sm",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "block text-sm font-medium text-gray-700",
              htmlFor: "eventTime",
              children: "Hora del Evento"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "time",
              id: "eventTime",
              className: "mt-1 p-2 w-full border rounded-md shadow-sm",
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-sm font-medium text-gray-700",
            htmlFor: "guests",
            children: "Cantidad de Personas"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            id: "guests",
            className: "mt-1 p-2 w-full border rounded-md shadow-sm",
            placeholder: "Número de invitados",
            min: "1",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-sm font-medium text-gray-700",
            htmlFor: "comments",
            children: "Comentarios"
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "comments",
            className: "mt-1 p-2 w-full border rounded-md shadow-sm",
            placeholder: "Escribe tus comentarios o preguntas aquí",
            rows: 4
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "mt-4 p-2 w-full sm:w-auto bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 transition-all",
          children: "Enviar"
        }
      ) })
    ] })
  ] });
};

const $$ContactPageCont = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="contact-section" data-astro-cid-qf4emcyz> <div class="contact-info" data-astro-cid-qf4emcyz> ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/Contact/Forms/ContactForm", "client:component-export": "ContactForm", "data-astro-cid-qf4emcyz": true })} </div> <div class="pic-container" data-astro-cid-qf4emcyz> <div class="contact-links bg-orange-50 rounded-md shadow-md" data-astro-cid-qf4emcyz> <div class="flex items-center" data-astro-cid-qf4emcyz> <p class="mr-2" data-astro-cid-qf4emcyz>info@linarivero.com.ar</p> <button data-astro-cid-qf4emcyz> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy" data-astro-cid-qf4emcyz> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-qf4emcyz></path> <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" data-astro-cid-qf4emcyz></path> <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" data-astro-cid-qf4emcyz></path>
cd ..</svg> </button> </div> <div class="flex items-center" data-astro-cid-qf4emcyz> ${renderComponent($$result, "Icon", $$Icon, { "icon": "wp", "data-astro-cid-qf4emcyz": true })}<p class="ml-2" data-astro-cid-qf4emcyz>+549 11 12345678 </p> </div> </div> <img class="contact-pic"${addAttribute(car2.src, "src")} alt="Corrientes, Buenos Aires" data-astro-cid-qf4emcyz> </div> </div> `;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/Contact/Pages/ContactPageCont.astro", void 0);

const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contratar Show" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactPageCont", $$ContactPageCont, {})} ${renderComponent($$result2, "Pagination", $$Pagination, { "prev": "/gallery", "prevTitle": "Galeria", "next": "/home", "nextTitle": "Inicio" })} ` })}`;
}, "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
