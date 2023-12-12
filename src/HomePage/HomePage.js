import React from "react";
import "../HomePage/HomePage.css";
import { useNavigate } from "react-router-dom";
import AppLogo from "../Assessts/images/mainapplogo.png";

function Header() {
  const navigate = useNavigate();
  const goToAccessPage = () => {
    navigate("/AccessPage");
    console.log("Navigate to Access Page");
  };
  return (
    <div className="header">
      <div className="app-Describe">
        <p className="description">
          Taskify is a tool used to organize tasks or activities that need
          to be completed, typically within a certain timeframe. It's a simple
          yet effective way to manage and prioritize tasks, whether they're
          related to work, personal goals, errands, or any other aspect of life.
          "A to-do list serves as a dynamic organizational tool designed to
          catalogue and manage tasks, objectives, or responsibilities awaiting
          completion. It acts as a visual guide, allowing individuals or teams
          to record, track, and prioritize various activities efficiently.
          Typically structured as a list, it captures tasks in a clear and
          concise manner, often accompanied by additional details such as due
          dates, priorities, or categories.
        </p>
      </div>
      <div className="heading-Box">
        <div className="logo-Box">
          <img src={AppLogo} alt="AppLogo" className="app-Logo" />
          <h1 className="app-Heading">TASKiFY</h1>
        </div>
        <div className="btn-Box">
          <button className="start-Btn" onClick={() => goToAccessPage()}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
