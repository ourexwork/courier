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

   export default  function (WrapperComponent) {
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
      <AppBar user={props.user} isAdmin={props.isAdmin}  open={open} toggleDrawer={toggleDrawer} />
      <Drawer isAdmin={props.isAdmin} open={open} toggleDrawer={toggleDrawer} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
    <WrapperComponent {...props}  />
          
        </Container>
        <MadeWithLove />
      </main>
    </div>
  );
}

}


// const mapStateToProps = (state)=>{
//       return {
//     user : state.auth
//   }
// }
//     //
    
//   export default connect(mapStateToProps)(Dashboard);









