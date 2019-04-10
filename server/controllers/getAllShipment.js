 const { Shipment } = require('../models/Shipment');

 const getAllShipment = async(req, res) => {
     // if user  is logged and is admin, although the middleware already checked
     if (req.user.isAdmin) {

         const shipments = await Shipment.find()
             .populate('sender', 'firstName , lastName email')
             .populate('payment', 'amount Date');
         res.send(shipments)
     };
 };

 module.exports = { getAllShipment };