
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
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

  handlePageClick = (pageNumber) => {
    const { getArticles, match, categories } = this.props;
    const heroContent = sortArrayContent(categories, match.params.category);
    getArticles(match.params.category, heroContent, pageNumber.selected + 1);
  }

  render() {
    const { articles, metadata, loading } = this.props;

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
        {loading ? null : (
          <ReactPaginate
            previousLabel={<FaAngleLeft />}
            previousLinkClassName="prev-icon"
            nextLabel={<FaAngleRight />}
            nextLinkClassName="next-icon"
            breakLabel="..."
            onPageChange={this.handlePageClick}
            pageCount={metadata.totalPages}
            containerClassName="pagination"
            pageRangeDisplayed={5}
            activeLinkClassName="active"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.article.loading,
  articles: state.article.articles,
  metadata: state.article.metadata,
  categories: state.categories.categories
});

const mapDispatchToProps = dispatch => ({
  getArticles: (categoryId, heroContent, page) => dispatch(getArticle(categoryId, heroContent, page))
});

ArticleContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  getArticles: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  metadata: PropTypes.objectOf(PropTypes.any)
};

ArticleContainer.defaultProps = {
  articles: [],
  metadata: {}
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleContainer)
);
