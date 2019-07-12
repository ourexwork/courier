const mongoose = require("mongoose");
const { shipmentSchema } = require("./Shipment");
const { paymentSchema } = require("./Payment");

const transactionSchema = new mongoose.Schema({
  shipment: {
    type: shipmentSchema,
    required: true
  },
  payment: {
    type: paymentSchema,
    required: true
  },
  status: {
    type: String,
    enum: ["cancelled", "delivered"],
    required: true
  }
  // default: 'cancelled shipment'
});
//ok

const TransactionHistory = mongoose.model(
  "transaction history",
  transactionSchema
);

module.exports = { TransactionHistory };
