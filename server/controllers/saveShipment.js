const _ = require('lodash');
const mongoose = require('mongoose');
const Fawn = require('fawn');

const { validateShipment, Shipment } = require('../models/Shipment');
const { Price } = require('../models/Price');



// this controller enables the user to create a shipment and save to database
const saveShipment = async(req, res) => {
    // this controller enables the user to create a shipment

    // if we have a user
    if (req.user) {
        // validate the request body
        const { error } = validateShipment(req.body);
        if (error) return res.status(400).send({ error: error.details[0].message });

        const newShipment = _.pick(req.body, [
            'name',
            'description',
            'weight',
            'quantity',
            'shipmentMode',
            'pickUpAddress',
            'deliveryAddress',
            'receiver',
            'sender',
            'price'
        ]);


        const newPrice = _.pick(req.body, ['price', 'sender']);


        const shipment = new Shipment({
            ...newShipment,
            priceShipmentId: req.body._id,

        })

        const price = new Price({
            ...newPrice,
            priceShipmentId: req.body._id,
            shipment: shipment._id
        });

        new Fawn.Task()
            .save('prices', price)
            .save('shipments', shipment)
            .run();

    }
    res.send({ message: 'shipment saved!!' });
}

module.exports = { saveShipment };