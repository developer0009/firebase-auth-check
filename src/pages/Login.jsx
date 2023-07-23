import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, useCheckUser } from "../utils/authUtils";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = useCheckUser();
  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      await signIn(email, password);
      console.log("in Login");
    } catch (error) {
      console.log(error);
    }
  };
  return !checkUser ? (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(evt) => setEmail(evt.target.value)}
          name="email"
          value={email}
          placeholder="Enter your email"
        />
        <input
          type="password"
          onChange={(evt) => setPassword(evt.target.value)}
          value={password}
          placeholder="Enter your password"
        />
        <button>Login</button>
      </form>
    </div>
  ) : (
    <h1>Loading Login Please Wait ...</h1>
  );
};

export default Login;
