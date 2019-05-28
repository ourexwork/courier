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

import { mainListItems, secondaryListItems } from './listItems';

const CustomDrawer = props => {
  const { classes } = props;

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !props.open && classes.drawerPaperClose
        )
      }}
      open={props.open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
};

CustomDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(userDrawerStyle)(CustomDrawer);
