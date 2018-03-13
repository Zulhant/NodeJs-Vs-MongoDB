'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TmpSchema = new Schema({
   fullName: {
      type: String
   },
   address: {
      type: String
   },
   phoneNumber: {
      type: String
   },
   NIK: {
      type: String
   },
   email: {
      type: String
   },
   gender: {
      type: String
   },
   type: {
      type: String
   },
   unitNumber: {
      type: String
   },
   floor: {
      type: String
   }
});

const tempTenant = mongoose.model('tenant', TmpSchema);

module.exports = tempTenant;

