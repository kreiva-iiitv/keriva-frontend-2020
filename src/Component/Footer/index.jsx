import React from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import dotlogo from "../../Assets/Images/dot.png";
import cclogo from "../../Assets/Images/inslogo.png";
import inslogo from "../../Assets/Images/inslogo.png";

//styles import
import './Footer.css';

const Footer = () => {

  const link_toogle = (e) => {
    e.target.style.transform === 'rotate(180deg)' ? e.target.style.transform = 'rotate(0deg)' : e.target.style.transform = 'rotate(180deg)';

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
              <div className="underline"></div>
            </div>
            {/* <div className="link-toogle" onClick={(e) => link_toogle(e)} >
              <i className="fa fa-angle-down fa-2x" aria-hidden="true" color="white"></i>
            </div> */}
          </div>
          <div className="links" id="cyka">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/events" className="link">Events</NavLink>
            <NavLink to="/members" className="link">Members</NavLink>
            <a href="http://iiitvadodara.ac.in/" className="link">Institute Site</a>
          </div>
        </div>

        <div className="footerlin">
          <div className="conna">
            CONTACT
          <div className="underline"></div>
          </div>
          <div className="contact">
            <div className="clink">Email: <div className="con-details">cultural_sec@iiitvadodara.ac.in</div></div>
            <div className="clink">Phone: <div className="con-details">+91-7821905696  +91-8209270352  +91-9009429181</div></div>
            <div className="clink">Address: <div className="con-details">c/o Block No.9, Government Engineering College Campus, Sector-28, Gandhinagar, Gujarat - 382028</div></div>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <span>
            Disclaimer:
        </span>
        <span>
          This website is built and  handled by the cultural committee of IIIT Vadodara.
          All opinions shared through the post are that of the students of Cultural Committee 
          and not that of IIIT Vadodara.
        </span>
      </div>
      <hr className="lastline"></hr>

      <div className="dev">
        <div className="dot">
          <p className="p-dev">Designed by Dot</p>
          <img src={dotlogo} alt="dot-logo" className="dotlogo"></img>
        </div>
        <div className="cc">
          <p className="p-dev">Developed by Coding Club</p>
          <img src={cclogo} alt="cc-logo" className="dotlogo"></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;