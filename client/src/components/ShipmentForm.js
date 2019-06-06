import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import GeoSuggest from 'react-geosuggest';

export default class ShipmentForm extends Component {
  state = {
    name: '',
    description: '',
    weight: '',
    quantity: '',
    shipmentMode: 'road',
    shipmentFiles: [],
    pickupAddress: {},
    deliveryAddress: {},
    recieverName: '',
    receiverEmail: '',
    receiverPhoneNumber: ''
  };

  render() {
    return (
      <div className='shipment'>
        <form>
          <Paper>
            <GeoSuggest autoFocus />
            <GeoSuggest />
          </Paper>
          <input type='text' placeholder='Item Name' />
          <input type='Description' placeholder='Description' />
          <input type='text' placeholder='Weight' />
          <input type='text' placeholder='Quantity' />
        </form>
      </div>
    );
  }
}
