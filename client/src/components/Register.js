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
  Home,
  PhoneAndroid,
  PersonAdd
  } from '@material-ui/icons';

//
import {connect} from 'react-redux'
import { Field, reduxForm , formValueSelector} from 'redux-form'
var mql = (window.matchMedia("screen and (maxWidth:4500)"))

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
  '@media (max-width:450px)':{
    fontSize:12
  }

},
labelfield: {
  fontSize:15,
  '@media (max-width:450px)':{
    fontSize:11
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
     

      
      {name:'firstName',label:'first name'},
      {name:'lastName',label:'last name'},
      {name:'email',label:'email'},
      {name:'phoneNumber',label:'phone number'},
      {name:'address',label:'address'},
      {name:'password',label:'password'},
      {name:'confirm_password',label:'password'},

  
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

   
  // if(values.password && !/^((?=[a-z])(?=.*[A-Z))]))|((?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9])))|((?=.{6,}))$/i.test(values.password)){
  //   errors.password = 'password should have atleast Uppercase, number and character'
  // }

  if (values.password !== values.confirm_password){
    errors.confirm_password = 'Passwords do not match'

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

class Register extends Component {
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
    const { classes , handleSubmit, user, submitting} = this.props;
      return (

<div className="register-container">
<div className="tab">
<div className="sign-in-text-reg">create an account </div> <div className="sign-in-text-reg">  <PersonAdd className={classNames(classes.icontab)} /></div> 
</div>  

{ ( user.error && user.error!= "") && <span className="error-text small alert-danger">{user.error}</span>}
<div className="register-form" >
<form action="" onSubmit = { handleSubmit }>
<div className="input-field-line">
<Field
          name="firstName"
          component={renderTextField}
          label="firstname"
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
        />
</div>

<div className="input-field">
        <Field
          name="address"
          component={renderTextField}
          label="address"
          multiline={true}
          rows={2}
          InputProps={{className: classes.field  ,endAdornment: 
          <InputAdornment position="end">
          <Icon ><Home  className={classNames(classes.iconfield)}/></Icon>
          </InputAdornment> } }
          InputLabelProps={{className: classes.labelfield}}
        />
</div>


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
  <span classname="space">&nbsp;</span>
     <button variant="primary" type="submit"  className="butcus btn-block" >Submit {submitting &&  <p>l</p>}</button>
</form>
</div>
<div className="reg-text-reg">
<Link to="/login"><span className="small ">Click to Log in if Already Registered</span></Link> 
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