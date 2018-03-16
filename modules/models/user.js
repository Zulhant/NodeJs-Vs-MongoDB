const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   userName: {
      type: String,
      required: [true, 'username is required'],
      unique: true
   },
   hashPassword: {
      type: String,
      required: [true, 'password is required']
   },
   token: {
      type: String
   },
   role: {
      type: String,
      required: [true, 'role is required']
   }
})

const user = mongoose.model('User', userSchema);
module.exports = user;