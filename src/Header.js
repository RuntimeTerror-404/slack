import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcons from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt="Mohit Parashar"
          src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg"
        />
        {/* Avatars for logged in users */}
        <AccessTimeIcons />
        {/* time icon */}
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="search..." type="text" />
        {/* search icon */}
        {/* input */}
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
        {/* help icon */}
      </div>
    </div>
  );
}

export default Header;
