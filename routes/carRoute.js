const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const carController = require('../controllers/carController');

router.get('/', carController.getAllCar);
router.put('/:id', carController.updateCar);
router.get('/:id', carController.getCarById);
router.delete('/:id', carController.deleteCar);
router.post('/', upload.single('carImage'), carController.createCar);

module.exports = router;
