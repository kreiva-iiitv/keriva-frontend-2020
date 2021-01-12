import React from "react";
import Landing from "../../Component/Home/Landing";
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation";
import About from "../../Component/Home/About";
import Gallery from "../Gallery";

const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Landing />
      <About />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
