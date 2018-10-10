import React from 'react';

// Components
import Header from 'Components/HOC/header';
import Footer from 'Components/HOC/footer';
import FeaturedArticles from 'Components/HOC/featuredArticles';
import PopularArticles from 'Components/HOC/popularArticles';
import './style.scss';

const Landing = () => (
  <div className="Landing-Flex-Wrap">
    <Header />
    <div className="body">
      <FeaturedArticles />
      <PopularArticles />
    </div>
    <Footer />
  </div>
);

export default Landing;
