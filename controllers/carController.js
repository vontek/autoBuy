const Car = require('../models/Cars');
const cloudinary = require('../config/cloudinary');

exports.createCar = async (req, res) => {
  try {
    const uploadedImage = await cloudinary.uploader.upload(req.file.path);
    const car = new Car({
      user: req.body.user,
      carImage: {
        url: uploadedImage.secure_url,
        publicId: uploadedImage.public_id
      },
      category: req.body.category,
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
      condition: req.body.condition,
      color: req.body.color,
      price: req.body.price,
      description: req.body.description
    });

    await car.save();
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getAllCar = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
