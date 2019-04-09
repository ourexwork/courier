 const _ = require('lodash');
 const mongoose = require('mongoose');
 const Fawn = require('fawn');

 const { validateShipment, Shipment } = require('../models/Shipment');
 const { Payment } = require('../models/Payment');
 const { User } = require('../models/User');

 const getAllShipment = async(req, res) => {
     // if user  is logged and is admin, although the middleware already checked
     if (req.user.isAdmin) {

         const shipments = await Shipment.find()
             .populate('sender', 'firstName , lastName email')
             .populate('payment', 'amount Date')


         res.send(shipments)
     }

 }

 module.exports = { getAllShipment }