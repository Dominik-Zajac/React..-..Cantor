const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = new Schema({
    name: String,
    valueUSD: Number,
    valueEUR: Number,
    valueCHF: Number,
    valueRUB: Number,
    valueCZK: Number,
    valueGBP: Number,
    amountMoney: Number,
});

module.exports = mongoose.model('Wallet', walletSchema);