import React from "react";
import "./TimerLoader.css";

export const TimerLoader = () => {
  return (
    <div className="flex flex-col items-center w-full p-10 bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-300 mb-4">
        Cargando próxima fecha...
      </h1>
      <div className="flex w-full items-center justify-around text-gray-300 space-x-4">
        
        <div className="loader"></div>
       
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mt-4">
        ¡Por favor espera un momento!
      </h2>
    </div>
  );
};
