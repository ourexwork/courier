import React from 'react';
import {connect } from 'react-redux'
import { startLogin} from '../redux/actions/auth'
import Login from '../components/Login'
import {history } from '../routers/AppRouter'



class LoginPage extends React.Component {
    onSubmit =  (user) => {
      return this.props.startLogin(user).then((user)=>{
     console.log(user)
     if (typeof user !== undefined && !!user.isAdmin ){
      history.push('/dashboard')
     }
     else if (typeof user !== undefined && !!user._id){
      history.push('/user')// or whatever
     }
     else {
       console.log('error')
     }
  })
}
    render()
    {
        return(
            <React.Fragment>
            <Login register={this.props.register} Submit={this.onSubmit}/>
          </React.Fragment>
           
            
        )
    }
}

const mapToStateProps = (state) => {
  return {
      auth: state.auth
  };
}

  
const mapDispatchToProps = (dispatch) => ({
  startLogin: (user) => dispatch(startLogin(user))
});

export default connect(mapToStateProps, mapDispatchToProps)(LoginPage);

