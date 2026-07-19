import React from "react";
import "../styles/Login.css";
import Login1 from "../assets/Login1.jpg";
import Main from "../components/Main";

function Login() {
  return (
    <>
    <Main />
      <div id="login-head" className="web-bg1">
        
        <div id="login-left">
          <div>
            <h2>Login</h2>
            <br />
            <p>
              Enter your credentials to access <br /> your account.
            </p>
          </div>

          <div id="login-form">
            <label htmlFor="user-mail">Email Address :</label>
            <input type="email" id="user-mail" />

            <label htmlFor="user-pass">Password :</label>
            <input type="password" id="user-pass" />
            <br />
              <p>Forgot password ?</p>

            <button>Login</button>
          </div>
          
          <div id="login-last">
            <p>Don't have an Account? <span>Sign up</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
