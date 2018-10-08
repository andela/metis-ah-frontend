import 'babel-polyfill';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Relative imports
import Landing from 'Pages/Landing';
import Articles from 'Pages/Articles';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/articles" component={Articles} />
    </Switch>
  </BrowserRouter>
);

export default App;
