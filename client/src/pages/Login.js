import React from 'react';
import {connect } from 'react-redux'
import { startLogin} from '../redux/actions/auth'
import Login from '../components/Login'
import {history } from '../routers/AppRouter'



class LoginPage extends React.Component {
    onSubmit =  (user) => {
      return this.props.startLogin(user).then((d)=>{
     
     if (typeof d !== undefined && d.success === true ){
      history.push('/dashboard')
     }
     else{
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
  
const mapDispatchToProps = (dispatch) => ({
  startLogin: (user) => dispatch(startLogin(user))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

