import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { startRegister } from '../redux/actions/user';
import UserForm from '../components/Register';

//icons used

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

  icontab: {
    color: 'red',
    display: 'flex',

    '@media (max-width:992px)': {
      fontSize: 23
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
  render() {
    const { classes, startRegister } = this.props;
    return (
      <div>
        <UserForm
          login={this.props.login}
          form='create'
          Submit={user => {
            return startRegister(user).then(d => {
              if (typeof d !== undefined && d.success === true) {
                this.props.history.push('/thankyou');
              } else {
                console.log('error');
              }
            });
          }}
        />
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
