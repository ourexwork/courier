import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import './configureAnchor';
import {connect } from 'react-redux';
import { store } from '../App'
import {history } from './AppRouter'
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
import { startSetUsers } from '../redux/actions/user';
import { startSetShipments } from '../redux/actions/shipment';
import PrivateAdminRoute from './PrivateAdminRoute'

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
    class  DashboardRoute extends React.Component  {


   componentDidMount(){
       if (this.props.user.isAdmin){
 store.dispatch(startSetShipments());
 store.dispatch(startSetUsers());  
   }
}
     
render ()

{
    const { match ,classes} = this.props; 
  return (

<React.Fragment>
    <div className={classes.root}>
        <CssBaseline />
      <DashboardTop />
      <CssBaseline />
      <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
      <Switch>
      <PrivateAdminRoute path={match.url} exact={true} component={DashboardInner} />
      <PrivateAdminRoute path={match.url+'/listuser'}  exact={true} component={ListUserPage} />
      <PrivateAdminRoute path={match.url+'/listshipment'}  exact={true} component={ListShipmentPage} />
      <Redirect to='/kfkfkfkf'><Route  component={NotFoundPage}  />  </Redirect>
      </Switch>
      </Container>
       <MadeWithLove />
        </main>
  </div>
  
  </React.Fragment>



      ) 
    }
}
  const mapStateToProps = (state)=>{
      return {
    user : state.auth
  }
}
  
  DashboardRoute.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
   
   export default connect(mapStateToProps)(withStyles(dashboardStyle)(DashboardRoute));