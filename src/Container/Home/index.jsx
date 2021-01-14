import React from "react";
import Landing from "../../Component/Home/Landing";
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation";
import About from "../../Component/Home/About";
import Gallery from "../Gallery";
import Events from '../../Component/Home/Events';

const events = [{ title: `Mask Decoration`, prize: 5 }, { title: `Mask Decoration 2`, prize: 4.3 }, { title: `Mask Decoration 3`, prize: 6 }, { title: `Mask Decoration 4`, prize: 5 }, { title: `Mask Decoration 5`, prize: 5 }, { title: `Mask Decoration 6`, prize: 5 }];

const Home = () => {
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
