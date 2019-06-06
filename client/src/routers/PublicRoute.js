import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


 const PublicRoute = ({
  isAuthenticated, isAdmin,
  component: Component,
  ...rest
}) => (
    <Route {...rest}  component={(props) => {
      if (isAuthenticated && isAdmin) {
     return <Redirect to="/dashboard" /> 
      }
      else if (isAuthenticated){
        return <Redirect to="/user" />
      }
  else {
   return <Component {...props} />
  }
        
    }} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth._id,
  isAdmin: !!state.auth.isAdmin
});

export default connect(mapStateToProps)(PublicRoute)