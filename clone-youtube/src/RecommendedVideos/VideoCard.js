import React from "react";
import { Avatar } from "@material-ui/core";

function VideoCard({ image, title, channel, view, timestamp, channelImage }) {
  return (
    <div>
      <h1>I am VideoCard</h1>
      <img src={image} alt="" />
      <div className="video__info"></div>
    </div>
  );
}

export default VideoCard;
