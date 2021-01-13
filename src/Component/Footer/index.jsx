import React from 'react';
import ReactDOM from 'react-dom';

import "./footcss.css";
import 'font-awesome/css/font-awesome.min.css';

//import images
import inslogo from "../../Assets/Images/inslogo.png";
import dotlogo from "../../Assets/Images/dot.png";
import cclogo from "../../Assets/Images/inslogo.png";


const Footer = () => {
 
  const link_toogle = (e) => {
    e.target.style.transform == 'rotate(180deg)'? e.target.style.transform = 'rotate(0deg)': e.target.style.transform = 'rotate(180deg)';
    
    var element = document.getElementById("cyka");

    if (element.classList) { 
      element.classList.toggle("link-display");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("link-display");

      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("link-display");
        element.className = classes.join(" "); 
    }
  };

  return (
    <footer>
      <div className="inname">
        <div>
            <img src = {inslogo} alt="iiitv-logo" className="inslog"></img>
        </div>
        <div className="iiitv-name">
          Indian Institute of Information Technology Vadodara
        </div>
      </div>

      <div className="linkcon">

        <div className="footerlin">
          <div className="link-drop">
            <div className="linkna">
              LINKS
              <hr className="underline"></hr>
            </div>
            <div class="link-toogle" onClick = {(e) => link_toogle(e)} >
              <i class="fa fa-angle-down fa-2x" aria-hidden="true" color="white"></i>
            </div>
          </div>
          <div className="links" id="cyka">
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
          <div className="clink">Email: <div className="con-details">cerebro@iiitvadodara.ac.in</div></div>
          <div className="clink">Phone: <div className="con-details">+915525252536  +91242526252652  +9135252252255</div></div>
          <div className="clink">Address: <div className="con-details">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div></div>
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