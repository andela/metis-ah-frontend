
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleCard from 'Components/atoms/ArticleCard';
import { getArticle } from 'Actions/article';
import sortArrayContent from '../../util/helper';
import './style.scss';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params: category }
    } = this.props;
    this.state = {
      category
    };
  }

  componentDidMount() {
    const { getArticles, match, categories } = this.props;
    const heroContent = sortArrayContent(categories, match.params.category);
    getArticles(match.params.category, heroContent);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      match: {
        params: { category }
      }
    } = nextProps;
    const { categories } = nextProps;
    const heroContent = sortArrayContent(categories, category);
    if (prevState.category.category !== nextProps.match.params.category) {
      nextProps.getArticles(category, heroContent);
      return {
        category: { category }
      };
    }
    return null;
  }

  render() {
    const { articles, loading } = this.props;

    const mappedArticleCards = articles.map((article) => {
      const {
        id,
        imageUrl,
        slug,
        title,
        description,
        createdAt,
        User: { firstname, lastname }
      } = article;
      return (
        <ArticleCard
          key={slug}
          id={id}
          img={imageUrl}
          title={title}
          description={description}
          name={`${firstname} ${lastname}`}
          time={createdAt}
        />
      );
    });
    return (
      <div className="container article-inner-container">
        {mappedArticleCards}
        {articles.length < 1 && (loading && <div className="article-loader" />)}
        {articles.length < 1
          && (!loading && (
            <div className="article-container-card">
              <i className="fas fa-exclamation notification-icon" />
              <p>
                Oops!, No Article currently exits in this category.
                <br />
                We would like you to be the first to write in this category
              </p>
              <br />
              <Link to="/articles/new">WRITE</Link>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.article.loading,
  articles: state.article.articles,
  categories: state.categories.categories
});

const mapDispatchToProps = dispatch => ({
  getArticles: (categoryId, heroContent) => dispatch(getArticle(categoryId, heroContent))
});

ArticleContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  getArticles: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
};

ArticleContainer.defaultProps = {
  articles: []
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleContainer)
);
