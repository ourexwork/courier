const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000 || process.env.PORT;
const users = require('../server/routes/user');
const shipmwnt = require('./routes/shipment');
mongoose
  .connect('mongodb://localhost/courier_app', { useNewUrlParser: true })
  .then(() => {
    console.log('Database connected successfully ');
  })
  .catch(e => {
    // if any error throw the error
    throw new Error(e.message);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', users);
app.use('/api/shipment', shipmwnt);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
