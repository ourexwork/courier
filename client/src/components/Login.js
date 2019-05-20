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

import Button from '@material-ui/core/Button';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Https from '@material-ui/icons/Https';
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
  icontab:{
    color:'white',
    
    },
    
    field: {
  fontSize:13,
  '@media (max-width:450px)':{
    fontSize:12
  }

},
iconfield:{
color: '#1c88bf',
fontSize:15,
'@media (max-width:450px)':{
  fontSize:11
  }

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
 
     variant={"outlined"}
 

 {...input}
 {...custom}

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
          label="password"
          fullWidth={true}
          type={type}
          error={error && touched}
          helperText={error &&touched?error:''}
          {...input}
          {...custom}
          variant={"outlined"}
        />
  )

class Login extends Component {
    state = {
    username:'',
    password:'',
    showPassword: false,
    errors:''
  };


  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));

  };

    
  render(){
    const { classes , handleSubmit, auth} = this.props;
      return (
<div className="contain">
<div className="login-container">
<div className="tab">
<div className="sign-in-text">  Sign In </div> <div> 
 <Icon className={classNames(classes.icontab)}>
<Https />
</Icon>
</div>
</div>

{ auth && auth.error && auth.error!= "" && <span className="error-text small alert-danger">{auth.error}!!!</span>}
<div className="login-form" >
<form action="" onSubmit = { handleSubmit }>
<div className="input-field">
<Field
          name="username"
          component={renderTextField}
          label="username"
             InputProps={{className: classes.field ,endAdornment:
           <InputAdornment position="end">
           <Icon ><AccountCircle className={classNames(classes.iconfield)} />
           </Icon></InputAdornment> } }
           InputLabelProps={{classNames: classes.field}}
        />
</div>

<div className="input-field">
<Field
          name="password"
          component={renderPasswordField}
          label="password"
          type={this.state.showPassword ? 'text' : 'password'}
          InputProps={{classNames: classes.field,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff className={classNames(classes.iconfield)}/> : <Visibility className={classNames(classes.iconfield)}/>}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{classNames: classes.field}}
        />
</div>
<span classname="space">&nbsp;</span>
        <Button type="submit" variant="contained" color='primary' className="btn-block" >Submit </Button>
</form>
</div>
<div className="reg-text">
<Link to="/register"><span className="small ">Click to Register</span></Link> 
<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
<Link to="/register"><span className="small ">Forgot Password?</span></Link> 
  
</div>
 </div>
    </div>
      )
  }

} 


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

Login =  reduxForm({
  form: 'login', // a unique identifier for this form
  validate
  // ,asyncValidate
})(Login);

const mapToStateProps = (state) => {
    return {
        auth: state.auth
    };
  }

export default connect(mapToStateProps)(withStyles(styles)(Login))