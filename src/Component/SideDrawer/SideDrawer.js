import React from "react";
import "./SideDrawer.css";
import "font-awesome/css/font-awesome.min.css";
import { NavLink } from "react-router-dom";

const SideDrawer = (props) => {

  return (
      <div className={"SideDrawer " + (props.open ? 'Open' : 'Close')}>
        <div onClick={props.closed}>
          <i className="fa fa-bars side__hamburger" onClick={props.opened}></i>
        </div>

        <div className="side__tabs">
          <div className="side__tab " >
            <NavLink onClick={props.closed} exact activeClassName="mobile__active" style={{ textDecoration: 'none', color: 'white' }} to='/'>HOME</NavLink>
          </div>
          <div className="side__tab">
            <NavLink onClick={props.closed} exact activeClassName="mobile__active" style={{ textDecoration: 'none', color: 'white' }} to='/events'>EVENTS</NavLink>
          </div>
          <div className="side__tab">
            <NavLink onClick={props.closed} exact activeClassName="mobile__active" style={{ textDecoration: 'none', color: 'white' }} to='/members'>MEMBERS</NavLink>
          </div>
          <div className="side__tab">
            <NavLink onClick={props.closed} exact activeClassName="mobile__active" style={{ textDecoration: 'none', color: 'white' }} to='/brochure'>BROCHURE</NavLink>
          </div>
        </div>

        <div className="side__handles">
          <div>
            <a href="https://www.facebook.com/kreiva.iiitv/" target="_blank"><i className="fa fa-facebook-square"></i></a>
          </div>
          <div>
            <a href="https://www.instagram.com/kreiva_cultural_fest/" target="_blank"><i className="fa fa-instagram"></i></a>
          </div>
          <div>
            <a href="https://twitter.com/Kreiva_iiitv" target="_blank"><i className="fa fa-twitter"></i></a>
          </div>
        </div>

      </div>

  );
};

export default SideDrawer;