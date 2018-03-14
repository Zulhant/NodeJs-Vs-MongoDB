'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CourierShema = new Schema({
   fullName: {
      type: String,
      required: [true, 'fullName is Required']
   },
   NIK: {
      type: String,
      required: [true, 'NIK is Required']
   },
   phoneNumber: {
      type: String,
      require: [true, 'phoneNumber is required ']
   },
   available: {
      type: Boolean,
      default: true
   },
   gender: {
      type: String
   },
   email: {
      type: String,
      required: [true, 'email is required']
   }
});

const TempCourier = mongoose.model('courier', CourierShema);
module.exports = TempCourier;
