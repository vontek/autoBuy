const Chat = require('../models/Chat');
const User = require('../models/User');
const Message = require('../models/Message');

exports.createChat = async (req, res) => {
  
};

exports.getChatsForUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const chats = await Chat.find({ participants: userId }).populate('participants');
    res.status(200).json({ success: true, chats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getChatById = async (req, res) => {
  try {
    const { id } = req.params;
    const chat = await Chat.findById(id).populate('participants');
    if (!chat) {
      return res.status(404).json({ success: false, message: 'Chat not found' });
    }
    res.status(200).json({ success: true, chat });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateChat = async (req, res) => {
  try {
    const { id } = req.params;
    const { participants } = req.body;
    const chat = await Chat.findByIdAndUpdate(id, { participants }, { new: true });
    if (!chat) {
      return res.status(404).json({ success: false, message: 'Chat not found' });
    }
    res.status(200).json({ success: true, chat });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteChat = async (req, res) => {
  try {
    const { id } = req.params;
    const chat = await Chat.findByIdAndDelete(id);
    if (!chat) {
      return res.status(404).json({ success: false, message: 'Chat not found' });
    }
    res.status(200).json({ success: true, message: 'Chat deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
