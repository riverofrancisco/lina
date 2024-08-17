import React, { useState, useEffect } from "react";
import { calculateTimeLeft } from "../../utils/middlewares/calculateTime";

interface TimerI {
  nextDate: string
}

export const Timer = ({ nextDate }: TimerI) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(nextDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(nextDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [nextDate]);

  const timerComponents: any[] = [];

  Object.keys(timeLeft).forEach((interval: any) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-4xl font-extrabold text-gray-200">
        {timeLeft[interval]}{" "}
        <span className="text-sm sm:text-xl font-semibold">{interval}</span>{" "}
      </span>,
    );
  });

  return (
    <div className="flex flex-col items-center w-full p-10 bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-300 mb-4">
        ¡Solamente quedan
      </h1>
      <div className="flex w-full items-center justify-around text-gray-300 space-x-4">
        {timerComponents}
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mt-4">
        para la próxima fecha!
      </h2>
    </div>
  );
};
