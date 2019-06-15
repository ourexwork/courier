import React, { Component } from 'react';


//material ui components
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';

//icons used

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import { 
  Visibility, 
  VisibilityOff, 
   Email , 
   AccountCircle,
  Home,
  PhoneAndroid,
  } from '@material-ui/icons';

 import Button from '@material-ui/core/Button';
//
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { CircularProgress } from '@material-ui/core';
import {history} from '../routers/AppRouter';
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
fontSize:25
},


field: {
  fontSize:13,
  color: '#364051',
  '@media (max-width:450px)':{
    fontSize:12
  }

},
labelfield: {
  fontSize:15,
  color: '#364051',
  '@media (max-width:450px)':{
    fontSize:11
  }

},

iconfield:{
  color: '#364051',
fontSize:15,
'@media (max-width:450px)':{
  fontSize:11
  }

},

button:{
width:'20rem',
padding:'1rem',
backgroundColor:'red',
borderRadius:'30px',


}

  
});

// 
const validate = values => {
  const errors = {}
  const requiredFields = [
  
      {name:'firstName',label:'first name'},
      {name:'lastName',label:'last name'},
      {name:'email',label:'email'},
      {name:'phoneNumber',label:'phone number'},
      {name:'address',label:'address'},
  
  ]
  requiredFields.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = `This ${field.label} is Required`;
      console.log(errors)
    }

    if (values.firstName && values.firstName.length <= 5){
      errors.username = 'username or email length is not up to 6'
    }

    if (values.address && values.address.length <= 11){
      errors.username = 'username or email length is not up to 11'
    }

    if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  if (typeof values.password !== undefined){
    if(!values.password){
  errors.password = 'Password is required'
    }
    if (values.password !== values.confirm_password){
      errors.confirm_password = 'Passwords do not match'
  
    }
  
       if (values.password && values.password.length <= 5){
        errors.password = 'password length is not up to 6'
      }
  }

  })
 
  return errors
}

const renderTextField = ({
  input,
  label,
  type,


  meta: {  touched, error },
  ...custom
}) => (

  <TextField
 label={label}
   error={error && touched}
  fullWidth={true}
   helperText={error &&touched?error:''}  yyy
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

        />
  )

class UserForm extends Component {
    state = {
   
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
    const { pristine, classes , handleSubmit, errors, Submit, submitting} = this.props;
      return (

<span className="register-form">
{errors  && errors.error && errors.error!=="" && <span className="error-text small alert-danger">{errors.error}</span>}
<form   onSubmit = { handleSubmit(Submit) }>

<div className="input-field-line">
<Field
          name="firstName"
          component={renderTextField}
          label="first name"
          InputProps={{className: classes.field  ,endAdornment: 
          <InputAdornment position="end">
          <Icon><AccountCircle className={classNames(classes.iconfield)} /></Icon>
          </InputAdornment> } }
          InputLabelProps={{className: classes.labelfield}}
        />
<div className="space-between">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Field
          name="lastName"
          component={renderTextField}
          label="last name"
          InputProps={{className: classes.field ,endAdornment:
           <InputAdornment position="end">
           <Icon ><AccountCircle  className={classNames(classes.iconfield)} />
           </Icon></InputAdornment> } }
           InputLabelProps={{className: classes.labelfield}}
        />
</div>

<div className="input-field">
        <Field
          name="phoneNumber"
          component={renderTextField}
          label="phone number"
          InputProps={{className: classes.field ,endAdornment: 
          <InputAdornment position="end">
          <Icon ><PhoneAndroid  className={classNames(classes.iconfield)}/></Icon>
          </InputAdornment> } }
          InputLabelProps={{className: classes.labelfield}}
        />
</div>

<div className="input-field">
        <Field
          name="email"
          component={renderTextField}
          label="email"
          InputProps={{className: classes.field  ,endAdornment: 
          <InputAdornment position="end">
          <Icon ><Email className={classNames(classes.iconfield)}/></Icon>
          </InputAdornment> } }
          InputLabelProps={{className: classes.labelfield}}
          disabled= {this.props.edit ? true : false }
        />
</div>

<div className="input-field">
        <Field
          name="address"
          component={renderTextField}
          label="address"
          // multiline={true}
          // rows={2}
          InputProps={{className: classes.field  ,endAdornment: 
          <InputAdornment position="end">
          <Icon ><Home  className={classNames(classes.iconfield)}/></Icon>
          </InputAdornment> } }
          InputLabelProps={{className: classes.labelfield}}
        />
</div>

{ !(this.props.edit) && 
  <div className="input-field-line">
<Field
          name="password"
          component={renderPasswordField}
          label="password"
          type={this.state.showPassword1 ? 'text' : 'password'}
          InputProps={{className: classes.field  ,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
               
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword1}
                >
                  {this.state.showPassword1 ? <VisibilityOff  className={classNames(classes.iconfield)}/> : <Visibility  className={classNames(classes.iconfield)}/>}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{className: classes.labelfield}}
        />
        <div className="space-between">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Field
          name="confirm_password"
          component={renderPasswordField}
          label="confirm password"
          type={this.state.showPassword2 ? 'text' : 'password'}
          InputProps={{className: classes.field  ,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword2}
                >
                  {this.state.showPassword2 ? <VisibilityOff  className={classNames(classes.iconfield)}/> : <Visibility  className={classNames(classes.iconfield)}/>}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{className: classes.labelfield}}
        />
</div>
      }

  <span >&nbsp;</span>
  <div className="reglogintext-div">
     <div>
     <Button variant="contained" color="primary" type="submit" 
     className={classNames(classes.button)} disabled={pristine || submitting} >
      <span className="button-text">{this.props.edit ? 'Update':'Sign Up Now'} 
      &nbsp;</span>  {submitting  ?
       <CircularProgress  />:''}
       </Button>
     </div>
     </div>
</form>

<div className="reglogin-text"onClick={()=>{
  history.replace('/login');
  this.props.login();
}}>Already have an account? Sign In. </div>
</span>

      )
  }

} 


UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


UserForm =  reduxForm({
  form : {
    
    create: {
      form: 'register', // a unique identifier for this form
  // ,asyncValidate
    },
    update: {
      form: 'update', // a unique identifier for this form
  // ,asyncValidate
  },

  },
  validate,
  enableReinitialize:true

})(UserForm);

// EditUser =  reduxForm({
//   form: 'editUser', // a unique identifier for this form
//   enableReinitialize:true,
 
//   // ,asyncValidate
// })(UserForm);

const mapToStateProps = (state) => {
    return {
      
        errors: state.error
    };
  }

export  default connect(mapToStateProps)(withStyles(styles)(UserForm));
  