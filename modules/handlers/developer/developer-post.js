`use strict`;

const express = require('express');
const tempProvider = require('../../models/developer');
const requestDeveloper = require('../../structure/developer');
const ResponGenerator = require('../../helpers/respon');

exports.insertDeveloper = (req, res) => {
   try {
      for (let i = 1; i < 20; i++) {
         tempProvider.create(requestDeveloper).then((developer) => {
            res.jsonp(
               ResponGenerator.created()
            )
         })
      }

   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}