const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Authentication', userSchema);
