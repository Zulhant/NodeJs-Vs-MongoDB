`use strict`;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TenantSchema = new Schema({
   fullName: {
      type: String,
      required: [true, 'fullName Is Required']
   },
   address: {
      type: String
   },
   phoneNumber: {
      type: Number,
      required: [true, 'PhoneNumber Is Required']
   },
   NIK: {
      type: String,
      required: [true, 'NIK Is Required']
   },
   email: {
      type: String,
      required: [true, 'email Is Required']
   },
   gender: {
      type: String
   },
   type: {
      type: String
   },
   unitNumber: {
      type: Number,
      required: [true, 'UnitNumber Is Required']
   },
   floor: {
      type: Number
   },
   apartment_id: {
      type: String,
      Required: [true, 'apartment_id is required']
   }
});

const tempTenant = mongoose.model('tenant', TenantSchema);
module.exports = tempTenant;

