import React from 'react';

// Material-ui cores
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

// Material-ui icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Person from '@material-ui/icons/Person';
import { history } from "../../routers/AppRouter";


export const MainListItems = (

  <div>
<ListItem button onClick={()=>{
  history.push('/dashboard');
}}>
  <ListItemIcon>
    <DashboardIcon />
  </ListItemIcon>
  <ListItemText primary='Dashboard' />
</ListItem>


<ListItem button onClick={()=>{
  history.push('/dashboard/listshipment');
 }} >
  <ListItemIcon>
    <ShoppingCartIcon />
  </ListItemIcon>
  <ListItemText primary='Orders' />
</ListItem>


<ListItem button  onClick={()=>{
  history.push('/dashboard/listuser');
 }}>
  <ListItemIcon>
    <PeopleIcon />
  </ListItemIcon>
<ListItemText primary='Customers'  />
</ListItem>

<ListItem button>
  <ListItemIcon>
    <BarChartIcon />
  </ListItemIcon>
  <ListItemText primary='Reports' />
</ListItem>
<ListItem button>
  <ListItemIcon>
    <LayersIcon />
  </ListItemIcon>
  <ListItemText primary='Integrations' />
</ListItem>
</div>

);


export const UserMainListItems = (

<div>
<ListItem button onClick={()=>{
// history.push('/dashboard');
}}>
<ListItemIcon>
  <DashboardIcon />
</ListItemIcon>
<ListItemText primary='Dashboard' />
</ListItem>


<ListItem button onClick={()=>{
// history.push('/dashboard/listshipment');
}} >
<ListItemIcon>
  <ShoppingCartIcon />
</ListItemIcon>
<ListItemText primary='Orders' />
</ListItem>


<ListItem button  onClick={()=>{
history.push('/dashboard/viewprofile');
}}>
<ListItemIcon>
  <Person />
</ListItemIcon>
<ListItemText primary='Customers'  />
</ListItem>

<ListItem button>
<ListItemIcon>
  <BarChartIcon />
</ListItemIcon>
<ListItemText primary='Reports' />
</ListItem>
<ListItem button>
<ListItemIcon>
  <LayersIcon />
</ListItemIcon>
<ListItemText primary='Integrations' />
</ListItem>
</div>

);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Current month' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItem>
  </div>
);
