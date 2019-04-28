import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './configureAnchor';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import LoginPage from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </BrowserRouter>
);

export default AppRouter;
