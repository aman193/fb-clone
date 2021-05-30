import React, { useState } from "react";
import "./Likes.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";

const Likes = ({ id }) => {
  const [{ user }, dispatch] = useStateValue();
  const [likes, setLikes] = useState([]);
  const handleLikes = (e) => {
    e.preventDefault();

    const userId = user.uid;

    let data = db.collection("nblogs").on(id, function (snapshot) {
      console.log(snapshot.val());
    });
    console.log("handlle like", data);
  };

  return (
    <div className="likes">
      <ThumbUpIcon onClick={handleLikes} />
      <p>count</p>
    </div>
  );
};

export default Likes;
