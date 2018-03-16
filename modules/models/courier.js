`use strict`;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CourierShema = new Schema({
   firstName: {
      type: String,
      required: [true, 'firstName is Required']
   },
   lastName: {
      type: String,
      required: [true, 'lastName is Required']
   },
   NIK: {
      type: String,
      require: [true, 'NIK is required '],
      unique: true
   },
   phoneNumber: {
      type: String,
      require: [true, 'phoneNumber is required '],
      unique: true
   },
   isAvailable: {
      type: Boolean,
      default: false
   },
   gender: {
      type: String,
      enum: ['L', 'P']
   },
   email: {
      type: String,
      required: [true, 'email is required'],
      unique: true
   },
   userId: {
      type: Schema.Types.ObjectId,
      required: [true, 'userId is required'],
      ref: 'User'
   },
   orders: [{
      Type: Schema.Types.ObjectId,
      ref: 'Order'
   }],
   regiterDate: {
      type: Date,
      default: Date.now()
   },
   apartmentId: {
      type: String,
      ref: Schema.Types.ObjectId,
      required: [true, 'apartmentId is Require']
   }

});

const Courier = mongoose.model('Courier', CourierShema);
module.exports = Courier;
