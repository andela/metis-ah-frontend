import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrandContainer from 'Components/compounds/BrandContainer';
import SearchAndProfile from 'Components/compounds/SearchAndProfile';
import Header from 'Components/atoms/singleArticleHeader';
import FooterBrand from 'Components/compounds/FooterBrand';
import convert from 'react-html-parser';
import Loader from 'Components/atoms/ArticleLoader';
import { getSingleArticle } from 'Actions/singleArticle';
import TagsDisplay from 'Components/atoms/TagsDisplay';
import './style.scss';
/**
 * SingleArticle
 */
export class SingleArticle extends Component {
  state = {
    menu: false,
  }

  componentDidMount() {
    const { params: { articleId } } = this.props.match;
    const { getArticle } = this.props;
    getArticle(articleId);
  }

 showMenu = () => {
   this.setState(state => ({
     menu: !state.menu,
   }));
 }

 render() {
   const {
     menu
   } = this.state;
   const { article, loading } = this.props;
   return (
     <div className="single">
       <div className="navCover">
         <nav className="navbar container Landing-Page-Header" role="navigation" aria-label="main navigation">
           <BrandContainer showMenu={this.showMenu} menu={menu} />
           <SearchAndProfile menu={menu} />
         </nav>
       </div>
       {loading && <Loader /> }
       {article
          && (
          <div>
            <Header
              title={article.articleData.title}
              img={article.articleData.imageUrl}
              createdDate={article.articleData.createdDate}
              profile={article.metadata.author.imageUrl}
              author={article.metadata.author.username}
            />
            <div className="Main container">
              {convert(article.articleData.body)}
              <TagsDisplay tags={article.metadata.tags} />
            </div>
          </div>
          )
          }
       <footer className="Main-Footer">
         <FooterBrand />
       </footer>
     </div>

   );
 }
}
const mapStateToProps = state => ({
  article: state.singleArticle.article,
  error: state.singleArticle.error,
  loading: state.singleArticle.loading,

});

const mapDispatchToProps = dispatch => ({
  getArticle: articleId => dispatch(getSingleArticle(articleId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);
