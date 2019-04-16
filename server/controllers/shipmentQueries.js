const Fawn = require('fawn');

const { Shipment, shipmentSchema } = require('../models/Shipment');
const { TransactionHistory } = require('../models/TransactionHistory');
const { User, userSchema } = require('../models/User');
const { Payment } = require('../models/Payment');

//this route updates a shipment status
const shipmentStatus = async (req, res) => {
  const shipmentState = await Shipment.findByIdAndUpdate(req.body._id, {
    shipmentStatus: req.body.shipmentStatus // 'processing'
  });
  if (shipmentState) {
    res.send({ message: `Shipment is ${req.body.shipmentStatus}` });
  } else {
    res.status(401).send({ error: 'Shipment status is not updated' });
  }
};

// once shipment is picked up admin updates
const shipmentPickUp = async (req, res) => {
  //updates the shipment status as in transit from pending
  let shipment = await Shipment.findByIdAndUpdate(req.body._id, {
    shipmentStatus: 'in transit',
    pickUpDate: Date.now()
  });

  //when picked , checks if the user paid cash , if yes updates the payment status
  //note ,but if user paid online would have already been already been true
  if (shipment) {
    await shipment.save();
    if (shipment.paymentMethod == 'onPickUp') {
      let payment = await Payment.findOne({ _id: shipment.payment });
      payment.paymentStatus = true; // asign true value cos sender must have paid on pickup
      await payment.save();
    }

    res.send({
      message: ` Shipment with id: ${shipment._id} is now in Transit `
    });
  }
};

//when item is delivered admin confirms on the app that user has gotten the item
//deletes from shipment table , moved to transaction history then transaction status delievred
const deliveredShipment = async (req, res) => {
  console.log(req.body._id);
  let shipment = await Shipment.findOne({ _id: req.body._id });
  shipment.shipmentStatus = 'delivered';
  shipment = await shipment.save();
  const transaction = new TransactionHistory({
    shipment
  });

  if (shipment) {
    new Fawn.Task()
      .remove('shipments', { _id: shipment._id })
      .save('transaction histories', transaction)
      .run();
    res.send({ message: 'shipment delivered' });
  }
};

//delete from shipment table and moved to transaction history, with status cancelled
const cancelShipment = async (req, res) => {
  let shipment = await Shipment.findOne({ _id: req.body._id });
  shipment.shipmentStatus = 'cancelled';
  shipment = await shipment.save();
  const user = await User.findById(shipment.sender);
  const transaction = new TransactionHistory({
    shipment,
    status: 'cancelled'
  });

  if (shipment) {
    new Fawn.Task()
      .remove('shipments', { _id: shipment._id })

      .save('transaction histories', transaction)
      .run();
    res.send({ message: 'shipment cancelled' });
  }
};

module.exports = {
  shipmentStatus,
  shipmentPickUp,
  cancelShipment,
  deliveredShipment
};
