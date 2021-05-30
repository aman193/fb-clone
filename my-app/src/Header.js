import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://images.unsplash.com/photo-1521754040860-ed38b308ac9d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YWxwaGFiZXQlMjBifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="loading"
        />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Post" type="text" />
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName.split(" ").slice(0, 2).join(" ")}</h4>
        </div>
        <IconButton>
          <AddIcon></AddIcon>
        </IconButton>
        <IconButton>
          <ForumIcon></ForumIcon>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon></NotificationsActiveIcon>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon></ExpandMoreIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
