import React from 'react';
import { connect } from 'react-redux';
// Components
import Header from 'Components/compounds/Header';
import Footer from 'Components/compounds/Footer';
import FeaturedArticles from 'Components/compounds/FeaturedArticles';
import PopularArticles from 'Components/compounds/PopularArticles';
import PopularAuthors from 'Components/compounds/PopularAuthors';
import Button from 'Components/atoms/Button';
import bannerImage from 'Images/hero.jpg';
import { setHeroContent } from '../../store/actions/article';
import './style.scss';


class Landing extends React.Component {
  componentDidMount() {
    const heroContent = {
      poster: bannerImage,
      name: 'AUTHOR\'S HAVEN',
      description:
      'A community where readers and writers come together to share and discuss knowledge and ideas.'
    };
    const { setHeroContent } = this.props;
    setHeroContent(heroContent);
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

const mapDispatchToProps = dispatch => ({
  setHeroContent: banner => dispatch(setHeroContent(banner))
});

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
