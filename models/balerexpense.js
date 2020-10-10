const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let BalerExpense = new Schema({
  userId: {
    type: String,
  },
  driverName: {
    type: String,
  },
  managerName: {
    type: String,
  },
  date: {
    type: String,
  },
  petrol: {
    type: Number,
  },
  diesel: {
    type: Number,
  },
  service: {
    type: Number,
  },
  spare: {
    type: Number,
  },
  driverSalary: {
    type: Number,
  },
  managerSalary: {
    type: Number,
  },
  workerSalary: {
    type: Number,
  },
  hayCost: {
    type: Number,
  },
  juteCost: {
    type: Number,
  },
  foodCost: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
});
module.exports = mongoose.model("BalerExpense", BalerExpense);
