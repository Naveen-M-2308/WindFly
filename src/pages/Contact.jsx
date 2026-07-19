import React, { useState } from "react";
import Main from "../components/Main";
import "../styles/Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Footer from "../components/Footer";
import Alert from '@mui/material/Alert'; 
import CheckIcon from '@mui/icons-material/Check'

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("uname").value;
    const email = document.getElementById("uemail").value;
    const message = document.getElementById("umessage").value;
    
    if (name =="") {
      setError("Name fields are required!");
      setSuccess(false);
    }
    else if(email =="") {
      setError("Email fields are required!");
      setSuccess(false);
    }
    else if (message =="") {
      setError("Message fields are required!");
      setSuccess(false);
    }
    else{
      setError("");
    setSuccess(`Your name is ${name}, message: ${message} received Successfully`);
    }

  };

  return (
    <>

      {error && <Alert severity="error">{error}</Alert>}
      {success && (
        <Alert severity="success">
          {success}
        </Alert>
      )}
      <Main />
      <div id="contact">
        <div id="con-head">
          <h1>Get in Touch</h1>
          <br></br>
          <p>
            Have questions or need assitance?<br></br>We're here to help!
          </p>
          <br />
          <div id="con-head1">
            <p className="contact-line">
              <HiOutlineMail className="icon" size={30} />
              <b>Email:</b>
              <span>info@windfly.com</span>
            </p>
            <br />
            <p className="contact-line">
              <FaPhoneAlt className="icon" size={25} />
              <b>Phone:</b>
              <span>63790-52230</span>
            </p>
            <br />
            <p className="contact-line">
              <CiLocationOn className="icon" size={25} />
              <b>Address:</b>
              <span>
                2/281,kulathupalayam,
                <br />
                tiruppur-641 664
              </span>
            </p>
          </div>
        </div>

        <div id="con-body">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="uname">Your Name:</label>
              <input
                type="text"
                id="uname"
                name="uname"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="uemail">Email Address:</label>
              <input
                type="email"
                id="uemail"
                name="uemail"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="umessage">Message:</label>
              <textarea
                id="umessage"
                name="umessage"
                placeholder="Message..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" id="con-submit">
              Send Message
            </button>
          </form>
        </div>
        
        <div id="footer-main">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
