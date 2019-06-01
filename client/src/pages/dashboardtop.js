import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';

// Material-Ui Core
import { withStyles } from '@material-ui/core/styles';


// Custom Material Components
import AppBar from '../components/MaterialUi/CustomAppBar';
import Drawer from '../components/MaterialUi/CustomDrawer';

// Stylesheet
import { dashboardStyle } from '../components/MaterialUi/jss/dashboardStyle';


class DashboardNav extends Component {


      state = {
    open: false,
 
  };

  toggleDrawer = () => {
    this.setState(() => ({
      open: !this.state.open
    }));
  };

  render() {
    // const { classes } = this.props;

    return (
        <React.Fragment>
        <AppBar open={this.state.open} toggleDrawer={this.toggleDrawer} />

        <Drawer 
         open={this.state.open}
          toggleDrawer={this.toggleDrawer} />


      </React.Fragment>
    );
  }
}

DashboardNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(DashboardNav);

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
