const express = require('express');
const TempCourier = require('../../models/courier');
const { COURIER_ID, APARTMENT_ID } = require('../../config/configuration');
const ResponGenerator = require('../../helpers/respon');

exports.getCouriers = (req, res) => {
   try {
      TempCourier.find({}).then((couriers) => {
         res.jsonp(
            ResponGenerator.success(couriers)
         );
      }).catch(err => {
         res.jsonp(
            ResponGenerator.not_found()
         );
      });
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}


exports.getCourier = (req, res) => {
   const idCourier = req.params[COURIER_ID];
   try {
      TempCourier.findById({ _id: idCourier }).then(courier => {
         res.jsonp(
            ResponGenerator.success(courier)
         );
      }).catch(err => {
         res.jsonp(
            ResponGenerator.not_found()
         );
      })
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}

exports.getCouriersByApartment = (req, res) => {
   const apatmentId = req.params[APARTMENT_ID];
   try {
      TempCourier.find({ apartment_id: apatmentId }).then(couriers => {
         res.jsonp(
            ResponGenerator.success(couriers)
         )
      }).catch(err => {
         res.jsonp(
            ResponGenerator.not_found()
         )
      })
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      )
   }
}