/* eslint-disable no-script-url */

import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Tom Scholz',
    'Boston, MA',
    'MC ⠀•••• 1253',
    100.81
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79
  )
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
    {console.log(props)}
      <Title>Recent Orders</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>cuurent location</TableCell>
            <TableCell>delivery location</TableCell>
            <TableCell>shipment status</TableCell>
            <TableCell>amount</TableCell>
            <TableCell align='right'>Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.shipments.map(row => (
          
            <TableRow key={row._id}>
              <TableCell>xx/xx/xx</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.currentLocation}</TableCell>
              <TableCell>{row.deliveryAddress.address}</TableCell>
              <TableCell>{row.shipmentStatus}</TableCell>
              <TableCell>{row.payment.amount}</TableCell>
              <TableCell align='right'>xxxxxxx</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link to="/dashboard/listshipment" color='primary' href='javascript:;'>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
