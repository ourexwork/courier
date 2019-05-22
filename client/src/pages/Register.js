import React from 'react';
import {Link } from 'react-router-dom';
import {connect } from 'react-redux'
import { startRegister} from '../redux/actions/user'
import UserForm from '../components/Register'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
//icons used


import {
  
  PersonAdd
  } from '@material-ui/icons';

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

icontab:{
    color:'red',
    display:'flex',
    
'@media (max-width:992px)':{
  fontSize:23
  }
    },

iconfield:{
color: '#1c88bf',
fontSize:15,
'@media (max-width:450px)':{
  fontSize:11
  }

}
  })

class RegisterPage extends React.Component {
    
    render()
    {
        const { classes , startRegister} = this.props;
        return(

<div className="register-container register-form">
 <div className="tab">
<div className="sign-in-text"> <div className="logo">Speedex Logo</div>  </div>

</div>
<div className="icon-div"> 
 <Icon className={classNames(classes.icontab)}>
<PersonAdd />

</Icon>
</div> 
    <span className="add-padding">
    <UserForm form="create" 
    Submit={ (user) => {
    return startRegister(user).then((d)=>{
      console.log(d);
      if (d.success === true ){
        this.props.history.push('/listuser')
      }
     
    })
    
  }}/>
    </span>   
   
    <div className="reg-text-reg">
<Link to="/login"><span className="small ">Click to Log in if Already Registered</span></Link> 
</div>
  </div>  

        )
    }
}
  

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
startRegister:  (user) => dispatch(startRegister(user)),

});

export default connect(undefined,mapDispatchToProps)(withStyles(styles)(RegisterPage))




