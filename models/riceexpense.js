const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let RiceExpense = new Schema({
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
  foodCost: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
});
module.exports = mongoose.model("RiceExpense", RiceExpense);
