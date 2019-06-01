import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';
import {Router, Route, Switch } from 'react-router-dom';
import './configureAnchor';
import {createBrowserHistory} from 'history';
import {connect } from 'react-redux';


import CssBaseline from '@material-ui/core/CssBaseline';


import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

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
import DashboardTop from '../pages/dashboardtop';
import DashboardRouter from './DashboardRouter'

// Stylesheet
// import { dashboardStyle } from '../components/MaterialUi/jss/dashboardStyle';



export const history = createBrowserHistory();



const HomeRoute = ({match}) => {
 
  return(
    <Switch>
      <Route path={match.url} exact={true}  component={Home} />
      <Route path={match.url+'login'}
      exact={true}
        render = {(props)=>(
          <LoginRegisterPage {...props} login={true}/>
        )} 
        />
        <Route path={match.url+'register'}
        exact={true}
        render = {(props)=>(
          <LoginRegisterPage {...props} register={true}/>

        )}
        />
        <Route component={NotFoundPage} />
    </Switch>
  );
};







 const AppRouter = (props) => (
  <Router history ={history}>
    <React.Fragment>
      <Switch>
      <Route path='/dashboard/' {...props} component={DashboardRouter}  />
      <Route path='/' component={HomeRoute} />  
    </Switch>
    </React.Fragment>
  </Router>
  );


export default AppRouter
