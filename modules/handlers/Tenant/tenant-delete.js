const express = require('express');
const tempTenant = require('../../models/tenant');
const { TENANT_ID } = require('../../config/configuration');
const ResponGenerator = require('../../helpers/respon');

exports.deleteTenant = (req, res) => {
   const tenantId = req.params[TENANT_ID];
   try {
      tempTenant.findByIdAndRemove({ _id: tenantId }).then(() => {
         res.jsonp(
            ResponGenerator.success()
         );
      }).catch(err => {
         res.jsonp(
            ResponGenerator.not_found()
         );
      });
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}