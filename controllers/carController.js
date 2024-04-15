const Car = require('../models/Cars');
const Categories = require('../models/Categories');
const cloudinary = require('../config/cloudinary');

exports.createCar = async (req, res) => {
  try {
    const uploadedImages = [];
    for (const file of req.files) {
      const uploadedImage = await cloudinary.uploader.upload(file.path);
      uploadedImages.push({
        url: uploadedImage.secure_url,
        publicId: uploadedImage.public_id
      });
    }
    let { city, state, country } = req.body.location;

    let category = await Categories.findOne({ category: req.body.category });

    if (!category) {
      category = await Categories.findOne({ name: req.body.category });

      if (!category) {
        category = new Categories({ name: req.body.category });
        await category.save();
      }
    }

    const car = new Car({
      user: req.body.user,
      carImages: uploadedImages,
      category: category._id,
      brand: req.body.brand,
      location: { city, state, country },
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
      condition: req.body.condition,
      color: req.body.color,
      price: req.body.price,
      description: req.body.description
    });

    await car.save();
    // console.log(car);
    res.status(201).json({ message: 'Car created successfully', car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
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
