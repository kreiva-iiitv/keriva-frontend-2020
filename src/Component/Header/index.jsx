import React from "react";
import { NavLink } from 'react-router-dom';
import logo from "../../Assets/Images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import './Header.css';

function Header({ opened }) {
  return (
    <header>
      <div className="tabs">
        <div className="tabs__logo__tab active">
          <NavLink to="/">HOME</NavLink>
        </div>

        <div className="tabs__logo__tab ">
          <NavLink to="/events">EVENTS</NavLink>
        </div>

        <div>
          <img className="tabs__logo" src={logo} alt="dates" />
          <p className="tabs__logo--date">28th Dec 2020 - 10th Jan 2021</p>
        </div>

        <div className="tabs__logo__tab">
          <NavLink to="/members">MEMBERS</NavLink>
        </div>

        <div className="tabs__logo__tab">
          <NavLink to="/brochure">BROCHURE</NavLink>
        </div>
      </div>


      <div className="mobile__tabs">
        <div><i class="fa fa-bars blank"></i></div>
        <img className="mobile__tabs__logo" src={logo} alt="tabs icon" />
        <div onClick={opened} ><i class="fa fa-bars hamburger"></i></div>
      </div>
    </header>
  );
};

export default Header;
