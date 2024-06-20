const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  id: String,
  date: Date,
  sender: {
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    IDNumber: String
  },
  recipient: {
    firstName: String,
    lastName: String,
    email: String,
    accountNumber: String,
    bank: String
  },
  Amount: Number,
  CurrencyCd: String,
  Comments: String,
  status: { type: String, enum: ['COMPLETED', 'IN_PROGRESS', 'REJECTED'] }
});

const Transaction = mongoose.model('Transaction', transactionSchema, 'transaction');

module.exports = Transaction;