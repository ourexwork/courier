const mongoose = require('mongoose');
const joi = require('joi');

const recentAddressSchema = new mongoose.Schema({
    name: { type: Array },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

function validateAddress(reqbody) {
    const schema = {
        name: joi.string().min(10).max(50)
    }

    return joi.validate(reqbody, schema)
};

const RecentAddress = mongoose.model('Recent Address', recentAddressSchema);

module.exports = { validateAddress, RecentAddress }