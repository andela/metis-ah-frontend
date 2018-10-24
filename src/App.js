import 'babel-polyfill';
import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from 'Pages/Landing';
import Articles from 'Pages/Articles';
import SuccessSignupMessage from 'Pages/SignupInfo';
import SocialAuthPage from 'Pages/SocialAuth';
import ResetPassword from 'Pages/ResetPassword';
import UpdatePassword from 'Pages/UpdatePassword';
import VerifyEmail from 'Pages/VerifyEmail';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/articles/:category" component={Articles} />
        <Route path="/successSignup" component={SuccessSignupMessage} />
        <Route path="/social/:type" component={SocialAuthPage} />
        <Route exact path="/auth/reset-password" component={ResetPassword} />
        <Route exact path="/auth/reset-password/:token" component={UpdatePassword} />
        <Route path="/verifyemail" component={VerifyEmail} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
