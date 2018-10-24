import React from 'react';
import { connect } from 'react-redux';
// Components
import Footer from 'Components/compounds/Footer';
import Navbar from 'Components/compounds/FooterCategories';
import './index.scss';
import NavbarTop from 'Components/compounds/NavbarTop';

const Landing = () => (
  <div className="Landing-Flex-Wrap">
    <NavbarTop />
    <Navbar />
    <div className="SearchContainer container">
     search page
    </div>
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
