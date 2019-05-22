import React from 'react';
import {connect } from 'react-redux'
import { startEditUser} from '../redux/actions/user'
import UserForm from '../components/Register'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

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

iconfield:{
color: '#1c88bf',
fontSize:15,
'@media (max-width:450px)':{
  fontSize:11
  }

}
  })

class EditUserPage extends React.Component {

  
    render()  
    {
        const { classes,user , dispatch} = this.props;
        return(
          <div className="box-layout">
            <div className="container ">
            <div className="row center">
            
            <div className="edit-container">
        
<div className="tab">
<div className="sign-in-text-reg">Update your profile </div> <div className="sign-in-text-reg">  <PersonAdd className={classNames(classes.icontab)} /></div> 
</div>  


<div className="register-form" >        
    <UserForm
    form="update" 
    edit='a'
    initialValues={user}
    Submit={ async (data)=>{
      const a = await dispatch(startEditUser(data._id, data ))
      this.props.history.push(`/viewprofile/${data._id}`)
         
    }}/>

  </div>  
  </div>
  </div>
 </div>
 </div>
        )
    }
}
  

EditUserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
user: state.users.find((data)=>{
    return data._id === props.match.params.id
})
});



export default connect(mapStateToProps)(withStyles(styles)(EditUserPage))




