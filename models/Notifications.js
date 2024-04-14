const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    type: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    read: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
