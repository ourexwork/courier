const mongoose = require('mongoose');
const { User } = require('./User');

/**
 * Shipment document<table> needs
 * User that wants to ship
 * name of item
 * description
 * weight
 * price which will be mathematically calculated
 * shimpment mode (Air, Road, Sea, Rail )
 * pickUp Address
 * Delivery Address
 * date and time Item was picked
 * date and time item will be delivered
 * shipmentStatus (pending, processing, in transit, delivered )
 * expressDelivery ( yes / no )
 *  */

const ShipmentSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 150
    },
    weight: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    shipmentMode: {
        type: String,
        required: true,
        enum: ['air', 'rail', 'road', 'sea']
    },
    pickUpAddress: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    pickUpDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    deliveryDate: {
        type: Date
    },
    shipmentStatus: {
        type: String,
        required: true,
        enum: ['pending', 'processing', 'in transit', 'delivered'],
        default: 'pending'
    },
    receiverName: {
        type: String,
        required: true,
        trim: true
    },
    receiverAddress: {
        type: String,
        required: true,
        trim: true
    },
    receiverPhoneNumber: {
        type: String,
        required: true
    }
});

const Shipment = mongoose.model('shipment', ShipmentSchema);


module.exports = { Shipment };