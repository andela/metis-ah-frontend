import React from 'react';
import { connect } from 'react-redux';
// Components
import Footer from 'Components/compounds/Footer';
import Navbar from 'Components/compounds/FooterCategories';
import './index.scss';
import NavbarTop from 'Components/compounds/NavbarTop';
import SearchForm from '../../components/compounds/SearchForm';
import SearchResult from '../../components/compounds/SearchResult';

const SearchPage = () => (
  <div className="">
    <NavbarTop />
    <Navbar />
    <div className="SearchContainer container">
      <div className="Hero">
        <div className="Search__Title">
          <h1>Find Articles On Author's Haven</h1>
        </div>
        <SearchForm />
      </div>
      <SearchResult />
    </div>
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated
});

export default connect(mapStateToProps)(SearchPage);
