'use strict';
const express = require('express');
const JWT = require('jsonwebtoken');


function verifyToken(req, res, next) {
   const bearerHeader = req.headers['authorization'];
   if (bearerHeader) {
      const Bearer = bearerHeader.split(' ');
      const BearerToken = Bearer[1];
      JWT.verify(BearerToken, 'secretkey', (error, userAuth) => {
         if (error) {
            return res.sendStatus(401)
         } else {
            next()
         }
      })
   } else {
      return res.sendStatus(401)
   }
}


module.exports = verifyToken 