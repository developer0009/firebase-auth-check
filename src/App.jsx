import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvide from "./pages/AuthProvide";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvide>
              <Home />
            </AuthProvide>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
