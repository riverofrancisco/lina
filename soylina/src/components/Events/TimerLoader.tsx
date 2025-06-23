'use client'
import React from 'react';
import './TimerLoader.css';

export const TimerLoader = ({ inHome }: { inHome: boolean }) => {

  return (
    <div className={inHome ? "timer-loader-container" : "timer-loader-container-noHome"}>
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
