import React, { useState } from "react";
import Main from "../components/Main";
import "../styles/Explore.css";
import Place from "./Place";
import Footer from "../components/Footer.jsx";
// Images
import Tajmahal from "../assets/Taj mahal.jpg";
import paris from "../assets/paris.jpg";
import Bali from "../assets/Bali.jpg";
import NewYork from "../assets/New York.jpg";
import Dubai from "../assets/Dubai.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import Sydney from "../assets/Sydney.jpg";
import Rome from "../assets/Rome.jpg";
import Maldives from "../assets/Maldives.jpg";
import Manali from "../assets/Manali.jpg";
import Munnar from "../assets/Munnar.jpg";
import Button from "@mui/material/Button";

function Explore() {

  const places = [
    { id: 101, name: "Taj Mahal, India", price: "from $2000", img: Tajmahal, category: "city" },
    { id: 102, name: "Paris, France", price: "from $2500", img: paris, category: "city" },
    { id: 103, name: "Bali, Indonesia", price: "from $1800", img: Bali, category: "beach" },
    { id: 104, name: "New York, USA", price: "from $2200", img: NewYork, category: "city" },
    { id: 105, name: "Dubai, UAE", price: "from $2100", img: Dubai, category: "adventure" },
    { id: 106, name: "Tokyo, Japan", price: "from $2700", img: Tokyo, category: "city" },
    { id: 107, name: "Sydney, Australia", price: "from $3000", img: Sydney, category: "beach" },
    { id: 108, name: "Rome, Italy", price: "from $2400", img: Rome, category: "city" },
    { id: 109, name: "Maldives", price: "from $3500", img: Maldives, category: "beach" },

    { id: 110, name: "Manali, India", price: "from $800", img: Manali, category: "mountain" },
    { id: 111, name: "Munnar, India", price: "from $500", img: Munnar, category: "mountain" }
  ];

  const [filter, setFilter] = useState("all");

  const filteredPlaces =
    filter === "all"
      ? places
      : places.filter((p) => p.category === filter);

  return (
    <div>
      <Main />
      

      <div id="ex-top">
        <h1>Explore Destinations</h1>
      </div>

      <div id="ex-nav">
        <div id="btn-all">
          <Button onClick={() => setFilter("all")} className="cat-all">All</Button>
          <Button onClick={() => setFilter("beach")} className="cat-all">Beaches</Button>
          <Button onClick={() => setFilter("city")} className="cat-all">City</Button>
          <Button onClick={() => setFilter("adventure")} className="cat-all">Adventure</Button>
          <Button onClick={() => setFilter("mountain")} className="cat-all">Mountains</Button>
        </div>
      </div>

      <div id="Main_container">
        {filteredPlaces.map((p) => (
          <Place key={p.id} place={p} />
        ))}
      </div>

      <div id="exp-foot">
        <Footer />
      </div>
    </div>
  );
}

export default Explore;