import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from './components/Cart'
import { Routes, Route } from "react-router-dom";


function App() {
  const [bookItems, setBookitems] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart myBook={bookItems}/>}></Route>
      </Routes>
   </>
  );
}

export default App;
