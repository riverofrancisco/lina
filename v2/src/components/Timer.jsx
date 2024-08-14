import React, { useState, useEffect } from "react";
import { calculateTimeLeft } from "../utils/middlewares/calculateTime";

export const Timer = ({ nextDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(nextDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(nextDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [nextDate]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-4xl font-extrabold text-gray-800">
        {timeLeft[interval]}{" "}
        <span className="text-xl font-semibold">{interval}</span>{" "}
      </span>,
    );
  });

  return (
    <div className="flex flex-col items-center w-full p-10 bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-700 mb-4">
        ¡No Falta Mucho!
      </h1>
      <div className="flex w-full items-center justify-around text-gray-900 space-x-4">
        {timerComponents}
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mt-4">
        para la próxima fecha
      </h2>
    </div>
  );
};
