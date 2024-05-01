const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    ],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    },
    unreadCount: {
      type: Number,
      default: 0
    },
    archived: {
      type: Boolean,
      default: false
    },
    deleted: {
      type: Boolean,
      default: false
    },
    settings: {
      notifications: {
        type: Boolean,
        default: true
      }
    }
  },
  { timestamps: true }
);

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
