import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { socialAuth, resetCurrentUser } from '../../store/actions/authUser';

class SocialAuth extends Component {
  componentDidMount() {
    const { socialAuthHandler, resetUser } = this.props;
    const { match, history } = this.props;
    const media = match.params.type;
    const code = parse(history.location.search);

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      resetUser(user);
    }

    if (media) {
      socialAuthHandler(media, code, history);
    }
  }

  render() {
    return <div>Redirecting...</div>;
  }
}

SocialAuth.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
  socialAuthHandler: PropTypes.func.isRequired,
  resetUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  socialAuthHandler: (media, code, history) => dispatch(socialAuth(media, code, history)),
  resetUser: user => dispatch(resetCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(withRouter(SocialAuth));
