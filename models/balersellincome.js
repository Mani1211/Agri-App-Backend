const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let BalerSellIncome = new Schema({
    date: {
        type: String
    },
    buyerName: {
        type: String
    },
    buyerCellNumber: {
        type: Number,
        minlength:10,
        maxlength:10
    },
    vehicleNumber: {
        type: String
    },
    numberOfBales: {
        type: Number,
    },
    costPerBales: {
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
    }
})

module.exports= mongoose.model('BalerSellIncome', BalerSellIncome)