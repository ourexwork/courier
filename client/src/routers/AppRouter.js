import React from 'react';
import {connect } from 'react-redux'
import {Router, Route, Switch } from 'react-router-dom';
import './configureAnchor';
import {createBrowserHistory} from 'history';


import Home from '../pages/Home';

import LoginRegisterPage from '../pages/loginRegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import ThankyouPage from '../pages/ThankYouPage' ;

import {DashboardRouter} from './DashboardRouter';
import {UserDashboardRouter} from './UserDashboardRouter';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();



const HomeRoute = ({match}) => {
 
  return(
    <Switch>
      <Route path={match.url} exact={true}  component={Home} />
      
        <PublicRoute
        path={match.url+'login'}
  component={() => <LoginRegisterPage login={true} />}
/>
        <Route path={match.url+'register'}
        exact={true}
        render = {(props)=>(
          <LoginRegisterPage {...props} register={true}/>

        )}
        />
        <Route path={match.url+'register/thankyou'} exact={true}  component={ThankyouPage} />
        <Route  component={NotFoundPage}  />
    </Switch>
  );
};


 const AppRouter = ({match, user, shipments}) => (
  <Router history ={history}>
    <React.Fragment>
      <Switch>
      <Route path='/dashboard/'  render = {(props)=>(
          <DashboardRouter {...props}
           isAdmin={true}
            shipments={shipments}
           user={ user }/>

        )}   />

        <Route path='/user/'  render = {(props)=>(
          <UserDashboardRouter
           {...props} 
           isAdmin={false} 
            user={ user }
            // shipments ={shipments}
             
             />

        )}   />
      <Route path='/' component={HomeRoute}  />  
     
      
    </Switch>
    </React.Fragment>
  </Router>
  );

  const mapStateToProps = (state)=>{
      return {
    user : state.auth,
    shipments: state.shipments,
    users:state.users

  }
}

export default connect(mapStateToProps)(AppRouter)
