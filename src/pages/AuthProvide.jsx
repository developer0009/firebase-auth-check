import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config";
export const AuthenticationProvider = createContext();
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthProvide = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else return navigate("/login");
    });
    return unsubscribe;
  }, []);

  return (
    user && (
      <AuthenticationProvider.Provider value={{ user }}>
        {children}
      </AuthenticationProvider.Provider>
    )
  );
};

export default AuthProvide;

export const useAuth = () => {
  return useContext(AuthenticationProvider);
};
