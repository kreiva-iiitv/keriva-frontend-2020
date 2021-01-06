import React from 'react';
import logo from '../../Assets/Images/logo.png'

import classes from './Header.css';

const Header = () => {
  return (
    <header >
      <div className="tabs">

        <div className="tab home">
          <a >HOME</a>
        </div>

        <div className="tab ">
          <a >EVENTS</a>
        </div>
     
        <div>
          <img  className="logo" src={logo} />
          <p className="date">28th Dec 2020 - 10th Jan 2021</p>
        </div>

        <div className="tab">
          <a >MEMBERS</a>
        </div>
     
        <div className="tab">
          <a>BROUCHURE</a>
        </div>
     
      </div>
     
    </header>
  );
}

export default Header;
