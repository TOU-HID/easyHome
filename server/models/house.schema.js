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
  rating: [
    {
      raterid: String,
      rate: {
        type: Number,
        default: 0,
      },
    },
  ],
  isbooked: {
    type: Boolean,
    default: false,
  },
  ispostapproved: {
    type: Boolean,
    default: false,
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
const House = mongoose.model('House', houseSchema);

module.exports = House;
