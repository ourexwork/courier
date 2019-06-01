import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material-Ui Core
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

//Stylesheet
 import { dashboardStyle } from '../components/MaterialUi/jss/dashboardStyle';
 import Chart from '../components/MaterialUi/Chart';
import Deposits from '../components/MaterialUi/Deposits';
import Orders from '../components/MaterialUi/Orders';
import ListUserPage from '../pages/ListUserPage';
import ListShipmentPage from '../pages/ListShipmentPage';


function  DashboardInner  (props)  {
   
   const { match ,classes} = props;
   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return (


 <Grid container spacing={3}>
  {/* Chart */}
 <Grid item xs={12} md={8} lg={9}>
 <Paper className={fixedHeightPaper}>
   <Chart />
 </Paper>
</Grid>
{/* Recent Deposits */}
<Grid item xs={12} md={4} lg={3}>
 <Paper className={fixedHeightPaper}>
   <Deposits />
 </Paper>
</Grid>
{/* Recent Orders */}
<Grid item xs={12}>
 <Paper className={classes.paper}>
   <Orders />
 </Paper>
</Grid>
</Grid> 
)
}

DashboardInner.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
   
   export default withStyles(dashboardStyle)(DashboardInner);