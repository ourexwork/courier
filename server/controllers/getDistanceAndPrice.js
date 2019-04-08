const _ = require('lodash');

const { validateShipment, Shipment } = require('../models/Shipment');

const getLocation = require('../functions/getLocation');
const getDistance = require('../functions/getDistance');


// this controller enables the user to create a shipment
const getdetailsAndPrice = async(req, res) => {
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
        const pickUpAddress = await getLocation(req.body.pickUpAddress);
        const deliveryAddress = await getLocation(req.body.deliveryAddress);

        console.log(pickUpAddress.longitude)

        const distance = getDistance(pickUpAddress.latitude, pickUpAddress.longitude,
            deliveryAddress.latitude, deliveryAddress.longitude);
        console.log(distance)
        if (pickUpAddress.country != deliveryAddress.country) {
            let price = (distance * req.body.weigth * req.body.quantity) + 1000;
        } else {
            price = distance * req.body.weight * req.body.quantity
        }


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
            receiver,
            price,
            sender: req.user._id
        });

        await shipment.save();

        res.send(shipment);

    }
};

module.exports = { getdetailsAndPrice };