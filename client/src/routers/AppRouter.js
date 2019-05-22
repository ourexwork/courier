import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './configureAnchor';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import LoginPage from '../pages/Login';
import loginRegisterPage from '../pages/loginRegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import Thankyou from '../components/Thankyou'
import ListUserPage from '../pages/ListUserPage'
import ListShipmentPage from '../pages/ListShipmentPage'
import EditUserPage from '../pages/EditUserPage'
import ViewUserPage from '../pages/ViewUserPage'

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/register' component={Register} exact />
       
        <Route path='/register/thankyou' component={Thankyou} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/loginreg' component={loginRegisterPage} exact />
        <Route path='/edit/:id' component={EditUserPage} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/listuser' component={ListUserPage} />
        <Route path='/viewprofile/:id' component={ViewUserPage} />
        <Route path='/listshipment' component={ListShipmentPage} exact />
       
       
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </BrowserRouter>
);

export default AppRouter;
