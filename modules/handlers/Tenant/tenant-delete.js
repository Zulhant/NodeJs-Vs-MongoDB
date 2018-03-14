const express = require('express');
const tempTenant = require('../../models/tenant');
const { TENANT_ID } = require('../../config/configuration');


exports.deleteTenant = (req, res) => {
   const tenantId = req.params[TENANT_ID];
   try {
      tempTenant.findByIdAndRemove({ _id: tenantId }).then(() => {
         res.jsonp({
            code: 200,
            msg: 'succcess'
         })
      })
   } catch (error) {
      res.jsonp({
         code: 400,
         msg: error
      })
   }
}