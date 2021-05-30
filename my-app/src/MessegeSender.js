import React from "react";
import "./MessegeSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmojiIcon from "@material-ui/icons/InsertEmoticon";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";
import SendIcon from "@material-ui/icons/Send";

const MessegeSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageurl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // database
    if (!input && !imageurl) {
      alert("Please Say Something...");
    } else {
      const firestore = firebase.firestore();
      db.collection("post1").add({
        message: input,
        timpstamp: firebase.firestore.Timestamp.fromDate(new Date()),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageurl,
        userid: user.uid,
        likes: [],
        comments: [],
      });
    }

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messegeSender">
      <div className="messegeSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName} ?`}
            className="messegeSender_input"
          />
          <input
            placeholder={`Image Url (Optional)`}
            value={imageurl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button className="btn" onClick={handleSubmit} type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
      <div className="messegeSender_bottom">
        <div className="messegeSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messegeSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/video</h3>
          {/* <form action="">
            <button>
              <input type="file" placeholder="Photo/Video" />
            </button>
          </form> */}
        </div>
        <div className="messegeSender_option">
          <InsertEmojiIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessegeSender;
