const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.getUsers);
router.get('/:Id', authController.getUser);
router.put('/:Id', authController.updateUser);
router.delete('/:Id', authController.deleteUser);

module.exports = router;
