import React from "react";
import "../styles/Sidebar.css";
import justice from "../Assets/justice.png";
import logo from "../Assets/logo.PNG";
import { FiActivity } from "react-icons/fi";
import { FaHandFist } from "react-icons/fa6";
import { GrDashboard } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-upper">
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="logo">Jur</h2>
      </div>

      <ul className="menu">
        <li>
          {" "}
          <GrDashboard /> Dashboard
        </li>
        <li>
          {" "}
          <FaSuitcase />
          My Cases
        </li>
        <li>
          {" "}
          <FiActivity />
          Activities
        </li>
        <li>
          {" "}
          <IoCalendarOutline />
          Calendar
        </li>
        <li>
          {" "}
          <LuFileSpreadsheet />
          Files
        </li>
        <li>
          {" "}
          <FaHandFist />
          Open a Dispute
        </li>
      </ul>
      <div className="cta">
        <img src={justice} alt="Justice Icon" />
      </div>
    </div>
  );
};

export default Sidebar;
