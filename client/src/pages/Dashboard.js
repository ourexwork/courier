import React, { Component } from 'react';
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
import {history}  from  '../routers/AppRouter'


// Custom Material Components
import AppBar from '../components/MaterialUi/CustomAppBar';
import Drawer from '../components/MaterialUi/CustomDrawer';


// Stylesheet
import { dashboardStyle } from '../components/MaterialUi/jss/dashboardStyle';

import Chart from '../components/MaterialUi/Chart';
import Deposits from '../components/MaterialUi/Deposits';
import Orders from '../components/MaterialUi/Orders';
import ListUserPage from '../pages/ListUserPage';
import ListShipmentPage from '../pages/ListShipmentPage';


function MadeWithLove() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Built with love by the '}
      <Link color='inherit' href='https://material-ui.com/'>
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

      this.state = {
    open: false,
    dashboard: true,
    customers:false,
    shipment:false
  };

  this.showCustomers = this.showCustomers.bind(this);
  this.showShipments = this.showShipments.bind(this);
  this.showDashboard = this.showDashboard.bind(this);

  }
  

  componentDidMount(){
    
    if (this.props.customers === true){
        this.showCustomers()
    } if (this.props.shipment === true){
        this.showShipments()
    }




console.log(this.props)
    
    if(typeof this.props.history.location.state !== undefined ){
      console.log(this.props.history.location.state)
    }
  }


showCustomers (args){
   
    this.setState({
      dashboard:false, customers:true,shipment:false
    });
}

showShipments (args){
   
   this.setState({
     dashboard:false, customers:false,shipment:true
   });
}

showDashboard (args){
   
   this.setState({
     dashboard:true, customers:false,shipment:false
   });
}

  toggleDrawer = () => {
    this.setState(() => ({
      open: !this.state.open
    }));
  };

  render() {
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <div className={classes.root}>
        <CssBaseline />

        <AppBar open={this.state.open} toggleDrawer={this.toggleDrawer} />

        <Drawer 
          {...this.props} {...this.setState}
         showCustomer={this.showCustomers}
         showDashboard={this.showDashboard} 
         showShipments={this.showShipments}
         open={this.state.open}
          toggleDrawer={this.toggleDrawer} />

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
          { this.state.dashboard && <Grid container spacing={3}>
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
            </Grid> }

             {this.state.customers && <ListUserPage history={history} /> }
             {this.state.shipment && <ListShipmentPage history={history} /> }


          </Container>
          <MadeWithLove />
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(dashboardStyle)(Dashboard);

// export default function Dashboard() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

// }
