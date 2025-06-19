import React from 'react';
import './TimerLoader.css';

export const TimerLoader = () => {
  return (
    <div className="timer-loader-container">
      <div className="timer-loader-title">
        Pronto se publicarán nuevas fechas
      </div>
      <div className="timer-loader-center">
        <div className="loader">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="timer-loader-subtitle">Gracias por esperar</div>
    </div>
  );
};
