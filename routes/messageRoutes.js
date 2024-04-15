const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/', messageController.sendMessage);
router.put('/:id', messageController.updateMessage);
router.get('/:Id', messageController.getMessageHistory);

module.exports = router;
