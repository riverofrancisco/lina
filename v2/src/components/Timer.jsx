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
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>,
    );
  });

  return (
    <div class="flex w-full items-center justify-around p-10 bg-gray-300">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};
