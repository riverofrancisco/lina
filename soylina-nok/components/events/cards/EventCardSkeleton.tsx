import React from "react";
import "./EventCardSkeleton.css"; // Asegúrate de tener los estilos para la animación

export const EventCardSkeleton = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-lg overflow-hidden animate-pulse">
      {/* Imagen Placeholder */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Contenido de la Card Placeholder */}
      <div className="p-4">
        {/* Título Placeholder */}
        <div className="h-6 bg-gray-300 mb-2 rounded"></div>

        {/* Fecha Placeholder */}
        <div className="flex items-center text-gray-600 mb-4">
          <div className="w-5 h-5 mr-2 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        </div>

        {/* Ubicación Placeholder */}
        <div className="h-4 w-1/2 bg-gray-300 rounded mb-4"></div>

        {/* Botón Placeholder */}
        <div className="flex justify-between">
          <div className="h-8 w-1/4 bg-gray-300 rounded"></div>
          <div className="h-8 w-1/4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
