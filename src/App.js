import 'babel-polyfill';
import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Relative imports
import Landing from 'Pages/Landing';
import Articles from 'Pages/Articles';
import SuccessSignupMessage from 'Pages/SignupInfo';
import SocialAuthPage from 'Pages/SocialAuth';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/articles/:category" component={Articles} />
        <Route path="/successSignup" component={SuccessSignupMessage} />
        <Route path="/social/:type" component={SocialAuthPage} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
