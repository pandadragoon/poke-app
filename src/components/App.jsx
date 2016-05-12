/* @flow */

import React from 'react';

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

export default class App extends React.Component {
  render(): Object{
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
