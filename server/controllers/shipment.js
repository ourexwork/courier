const _ = require('lodash');
const getLocation = require('../functions/getLocation');
// const userShipment = () => {};

getLocation('64 Abusi-Edumare Street, Lagos, Nigeria')
  .then(address => {
    console.log(address);
  })
  .catch(e => console.log(e));

// getLocation('64 Abusi-Edumare Street, Lagos, Nigeria');

// module.exports = { userShipment };
