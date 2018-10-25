import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import logo from 'Images/logo.png';
import Button from 'Components/atoms/Button';
import Interests from 'Components/compounds/Interests';
import FooterBrand from 'Components/compounds/FooterBrand';
import { verifyAccount } from '../../store/actions/authUser';
import './style.scss';

const cloneObjects = categories => (
  categories.map((item) => {
    const newObj = {};
    Object.keys(item).forEach((key) => {
      newObj[key] = item[key];
    });
    return newObj;
  })
);

const filterSelected = (categories) => {
  // const selected = categories.filter(item => item.selected);
  const selectedNames = categories.reduce((acc, item) => {
    const { id, selected } = item;
    if (selected) {
      acc.push(id);
    }
    return acc;
  }, []);
  return selectedNames;
};

class VerifyEmail extends Component {
  state = {
    catLoading: true,
    categories: [],
    selected: 0,
  }

  componentDidMount() {
    axios.get('https://metis-ah-staging.herokuapp.com/api/v1/categories')
      .then((response) => {
        const formatedCategories = response.data.data.categories.map((item) => {
          item.selected = false;
          return item;
        });
        this.setState({
          categories: formatedCategories,
          catLoading: false,
        });
      });
  }

  verifyAndAddInterest = async (categories, setUser, history, match) => {
    const verifyToken = match.params.token;
    await setUser(verifyToken);

    const user = JSON.parse(localStorage.getItem('user'));
    const filtered = filterSelected(categories);

    axios.put('/users/interests', {
      category: filtered
    }, {
      headers: { authorization: user.token }
    })
      .then(() => {
        toastr.success('Interests successfully added.');
        history.push('/');
      })
      .catch(() => {
        toastr.error('Could not add interests at this time');
      });
  }

  clickInterest = (index, categories, selected) => {
    const newCat = cloneObjects(categories);

    newCat[index].selected = !categories[index].selected;

    this.setState({
      categories: newCat,
      selected: newCat[index].selected ? selected + 1 : selected - 1,
    });
  }

  render() {
    const { categories, catLoading, selected } = this.state;
    const { history, match, setUser } = this.props;
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
              {catLoading
                ? (
                  <div className="lds-circle" />
                )
                : (
                  <Interests
                    categories={categories}
                    click={index => this.clickInterest(index, categories, selected)}
                  />
                )
              }
            </section>
          </div>
          <Button
            disabled={selected <= 0}
            color="green"
            className="central"
            onClick={() => this.verifyAndAddInterest(categories, setUser, history, match)}
          >
            VERIFY
          </Button>
        </div>
        <FooterBrand />
      </div>
    );
  }
}

VerifyEmail.propTypes = {
  setUser: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ token: PropTypes.string.isRequired }) }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

const mapDispatchToProps = dispatch => ({
  setUser: verifyToken => dispatch(verifyAccount(verifyToken))
});

export default withRouter(connect(null, mapDispatchToProps)(VerifyEmail));
