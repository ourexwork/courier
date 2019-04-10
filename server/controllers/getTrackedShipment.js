const _ = require('lodash');
const mongoose = require('mongoose');


const { Shipment } = require('../models/Shipment');

const { User } = require('../models/User');

const getTrackedShipment = async(req, res) => {
    // if user  is logged , although the middleware already checked
    if (req.user) {
        // const user = User.findById(req.user._id);
        const shipment = await Shipment.
        findOne({ sender: req.user._id })
            .and({ _id: req.body._id })
            .select('-pickUpAddress -weight -deliveryAddress.latitude -deliveryAddress.longitude -deliveryAddress.state -deliveryAddress.country -receiver -sender -payment')

        res.send(shipment);
    };
};

module.exports = { getTrackedShipment };