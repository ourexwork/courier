import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material-Ui core
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

// Material-ui Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Drawer Stylesheet
import { withStyles } from '@material-ui/core/styles';
import { userDrawerStyle } from './jss/drawerStyle';


//
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

// Material-ui icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
//

import {history} from '../../routers/AppRouter';


class  CustomDrawer extends React.Component {

render()
{
  const {classes , toggleDrawer} = this.props;

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !this.props.open && classes.drawerPaperClose
        )
      }}
      open={this.props.open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
      <div>
   <ListItem button onClick={()=>{
      history.push('/dashboard');
  }}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
 
 
    <ListItem button onClick={()=>{
      history.push('/dashboard/listshipment');
     }} >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary='Orders' />
    </ListItem>
  

    <ListItem button  onClick={()=>{
      history.push('/dashboard/listuser');
     }}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
    <ListItemText primary='Customers'  />
    </ListItem>
   
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary='Reports' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary='Integrations' />
    </ListItem>
  </div>
      </List>
      <Divider />
      <List>
      <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Current month' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItem>
  </div>
      </List>
    </Drawer>
  );
};
}

CustomDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(userDrawerStyle)(CustomDrawer);
