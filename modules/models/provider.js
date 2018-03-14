`use strict`;

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
      type: Object,
      required: [true, 'location is required']
   },
   operation_time: {
      type: Array
   },
   services: {
      type: Array,
      required: [true, 'services is required']
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
   },
   type: {
      type: String,
      required: [true, 'type Provider is required']
   }
});

const TempProvider = mongoose.model('provider', providerSchema);
module.exports = TempProvider;



