/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import 'babel/polyfill';

import React from 'react/addons';
import emptyFunction from 'react/lib/emptyFunction';
import App from './components/App';
import Dispatcher from './core/Dispatcher';
import AppActions from './actions/AppActions';
import ActionTypes from './constants/ActionTypes';
import Login from './components/Login';
import ContentPage from './components/ContentPage';
import Router from 'react-router';
import DeviceItem from './components/DeviceItem'

var { Route, RouteHandler, Link } = Router;




 var routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="login" handler={Login}/>
      <Route handler={ContentPage}/>
      <Route path="DeviceItem" handler={DeviceItem}/>
    </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);//document.getElementById('example'));
  });

