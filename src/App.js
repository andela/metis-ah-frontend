import 'babel-polyfill';
import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from 'Pages/Landing';
import Articles from 'Pages/Articles';
import SuccessSignupMessage from 'Pages/SignupInfo';
import SocialAuthPage from 'Pages/SocialAuth';
import ResetPassword from 'Pages/ResetPassword';
import ResetPasswords from 'Pages/ResetPasswords';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/articles/:category" component={Articles} />
        <Route path="/successSignup" component={SuccessSignupMessage} />
        <Route path="/social/:type" component={SocialAuthPage} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/api/v1/users/api/auth/reset-password/:token" component={ResetPasswords} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
