/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import './App.less';

import React from 'react';
import invariant from 'react/lib/invariant';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Navbar from '../Navbar';
import ContentPage from '../ContentPage';
import NotFoundPage from '../NotFoundPage';
import auth from '../../core/auth';
import Router from 'react-router';
var { Route, RouteHandler, Link } = Router;


export default class App extends React.Component {

  constructor () {
    this.state = {
      loggedIn: auth.loggedIn()
    };
  }

  setStateOnAuth (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  }

  componentWillMount () {
    auth.onChange = this.setStateOnAuth.bind(this);
    auth.login();
  }

  render() {
    
    return (
      <div className="App">
        <RouteHandler/>
      </div>
    );
  }
}

var requireAuth = (Component) => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {
      if (!auth.loggedIn()) {
        transition.redirect('/login', {}, {'nextPath' : transition.path});
      }  
    }
    render () {
      return <Component {...this.props}/>
    }
  }
};
