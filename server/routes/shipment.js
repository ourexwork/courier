const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Fawn = require('fawn');

const { userShipment } = require('../controllers/shipment');
const { saveShipment } = require('../controllers/saveShipment');
const { getdetailsAndPrice } = require('../controllers/getDistanceAndPrice');
const authenticateUser = require('../middleware/authenticateUser');

// this route enables a user to add a new shipment
router.post('/', authenticateUser, userShipment);

router.post('/getprice', authenticateUser, getdetailsAndPrice);

router.post('/save-shipment', authenticateUser, saveShipment);

module.exports = router;