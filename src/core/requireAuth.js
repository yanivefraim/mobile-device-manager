import React from 'react';
import auth from './auth';

var requireAuth = (Component) => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {debugger;
      if (!auth.loggedIn()) {
        transition.redirect('/login', {}, {'nextPath' : transition.path});
      }  
    }
    render () {
      return <Component {...this.props}/>
    }
  }
};

export default requireAuth;