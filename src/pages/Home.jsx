import React from "react";
import "../styles/Home.css";
import { TbPlaneTiltFilled } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import First from "../assets/First.avif";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate=useNavigate();

    const handleNavigation=()=>{
      setTimeout(() => {
        navigate('/explore');
      }, 500);
    }
    
  return (
    <>
      <div className="web-bg">
        <Main />

        <div id="middle">
          <h2 id="one">
            Explore The <br></br>
            Beauty Of The World
          </h2>
          <p id="two">
            Pack your bags and get ready to see the world like a local.<br></br>{" "}
            We handle the stressful planning part so you can focus on making
            unforgettable memories.
          </p>
          <p>
            "Travel far enough, you meet yourself." <br></br>– David Mitchell
          </p>
         <Button variant="outlined" id="btn-e" onClick={handleNavigation}>Explore Now</Button>
        </div>
      </div>
    </>
  );
}

export default Home;
