`use strict`;

const express = require('express');
const TempTenant = require('../../models/tenant');
const { TENANT_ID } = require('../../config/configuration');
const ResponGenerator = require('../../helpers/respon');

exports.updateTenant = (req, res) => {
   const tenantId = req.params[TENANT_ID];
   try {
      TempTenant.findByIdAndUpdate({ _id: tenantId }, req.body).then(() => {
         res.jsonp(
            ResponGenerator.success()
         );
      })

   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}


