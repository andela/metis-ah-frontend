import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from 'Utils/helpers/alert';

export const ProtectedRoute = ({ component: Component, isAuth, ...configs }) => (
  <Route
    {...configs}
    render={(props) => {
      if (isAuth) {
        return <Component {...props} />;
      }
      Alert.info('Please, Login to continue');
      return <Redirect to="/" />;
    }}
  />
);

const mapStateToProps = state => ({
  isAuth: state.authUser.isAuthenticated
});

export default connect(mapStateToProps)(ProtectedRoute);
