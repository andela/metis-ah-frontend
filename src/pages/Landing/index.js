import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parse } from 'query-string';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import Header from 'Components/compounds/Header';
import Footer from 'Components/compounds/Footer';
import FeaturedArticles from 'Components/compounds/FeaturedArticles';
import PopularArticles from 'Components/compounds/PopularArticles';
import PopularAuthors from 'Components/compounds/PopularAuthors';
import Button from 'Components/atoms/Button';
import bannerImage from 'Images/hero.jpg';
import { setHeroContent } from '../../store/actions/article';
import { socialAuth } from '../../store/actions/authUser';
import './style.scss';

class Landing extends Component {
  componentDidMount() {
    const heroContent = {
      poster: bannerImage,
      name: 'AUTHOR\'S HAVEN',
      description:
      'A community where readers and writers come together to share and discuss knowledge and ideas.',
      buttonIsVisible: true,
      className: 'hero'
    };
    const { setHeroContentNow } = this.props;
    setHeroContentNow(heroContent);

    const { socialAuthHandler } = this.props;
    const { match, history } = this.props;
    const media = match.params.type;
    const code = parse(history.location.search);

    if (media) {
      socialAuthHandler(media, code);
    }
  }

  render() {
    const { isAuth } = this.props;
    return (
      <div className="Landing-Flex-Wrap">
        <Header />
        <div className="body">
          <FeaturedArticles />
          <PopularArticles />
          <PopularAuthors />
          <div className="gap">
            {isAuth
              ? <Button color="green" onClick={() => toastr.success('comming soon...')}>WRITE</Button>
              : <Button color="green" onClick={() => toastr.success('comming soon...')}>GET STARTED</Button>
          }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroContent: state.article.heroContent,
  isAuth: state.authUser.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  setHeroContentNow: heroContent => dispatch(setHeroContent(heroContent)),
  socialAuthHandler: (media, code) => dispatch(socialAuth(media, code))
});

Landing.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
  socialAuthHandler: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  setHeroContentNow: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
