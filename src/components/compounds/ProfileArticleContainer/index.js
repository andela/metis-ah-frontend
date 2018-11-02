import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import ArticleCard from '../ArticleCard';
import Pagination from '../../atoms/Pagination';
import './index.scss';

const ArticleContainer = (props) => {
  const {
    articles, image, firstname, lastname, description
  } = props;
  return (
    <div className="ProfileArticle">
      <div className="ProfileArticle__title">Articles</div>
      <div className="ProfileArticle__content">
        <div className="columns">

          {
              (articles.length > 0)
                ? articles.map(article => (
                  <ArticleCard
                    article={article}
                    image={image}
                    firstname={firstname}
                    lastname={lastname}
                    description={description}
                    key={uuid()}
                  />
                ))
                : <h1 className="is-size-4 no--article">You have not created any article yet</h1>
            }
        </div>
        {articles.length === 0 || <Pagination />}
      </div>
    </div>
  );
};

ArticleContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  image: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ArticleContainer;
