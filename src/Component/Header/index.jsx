import React from "react";
import { NavLink } from 'react-router-dom';
import logo from "../../Assets/Images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import './Header.css';

function Header({ opened }) {
  return (
    <header>
      <div className="tabs">
        <NavLink style={{display:'flex',color:'white',textDecoration:'none'}} to="/">
          <div className="tabs__logo__tab active">
            HOME
          </div>
        </NavLink>

        <NavLink style={{display:'flex',color:'white',textDecoration:'none'}} to="/events">
          <div className="tabs__logo__tab ">
            EVENTS
          </div>
        </NavLink>

        <NavLink style={{textDecoration:'none'}}  to="/">
        <div>
          <img className="tabs__logo" src={logo} alt="dates" />
          <p className="tabs__logo--date">31st Jan 2021 - 14th Feb 2021</p>
        </div>
        </NavLink>

        <NavLink style={{display:'flex',color:'white',textDecoration:'none'}} to="/members">
          <div className="tabs__logo__tab ">
            MEMBERS
          </div>
        </NavLink>

        <a style={{display:'flex',color:'white',textDecoration:'none'}} href="https://kreiva.tk/media/brochure.pdf">
          <div className="tabs__logo__tab ">
            BROCHURE
          </div>
        </a>
      </div>


      <div className="mobile__tabs">
        <div><i className="fa fa-bars blank"></i></div>
        <img className="mobile__tabs__logo" src={logo} alt="tabs icon" />
        <div onClick={opened} ><i className="fa fa-bars hamburger"></i></div>
      </div>
    </header>
  );
};

export default Header;
