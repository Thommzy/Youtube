import React from "react";
import "./css/Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected icon={<HomeIcon />} title="Home" />
      <SidebarRow icon={<WhatshotIcon />} title="Trending" />
      <SidebarRow icon={<SubscriptionsIcon />} title="Subscription" />
      <hr />
      <SidebarRow icon={<VideoLibraryIcon />} title="Library" />
      <SidebarRow icon={<HistoryIcon />} title="History" />
      <SidebarRow icon={<OndemandVideoIcon />} title="Your videos" />
      <SidebarRow icon={<WatchLaterIcon />} title="watch Later" />
      <SidebarRow icon={<ThumbUpAltOutlinedIcon />} title="Liked videos" />
      <SidebarRow />
      <SidebarRow />
    </div>
  );
}

export default Sidebar;
