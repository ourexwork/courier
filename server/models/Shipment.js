const mongoose = require('mongoose');
const Joi = require('joi');
const { User } = require('./User');
const { Payment } = require('./Payment');
/**
 * Shipment document<table> needs
 * User that wants to ship
 * name of item
 * description
 * weight
 * Payment which will be mathematically calculated
 * shimpment mode (Air, Road, Sea, Rail )
 * pickUp Address - address, long, lat
 * Delivery Address - address, long, lat
 * date and time Item was picked
 * date and time item will be delivered
 * shipmentStatus (pending, processing, in transit, delivered )
 * expressDelivery ( yes / no )
 * reciever name address phonenumber email
 *  */

const shipmentSchema = new mongoose.Schema({
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
        minlength: 1,
        maxlength: 150
    },
    weight: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    shipmentMode: {
        type: String,
        required: true,
        enum: ['air', 'rail', 'road', 'sea']
    },
    pickUpAddress: {
        type: Object,
        required: true
    },
    deliveryAddress: {
        type: Object,
        required: true
    },

    currentLocation: {
        type: Object,
        default: 'abuja'
    },
    pickUpDate: {
        type: Date
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
    receiver: {
        type: Object,
        required: true,
        trim: true
    },
    pricing: String,
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    }
});

function validateShipment(shipment) {
    const Schema = {
        _id: Joi.string(),
        shipmentStatus: Joi.string(),
        receiver: Joi.object(),
        sender: Joi.string(),
        name: Joi.string()
            .required()
            .min(3)
            .max(50)
            .trim(),
        description: Joi.string()
            .required()
            .min(1)
            .max(150)
            .trim(),
        weight: Joi.number()
            .required()
            .min(1),
        quantity: Joi.number()
            .required()
            .min(1),
        shipmentMode: Joi.string(),
        pickUpAddress: Joi.any(),
        deliveryAddress: Joi.any(),
        receiverName: Joi.string()
            .min(3)
            .max(150)
            // .required()
            .trim(),
        receiverEmail: Joi.string()
            .email()
            // .required()
            .trim(),
        receiverPhoneNumber: Joi.string()
            // .required()
            .trim(),
        pricing: Joi.any(),
        paymentMethod: Joi.string(),
        __v: Joi.number()

    };

    return Joi.validate(shipment, Schema);
}

const Shipment = mongoose.model('shipment', shipmentSchema);

module.exports = { Shipment, shipmentSchema, validateShipment };