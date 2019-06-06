import React from 'react';

import {Router, Route, Switch, Redirect } from 'react-router-dom';
import './configureAnchor';
import { store } from '../App'


import Dashboard from '../pages/newd.js';
import DashboardInner from '../components/DashboardInner';
import ListUserPage from '../pages/ListUserPage';
import ListShipmentPage from '../pages/ListShipmentPage';
import ViewUserPage from '../pages/ViewUserPage';
// dashboard Notfound text will still be customized or redirected//
import NotFoundPage from '../pages/NotFoundPage';
import { startSetUsers } from '../redux/actions/user';
import { startSetShipments } from '../redux/actions/shipment';
import PrivateAdminRoute from './PrivateAdminRoute'



  const  Droute  = ({match,user,shipments}) => {
  React.useEffect(()=>{
    if (user.isAdmin){
 store.dispatch(startSetShipments());
 store.dispatch(startSetUsers());  
   }
},user.isAdmin)
  
 return (
       <div>
      <Switch>
    <PrivateAdminRoute path={match.url} exact={true} component={()=><DashboardInner shipments={shipments} /> } />
    <PrivateAdminRoute path={match.url+'/listuser'}  exact={true} component={ListUserPage} />
    <PrivateAdminRoute path={match.url+'/viewprofile/:id'}  exact={true} component={ViewUserPage} />
    <PrivateAdminRoute path={match.url+'/listshipment'}  exact={true} component={ListShipmentPage} />
    
    <Redirect to='/kfkfkfkf'><Route  component={NotFoundPage}  />  </Redirect>
    </Switch>
    </div>
  
 )
 
   }

//      const mapStateToProps = (state)=>{
//       return {
//     user : state.auth
//   }
// }
//     //
//   const Droutes = connect(mapStateToProps)(Droute);


//    export const DashboardRouter =  Dashboard(Droutes);

    export const DashboardRouter = Dashboard(Droute);