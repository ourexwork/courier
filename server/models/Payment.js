const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

    shipment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'
    },

    amount: {
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
    paymentMethod: {
        type: String,
        enum: ['onPickUp', 'online'],

    },
    paymentStatus: {
        type: Boolean,
        default: false
    }

});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment, paymentSchema };