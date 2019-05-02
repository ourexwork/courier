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
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
//


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




class Login extends Component {
    state = {
    username:'',
    password:'',
    showPassword: false,
    errors:''
  };


  handleChange = prop => event => {
    event.preventDefault();
console.log(document.getElementById('ade'))
    // this.setState({ [prop]: event.target.value });
   this.setState({ [prop]: event.target.value })
   console.log(this.state) 
    //validation
    const messages = {
                required: ' {{field}} is required.'
            }
            console.log(this.state)
            const data = this.state;
            const rules = {
                username: 'required|string|min:6',
                password:'required|string|min:6'
            }
          validateAll(data, rules, messages).then((m)=>{
               console.log(m)
           }).catch( (errors) => {
               
            const formattedErrors={};
            errors.forEach(error=> formattedErrors[error.field] = error.message);
            this.setState(()=> ({
                
                errors:formattedErrors})
               
                );
               console.log(this.state) 
            })

  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));

   
  };

         onSubmit = (e) =>{
            e.preventDefault();
        
              this.props.onSubmit({
                username:this.state.username,
                password:this.state.password
              })

        }


  render(){
    const { classes } = this.props;
      return (
<div className="contain">
<div className="login-container">
<div className="tab">
<div>  Sign In </div> <div> icon</div>
</div>
<div className="login-form" >
<form action="" onSubmit = { this.onSubmit } method="POST" role="form">
<div className="input-field">
<TextField

          id="outlined-adornment-weight"
          className={classNames( classes.margin, classes.textField)}
        //   variant="outlined"
          label="Username or Email"
          value={this.state.username}
          onChange={this.handleChange('username')}
          fullWidth={true}
     
        //  error={meta.touched}
          helperText={this.state.errors.username}    
          InputProps={{
            endAdornment: <InputAdornment position="end">icon</InputAdornment>,
      
          }}
        />
</div>

<div className="input-field">
<TextField
          id="outlined-adornment-password"
          className={classNames(classes.margin, classes.textField)}
        //   variant="outlined"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          fullWidth={true}
          helperText = {this.state.errors.password }
          value={this.state.password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
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
export default withStyles(styles)(Login)