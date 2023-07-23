import React, { useEffect, useState } from "react";
// import { isRouteErrorResponse } from "react-router-dom";
import { auth } from "../config";
import { useAuth } from "./AuthProvide";
import axios from "axios";
const Home = () => {
  const [userDetails, setUserDetails] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/users/${user.email}`,
          {
            headers: {
              Authorization: "Bearer " + user.accessToken,
            },
          }
        );
        console.log("user details ", res);
        setUserDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return userDetails ? (
    <div>
      <h1>User Details</h1>

      <h2>User Name {userDetails.name}</h2>
      <h2>User Number {userDetails.number}</h2>
      <h2>User Email {userDetails.email}</h2>
      <h2>College Name {userDetails.clg_name}</h2>
      <h2>School Name {userDetails.scl_name}</h2>

      <div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </div>
  ) : (
    <h1>Loading Please Wait ..</h1>
  );
};

export default Home;
