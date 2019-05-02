import React, { Component } from 'react';
import {Link } from 'react-router-dom';

//validation api
import { validateAll} from 'indicative'

//material ui components
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';

//icons used

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import {Https, 
  Visibility, 
  VisibilityOff, 
   Email , 
   AccountCircle,
  Home
  } from '@material-ui/icons';

//
import {connect} from 'react-redux'
import { Field, reduxForm , formValueSelector} from 'redux-form'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    display: 'flex'
  },
});

const validate = values => {
  const errors = {}
  const requiredFields = [
     
      {name:'username',label:'username'},
 
      {name:'password',label:'password'},
      
  
  ]
  requiredFields.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = `This ${field.label} is Required`;
      console.log(errors)
    }

    if (values.username && values.username.length <= 5){
      errors.username = 'username or email length is not up to 6'
    }

     if (values.password && values.password.length <= 5){
      errors.password = 'password length is not up to 6'
    }

  })
 
  return errors
}
console.log(validate)



const renderTextField = ({
  input,
  label,
  type,


  meta: { asyncValidating, touched, error },
  ...custom
}) => (

  <TextField
 label={label}
   error={error && touched}
  fullWidth={true}
   helperText={error &&touched?error:''} 
   InputLabelProps={{style:{fontSize:17}}}

    {...input}
    {...custom}
    // variant={"outlined"}
 


  />
)
const renderPasswordField = ({
  input,
  label,
  type,


  meta: { asyncValidating, touched, error },
  ...custom
}) => (
  <TextField
          id="outlined-adornment-password"
          label={label}
          fullWidth={true}
          type={type}
          error={error && touched}
          helperText={error &&touched?error:''}
          // InputProps={{style:{fontSize:15 }}}
         
          {...input}
    {...custom}
    InputLabelProps={{style:{fontSize:17}}}
        />
  )

class Register extends Component {
    state = {
    username:'',
    password:'',
    confirm_password:'',
    showPassword1: false,
    showPassword2: false,
    errors:''
  };


  handleClickShowPassword1 = () => {
    this.setState(state => ({ showPassword1: !state.showPassword1 }));

  };
  handleClickShowPassword2 = () => {
    this.setState(state => ({ showPassword2: !state.showPassword2 }));

  };


    
  render(){
    const { classes , handleSubmit, user} = this.props;
      return (
<div className="contain">
<div className="register-container">
<div className="tab">
<div className="sign-in-text"> Register </div> <div> <Icon><Https /></Icon></div>
</div>

{ user.error != "" && <span className="error-text small alert-danger">{user.error}</span>}
<div className="register-form" >
<form action="" onSubmit = { handleSubmit }>
<div className="input-field-line">
<Field
          name="firstname"
          component={renderTextField}
          label="firstname"
          InputProps={{style:{fontSize:20},endAdornment: 
          <InputAdornment position="end">
          <Icon><AccountCircle /></Icon>
          </InputAdornment> } }
        />
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Field
          name="lastName"
          component={renderTextField}
          label="last name"
          InputProps={{style:{fontSize:20},endAdornment:
           <InputAdornment position="end">
           <Icon><AccountCircle />
           </Icon></InputAdornment> } }
        />
</div>

<div className="input-field">
        <Field
          name="username"
          component={renderTextField}
          label="username"
          InputProps={{style:{fontSize:20},endAdornment: 
          <InputAdornment position="end">
          <Icon><AccountCircle /></Icon>
          </InputAdornment> } }
        />
</div>

<div className="input-field">
        <Field
          name="email"
          component={renderTextField}
          label="email"
          InputProps={{style:{fontSize:20},endAdornment: 
          <InputAdornment position="end">
          <Icon><Email /></Icon>
          </InputAdornment> } }
        />
</div>

<div className="input-field">
        <Field
          name="address"
          component={renderTextField}
          label="address"
          multiline={true}
          rows={2}
          InputProps={{style:{fontSize:20},endAdornment: 
          <InputAdornment position="end">
          <Icon><Home /></Icon>
          </InputAdornment> } }
        />
</div>


<div className="input-field-line">
<Field
          name="password"
          component={renderPasswordField}
          label="password"
          type={this.state.showPassword1 ? 'text' : 'password'}
          InputProps={{ style:{fontSize:20},
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword1}
                >
                  {this.state.showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        


        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Field
          name="confirm_password"
          component={renderPasswordField}
          label="confirm password"
          type={this.state.showPassword2 ? 'text' : 'password'}
          InputProps={{ style:{fontSize:20},
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword1}
                >
                  {this.state.showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
</div>
  

     <button type="submit" className="btn-block" >Submit</button>
</form>
</div>
<div className="reg-text">
<Link to="/login"><span className="small ">Click to Log in if Already Registered</span></Link> 
</div>
 </div>
    </div>
      )
  }

} 


Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

Register =  reduxForm({
  form: 'register', // a unique identifier for this form
  validate
  // ,asyncValidate
})(Register);

const mapToStateProps = (state) => {
    return {
      
        user: state.user
    };
  }

export default connect(mapToStateProps)(withStyles(styles)(Register))