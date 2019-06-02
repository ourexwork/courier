import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { startSetUsers } from './redux/actions/user';
import { login } from './redux/actions/auth';
import { startSetShipments } from './redux/actions/shipment';
import jwtDecode from 'jwt-decode';
import {store} from './App.js'
import { history } from './routers/AppRouter';


let hasRendered = false;
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(<App />, document.getElementById('root'));  
    }
hasRendered= true;
};// renders the app


ReactDOM.render(<p> Loading.. </p>, document.getElementById('root'));

const checkAuth =  ()=>{
    try {
        const token = localStorage.getItem('x-auth-token');
      const user = jwtDecode(token);
      return Promise.resolve(user);
    }

    catch(e) {
      
            return Promise.reject(e);
    }
  
}

 checkAuth().then((user)=>{
    if (user) {
    store.dispatch(login(user));
        if (!!user.isAdmin) {
     store.dispatch(startSetShipments());
     store.dispatch(startSetUsers());
   if(history.location.pathname==='/login' ){
        history.push('/dashboard')  
    }
    else if (!user.isAdmin){
        if(history.location.pathname==='/login' ){
        history.push(`/dashboard/${user._id}`)   
    }
}
    }
    renderApp();


}

 }).catch((e)=>{
     console.log(e)
    renderApp();
})
 

 


  











// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
