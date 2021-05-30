import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://images.unsplash.com/photo-1521754040860-ed38b308ac9d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YWxwaGFiZXQlMjBifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="loading"
        />
        <p>Welcome to Blogger's Site</p>
      </div>
      <Button type="submit" onClick={SignIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
