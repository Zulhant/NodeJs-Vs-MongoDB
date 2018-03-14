const express = require('express');
const tempTenant = require('../../models/tenant');
const { randomName, Nik, depan, belakang } = require('../../config/params')


exports.insertData = (req, res, next) => {
   for (let i = 0; i < 100; i++) {
      const request = {
         fullName: `${depan} ${belakang}`,
         NIK: Nik,
         address: "Jalan Raya Jati Padanng",
         phoneNumber: "373737373",
         email: `${depan}@gmail.com`,
         gender: "L",
         type: "Sewa",
         unitNumber: "36",
         floor: "2"
      }

      tempTenant.create(request).then((tenant) => {
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





