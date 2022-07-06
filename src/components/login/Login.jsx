import React from "react";
import "./login.css";
import logo from "./employee.png";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="loginpage">
      <div className="title">
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <div className="text">
          <h1>Empolyee Portal</h1>
        </div>
      </div>
      <div className="group">
        <div className="control">
          <label htmlFor="Emplyolee No">Employee No</label>
          <div className="container">
            <input
              type="text"
              placeholder="Enter Your Employee No"
              name="Enter Your Employee No"
            />
          </div>
        </div>
      </div>
      <div className="group">
        <div className="control">
          <label htmlFor="Password">Password</label>
          <div className="container">
            <input
              type="text"
              placeholder="Enter Your Password"
              name="Enter Your Password"
            />
          </div>
        </div>
        <div className="button">
        <input type="checkbox" name="Remember Me" />
        <label htmlFor="Remember Me">Remember Me</label>
      </div>
      </div>
      <div className="group">
        <div className="control">
          <div className="container">
            <div className="login">
              <button><Link to={"/Attendance"}>Log In</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
