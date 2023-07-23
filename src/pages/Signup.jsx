import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, signIn, useCheckUser } from "../utils/authUtils";
const Login = () => {
  // const { user, signUp, signIn } = useContext(AuthenticationProvider);
  const checkUser = useCheckUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
    clg_name: "",
    scl_name: "",
  });
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  return (
    !checkUser && (
      <form
        onSubmit={async (evt) => {
          try {
            evt.preventDefault();
            await signUp(formData);
            navigate("/");
          } catch (error) {
            console.log(error.message);
            console.log(error?.response?.data?.msg);
          }
        }}
      >
        <h1>Sign Up </h1>
        <input
          type="text"
          onChange={handleChange}
          value={formData["name"]}
          name="name"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          onChange={handleChange}
          value={formData["email"]}
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData["password"]}
          placeholder="Enter your password"
          required
        />
        <input
          type="number"
          onChange={handleChange}
          value={formData["number"]}
          name="number"
          placeholder="Enter your number"
          required
        />
        <input
          type="text"
          name="clg_name"
          onChange={handleChange}
          value={formData["clg_name"]}
          placeholder="Enter your College Name"
          required
        />
        <input
          type="text"
          name="scl_name"
          onChange={handleChange}
          value={formData["scl_name"]}
          placeholder="Enter your School Name"
          required
        />
        <button type="submit">Submit</button>
      </form>
    )
  );
};

export default Login;
