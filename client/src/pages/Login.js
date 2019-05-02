import React from 'react';
import {connect } from 'react-redux'
import { startLogin} from '../redux/actions/users'
import Login from '../components/Login'



class LoginPage extends React.Component {
    onSubmit = (user) => {
     this.props.startLogin(user);
   
  };
    render()
    {
        return(
            <div>
   
    <Login onSubmit={this.onSubmit}/>
  </div>  
        )
    }
}
  
const mapDispatchToProps = (dispatch) => ({
  startLogin: (user) => dispatch(startLogin(user))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
