import React from 'react';
import logo from '../../Assets/Images/logo.png'

import './Header.css';

const Header = () => {
  return (
    <header className="tabs">
      <a className="tab">HOME</a>
      <a className="tab">EVENTS</a>
      <div>
        <img className="logo" src={logo} />
        <p className="date">28th Dec 2020 - 10th Jan 2021</p>
        </div>
      <a className="tab">MEMBERS</a>
      <a className="tab">BROUCHURE</a>
    </header>
  );
}

export default Header;
