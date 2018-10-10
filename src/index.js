import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';


console.log(document.getElementsByTagName('body'));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
