 const _ = require('lodash');
 const mongoose = require('mongoose');
 const Fawn = require('fawn');

 const { validateShipment, Shipment } = require('../models/Shipment');
 const { Price } = require('../models/Price');
 const { User } = require('../models/User');

 const getAllShipment = async(req, res) => {
     // if user  is logged and is admin, although the middleware already checked
     if (req.user.isAdmin) {

         const shipments = await Shipment.find().populate('sender', 'firstName , lastName email')

         //  const data = shipments.map(async(shipment) => {
         //      const priceShipment_id = shipment.priceShipment_id
         //      return await Price.find(priceShipment_id)
         //  })
         //  const d = await Promise.all(data)
         //  console.log(data)
         res.send(shipments)
     }

 }

 module.exports = { getAllShipment }