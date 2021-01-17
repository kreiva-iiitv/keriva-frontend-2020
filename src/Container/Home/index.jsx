import React, { useState, useEffect } from "react";
import Landing from "../../Component/Home/Landing";
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation";
import About from "../../Component/Home/About";
import Gallery from "../Gallery";
import Events from '../../Component/Home/Events';

const Home = () => {

  const [events, setEvents] = useState([]);

  useEffect(()=>{
   async function fetchAPI() {
    const res = await fetch('https://gaurkrishna.pythonanywhere.com/event/');
    const data = await res.json();
    setEvents(data.Events);
   } 
   fetchAPI();
  },[]);

  return (
    <React.Fragment>
      <Navigation />
      <Landing />
      <About />
      <Events events={events} />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
