import React, { useState } from "react";
import { TbPlaneTiltFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import '../styles/Main.css'
function Main() {
  const navigate = useNavigate();

  const handleNavigation1 = () => {
    navigate("/login");
  };


  return (
    <header>
      <div id="main">
        
        <div id="topic">
          <TbPlaneTiltFilled size={25} color="blue" id="fly" />
          <h2>Windfly</h2>
          </div>

        <div id="nav-link">
          <Navbar />
        </div>

        <div id="btn-lg">
          <button onClick={handleNavigation1} className="login-btn"><FaUserPlus size={25} />
          <span>Login</span>
          </button>

        </div>
         
      </div>
    </header>
  );
}

export default Main;