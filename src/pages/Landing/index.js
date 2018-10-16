import React from 'react';

// Components
import Header from 'Components/compounds/header';
import Footer from 'Components/compounds/footer';
import FeaturedArticles from 'Components/compounds/featuredArticles';
import PopularArticles from 'Components/compounds/popularArticles';
import PopularAuthors from 'Components/compounds/popularAuthors';
import Button from 'Components/atoms/Button';
import './style.scss';

const Landing = () => (
  <div className="Landing-Flex-Wrap">
    <Header />
    <div className="body">
      <FeaturedArticles />
      <PopularArticles />
      <PopularAuthors />
      <div className="gap">
        <Button color="green">GET STARTED</Button>
      </div>
    </div>
    <Footer />
  </div>
);

export default Landing;
