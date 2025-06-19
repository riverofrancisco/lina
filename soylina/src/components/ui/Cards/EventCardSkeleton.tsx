import React from "react";
import "./EventCardSkeleton.css"; // Asegúrate de tener los estilos para la animación

export const EventCardSkeleton = () => {
  return (
<div className="event-skeleton-card">
 
  <div className="event-skeleton-content">
    <div className="event-skeleton-title"></div>
    <div className="event-skeleton-date">
      <div className="event-skeleton-date-icon"></div>
      <div className="event-skeleton-date-bar"></div>
    </div>
    <div className="event-skeleton-location"></div>
    <div className="event-skeleton-buttons">
      <div className="event-skeleton-btn"></div>
      <div className="event-skeleton-btn"></div>
    </div>
  </div>
</div>
  );
};
