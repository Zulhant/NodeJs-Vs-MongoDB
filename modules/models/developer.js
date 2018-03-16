`use strict`;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const developerSchema = new Schema({

   name: {
      type: String,
      required: [true, 'name is required']
   },
   address: {
      type: String,
      required: [true, 'address is required'],
      min: 10
   },
   phoneNumber: [{
      type: Number,
      required: [true, 'phoneNumber is required']
   }],
   email: {
      type: String,
      required: [true, 'email is required'],
      unique: true
   },
   desc: {
      type: String,
      min: 10
   }

});

const Developer = mongoose.model('Developer', developerSchema);
module.exports = Developer;


