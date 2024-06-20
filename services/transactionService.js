const mongoose = require('mongoose');
const Transaction = require('../models/transactionSchema');

const TRANSACTION_STATUS = new Map([
  [0, 'COMPLETED'],
  [1, 'IN_PROGRESS'],
  [2, 'REJECTED']
]);
async function getAllTransactions(filterJson) {
  try {
    const transactions = await Transaction.find(filterJson).sort({ date: 1 }).lean();
    return transactions;
  } catch (error) {
    console.error('Error occurred during fetching transactions:', error);
    next(error)
  }
}

async function getTransactionById(id) {
  try {
    const transaction = await Transaction.findOne({'id': id}).lean();
    return transaction;
  } catch (error) {
    console.error('Error occurred during fetching transaction by ID:', error);
    next(error)
  }
}

async function createTransaction(data) {
    try {
      const _id = new mongoose.Types.ObjectId();
      const transactionData = {
        _id: _id,
        id: _id.toString(),
        date: new Date().toISOString(),
        status: TRANSACTION_STATUS.get(Math.floor(Math.random() * 3)),
        ...data
      }
      const newTransaction = await Transaction.create(transactionData);
      return newTransaction;
    } catch (error) {
      console.error('Error occurred during transaction creation:', error);
      next(error)
    }
  }

async function updateTransaction(transactionId, updateData) {
    try {
        const updatedTransaction = await Transaction.findOneAndUpdate({'id': transactionId}, updateData, {new: true}).lean();
        return updatedTransaction;
    } catch (error) {
        console.error('Error occurred during transaction update:', error);
        next(error)
    }
}

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
};
