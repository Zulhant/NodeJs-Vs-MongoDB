`use strict`;
const { OK, NO_CONTENT, NOT_POUND, BAD_REQUEST, ACCEPTED, CREATED, UNAUTHORIZATION } = require('../config/responCode')

class ResponGenerator {
   static success(payload, amountData) {
      return typeof (payload === Object) ? { code: OK, message: 'success', amountData, payload } : { code: OK, message: 'success' }
   }
   static no_content(message) {
      return { code: NO_CONTENT, message: message }
   }

   static not_found() {
      return { code: NOT_POUND, message: 'data tidak ditemukan' }
   }

   static bad_request(message) {
      return { code: BAD_REQUEST, message: message }
   }

   static accepted(message) {
      return { code: ACCEPTED, message: message }
   }

   static created() {
      return { code: CREATED, message: 'success data saved' }
   }

   static unauthorization() {
      return { code: UNAUTHORIZATION, message: 'unauthorization' }
   }

}

module.exports = ResponGenerator;
