const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ['Buy', 'Sell'],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
