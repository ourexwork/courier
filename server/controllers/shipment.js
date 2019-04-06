const _ = require('lodash');

const { validateShipment, Shipment } = require('../models/Shipment');
const getLocation = require('../functions/getLocation');

// this controller enables the user to create a shipment
const userShipment = async (req, res) => {
  // if we have a user
  if (req.user) {
    // validate the request body
    const { error } = validateShipment(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    // pick all shipment properties from the request body
    const newShipment = _.pick(req.body, [
      'name',
      'description',
      'weight',
      'quantity',
      'shipmentMode'
    ]);
    // get address call the geo-location api and store into recent address
    const pickUpAddress = getLocation(req.body.pickUpAddress).then(
      location => location
    );
    const deliveryAddress = getLocation(req.body.deliveryAddress).then(
      location => location
    );

    // get the receiver's details
    const receiver = {
      name: req.body.receiverName,
      email: req.body.receiverEmail,
      phoneNumber: req.body.receiverPhoneNumber
    };

    // note adress is a schema of addresses
    // store the shipment in the database
    const shipment = new Shipment({
      ...newShipment,
      pickUpAddress,
      deliveryAddress,
      receiver
    });

    await shipment.save();

    res.send({ message: 'shipment saved!!' });
  }
};

module.exports = { userShipment };
