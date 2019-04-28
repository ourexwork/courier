import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { validateAll} from 'indicative'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


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

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class Login extends Component {
    state = {
    username:'',
    password:'',
    showPassword: false,
  };


  handleChange = prop => event => {
    event.preventDefault();
    // this.setState({ [prop]: event.target.value });
    console.log( this.setState({ [prop]: event.target.value }))
    console.log(this.state)
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };



   
         onSubmit = (e) =>{
            e.preventDefault();
         const messages = {
                required: ' {{field}} is required.'
            }
            const data = this.state;
            const rules = {
                username: 'required|string',
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
                
            })
            console.log(this.state);
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
          helperText="Weight"
          fullWidth={true}
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