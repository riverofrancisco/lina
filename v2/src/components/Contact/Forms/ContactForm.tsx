import React, { useState, useEffect } from "react";
import { EmailSender } from "../../../utils/middlewares/emails/sendEmail";
import ButtonHome from "../../General/ButtonHome.astro";

export const ContactForm = () => {
  const [other, setOther] = useState("");

  const [currentData, setCurrentData] = useState();

  /* const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [parentProperty, childProperty] = name.split(".");
      setCurrentData((currentData: any) => ({
        ...currentData,
        [parentProperty]: {
          ...currentData[parentProperty],
          [childProperty]: value,
        },
      }));
    } else if (name === "other") {
      setOther(value);
      if (value !== "Otra") {
        setCurrentData((currentData: any) => ({
          ...currentData,
          stats: value,
        }));
      }
    } else {
      setCurrentData({
        ...currentData,
        [name]: value,
      });
    }
    console.log(currentData)
  };

  const handleSubmit = async () => {
    const res = await fetch("api/send-email", { method: "POST" });

    console.log(res);
  }; */

  return (
    <div className="max-w-xl mx-auto bg-orange-50 p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Lina en tu evento</h2>
      {/*  <button className="p-1 bg-gray-400" onClick={handleSubmit}>
        PRUEBA ENVIO
      </button> */}
      {/*  <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="firstName"
            >
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="client.name"
              className="mt-1 p-2 w-full border rounded-md shadow-sm"
              placeholder="Nombre"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="lastName"
            >
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              name="client.lastName"
              className="mt-1 p-2 w-full border rounded-md shadow-sm"
              placeholder="Apellido"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="client.email"
            className="mt-1 p-2 w-full border rounded-md shadow-sm"
            placeholder="correo@example.com"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            type="phone"
            id="phone"
            name="client.phone"
            className="mt-1 p-2 w-full border rounded-md shadow-sm"
            placeholder="+54 11 1234 5678"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="eventType"
          >
            Tipo de Evento
          </label>
          <select
            id="eventType"
            className="mt-1 p-2 w-full border rounded-md shadow-sm"
            required
          >
            <option value="">Selecciona el tipo de evento</option>
            <option value="wedding">Evento privado</option>
            <option value="birthday">Festival</option>
            <option value="corporate">Corporativo</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="eventDate"
            >
              Fecha del Evento
            </label>
            <input
              type="date"
              id="eventDate"
              className="mt-1 p-2 w-full border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="flex-1">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="eventTime"
            >
              Hora del Evento
            </label>
            <input
              type="time"
              id="eventTime"
              className="mt-1 p-2 w-full border rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="guests"
          >
            Cantidad de Personas
          </label>
          <input
            type="number"
            id="guests"
            className="mt-1 p-2 w-full border rounded-md shadow-sm"
            placeholder="Número de invitados"
            min="1"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="comments"
          >
            Comentarios
          </label>
          <textarea
            id="comments"
            className="mt-1 p-2 w-full border rounded-md shadow-sm"
            placeholder="Escribe tus comentarios o preguntas aquí"
            rows={4}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-4 p-2 w-full sm:w-auto bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 transition-all"
          >
            Enviar
          </button>
        </div>
      </form> */}
    </div>
  );
};
