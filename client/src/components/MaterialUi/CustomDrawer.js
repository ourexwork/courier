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


import { MainListItems, secondaryListItems, UserMainListItems} from './listItems'


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
      {this.props.isAdmin ? 
        <React.Fragment>
        <List> {MainListItems}  </List>
         <Divider />
        <List> {secondaryListItems}</List>  
        </React.Fragment> : 
        <List> {UserMainListItems}</List> 
        }
    
    </Drawer>
  );
};
}

CustomDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(userDrawerStyle)(CustomDrawer);
