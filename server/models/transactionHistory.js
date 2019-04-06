const mongoose = require('mongoose');
const { userSchema } = require('../models/User');
const { shipmentSchema } = require('../models/Shipment');


const transactionSchema = new mongoose.model({
    user: userSchema,
    Shipment: shipmentSchema,
    status: {
        type: String,
        enum: ['cancelled shipment', 'delivered shipment']
    },
    default: 'cancelled shipment'
})


const Transaction = mongoose.model('transaction history', transactionSchema);

module.exports = { Transaction };