'use client';

import { useState, useEffect, useRef } from 'react';
import { calculateTimeLeft } from '@/utils/middlewares/timeCalculator';
import './Timer.css';

export const Timer = ({ nextDate, inHome }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(nextDate));
  const [animate, setAnimate] = useState({});
  const prevTimeLeft = useRef(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = calculateTimeLeft(nextDate);
        const newAnimate = {};
        Object.keys(newTime).forEach((key) => {
          if (newTime[key] !== prevTimeLeft.current[key]) {
            newAnimate[key] = true;
          }
        });
        setAnimate(newAnimate);
        prevTimeLeft.current = newTime;
        return newTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [nextDate]);

  // Remove animation class after 500ms
  useEffect(() => {
    if (Object.keys(animate).length > 0) {
      const timeout = setTimeout(() => setAnimate({}), 500);
      return () => clearTimeout(timeout);
    }
  }, [animate]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;
    timerComponents.push(
      <div className="timer-segment" key={interval}>
        <span
          className={`timer-number${animate[interval] ? ' timer-animate' : ''}`}
        >
          {timeLeft[interval]}
        </span>
        <span className="timer-label">{interval}</span>
      </div>
    );
  });

  return (
    <div className={inHome ? "timer-container" : "timer-container-noHome"}>
      <div className="timer-title">Próxima fecha en</div>
      <div className="timer-countdown">{timerComponents}</div>
    </div>
  );
};
