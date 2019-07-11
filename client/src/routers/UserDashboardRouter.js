import React from 'react';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './configureAnchor';

import Dashboard from '../pages/newd.js';
import UserHome from '../pages/UserHome';
import ViewProfile from '../pages/ViewUserPage';
import ThankyouPage from '../pages/ThankYouPage';

// dashboard Notfound text will still be customized or redirected//
import NotFoundPage from '../pages/NotFoundPage';

import PrivateUserRoute from './PrivateUserRoute';

const UserRoute = ({ match }) => {
  return (
    <div>
      <Switch>
        <PrivateUserRoute path={match.url} exact={true} component={UserHome} />
        <PrivateUserRoute
          path={match.url + '/viewprofile'}
          exact={true}
          component={ViewProfile}
        />

        {
          //  <PrivateUserRoute path={match.url+'/listshipment'}  exact={true} component={ListShipmentPage} />
        }
        <Redirect to='/notfound'>
          <Route component={NotFoundPage} />{' '}
        </Redirect>
      </Switch>
    </div>
  );
};

export const UserDashboardRouter = Dashboard(UserRoute);
