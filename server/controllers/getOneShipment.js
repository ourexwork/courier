const _ = require('lodash');
const mongoose = require('mongoose');
const Fawn = require('fawn');

const { Shipment } = require('../models/Shipment');
const { Payment } = require('../models/Payment');
const { User } = require('../models/User');

const getOneShipment = async(req, res) => {
    if (req.user.isAdmin) {

        //the id of the shipment is coming form the form
        const shipment = await Shipment.findById(req.body._id)
            .populate('sender', 'firstName , lastName email')
            .populate('Payment', 'price Date')

        res.send(shipment);
    };

};
module.exports = { getOneShipment }