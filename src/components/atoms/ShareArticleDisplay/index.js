import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import { shareArticle } from 'Actions/singleArticle';
import './style.scss';

class ShareArticleDisplay extends React.Component {
  shareWindowClose = (sharePlatform) => {
    const { shareArticleHandle, articleId } = this.props;
    toastr.success('article shared successfully');
    shareArticleHandle(sharePlatform, articleId);
  };

  render() {
    const { shareUrl, title } = this.props;
    return (
      <div className="share-container">
        <FacebookShareButton url={shareUrl} quote={title} onShareWindowClose={() => this.shareWindowClose('Facebook')}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title} onShareWindowClose={() => this.shareWindowClose('Twitter')}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton url={shareUrl} title={title} onShareWindowClose={() => this.shareWindowClose('Whatsapp')}>
          <WhatsappIcon size={32} round separator="::" />
        </WhatsappShareButton>

        <LinkedinShareButton url={shareUrl} title={title} onShareWindowClose={() => this.shareWindowClose('Linkedin')}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <EmailShareButton url={shareUrl} subject={title} onShareWindowClose={() => this.shareWindowClose('Email')}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  shareArticleHandle: (sharePlatform, articleId) => dispatch(shareArticle(sharePlatform, articleId))
});

export default connect(
  null,
  mapDispatchToProps
)(ShareArticleDisplay);
