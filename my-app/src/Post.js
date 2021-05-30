import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleoutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";

const Post = ({
  id,
  profilePic,
  image,
  userid,
  username,
  timestamp,
  message,
}) => {
  const [{ user }, dispatch] = useStateValue();
  const [like, setLike] = useState(0);
  const handleLike = () => {
    setLike(like + 1);
  };
  const userId = user.uid;
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("invoked");
    if (userId === userid) {
      if (window.confirm("Delete This post?") == true) {
        db.collection("post1").doc(id).delete();
      }
    } else {
      alert(`You don't have permission to delete others post.`);
    }
  };
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topinfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
        <button className="btn" onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
      <div className="post_botom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} />
      </div>
      <div className="post_options">
        <div className="post_option">
          <button className="btn" onClick={handleLike}>
            <ThumbUpIcon />
          </button>
          <p>{like}</p>
        </div>
        <div className="post_option">
          <ChatBubbleoutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
