const express = require('express');
const TempCourier = require('../../models/courier');
const { Nik, randomName, depan, belakang } = require('../../config/params');


exports.insertData = (req, res) => {
   try {
      for (let i = 1; i < 100; i++) {
         const request = {
            fullName: `${depan} ${belakang}`,
            NIK: Nik,
            phoneNumber: '+6282828822',
            available: true,
            gender: 'L',
            email: `${depan}@gmail.com`
         }

         TempCourier.create(request).then((courier) => {
            res.jsop({
               code: 200,
               msg: 'success'
            })
         })
      }
   } catch (error) {
      res.jsop({
         code: 400,
         msg: error
      })
   }
}