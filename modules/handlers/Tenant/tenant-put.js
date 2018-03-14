`use strict`;

const express = require('express');
const TempTenant = require('../../models/tenant');
const { TENANT_ID } = require('../../config/configuration');

exports.updateTenant = (req, res) => {
   const tenantId = req.params[TENANT_ID];
   try {
      TempTenant.findByIdAndUpdate({ _id: tenantId }, req.body).then(() => {
         res.jsonp({
            code: 200,
            msg: 'success'
         })
      })

   } catch (error) {
      res.jsonp({
         code: 400,
         msg: error
      })
   }
}


