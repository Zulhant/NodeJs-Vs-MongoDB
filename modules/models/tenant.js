`use strict`;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TenantSchema = new Schema({
   firstName: {
      type: String,
      required: [true, 'fullName Is Required']
   },
   lastName: {
      type: String,
      required: [true, 'fullName Is Required']
   },
   address: {
      type: String
   },
   phoneNumber: {
      type: String,
      unique: true,
      required: [true, 'PhoneNumber Is Required']
   },
   NIK: {
      type: Number,
      unique: true
   },
   email: {
      type: String,
      required: [true, 'email Is Required'],
      unique: true
   },
   gender: {
      type: String,
      enum: ['L', 'P'],
      required: [true, 'gender Is Required'],
   },
   residenceStatus: {
      type: String,
      enum: ['Sewa', 'Owner'],
      required: [true, 'residenceStatus Is Required']
   },
   unitNumber: {
      type: String,
      required: [true, 'UnitNumber Is Required'],
      unique: true,
      ensureIndex: 1
   },
   floor: {
      type: Number,
      required: [true, 'floor Is Required']
   },
   towerName: {
      type: String,
      required: [true, 'towerName is required']
   },
   apartmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Apartment',
      Required: [true, 'apartment_id is required']
   }
});

const Tenant = mongoose.model('Tenant', TenantSchema);
module.exports = Tenant;

