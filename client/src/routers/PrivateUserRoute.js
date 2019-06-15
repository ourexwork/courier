import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateUserRoute = ({
  isAuthenticated,
  isAdmin,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => {
      if (isAuthenticated) {
        return <Component {...props} />;
      } else if (!isAuthenticated) {
        return <Redirect to='/user' />;
      } else {
        return <Redirect to='/login' />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth._id
});

export default connect(mapStateToProps)(PrivateUserRoute);
