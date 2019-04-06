const mongoose = require('mongoose');
const Joi = require('joi');

const trackingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    shipment: { type: Object, required: true },
    dateUpdated: { type: Date, required: true },
    NoteFromAdmin: { type: String, required: true }
});

const ValidateTracking = (reqbody) => {
    const schema = {
        name: Joi.string().min(2).max(50),
        shipment: Joi.object(),
        dateUpdated: Joi.date(),
        NoteFromAdmin: Joi.string().required().min(2).max(50)
    }
    return Joi.validate(reqbody, schema);
};

const Tracking = mongoose.model('Tracking', trackingSchema);

module.exports = { trackingSchema, ValidateTracking }