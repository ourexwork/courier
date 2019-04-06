const express = require('express');
const router = express.Router();
const {
    getOneUser,
    allUsers,
    shipmentStatus,
    shipmentPickUp,
    cancelShipment
} = require('../controllers/admin');

const adminAuth = require('../middleware/authenticateUser');

//route to get all users
router.get('/', adminAuth, allUsers);

//route to get a particular user
router.get('/selected/:id', adminAuth, getOneUser);

//this route updates the shipment status to whatever
router.post('/update-shipment-status', adminAuth, shipmentStatus);

//this route confirms shipment has been picked up,n 
//updates the date and update the shipment status to is processing
router.post('/update/pickupstatus', adminAuth, shipmentPickUp);

//this routes cancels shipment 
router.post('/cancel-shipment', adminAuth, cancelShipment)