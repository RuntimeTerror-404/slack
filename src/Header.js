import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcons from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider.js";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />

        <AccessTimeIcons />
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
