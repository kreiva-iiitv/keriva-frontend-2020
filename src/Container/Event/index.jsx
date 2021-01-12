import React from "react";
import CardContainer from "../../Component/Events/EventSection/CardContainer";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import Timeline from '../../Component/Events/Timeline/Timeline'
const About = () => {
  return (
    <React.Fragment>
      {/*<Header /> */}
        <Timeline/>
        <CardContainer/>
      <Footer />
    </React.Fragment>
  );
};

export default About;
