const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/', chatController.createChat);
router.get('/', chatController.getChatsForUser);
router.put('/:id', chatController.updateChat);
router.get('/:id', chatController.getChatById);
router.delete('/:id', chatController.deleteChat);

module.exports = router;
