import React from 'react';
import {connect } from 'react-redux'
import Register from '../components/Register'

class RegisterPage extends React.Component {
    onSubmit = (user) => {
     this.props.startLogin(user);
   
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
//   startLogin: (user) => dispatch(startLogin(user))
});

export default connect(undefined, mapDispatchToProps)(RegisterPage);



