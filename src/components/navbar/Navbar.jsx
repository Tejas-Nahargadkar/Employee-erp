import React from "react";
import "./navbar.css";
import logo from './logo.jpeg'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Parent-div">
      <ul>
        <li><img className="logo" src={logo} alt="" /></li>
        <li>
          <Link to={"/Attendance"}>Attendance</Link>
        </li>
        <li>
          <Link to={"/WorkLogPage"}>Daily Work Log</Link>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">
            Profiles
          </a>
          <div class="dropdown-content">
                  <Link to={"/Profile"}>Profile</Link>
                  <Link to={"/Officeprofile"}>Officeprofile</Link>
                  <Link to={"/Salaryslip"}>Bank Details</Link>
                  <Link to={"/RegistrationForm"} >Add Employee</Link>
          </div>
        </li>
        <li>
          <Link to={"/Login"}>Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
