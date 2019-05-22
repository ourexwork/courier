import React from 'react';
import {connect } from 'react-redux'
import { startLogin} from '../redux/actions/auth'
import Login from '../components/Login'



class LoginPage extends React.Component {
    onSubmit = async (user) => {
    const d =  await this.props.startLogin(user);
    return d

  };
    render()
    {
        return(
            <React.Fragment>
            <Login Submit={this.onSubmit}/>
          </React.Fragment>
           
            
        )
    }
}
  
const mapDispatchToProps = (dispatch) => ({
  startLogin: (user) => dispatch(startLogin(user))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);





//back up previous 


// import React from 'react';
// import {connect } from 'react-redux'
// import { startLogin} from '../redux/actions/auth'
// import Login from '../components/Login'



// class LoginPage extends React.Component {
//     onSubmit = async (user) => {
//     const d =  await this.props.startLogin(user);
//     return d

//   };
//     render()
//     {
//         return(
//             <div className="container-fluid img image-right">
//             <div className="row align">
//             <div className="col-12 col-xs-4 col-md-4 col-lg-4 center">
//             <Login Submit={this.onSubmit}/>
//             </div>

//             <div className="col-12 col-xs-4 col-md-4 col-lg-8 text-center ">
//           <div  className="text-div">
//           <p className="text">MAKING YOU HAPPY WITH </p>
//            <p className="text">OUR STRESS FREE</p>
//            <p className="text">SERVICES</p>  
        
          
//           </div>
    
         
//             </div>
            

//             </div>
            
//   </div>  
//         )
//     }
// }
  
// const mapDispatchToProps = (dispatch) => ({
//   startLogin: (user) => dispatch(startLogin(user))
// });

// export default connect(undefined, mapDispatchToProps)(LoginPage);