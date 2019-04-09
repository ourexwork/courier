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
        // type: Number,
        // required: true

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'

    },


    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    Date: {
        type: Date,
        default: Date.now()
    }


});

const Price = mongoose.model('price', priceSchema);

module.exports = { Price };