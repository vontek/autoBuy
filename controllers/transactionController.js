const Car = require('../models/Cars');
const User = require('../models/User');
const Transaction = require('../models/Transactions');

exports.createTransaction = async (req, res) => {
  try {
    const { buyer, seller, car, amount, transaction_type, transaction_status } = req.body;

    const newTransaction = new Transaction({
      buyer,
      seller,
      car,
      amount,
      transaction_type,
      transaction_status
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.findById(req.params.id);
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.findByIdAndDelete(req.params.id);
    if (!transactions) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
