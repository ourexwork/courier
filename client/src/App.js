import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

// Stylesheets
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-animated-slider/build/horizontal.css';
import './styles/App.scss';

//cors
// import './setupProxy'

// Routing
import AppRouter, { history } from './routers/AppRouter';

export const store = configureStore();



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
