import React from 'react';

// Components
import Header from 'Components/HOC/header';
import Footer from 'Components/HOC/footer';
import classes from './style.css';

const Landing = () => (
  <div className={classes.flexWrap}>
    <Header />
    <Footer />
  </div>
);

export default Landing;
