import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Router, Route, Switch } from 'react-router-dom';
import './configureAnchor';
import {connect } from 'react-redux';


import CssBaseline from '@material-ui/core/CssBaseline';


import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import DashboardTop from '../pages/dashboardtop';
import DashboardInner from '../components/DashboardInner';
import ListUserPage from '../pages/ListUserPage';
import ListShipmentPage from '../pages/ListShipmentPage';
// dashboard Notfound text will still be customized or redirected//
import NotFoundPage from '../pages/NotFoundPage';

export const dashboardStyle = theme => ({
    root: {
      display: 'flex'
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    fixedHeight: {
      height: 240
    }
  });
  
  

function MadeWithLove() {
    return (
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Built with love by the '}
        <Link color='inherit' href='https://e.com/'>
          E - Team
        </Link>
        {' team.'}
      </Typography>
    );
  }
    function  DashboardRoute  (props)  {
   
      const { match ,classes} = props;
 
  return (

    <div className={classes.root}>
        <CssBaseline />
      <DashboardTop />
      <CssBaseline />
      <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
      <Switch>
      <Route path={match.url} exact={true} component={DashboardInner} />
      <Route path={match.url+'/listuser'}  exact={true} component={ListUserPage} />
      <Route path={match.url+'/listshipment'}  exact={true} component={ListShipmentPage} />
      </Switch>
      </Container>
       <MadeWithLove />
        </main>
  </div>

      ) 
    }
  
  
  
  DashboardRoute.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
   
   export default withStyles(dashboardStyle)(DashboardRoute);