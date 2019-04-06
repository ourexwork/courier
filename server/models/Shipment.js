const mongoose = require('mongoose');
const Joi = require('joi');
const { User } = require('./User');

/**
 * Shipment document<table> needs
 * User that wants to ship
 * name of item
 * description
 * weight
 * price which will be mathematically calculated
 * shimpment mode (Air, Road, Sea, Rail )
 * pickUp Address - address, long, lat
 * Delivery Address - address, long, lat
 * date and time Item was picked
 * date and time item will be delivered
 * shipmentStatus (pending, processing, in transit, delivered )
 * expressDelivery ( yes / no )
 * reciever name address phonenumber email
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
    minlength: 10,
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
  }
});

function validateShipment(shipment) {
  const Schema = {
    name: Joi.string()
      .required()
      .min(3)
      .max(50)
      .trim(),
    description: Joi.string()
      .required()
      .min(10)
      .max(150)
      .trim(),
    weight: Joi.string()
      .required()
      .min(1)
      .trim(),
    quantity: Joi.string()
      .required()
      .min()
      .trim(),
    shimpmentMode: Joi.string(),
    pickUpAddress: Joi.string().trim(),
    deliveryAddress: Joi.string().trim(),
    recieverName: Joi.string()
      .min(3)
      .max(150)
      .required()
      .trim(),
    receiverEmail: Joi.string()
      .email()
      .required()
      .trim(),
    receiverPhoneNumber: Joi.string()
      .required()
      .trim()
  };

  return Joi.validate(shipment, Schema);
}

const Shipment = mongoose.model('shipment', ShipmentSchema);

module.exports = { Shipment, validateShipment };
