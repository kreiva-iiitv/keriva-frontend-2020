import React from 'react';

import "./footcss.css";
import inslogo from "./inslogo.png";
import dotlogo from "./dot.png";
import cclogo from "./inslogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="inname">
        <div>
            <img src = {inslogo} alt="iiitv-logo" className="inslog"></img>
        </div>
        <div className="name">
          Indian Institute of Information Technology Vadodara
        </div>
      </div>

      <div className="linkcon">
        <div className="footerlin">
        <div className="linkna">
          LINKS
          <hr className="underline"></hr>
        </div>
        <div className="links">
          <a href="" className="link">Home</a>
          <a href="" className="link">Events</a>
          <a href="" className="link">Members</a>
          <a href="" className="link">Institute Site</a>
        </div>
        </div>
        <div className="footerlin">
        <div className="conna">
          CONTACT
          <hr className="underline"></hr>
        </div>
        <div className="contact">
          <p className="link">Email:</p>
          <p className="link">Phone:</p>
          <p className="link">Address:</p>
        </div>
        </div>
      </div>
      <hr className="lastline"></hr>

      <div className="dev"> 
        <div className="dot">
          <p className="p-dev">Designed by Dot</p>
          <img src = {dotlogo} alt="dot-logo" className="dotlogo"></img>
        </div>
        <div className="cc">
          <p className="p-dev">Developed by Coding Club</p>
          <img src = {cclogo} alt="cc-logo" className="dotlogo"></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;