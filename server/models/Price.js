const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    priceShipmentId: {
        type: String
    },

    shipment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'
    },

    price: {
        type: Number,
        required: true
    },


    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    Date: {
        type: Date,
        default: Date.now()
    },
    PaymentMethod: {
        type: String,
        enum: ['onPickUp online'],
        default: 'online'
    },
    paymentStatus: {
        type: Boolean,
        default: false
    }

});

const Price = mongoose.model('Price', priceSchema);

module.exports = { Price };