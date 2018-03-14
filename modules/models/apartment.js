`use strict`;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
   name: {
      type: String,
      required: [true, 'name is required']
   },
   address: {
      type: String,
      required: [true, 'address is required']
   },
   phoneNumber: {
      type: String,
      required: [true, 'phoneNumber is required']
   },
   location: {
      type: Object,
      require: [true, 'location is required']
   },
   management_id: {
      type: String,
      require: [true, 'management_id is required']
   }
})

const TempApartment = mongoose.model('apartment', ApartmentSchema);
module.exports = TempApartment;
