`use strict`;

const express = require('express');
const TempApartment = require('../../models/apartment');
const requestApartment = require('../../structure/apartment');

exports.insertApartment = (req, res) => {
   try {
      for (let i = 1; i < 10; i++) {
         TempApartment.create(requestApartment).then((apartment) => {
            res.jsonp({
               code: 200,
               msg: 'success'
            })
         })
      }
   } catch (error) {
      res.jsonp({
         code: 401,
         msg: error
      })
   }
}