const mongoose = require('mongoose');
const { shipmentSchema } = require('../models/Shipment');
const { paymentSchema } = require('../models/Payment');

const transactionSchema = new mongoose.Schema({
    shipment: {
        type: shipmentSchema,
        required: true
    },
    payment: {
        type: paymentSchema,
        required: true
    },
    status: {
        type: String,
        enum: ['cancelled', 'delivered'],
        required: true
    }
    // default: 'cancelled shipment'
});


const TransactionHistory = mongoose.model('transaction history', transactionSchema);

module.exports = { TransactionHistory };