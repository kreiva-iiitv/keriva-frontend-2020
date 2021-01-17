import React, { Component } from "react";
import Handle from "../../Handle/";

import wave from "../../../Assets/Images/waves.png";

import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <>
        <div className="landing">
          <img src={wave} width="100%" height="100%" alt="wave" />
          <div className={"landing__text"}>
            <div className="landing__text--font landing__text--section">
              KREIVA
            </div>
            <div className="landing__text--font landing__text--sub-section">
              2021
            </div>
            <div className="landing__text--font landing__text--virtual">
              A Virtual Fest
          </div>
          </div>
        </div>
        <Handle />
      </>
    );
  }
}

export default Landing;
