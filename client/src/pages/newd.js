// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';

// // Material-Ui Core
// import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

// import Typography from '@material-ui/core/Typography';

// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
// import {history}  from  '../routers/AppRouter'




// // Stylesheet


// import Chart from '../components/MaterialUi/Chart';
// import Deposits from '../components/MaterialUi/Deposits';
// import Orders from '../components/MaterialUi/Orders';
// import ListUserPage from '../pages/ListUserPage';
// import ListShipmentPage from '../pages/ListShipmentPage';


// import { makeStyles } from '@material-ui/styles';


// const useStyles =  makeStyles(theme => ({
//     root: {
//         display: 'flex'
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     container: {
//          paddingTop: theme.spacing(4),
//          paddingBottom: theme.spacing(4)
//     },
//     content: {
//         flexGrow: 1,
//         height: '100vh',
//         overflow: 'auto'
//     },
//     paper: {
//          padding: theme.spacing(2),
//         display: 'flex',
//         overflow: 'auto',
//         flexDirection: 'column'
//     },
//     fixedHeight: {
//         height: 240
//     }
// }));


// function MadeWithLove() {
//   return (
//     <Typography variant='body2' color='textSecondary' align='center'>
//       {'Built with love by the '}
//       <Link color='inherit' href='https://material-ui.com/'>
//         Material-UI
//       </Link>
//       {' team.'}
//     </Typography>
//   );
// }

// const  Dashboard  = (WrapperComponent) =>{
// return class Dashboard extends Component {

//     state = {
//   open: false,

// };

// toggleDrawer = () => {
//   this.setState(() => ({
//     open: !this.state.open
//   }));
// };

// render() {
//  const classes = useStyles();
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

 
//   return (
//       <React.Fragment>
//       <div className={classes.root}>
//       <CssBaseline />



//       <AppBar open={this.state.open} toggleDrawer={this.toggleDrawer} />

//       <Drawer 
//        open={this.state.open}
//         toggleDrawer={this.toggleDrawer} />

    

//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth='lg' className={classes.container}>
//          <WrapperComponent {...this.props} />
//         </Container>
//         <MadeWithLove />
//       </main>
//     </div>
//     </React.Fragment>
// )
// }
// }

// }



//  export default Dashboard

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {dashboardStyle } from '../materialstyle/dashboard.css';
// Custom Material Components
import AppBar from '../components/MaterialUi/CustomAppBar';
import Drawer from '../components/MaterialUi/CustomDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';


import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import Link from '@material-ui/core/Link';


function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}



const useStyles = makeStyles(dashboardStyle);

export default   function (WrapperComponent) {
    return function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const toggleDrawer = () => {
      console.log(props)
    setOpen(!open);
  };
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar isAdmin={props.isAdmin}  open={open} toggleDrawer={toggleDrawer} />
      <Drawer isAdmin={props.isAdmin} open={open} toggleDrawer={toggleDrawer} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
    <WrapperComponent {...props} />
          
        </Container>
        <MadeWithLove />
      </main>
    </div>
  );
}

}





