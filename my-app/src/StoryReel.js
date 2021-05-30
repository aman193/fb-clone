import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";

const StoryReel = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc={user.photoURL}
        title={user.displayName.split(" ").slice(0, 2).join(" ")}
      />
      <Story
        image="https://images.unsplash.com/photo-1531826267553-c4979aefab12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
        profileSrc={user.photoURL}
        title={user.displayName.split(" ").slice(0, 2).join(" ")}
      />
      <Story
        image="https://images.unsplash.com/photo-1542331514-91526580a6e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc={user.photoURL}
        title={user.displayName.split(" ").slice(0, 2).join(" ")}
      />
      <Story
        image="https://images.unsplash.com/photo-1542241647-9cbbada2b309?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
        profileSrc={user.photoURL}
        title={user.displayName.split(" ").slice(0, 2).join(" ")}
      />
      <Story
        image="https://images.unsplash.com/photo-1542300058-b94b8ab7411b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
        profileSrc={user.photoURL}
        title={user.displayName.split(" ").slice(0, 2).join(" ")}
      />
    </div>
  );
};

export default StoryReel;
