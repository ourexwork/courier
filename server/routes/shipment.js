const express = require('express');
const router = express.Router();


const { userShipment } = require('../controllers/shipment');
const { saveShipment } = require('../controllers/saveShipment');
const { getDistanceAndPrice } = require('../controllers/getDistanceAndPrice');
const { getAllShipment } = require('../controllers/getAllShipment');
const authenticateUser = require('../middleware/authenticateUser');
const adminAuth = require('../middleware/adminAuth');

// this route enables a user to add a new shipment
router.post('/', authenticateUser, userShipment);

// this routes returns the object to be saved to the client to review
router.get('/getprice', authenticateUser, getDistanceAndPrice);

// this route saves the data to databse both shipment and price
router.post('/save-shipment', authenticateUser, saveShipment);

router.get('/all-shipment', adminAuth, getAllShipment);


module.exports = router;