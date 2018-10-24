import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from 'Images/logo.png';
import Button from 'Components/atoms/Button';
import Interests from 'Components/compounds/Interests';
import FooterBrand from 'Components/compounds/FooterBrand';
import './style.scss';

class VerifyEmail extends Component {
  componentDidMount() {
  }

  render() {
    console.log(this.props);
    const { categories } = this.props;
    return (
      <div className="verify-email--fill-height">
        <div className="verify-email">
          <header className="header">
            <img id="logo" src={logo} alt="Authors haven logo" />
            <h1 className="title">Author&apos;s Haven</h1>
          </header>
          <section className="message">
            <h2>Verify your account</h2>
            <p>Kindly select some interests to get you started</p>
          </section>
          <div>
            <section className="interests-section">
              <Interests
                categories={categories}
              />
            </section>
          </div>
          <Button color="green" className="central">VERIFY</Button>
        </div>
        <FooterBrand />
      </div>
    );
  }
}

VerifyEmail.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(VerifyEmail);
