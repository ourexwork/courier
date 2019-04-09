const mongoose = require('mongoose');
const { userSchema } = require('../models/User');
const { shipmentSchema } = require('../models/Shipment');


const transactionSchema = new mongoose.Schema({
    user: { type: userSchema },
    shipment: { type: shipmentSchema },
    status: {
        type: String,
        enum: ['cancelled', 'shipment'],
        required: true
    }
    // default: 'cancelled shipment'
});


const TransactionHistory = mongoose.model('transaction history', transactionSchema);

module.exports = { TransactionHistory };