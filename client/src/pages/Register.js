import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRegister } from '../redux/actions/user';
import UserForm from '../components/Register';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';
import { startSubmit, stopSubmit } from 'redux-form';
//icons used

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import {
  Https,
  Visibility,
  VisibilityOff,
  Email,
  AccountCircle,
  Home,
  PhoneAndroid,
  PersonAdd
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    display: 'flex'
  },
  icontab: {
    color: 'white',
    fontSize: 25
  },

  field: {
    fontSize: 13,
    '@media (max-width:450px)': {
      fontSize: 12
    }
  },
  labelfield: {
    fontSize: 15,
    '@media (max-width:450px)': {
      fontSize: 11
    }
  },

  iconfield: {
    color: '#1c88bf',
    fontSize: 15,
    '@media (max-width:450px)': {
      fontSize: 11
    }
  }
});

class RegisterPage extends React.Component {
  onSubmit = user => {
    return this.props
      .startRegister(user)
      .then(a => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className='box-layout'>
        <div className='register-container'>
          <div className='tab'>
            <div className='sign-in-text-reg'>create an account </div>
            <div className='sign-in-text-reg'>
              <PersonAdd className={classNames(classes.icontab)} />
            </div>
          </div>

          <div className='register-form'>
            <UserForm form='create' Submit={this.onSubmit} />
            <div className='reg-text-reg'>
              <Link to='/login'>
                <span className='small '>
                  Click to Log in if Already Registered
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => ({
  startRegister: user => dispatch(startRegister(user))
});

export default connect(
  undefined,
  mapDispatchToProps
)(withStyles(styles)(RegisterPage));
