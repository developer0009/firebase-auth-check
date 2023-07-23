import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";
import { auth } from "../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const signUp = async ({
  email,
  password,
  name,
  number,
  clg_name,
  scl_name,
}) => {
  const data = await axios.post("http://localhost:8080/api/users", {
    email,
    name,
    number,
    clg_name,
    scl_name,
  });
  return createUserWithEmailAndPassword(auth, email, password);
};
export const signIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//returns true or false if the user has logged in already
export const useCheckUser = () => {
  const [login, setLogin] = useState(!!auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("In Login Page checking if user is logged in", !!user);
      if (user) {
        setLogin(true);
        navigate("/");
      } else setLogin(false);
      console.log(user);
    });
    return unsubscribe;
  }, []);
  return login;
};
