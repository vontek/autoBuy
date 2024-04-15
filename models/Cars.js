const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    carImages: [
      {
        url: {
          type: String,
          required: true
        },
        publicId: {
          type: String,
          required: true
        }
      }
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Categories',
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    location: {
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      country: { type: String, trim: true }
    },
    model: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    mileage: {
      type: Number
    },
    condition: {
      type: String,
      enum: ['New', 'Used', 'Certified Pre-owned', 'Accidented']
    },
    color: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
);

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
