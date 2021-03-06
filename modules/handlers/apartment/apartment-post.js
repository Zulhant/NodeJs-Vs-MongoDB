`use strict`;

const express = require('express');
const TempApartment = require('../../models/apartment');
const ResponGenerator = require('../../helpers/respon');

exports.insertApartment = (req, res) => {
   try {
      TempApartment.create(req.body).then((apartment) => {
         res.jsonp(
            ResponGenerator.created()
         )
      }).catch(err => {
         res.jsonp(
            ResponGenerator.bad_request(err)
         );
      })
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      )
   }
}