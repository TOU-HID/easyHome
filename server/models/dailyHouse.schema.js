const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const houseSchema = new Schema({
  housename: String,
  housenumber: String,
  area: String,
  city: String,
  rent: Number,
  bedroom: Number,
  bathroom: Number,
  sqft: Number,
  type: String,
  availableform: Date,
  rentperday: Number,
  monthlyMaintenanceCost: Number,
  renterId: {
    type: String,
    default: 'none',
  },
  rating: [
    {
      raterid: {
        type: String,
        default: '0000',
      },
      rate: {
        type: Number,
        default: 0,
      },
    },
  ],
  bookings: [
    {
      bookerid: {
        type: String,
        default: '00000',
      },
      bookingstatus: {
        type: String,
        default: 'none',
      },
      bookingForm: {
        type: Date,
        default: Date.now(),
      },
      bookingTo: {
        type: Date,
        default: Date.now(),
      },
      totalCost: {
        type: Number,
        default: 0,
      },
    },
  ],
  isbooked: {
    type: Boolean,
    default: false,
  },
  isavailable: {
    type: Boolean,
    default: true,
  },
  image: [
    {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        // required: true,
      },
    },
  ],
  comments: [
    {
      commenterId: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],
  postby: {
    type: ObjectId,
    ref: 'User',
  },
  bookby: {
    type: ObjectId,
    ref: 'User',
  },
});
const DailyHouse = mongoose.model('DailyHouse', houseSchema);

module.exports = DailyHouse;
