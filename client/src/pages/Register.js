import React from 'react';
import {connect } from 'react-redux'
import { startRegister} from '../redux/actions/user'
import Register from '../components/Register'

class RegisterPage extends React.Component {
    onSubmit = async (user) => {
     this.props.startRegister(user);
    
    //  if (a)  this.props.history.push('/register/thankyou');
  };
    render()
    {
        return(
            <div className="box-layout">
   
    <Register onSubmit={this.onSubmit}/>
  </div>  
        )
    }
}
  
const mapDispatchToProps = (dispatch) => ({
startRegister:  (user) => dispatch(startRegister(user))
});

export default connect(undefined, mapDispatchToProps)(RegisterPage);



