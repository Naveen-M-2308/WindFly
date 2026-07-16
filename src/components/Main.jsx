import React, { useState } from "react";
import { TbPlaneTiltFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Main() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const handleNavigation1 = () => {
    navigate("/login");
  };

  const navAppear = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <div id="main">
        
        <div id="topic">
          <TbPlaneTiltFilled size={35} color="blue" />
          <h2 id="tp1">Windfly</h2>

          {/* Hamburger */}
          <button id="menu-btn" onClick={navAppear}>
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Navbar */}
        <div id="nav-link" className={showNav ? "show" : ""}>
          <Navbar />
        </div>

        {/* Login Button */}
        <div id="btn-lg">
          <button id="btn-log" onClick={handleNavigation1}>
            Login
          </button>
        </div>

      </div>
    </header>
  );
}

export default Main;