import React, { useState } from "react";
import "./Signup.css";
import EyeClose from "../Assessts/Icons/CamOn.png";
import EyeOpen from "../Assessts/Icons/CamOff.png";
import { useNavigate } from "react-router-dom";
import AppLogo from "../Assessts/images/mainapplogo.png";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/LoginPage");
    console.log("Navigate to Login Page");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-Page">
      {/* SIGNUP CONTENT */}
      <div className="signup-Content">
        <div className="signup-Card">
          <div className="Logo-Box">
            <img src={AppLogo} alt="AppLogo" className="App-Logo" />
            <h1 className="App-Heading">TASKiFY</h1>
          </div>
          {/* SIGNUP CONTENT */}
          <div className="greeting-Box">
            <h3 className="greet-Heading">Welcome, Signup</h3>
            <p className="greet-Inform">
              Please input your details to access the Tasks.
            </p>
          </div>
          <form className="form">
            <div className="Input">
              <input
                type="text"
                placeholder="Username"
                name="name"
                className="Input-Field"
              />
            </div>
            <div className="Input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="Input-Field"
              />
            </div>
            {/* <p className="input-Alert">{formErrors.email}</p> */}
            <div className="Input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="Input-Field"
              />
              <img
                className="eyeClose"
                src={showPassword ? EyeClose : EyeOpen}
                onClick={handleTogglePassword}
                alt="EyeOpen"
              />
            </div>
            {/* <p className="input-Alert">{formErrors.password}</p> */}
            <button type="submit" className="Submit-Btn">
              Signup
            </button>
            <div className="navigate-Box">
              <p className="no-Account">Already have an account?</p>
              <p onClick={() => goToLoginPage()} className="navigate-Text">
                Login here
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* REGISTER CONTENT STASTS FROM HERE */}
      <div className="Welcome-Board">
        <h3 className="welcome-Text">Get things done with Taskify</h3>
        <p className="welcome-Para">
          Welcome to the ultimate task organization tool! Embrace our app to
          conquer your goals and manage your day like a pro.
        </p>
        <p className="signup-Text">Signup here..</p>
      </div>
    </div>
  );
}

export default Register;
