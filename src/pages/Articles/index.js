import React from 'react';
import Footer from 'Components/compounds/Footer';
import Header from 'Components/compounds/Header';
import ArticleContainer from 'Components/compounds/ArticleContainer';
import './style.scss';

const Articles = () => (
  <div className="articles-container">
    <Header />
    <ArticleContainer />
    <Footer />
  </div>
);

export default Articles;
