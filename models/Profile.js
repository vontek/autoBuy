const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    phoneNumber: {
      type: String,
      trim: true
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      country: { type: String, trim: true },
      zipCode: { type: String, trim: true }
    }
  },
  { timestamps: true }
);

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
