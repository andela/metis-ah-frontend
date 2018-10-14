import React from 'react';
import { connect } from 'react-redux';
// Components
import Header from 'Components/compounds/Header';
import Footer from 'Components/compounds/Footer';
import FeaturedArticles from 'Components/compounds/FeaturedArticles';
import PopularArticles from 'Components/compounds/PopularArticles';
import PopularAuthors from 'Components/compounds/PopularAuthors';
import Button from 'Components/atoms/Button';
import './style.scss';

const Landing = (props) => {
  const { isAuth } = props;
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
};

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
