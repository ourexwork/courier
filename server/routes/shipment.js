const express = require('express');
const router = express.Router();
const {
    saveShipment,
    getTrackedShipment,
    getOneShipment,
    getDistanceAndPrice,
    getAllShipment,
    deliveredShipment,
    shipmentStatus,
    shipmentPickUp,
    cancelShipment
} = require('../controllers/shipmentQueries');

const { userShipment } = require('../controllers/shipment');
const authenticateUser = require('../middleware/authenticateUser');
const adminAuth = require('../middleware/adminAuth');

// this route enables a user to add a new shipment
router.post('/', authenticateUser, userShipment);

// this routes returns the object to be saved to the client to review
router.get('/getprice', authenticateUser, getDistanceAndPrice);

// this route saves the data to databse both shipment and price
router.post('/save-shipment', authenticateUser, saveShipment);

//this route gets details of all the shipment for the admin
router.get('/all-shipment', adminAuth, getAllShipment);

router.get('/shipment', adminAuth, getOneShipment);

router.put('/update-shipment-status', adminAuth, shipmentStatus);

//this route confirms shipment has been picked up,n 
//updates the date and update the shipment status to is processing
router.put('/update-pickupstatus', adminAuth, shipmentPickUp);

//this routes cancels shipment 
router.post('/cancel-shipment', adminAuth, cancelShipment);

router.post('/delivered-shipment', adminAuth, deliveredShipment);

//track shipment
router.get('/track-shipment', getTrackedShipment)



module.exports = router;