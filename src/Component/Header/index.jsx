import React from "react";
import logo from "../../Assets/Images/logo.png";
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="tabs">
        <div className="tabs__logo__tab active">
          <a href="/">HOME</a>
        </div>

        <div className="tabs__logo__tab ">
          <a href="/events">EVENTS</a>
        </div>

        <div>
          <img className="tabs__logo" src={logo} alt="dates" />
          <p className="tabs__logo--date">28th Dec 2020 - 10th Jan 2021</p>
        </div>

        <div className="tabs__logo__tab">
          <a href="/members">MEMBERS</a>
        </div>

        <div className="tabs__logo__tab">
          <a href="/brochure ">BROCHURE</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
