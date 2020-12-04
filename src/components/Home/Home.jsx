import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      Go to {'  ->   '}
      <a href="/about">About</a>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
