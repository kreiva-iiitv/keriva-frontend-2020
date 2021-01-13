import React from "react";
import CardContainer from "../../Component/Events/EventSection/CardContainer";
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation";
import Timeline from '../../Component/Events/Timeline/Timeline'

const About = () => {
  return (
    <React.Fragment>
      <Navigation />
      {/* <Timeline /> */}
      <CardContainer />
      <Footer />
    </React.Fragment>
  );
};

export default About;
