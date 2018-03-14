`use strict`;

const express = require('express');
const TempCourier = require('../../models/courier');
const requestCourier = require('../../structure/courier');

exports.insertData = (req, res, next) => {
   try {
      for (let i = 1; i < 10; i++) {
         TempCourier.create(requestCourier).then((courier) => {
            res.jsonp({
               code: 200,
               msg: 'success'
            })
         })
      }
   } catch (error) {
      res.jsonp({
         code: 400,
         msg: error
      })
   }
}