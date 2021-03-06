import React, { Suspense, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './configureAnchor';
import { createBrowserHistory } from 'history';

import LoginRegisterPage from '../pages/loginRegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import ThankyouPage from '../pages/ThankYouPage';

import { DashboardRouter } from './DashboardRouter';
import { UserDashboardRouter } from './UserDashboardRouter';
import PublicRoute from './PublicRoute';
import Preloader from '../components/Preloader';

const Home = React.lazy(() => import('../pages/Home'));
// Stylesheet
// import { dashboardStyle } from '../components/MaterialUi/jss/dashboardStyle';

export const history = createBrowserHistory();

const HomeRoute = ({ match }) => {
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path={match.url} exact={true} component={Home} />

        <PublicRoute
          path={match.url + 'login'}
          component={() => <LoginRegisterPage login={true} />}
        />
        <Route
          path={match.url + 'register'}
          exact={true}
          render={props => <LoginRegisterPage {...props} register={true} />}
        />
        <Route
          path={match.url + 'register/thankyou'}
          exact={true}
          component={ThankyouPage}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

const AppRouter = ({ user, shipments }) => (
  <Router history={history}>
    <Fragment>
      <Switch>
        <Route
          path='/dashboard/'
          render={props => (
            <DashboardRouter
              {...props}
              isAdmin={true}
              shipments={shipments}
              user={user}
            />
          )}
        />

        <Route
          path='/user/'
          render={props => (
            <UserDashboardRouter
              {...props}
              isAdmin={false}
              user={user}
              // shipments ={shipments}
            />
          )}
        />
        <Route path='/' component={HomeRoute} />
      </Switch>
    </Fragment>
  </Router>
);

const mapStateToProps = state => ({
  user: state.auth,
  shipments: state.shipments,
  users: state.users
});

export default connect(mapStateToProps)(AppRouter);
