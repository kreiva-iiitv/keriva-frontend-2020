import React from "react";
import "./SideDrawer.css";
import "font-awesome/css/font-awesome.min.css";

const SideDrawer = (props) => {
    
    return (
        <div>
            <div className={"SideDrawer " + (props.open ? 'Open' : 'Close')}>

                <div onClick={props.closed}>
                    <i class="fa fa-bars side__hamburger" onClick={props.opened}></i>
                </div>
            
                <div className="side__tabs">
                    <div className="side__tab side__active">HOME</div>
                    <div className="side__tab">EVENTS</div>
                    <div className="side__tab">MEMBERS</div>
                    <div className="side__tab">BROCHURE</div>
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
        </div>
      
    );
  };
  
  export default SideDrawer;