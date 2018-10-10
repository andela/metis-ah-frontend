import React from 'react';

// Components
import Header from 'Components/HOC/header';
import Footer from 'Components/HOC/footer';
import FeaturedArticles from 'Components/HOC/featuredArticles';
import PopularArticles from 'Components/HOC/popularArticles';
import classes from './style.css';

const Landing = () => (
  <div className={classes.flexWrap}>
    <Header />
    <div className={classes.body}>
      <FeaturedArticles />
      <PopularArticles />
    </div>
    <Footer />
  </div>
);

export default Landing;
