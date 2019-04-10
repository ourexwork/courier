const mongoose = require('mongoose');
const { shipmentSchema } = require('../models/Shipment');


const transactionSchema = new mongoose.Schema({
    shipment: { type: shipmentSchema },
    status: {
        type: String,
        enum: ['cancelled', 'successful'],
        required: true
    }
    // default: 'cancelled shipment'
});


const TransactionHistory = mongoose.model('transaction history', transactionSchema);

module.exports = { TransactionHistory };