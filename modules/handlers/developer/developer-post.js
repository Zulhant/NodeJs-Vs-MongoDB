`use strict`;

const express = require('express');
const tempProvider = require('../../models/developer');
const requestDeveloper = require('../../structure/developer');

exports.insertDeveloper = (req, res) => {
   try {
      for (let i = 1; i < 20; i++) {
         tempProvider.create(requestDeveloper).then((developer) => {
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