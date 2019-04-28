import React from 'react';
import {connect } from 'react-redux'
import { startLogin} from '../redux/actions/users'
import Login from '../components/Login'
import Navigation from '../components/Navigation';


class LoginPage extends React.Component {
    onSubmit = (userData) => {
    this.props.startLogin(userData);
    // this.props.history.push('/');
  };
    render()
    {
        return(
            <div>
     <Navigation />
    <Login onSubmit={this.onSubmit}/>
  </div>  
        )
    }
}
  
const mapDispatchToProps = (dispatch) => ({
  startLogin: (userData) => dispatch(startLogin(userData))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
