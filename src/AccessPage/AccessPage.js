import React from "react";
import "./AccessPage.css";
import Login from "../LoginPage/Login";
import Signup from "../SignupPage/Signup";
import { useLocation } from "react-router-dom";

function AccessPage() {
  const location = useLocation();
  return (
    <div
      className="access-Page"
      style={{
        width: "200%",
        display: "flex",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: `translateX(${
          location.pathname === "/SignupPage" ? "-50%" : 0
        })`,
      }}
    >
      <Login />
      <Signup />
    </div>
  );
}

export default AccessPage;
