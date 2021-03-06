const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let RiceIncome = new Schema({
  date: {
    type: String,
  },
  customerName: {
    type: String,
  },
  customerPlace: {
    type: String,
  },
  billNumber: {
    type: Number,
  },
  numberOfAcre: {
    type: Number,
  },
  costPerAcre: {
    type: Number,
  },
  advance: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
  balance: {
    type: Number,
  },
  amountGiven: {
    type: Number,
  },
  userId: {
    type: String,
  },
});

module.exports = mongoose.model("RiceIncome", RiceIncome);
