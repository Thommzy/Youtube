import React from "react";
import "./css/RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h1>I am Recommended Video</h1>
      <div className="recommendedVideos__videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default RecommendedVideos;
