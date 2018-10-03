import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <h1>
    Hello React!
  </h1>
);

const root = document.getElementById('root');
render(<App />, root);
