const express = require('express');
const user = require('../routes/user');
const shipment = require('../routes/shipment');

module.exports = app => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/api/users', user);
  app.use('/api/shipment', shipment);
};
