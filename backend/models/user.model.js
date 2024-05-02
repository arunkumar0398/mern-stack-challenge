const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'restricted'],
    default: 'restricted',
    required: true
  },
  reviews: {
    type: Array,
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;