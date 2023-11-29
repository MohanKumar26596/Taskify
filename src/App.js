import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./LoginPage/Login";
// import Signup from "./SignupPage/Signup";
import HomePage from "./HomePage/HomePage";
import AccessPage from "./AccessPage/AccessPage";
import TaskPage from "./TaskPage/TaskPage";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" Component={AccessPage} />
          <Route path="/SignupPage" Component={AccessPage} />
          <Route path="TaskPage" element={<TaskPage />} />
          <Route path="AccessPage" element={<AccessPage />} />
          {/* <Route path="MyAccount" element={<MyAccount />} /> */}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
