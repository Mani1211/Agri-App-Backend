const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let SugarIncome = new Schema({
    date: {
        type: String
    },
    customerName: {
        type: String
    },
    customerPlace: {
        type: String
    },
    ryotNumber: {
        type: Number
    },
    plotNumber: {
        type: Number
    },
    costPerTon: {
        type: Number
    },
    totalTons: {
        type: Number
    },
    amount: {
        type: Number
    },
    advance: {
        type: Number
    },
    balance: {
        type: Number
    },
    amountGiven: {
        type: Number
    },
})

module.exports= mongoose.model('SugarIncome', SugarIncome)