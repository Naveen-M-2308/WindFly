import React from 'react'
import '../styles/Footer.css'
import { SiInstagram } from "react-icons/si"
import { LuTwitter } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import Navbar from "../components/Navbar";

function Footer({className}) {
  return (
    <>
        <div id='footer' className={className}>

            <div id='foot-head'>
                <h2>Windfly</h2><br />
                <p>Let's make your next <br /> journey your best <br /> adventure yet.</p><br />
                <FaFacebook /> <SiInstagram /> <LuTwitter /> <IoLogoLinkedin />
            </div>
            <div id='foot-middle'>
                <h3>Quick Links</h3>
                 <Navbar className='foot-nav' />
            </div>
            <div id='foot'>
                <h3>Support</h3><br />
                    <td>FAQ</td><br />
                    <td>Privacy Policy</td><br />
                    <td>Terms & Conditions</td><br />
            </div>
            <h3 id='copyright'>© {new Date().getFullYear()} Windfly. All rights reserved.</h3>
        </div>
    </>
  )
}

export default Footer