import React from "react";
import "./css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../images/youtube.png";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src={logo} alt="youtube_logo" />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__input__button" />
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="youtube_profile"
          src="https://yt3.ggpht.com/a-/AOh14GiKEZmfLsC66e5E8dJPhJPjuKe9Ld0Yd-Dc0-alRw=s88-c-k-c0xffffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
