import React  from 'react';
import Login from './Login';
import Register from './Register'
 import {connect } from 'react-redux';

class loginRegisterPage extends React.Component {

render(){
    // const {user } = this.props
    return (
        <div className="container-fluid img">
        <div className="row align">
        <div className="col-12 col-lg-6 col-md-4 col-sm-4 center"><Login /> </div>
        <div className="col-12 col-lg-6 col-md-4 col-sm-4 center "><Register history={this.props.history}/></div>
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