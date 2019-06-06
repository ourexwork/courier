import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// MaterialUi core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Material-Ui icon
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

// appBar Style
import { withStyles } from '@material-ui/core/styles';
import { useAppBarStyle } from './jss/appBarStyle';

const CustomAppBar = props => {
  const { classes,isAdmin,user } = props;

  return (
    <AppBar
      position='absolute'
      className={clsx(classes.appBar, props.open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='Open drawer'
          onClick={props.toggleDrawer}
          className={clsx(
            classes.menuButton,
            props.open && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}
        >
          {isAdmin ? 'Admin Dashboard' : `${user.email}`}
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

CustomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useAppBarStyle)(CustomAppBar);
