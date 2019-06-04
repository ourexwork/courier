import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


 const PrivateAdminRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
 
          <Component {...props} />
       
      ) : (
          <Redirect to="/login" />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth._id && state.auth.isAdmin
});

export default connect(mapStateToProps)(PrivateAdminRoute)