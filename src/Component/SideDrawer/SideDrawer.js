import React from "react";
import "./SideDrawer.css";
import "font-awesome/css/font-awesome.min.css";
import { NavLink } from "react-router-dom";

const SideDrawer = (props) => {

  return (
      <div className={"SideDrawer " + (props.open ? 'Open' : 'Close')}>
        <div onClick={props.closed}>
          <i class="fa fa-bars side__hamburger" onClick={props.opened}></i>
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
            <i class="fa fa-facebook-square"></i>
          </div>
          <div>
            <i class="fa fa-instagram"></i>
          </div>
          <div>
            <i class="fa fa-linkedin"></i>
          </div>
          <div>
            <i class="fa fa-twitter"></i>
          </div>
        </div>

      </div>

  );
};

export default SideDrawer;