import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';
import ArticleCard from '../ArticleCard';
// import articleData from './articleData';
import { getArticle } from '../../../store/actions/article';

class ArticleContainer extends Component {
	state = {
	  category: this.props.match.params.category
	};

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
	  const { articles, loading } = this.props;
	  // console.log(articles);
	  const mappedArticleCards = articles.map((article) => {
	    const {
	      imageUrl, slug, title, description, createdAt
	    } = article;
	    return (
  <ArticleCard
    key={slug}
    img={imageUrl}
    title={title}
    subtitle={description}
    name="tomi"
    time={createdAt}
  />
	    );
	  });
	  return (
  <div className="container article-inner-container">
    {mappedArticleCards}
    {loading && (
      <h1> LOADING .....</h1>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleContainer)
);
