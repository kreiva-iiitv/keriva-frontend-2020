import React from "react";
import Landing from "../../Component/Home/Landing";
import Footer from "../../Component/Footer";
// import Header from "../../Component/Header";
import About from "../../Component/Home/About";
import Gallery from "../Gallery";

const Home = () => {
  return (
    <React.Fragment>
      {/*<Header /> */}
      <Landing />
      <About />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
