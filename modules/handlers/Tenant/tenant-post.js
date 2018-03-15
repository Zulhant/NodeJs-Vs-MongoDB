`use strict`;

const express = require('express');
const tempTenant = require('../../models/tenant');
const ResponGenerator = require('../../helpers/respon');

exports.insertData = (req, res, next) => {
   for (let i = 0; i < 20; i++) {
      tempTenant.create(req.body).then(() => {
         res.jsonp(
            ResponGenerator.created()
         );
      }).catch(error => {
         res.jsonp(
            ResponGenerator.bad_request(error)
         );
      });
   }
}





