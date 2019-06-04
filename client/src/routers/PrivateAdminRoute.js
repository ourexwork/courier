import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


 const PrivateAdminRoute = ({
  isAuthenticated, isAdmin,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => {
      if (isAuthenticated && isAdmin) {
     return <Component {...props} />
      }
      else if (isAuthenticated){
       setInterval(alert('not authorised'),2000);
        return <Redirect to="/dashboard/...." />
      }
  else {
    setInterval(alert('not authorised'),2000);
   return <Redirect to="/login" />
  }
        
    }} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth._id ,
  isAdmin:  !!state.auth.isAdmin
});

export default connect(mapStateToProps)(PrivateAdminRoute)