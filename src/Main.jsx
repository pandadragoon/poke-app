/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router} from 'react-router';
import {hashHistory} from 'react-router';

require('babel-core/polyfill');
require('./styles/main.scss');

import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import Pokemon from './components/Pokemon/Pokemon.jsx';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path='pokemon/:name' component={Pokemon} />
  </Router>
), document.getElementById('app'));
