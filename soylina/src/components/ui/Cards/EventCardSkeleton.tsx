import React from "react";
import "./EventCardSkeleton.css";

export const EventCardSkeleton = () => (
  <div className="event-card event-card-skeleton">
    <div className="event-card-img skeleton-anim"></div>
    <div className="event-card-date-row skeleton-anim" style={{ width: "60%", height: "2.2rem" }}></div>
    <div className="event-card-content skeleton-content">
      <div className="event-card-title skeleton-anim" style={{ width: "70%", height: "1.5rem" }}></div>
      <div className="event-card-date-row-content skeleton-anim" style={{ width: "60%", height: "1.2rem" }}></div>
      <div className="event-card-location-row">
        <div className="event-card-location-link skeleton-anim" style={{ width: "40%", height: "1.2rem" }}></div>
        <div className="event-card-tickets-link skeleton-anim" style={{ width: "30%", height: "1.2rem" }}></div>
      </div>
    </div>
  </div>
);