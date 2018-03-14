`use strict`;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const developerSchema = new Schema({
   name: {
      type: String,
      required: [true, 'name is required']
   },
   address: {
      type: String
   },
   phoneNumber: {
      type: Number,
      required: [true, 'phoneNumber is required']
   },
   email: {
      type: String,
      required: [true, 'email is required']
   },
   desc: {
      type: String
   },
   type: {
      type: String
   }
});

const tempProvider = mongoose.model('developer', developerSchema);
module.exports = tempProvider;


