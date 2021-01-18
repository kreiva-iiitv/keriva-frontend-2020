import React from "react";
import "./About.css";
function About() {
  return (
    <div className="About__root">
      <div className="About__text">
        <div className="About__text--heading About__font">ABOUT</div>
        <div className="About__text--content About__font">
            Kreiva is the annual cultural festival of Indian Institute of Information Technology, Vadodara. 
            Kreiva serves as a platform for students to show their talents in performing arts and aesthetic arts, 
            where students can collaborate and team up with other students to bring out the best in them.
            <br/><br/>
            The Annual Cultural Festival of IIIT Vadodara gets its name from the Esperanto word "Kreiva", 
            meaning "Creativity". Since its inception in 2016 as an intra-institute fest in 2016, 
            it has consistently been a huge platform for individuals to showcase their talents. 
            A spectacular extravaganza, Kreiva is home to expression through art, music, drama, 
            dance and culture. <br/><br/>
            Join us to celebrate creativity, join us, to celebrate Kreiva!
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
              <span className="About__element--section About__font">12 +</span>
              <span className="About__element--subsection About__font">
                Events to participate
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="About__elements--outer-ring About__elements--outer-ring--3">
            <div className="About__elements--inner-ring About__elements--inner-ring--3">
              <span className="About__element--section About__font">10 D+</span>
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
