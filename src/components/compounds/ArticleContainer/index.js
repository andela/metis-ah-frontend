import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleCard from 'Components/atoms/ArticleCard';
import { getArticle } from 'Actions/article';
import './style.scss';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    const { match: { params: category } } = this.props;
    this.state = {
      category
    };
  }

  componentDidMount() {
    const { getArticles, match } = this.props;
    getArticles(match.params.category);
  }

  componentWillReceiveProps(nextProps) {
    const { match } = this.props;
    if (match.params.category !== nextProps.match.params.category) {
      this.setState({
        category: nextProps.match.params.category
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { getArticles } = this.props;
    const { category } = this.state;
    if (category !== prevState.category) {
      getArticles(category);
    }
  }

  render() {
    const	{	articles,	loading	}	=	this.props;

    const mappedArticleCards = articles.map((article) => {
      const {
        imageUrl, slug, title, description, createdAt, User: { firstname, lastname }
      } = article;
      return (
        <ArticleCard
          key={slug}
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
        {articles.length < 1 && (
          !loading
					&& (
					<div className="article-container-card">
            <i className="fas fa-exclamation notification-icon" />
            <p>This category has no articles</p>
					</div>
					)
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.article.loading,
  articles: state.article.articles
});

const mapDispatchToProps = dispatch => ({
  getArticles: category => dispatch(getArticle(category))
});

ArticleContainer.propTypes = {
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  getArticles: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleContainer)
);
