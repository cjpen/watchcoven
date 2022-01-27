const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const viewingSchema = new Schema({
  movieTitle: String,
  host: String,
  location: String,
  viewingTime: Date
}, {
  timestamps: true
});

const covenSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  leader: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
  },
  members: [{
      type: Schema.Types.ObjectId,
      ref: "User",
  }],
  description: String,
  image: String,
  viewings: [viewingSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Coven', covenSchema);