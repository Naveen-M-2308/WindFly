import React from "react";
import Main from "../components/Main";
import "../styles/About.css";
import First from "../assets/First.avif";
import Footer from "../components/Footer.jsx";

function About() {
  return (
    <>
      <Main />
      
      <div id="web-bg">
        <div id="ab-top">
          <h2 id="ab1">About Us</h2>
          <p id="ab-p">
            WindFly is your trusted travel companion, designed to help you
            explore the world with ease and confidence. From discovering
            breathtaking destinations to finding the best deals on flights and
            hotels, we bring everything you need into one seamless platform. Our
            goal is to make travel planning simple, efficient, and enjoyable for
            everyone. <br /> <br />At WindFly, we believe that every journey should be
            memorable. That’s why we provide curated travel guides, expert tips,
            and personalized recommendations to enhance your experience. Whether
            you're planning a relaxing getaway or an adventurous trip, WindFly
            is here to turn your travel dreams into reality.
          </p>
        </div>
          
        <div id="ab-middle">
          <h1 id="abname">Why Travel With Us?</h1><br />
            <div className="service">
              <h3 className="s-name">Best prices</h3>
              <p className="s-des">We offer the best prices and amazing deals for your journey.</p>
            </div>
            <div className="service">
               <h3 className="s-name">Trusted Services</h3>
               <p>Our team is avaiable 24/7 to assist you anytime.</p>
            </div>
            <div className="service">
               <h3 className="s-name">Handpicked Hotels</h3>
               <p>We partner with top-rated hotels for your comfortable stay.</p>
            </div>
            <div className="service">
               <h3 className="s-name">Memorable Experiences</h3>
               <p>We help you create memories that last a lifetime.</p>
            </div>
        </div>
      </div>
      <div id="About-foot">
        <Footer />
      </div>
    </>
  );
}

export default About;
