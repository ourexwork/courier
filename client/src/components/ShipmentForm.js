import React, { Component } from 'react';
import GeoSuggest from 'react-geosuggest';

class ShipmentForm extends Component {
    state {
        name: '',
        description: '',
        weight: '',
        quantity: '',
        shipmentMode: 'road',
        shipmentFiles: []
        pickupAddress: {},
        deliveryAddress: {},
        recieverName: '',
        receiverEmail: '',
        receiverPhoneNumber: ''
    }

    render() {
        return (
            <>
                <form>
                    <input type='text' placeholder='Item Name' autoFocus />
                    <input type='Description'  placeholder='Description' />
                    <input type='text' placeholder='Weight' />
                    <input type='text' placeholder='Quantity' />
                
                
                </form>
            </>
        )
    }
}
