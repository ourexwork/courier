import React from 'react';

import {Router, Route, Switch } from 'react-router-dom';
import './configureAnchor';
import {createBrowserHistory} from 'history';


import Home from '../pages/Home';

import LoginRegisterPage from '../pages/loginRegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import ThankyouPage from '../pages/ThankYouPage' ;

import DashboardRouter from './DashboardRouter';
import PublicRoute from './PublicRoute';


// Stylesheet
// import { dashboardStyle } from '../components/MaterialUi/jss/dashboardStyle';



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


 const AppRouter = (props) => (
  <Router history ={history}>
    <React.Fragment>
      <Switch>
      <Route path='/dashboard/' {...props} component={DashboardRouter}   />
      <Route path='/' component={HomeRoute}  />  
     
      
    </Switch>
    </React.Fragment>
  </Router>
  );


export default AppRouter
