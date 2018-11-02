import React from 'react';
import NavbarTop from 'Components/compounds/Navbar';
import Footer from 'Components/compounds/Footer';
import PropTypes from 'prop-types';
import CategoryNav from 'Components/compounds/FooterCategories';
import ProfileContainer from 'Components/compounds/ProfileContainer';
import './style.scss';

const ProfilePage = (props) => {
  const { match } = props;
  const { userId } = match.params;
  return (
    <div className="profile" id="profile">
      <header>
        <NavbarTop />
        <CategoryNav />
      </header>
      <ProfileContainer userId={userId} />
      <Footer />
    </div>
  );
};

ProfilePage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired
};
export default ProfilePage;
