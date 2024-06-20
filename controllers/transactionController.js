const transactionService = require('../services/transactionService');

async function getAllTransactions(req, res, next) {
  try {
    const { startDate, endDate, status } = req.query;
    let filterJson = {}
    if(status){
      filterJson['status']=status;
    }
    if(startDate && endDate){
      const start = new Date(startDate).setUTCHours(0,0,0);
      const end = new Date(endDate).setUTCHours(23,59,29);
      if(start<=end){
        filterJson['date'] = { $gte: start, $lte: end };
      }
    }
    const transactions = await transactionService.getAllTransactions(filterJson);
    res.status(200).json({
      message: 'Transactions data',
      data: transactions
    });
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Server error' });
    next(error);
  }
}

async function getTransactionById(req, res, next) {
  try {
    const transactionId = req.params.id;
    const transaction = await transactionService.getTransactionById(transactionId);
    
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    
    res.status(200).json({
      message: 'Transaction data',
      data: transaction
    });
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: error.message });
    next(error);
  }
}
async function createTransaction(req, res, next) {
    try {
      const newTransaction = await transactionService.createTransaction(req.body);
      res.status(201).json({
        message: 'Transaction created successfully',
        data: newTransaction
      });
    } catch (error) {
      console.error('Controller error:', error);
      res.status(500).json({ error: error.message});
      next(error);
    }
  }

async function updateTransaction(req, res, next) {
    const transactionId = req.params.id;
    const updateData = req.body;
  
    try {
      const updatedTransaction = await transactionService.updateTransaction(transactionId, updateData);
  
      if (!updatedTransaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
  
      res.status(200).json({
        message: 'Transaction updated successfully',
        data: updatedTransaction
      });
    } catch (error) {
      console.error('Controller error:', error);
      res.status(500).json({ error: 'Server error' });
      next(error);
    }
  }

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
};
