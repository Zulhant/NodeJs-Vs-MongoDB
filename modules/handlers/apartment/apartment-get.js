const express = require('express');
const TempApartment = require('../../models/apartment');
const ResponGenerator = require('../../helpers/respon');

exports.getApartments = (req, res) => {
   try {
      TempApartment.find({}).then(apartments => {
         res.jsonp(
            ResponGenerator.success(apartments)
         );
      }).catch(err => {
         res.jsonp(
            ResponGenerator.not_found()
         )
      })
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}