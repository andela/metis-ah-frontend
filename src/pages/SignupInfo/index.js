import React from 'react';
import BrandContainer from 'Components/compounds/BrandContainer';
import Footer from 'Components/compounds/Footer';

import './style.scss';

const Info = () => (
  <div className="signup_info_container">
    <div className="header_section">
      <BrandContainer />
    </div>
    <div className="message_section">
      <h1 className="signup_info_message">
        Welcome to Authors&apos; Haven.
      </h1>
      <h1 className="signup_info_message">
        Your Sign is successfull, in order to continue,
        please verify your account in your email account
      </h1>
    </div>
    <div className="footer_section">
      <Footer />
    </div>
  </div>
);

export default Info;
