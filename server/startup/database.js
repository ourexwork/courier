const mongoose = require('mongoose');

module.exports = () => {
  mongoose
    .connect('mongodb://localhost/courier_app', { useNewUrlParser: true })
    .then(() => {
      console.log('Database connected successfully ');
    })
    .catch(e => {
      // if any error throw the error
      throw new Error(e.message);
    });
};
