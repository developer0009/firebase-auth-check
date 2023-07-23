import React, { useState } from "react";
import { useContext } from "react";
import { AuthenticationProvider } from "../pages/AuthProvide";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import axios from "axios";
const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(AuthenticationProvider);

  return user ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
