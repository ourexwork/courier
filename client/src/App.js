import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { startSetUsers } from './redux/actions/user';
import { login } from './redux/actions/auth';
import { startSetShipments } from './redux/actions/shipment';
import jwtDecode from 'jwt-decode';
// Stylesheets
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-animated-slider/build/horizontal.css';
import './styles/App.scss';

//cors
// import './setupProxy'

// Routing
import AppRouter, { history } from './routers/AppRouter';

/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */

const store = configureStore();
const token = localStorage.getItem('x-auth-token');
if (token) {
  let user = jwtDecode(token);
  store.dispatch(login(user));
  if (user.isAdmin) {
    store.dispatch(startSetUsers());
    store.dispatch(startSetShipments());
  }
}

// const checkAuth = async (token)=>{
//    if !(token){
//      return {authErrorMessage:'You are not Logged in please login'}
//    }
//    else {

//    }

// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppRouter />
        </div>
      </Provider>
    );
  }
}

export default App;
