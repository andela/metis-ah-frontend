import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileMenu extends Component {
  state = {
    open: true,
  };

  render() {
    const { isAuth } = this.props;
    return (
      <div>
        items
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated
});

export default connect(mapStateToProps)(ProfileMenu);
