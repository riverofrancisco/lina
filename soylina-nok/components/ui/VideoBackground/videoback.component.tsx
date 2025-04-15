import React from "react";
import "./videoback.css";

let videoSRC = "/videos/homeToma1.mp4";

export default function VideoBackground() {
  return (
    <div>
      <video muted autoPlay loop>
        <source src={videoSRC} type="video/mp4" />
      </video>
      
    </div>
  );
}
