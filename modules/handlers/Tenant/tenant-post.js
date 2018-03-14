`use strict`;

const express = require('express');
const tempTenant = require('../../models/tenant');

exports.insertData = (req, res, next) => {
   for (let i = 0; i < 20; i++) {
      tempTenant.create(req.body).then(() => {
         res.jsonp({
            code: 200,
            msg: 'success'
         })
      }).catch(error => {
         res.jsonp({
            code: 400,
            msg: error
         })
      });

   }
}





