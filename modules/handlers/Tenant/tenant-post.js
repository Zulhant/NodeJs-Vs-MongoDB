const express = require('express');
const tempTenant = require('../../models/tenant');


exports.insertData = (req, res, next) => {
   for (let i = 1; i < 100; i++) {
      const dataName = ['muhammad', 'ari', 'yudoyono', 'zainaul'];
      const name = Math.random() * dataName.length - 1;

      const request = {
         fullName: name,
         NIK: 773833,
         address: "Jalan Raya Jati Padanng",
         phoneNumber: "373737373",
         email: "hari@yahoo.com",
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
      }).catch(next);

   }

}





