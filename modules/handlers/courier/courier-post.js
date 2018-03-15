`use strict`;

const express = require('express');
const TempCourier = require('../../models/courier');
const requestCourier = require('../../structure/courier');
const ResponGenerator = require('../../helpers/respon');

exports.insertData = (req, res, next) => {
   try {
      for (let i = 1; i < 10; i++) {
         TempCourier.create(requestCourier).then((courier) => {
            res.jsonp(
               ResponGenerator.created()
            )
         })
      }
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      )
   }
}