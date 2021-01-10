import React from "react";
import logo from "../../Assets/Images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import './Header.css';

const Header = (props) => {
  return (
    <header>
      <div className="tabs">
        <div className="tabs__logo__tab active">
          <a>HOME</a>
        </div>

        <div className="tabs__logo__tab ">
          <a>EVENTS</a>
        </div>

        <div>
          <img className="tabs__logo" src={logo} />
          <p className="tabs__logo--date">28th Dec 2020 - 10th Jan 2021</p>
        </div>

        <div className="tabs__logo__tab">
          <a>MEMBERS</a>
        </div>

        <div className="tabs__logo__tab">
          <a>BROUCHURE</a>
        </div>
      </div>


      <div className="mobile__tabs">

          <div><i class="fa fa-bars blank"></i></div>
          <img className="mobile__tabs__logo" src={logo} />
          <div><i class="fa fa-bars hamburger" onClick={props.opened}></i></div>

      </div>
    </header>
  );
};

export default Header;
