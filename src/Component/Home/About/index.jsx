import React from "react";
import "./About.css";
function About() {
  return (
    <div className="About__root">
      <div className="About__text">
        <div className="About__text--heading About__font">ABOUT</div>
        <div className="About__text--content About__font">
          Kreiva is the Annual Cultural Festival of IIIT Vadodara tentative test
          dates are as follows : 28th - 29th October .<br />
          This page is handled by the students of the cultural committee of the
          institute. Kreiva - the IIIT Vadodara's Annual Cultural Festival is a
          Platform to showcase the best in us and to strive for more. The Fest
          was started in the year 2016 on an Intra-college level which in itself
          was a quite success. The fest is basically a platform for students to
          express their feelings and opinions through art, music, dance, drama,
          in short, the mediums that connect with masses. Come; Let's Celebrate
          this feeling of togetherness on public stage!! !! Welcome to Kreiva,
          IIIT Vadodara !!
        </div>
      </div>
      <div className="About__elements">
        <div style={{ display: "flex" }}>
          <div className="About__elements--outer-ring About__elements--outer-ring--1">
            <div className="About__elements--inner-ring About__elements--inner-ring--1">
              <span className="About__element--section About__font">60 K+</span>
              <span className="About__element--subsection About__font">
                worth prize to win
              </span>
            </div>
          </div>
          <div className="About__elements--outer-ring About__elements--outer-ring--2">
            <div className="About__elements--inner-ring About__elements--inner-ring--2">
              <span className="About__element--section About__font">20 +</span>
              <span className="About__element--subsection About__font">
                Events to participate
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="About__elements--outer-ring About__elements--outer-ring--3">
            <div className="About__elements--inner-ring About__elements--inner-ring--3">
              <span className="About__element--section About__font">14 D+</span>
              <span className="About__element--subsection About__font">
                long fest to participate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
