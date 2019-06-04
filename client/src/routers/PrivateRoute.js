import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
);

const mapStateToProp = state => ({
  isAuthenticated: !!state.auth._id
});

export default connect(mapStateToProp)(PrivateRoute);
