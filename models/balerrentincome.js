
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let BalerRentIncome = new Schema({
    date: {
        type: String
    },
    customerName: {
        type: String
    },
    customerPlace: {
        type: String
    },
    billNumber: {
        type: Number
    },
    numberOfBales: {
        type: Number
    },
    rentOfBales: {
        type: Number
    },
    advance: {
        type: Number
    },
    totalAmount: {
        type: Number
    },
    balance: {
        type: Number
    },
    amountGiven: {
        type: Number
    },
})

module.exports= mongoose.model('BalerRentIncome', BalerRentIncome)