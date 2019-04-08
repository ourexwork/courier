const mongoose = require('mongoose');
const { userSchema } = require('./User');
const { shipmentSchema } = require('./Shipment');


const transactionSchema = new mongoose.Schema({
    user: userSchema,
    Shipment: shipmentSchema,
    status: {
        type: String,
        enum: ['cancelled shipment', 'delivered shipment']
    }
    // default: 'cancelled shipment'
})


const Transaction = mongoose.model('transaction history', transactionSchema);

module.exports = { Transaction };