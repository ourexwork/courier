import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import './configureAnchor';
import {createBrowserHistory} from 'history';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import LoginPage from '../pages/Login';
import LoginRegisterPage from '../pages/loginRegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import ThankyouPage from '../pages/ThankYouPage' ;
import ListUserPage from '../pages/ListUserPage';
import ListShipmentPage from '../pages/ListShipmentPage';
import EditUserPage from '../pages/EditUserPage';
import ViewUserPage from '../pages/ViewUserPage';

export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history ={history}>
    <>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login'
        render = {(props)=>(
          <LoginRegisterPage {...props} login={true}/>
        )}
        />
        <Route path='/register'
        render = {(props)=>(
          <LoginRegisterPage {...props} register={true}/>

        )}
        />
        <Route path='/thankyou' component={ThankyouPage} exact />
        <Route path='/edit/:id' component={EditUserPage} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/listuser' component={ListUserPage} />
        <Route path='/viewprofile/:id' component={ViewUserPage} />
        <Route path='/listshipment' component={ListShipmentPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
);

export default AppRouter; 