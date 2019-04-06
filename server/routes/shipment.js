const express = require('express');
const router = express.Router();

const { userShipment } = require('../controllers/shipment');
const authenticateUser = require('../middleware/authenticateUser');

// this route enables a user to add a new shipment
router.post('/', authenticateUser, userShipment);
module.exports = router;