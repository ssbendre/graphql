var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String  
  },
  phone: {
    type: Number  
  },
  email: {
    type: String
  },
  gender: {
    type: String
  }
});
var Model = mongoose.model('User', userSchema);
module.exports = Model;
