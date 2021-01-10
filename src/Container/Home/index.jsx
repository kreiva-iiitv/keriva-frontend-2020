import React from "react";
import Landing from "../../Component/Home/Landing";
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation/Navigation"
import About from "../../Component/Home/About";
import Gallery from "../Gallery";

const Home = () => {
  return (
    <>
      <Navigation />
      <Landing />
      <About />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
