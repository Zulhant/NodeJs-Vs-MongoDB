'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const providerSchema = new Schema({
   name: {
      type: String,
      required: [true, 'name is required']
   },
   address: {
      type: String,
      required: [true, 'address is required']
   },
   location: {
      type: object
   },
   operation_time: {
      type: Array
   },
   services: {
      type: Array
   },
   rating: {
      type: Number
   },
   desc: {
      type: String
   },
   availability: {
      type: Boolean,
      default: true
   },
   picture: {
      type: String
   }
});

const TempProvider = mongoose.model('provider', providerSchema);
module.exports = TempProvider;



