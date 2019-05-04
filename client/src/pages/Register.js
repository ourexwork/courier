import React from 'react';
import {connect } from 'react-redux'
import { startRegister} from '../redux/actions/user'
import Register from '../components/Register'

class RegisterPage extends React.Component {
    onSubmit = (user) => {
     this.props.startRegister(user);
   
  };
    render()
    {
        return(
            <div>
   
    <Register onSubmit={this.onSubmit}/>
  </div>  
        )
    }
}
  
const mapDispatchToProps = (dispatch) => ({
startRegister: (user) => dispatch(startRegister(user))
});

export default connect(undefined, mapDispatchToProps)(RegisterPage);



