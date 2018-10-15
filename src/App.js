import 'babel-polyfill';
import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Relative imports
import Landing from 'Pages/Landing';
import Articles from 'Pages/Articles';
import SuccessSignupMessage from 'Pages/SignupInfo';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/articles/:category" component={Articles} />
        <Route path="/successSignup" component={SuccessSignupMessage} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
