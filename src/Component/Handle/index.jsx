import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Handle.css";

class Handle extends Component {
  render() {
    return (
      <div className="social">
        <div>
          <a href="https://m.facebook.com/kreiva.iiitv/">
            <i className="fa fa-facebook-square s"></i>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/kreiva_cultural_fest/">
            <i className="fa fa-instagram s"></i>
          </a>
        </div>

        <div>
          <a href="https://twitter.com/Kreiva_iiitv">
            <i className="fa fa-twitter s"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Handle;
