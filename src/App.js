import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Relative imports
import Landing from 'Pages/Landing';
import Async from 'HOC/AsyncComponent';
import ProtectedRoute from 'HOC/ProtectedRoute';

// Asynchronous Imports
const AsyncArticles = Async(() => import('Pages/Articles'));
const AsyncCreateArticle = Async(() => import('Pages/CreateArticle'));
const SuccessSignupMessage = Async(() => import('Pages/SignupInfo'));
const SocialAuthPage = Async(() => import('Pages/SocialAuth'));
const ResetPassword = Async(() => import('Pages/ResetPassword'));
const UpdatePassword = Async(() => import('Pages/UpdatePassword'));
const VerifyEmail = Async(() => import('Pages/VerifyEmail'));
const NotFound = Async(() => import('Pages/NotFound'));
const ProfilePage = Async(() => import('Pages/Profile'));


const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/social/:type" component={SocialAuthPage} />
        <Route exact path="/auth/reset-password/:token" component={UpdatePassword} />
        <Route path="/verifyemail/:token" component={VerifyEmail} />
        <Route exact path="/auth/reset-password" component={ResetPassword} />
        <ProtectedRoute path="/articles/new" component={AsyncCreateArticle} />
        <Route path="/articles/:category" exact component={AsyncArticles} />
        <Route path="/successSignup" component={SuccessSignupMessage} />
        <ProtectedRoute path="/users/:userId" component={ProfilePage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
