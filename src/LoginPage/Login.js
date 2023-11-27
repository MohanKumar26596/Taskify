import React, { useState } from "react";
import "../LoginPage/Login.css";
import EyeClose from "../Assessts/images/eye-Close.svg";
import EyeOpen from "../Assessts/images/eye-Open.svg";
import { useNavigate } from "react-router-dom";
import TaskifyLogo from "../Assessts/images/mainapplogo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const goToSignupPage = () => {
    navigate("/SignupPage");
    console.log("Navigate to Signup Page");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-Page">
      <div className="welcome-Board">
        <h3 className="welcome-text">Get things done with Taskify</h3>
        <p className="welcome-Para">
          Time to organize your day, set priorities, and thrive. Get ready to
          boost your productivity and organize your life effortlessly with our
          app.
        </p>
        <p className="login-text">Login here..</p>
      </div>

      {/* LOGIN CONTENT STASTS FROM HERE */}

      <div className="login-Content">
        <div className="Logo-Box">
          <img src={TaskifyLogo} alt="TaskifyLogo" className="Taskify-Logo" />
          <h1 className="App-Heading">TASKiFY</h1>
        </div>
        <div className="greeting-Box">
          <h3 className="Login-Heading"> Welcome, Login</h3>
          <p className="greet-Inform">
            Please input your details to access the Tasks.
          </p>
        </div>
        <form className="form">
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input-Field"
            />
          </div>
          {/* <p className="input-Alert">{formErrors.email}</p> */}
          <div className="input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input-Field"
            />
            <img
              className="eyeClose"
              src={showPassword ? EyeClose : EyeOpen}
              onClick={handleTogglePassword}
              alt="EyeOpen"
            />
          </div>
          {/* <p className="input-Alert">{formErrors.password}</p> */}
          <div className="forgot-Box">
            <p className="forgot-Text">Forgot Password</p>
          </div>
          <button type="submit" className="login-Btn">
            Login
          </button>
          <div className="signup-NavigateBox">
            <p className="no-Account">You don’t have an account?</p>
            <p onClick={() => goToSignupPage()} className="signup-TextNavigate">
              Signup here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
