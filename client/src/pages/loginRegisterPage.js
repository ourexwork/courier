import React  from 'react';
import Login from './Login';
import Register from './Register'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'

 import {connect } from 'react-redux';

class loginRegisterPage extends React.Component {
state = {
    login : false,
    register: false
}
componentDidMount(){
    if (this.props.login == true){
        this.showLogin()
    }

    if (this.props.register == true){
        this.showRegister()
    }

}

showRegister (){
    this.setState({login:false, register:true})
}
showLogin (){
    this.setState({login:true, register:false})
}

render(){
     const {user } = this.props
    return (
        <div className="container-fluid align img">
        
        <div className="row align ">
        <div className="col-12 col-lg-6 col-md-12 col-sm-4 col-sm-3 col-xm-3 center ">
        <Slider />
        </div>
        <div className="col-12 col-lg-6 col-md-12 col-sm-4 col-sm-3 col-xm-3  center">
        { this.state.register && <Register history={this.props.history}/>}
        {  this.state.login &&<Login /> }
        
        { this.state.register && <div className="sign-in reglogin-text" onClick={()=> {
    this.props.history.push('/login');
    this.showLogin()}}>
    Already have an account? Sign In.
    </div> }

    { this.state.login && <div className="sign-in reglogin-text login" onClick={()=> {
    this.props.history.push('/register');
    this.showRegister()}}>
    Register to get started
    </div> }

        </div>
      
        </div>

        </div>
    )
}

}

// const mapStateToProps = (state, props) => ({
// user: state.users.find((data)=>{
//     return data._id === props.match.params.id
    
// })
// });

export default connect()(loginRegisterPage);