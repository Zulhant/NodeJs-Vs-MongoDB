`use strict`;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
   _id: {
      type: Schema.Types.ObjectId,
      require: [true, 'id is required']
   },
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
   managementId: {
      type: Schema.Types.ObjectId,
      ref: 'Management',
      require: [true, 'management_id is required']
   },
   numOfTower: {
      type: Number,
      require: [true, 'numOfTower is required']
   },
   numOfUnit: {
      type: Number,
      require: [true, 'numOfUnit is required']
   },
   numOfTenant: {
      type: Number

   },
   totalArea: {
      type: Number
   },
   facilities: [{
      name: {
         Type: String,
         require: [true, 'name is required']
      },
      desc: {
         type: String,
         require: [true, 'desc is required'],
         min: 10
      },
      picture: [String]
   }]

})

const TempApartment = mongoose.model('Apartment', ApartmentSchema);
module.exports = TempApartment;
