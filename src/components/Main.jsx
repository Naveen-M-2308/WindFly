import React from "react";
import { TbPlaneTiltFilled } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleNavigation1 = () => {
    navigate("/login");
  };
  
  return (
    <div>
      <header>
        <div id="main">
          <div id="topic">
            <TbPlaneTiltFilled size={35} color="blue" />
            <h2 id="tp1">Windfly</h2>
          </div>
          <div id="nav-link">
            <Navbar />
          </div>
          <div id="btn-lg">
            <button type="button" id="btn-log" onClick={handleNavigation1}>
              Login
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Main;
