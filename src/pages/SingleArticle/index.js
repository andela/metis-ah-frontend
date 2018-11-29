import React, { Component } from "react";
import { connect } from "react-redux";
import BrandContainer from "Components/compounds/BrandContainer";
import SearchAndProfile from "Components/compounds/SearchAndProfile";
import Header from "Components/atoms/SingleArticleHeader";
import FooterBrand from "Components/compounds/FooterBrand";
import convert from "react-html-parser";
import Loader from "Components/atoms/ArticleLoader";
import { getSingleArticle } from "Actions/singleArticle";
import TagsDisplay from "Components/atoms/TagsDisplay";

import Modal from "Atoms/Modal";
import { closeModal, userFail } from "Actions/authUser";
import CommentBox from "Components/compounds/CommentBox";
import { SHARE_BASE_URL } from "../../../config.json";
import ShareArticleDisplay from "../../components/atoms/ShareArticleDisplay";
import LikeAndDisLike from "../../components/compounds/LikeDislike/index.js";
import ProtectedRoute from "../../components/HOC/ProtectedRoute";
import RateArticle from "../../components/compounds/RateArticle";
import ReportArticle from "../../components/compounds/ReportArticle";
import "./style.scss";
import { showModal } from "../../store/actions/authUser.js";
/**
 * SingleArticle
 */
export class SingleArticle extends Component {
  state = {
    menu: false,
    showReportModal: false
  };

  componentDidMount() {
    const {
      params: { articleId }
    } = this.props.match;
    const { getSingleArticle } = this.props;
    getSingleArticle(articleId);
  }

  handleShowModal = () => {
    this.setState({
      showReportModal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      showReportModal: false
    });
  };

  showMenu = () => {
    this.setState(state => ({
      menu: !state.menu
    }));
  };

  closeModalHandler = () => {
    const { closeModal, userFail } = this.props;
    closeModal();
    userFail();
  };

  render() {
    const { menu, showReportModal } = this.state;
    const {
      article,
      loading,
      location: { pathname },
      isModalOpen,
      userRating
    } = this.props;
    const shareUrl = `${SHARE_BASE_URL}${pathname}`;

    return (
      <div className="single">
        {isModalOpen ? <Modal /> : null}
        <div className="navCover">
          <nav
            className="navbar container Landing-Page-Header"
            role="navigation"
            aria-label="main navigation"
          >
            <BrandContainer showMenu={this.showMenu} menu={menu} />
            <SearchAndProfile menu={menu} />
          </nav>
        </div>
        {loading && <Loader />}
        {article && (
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
              <div className="tagsAndReportArticle">
                <TagsDisplay tags={article.metadata.tags} />
                <button
                  className="report_article_icon"
                  onClick={this.handleShowModal}
                >
                  <i className="fa fa-flag flag-icon" />
                  <span>Report</span>
                </button>
              </div>
              <div className="ArticleActions">
                <LikeAndDisLike />
                <ShareArticleDisplay
                  title={article.articleData.title}
                  shareUrl={shareUrl}
                  articleId={article.articleData.id}
                />
              </div>
              <RateArticle
                articleId={article.articleData.id}
                stars={userRating}
                rating={
                  article.articleData.rating === null
                    ? 0
                    : article.articleData.rating
                }
              />
            </div>
            <div className="Main-comment-container">
              <CommentBox />
            </div>
          </div>
        )}
        {showReportModal ? (
          <ReportArticle
            closeModal={this.handleCloseModal}
            articleId={article.articleData.id}
          />
        ) : null}
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
  isModalOpen: state.authUser.modalOpen,
  userRating: state.rateArticle.userRating
});

export default connect(
  mapStateToProps,
  {
    getSingleArticle,
    closeModal,
    userFail
  }
)(SingleArticle);
