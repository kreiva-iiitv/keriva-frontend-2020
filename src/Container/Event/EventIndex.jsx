import React from 'react';
import CardContainer from "../../Component/Events/EventSection/CardContainer";
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation";
import EventHeader from "../../Component/Events/EventHeader/EventHeader";

const Event = () => {

  return (
    <React.Fragment>
      <Navigation />
      <EventHeader active={true} />
      <CardContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Event;
