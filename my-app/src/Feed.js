import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessegeSender from "./MessegeSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("post1")
      .orderBy("timpstamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessegeSender />
      {posts.map((post) => (
        <Post
          id={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timpstamp}
          username={post.data.username}
          image={post.data.image}
          userid={post.data.userid}
          likes={post.data.likes}
          comments={post.data.comments}
        />
      ))}
    </div>
  );
}

export default Feed;
