`use strict`;

const express = require('express');
const TempProvider = require('../../models/provider');
const requestProvider = require('../../structure/provider');

exports.insertData = (req, res) => {
   try {
      const insert = TempProvider.create(requestProvider);
      if (insert)
         res.jsonp({
            code: 200,
            msg: 'success'
         })
      else
         res.jsonp({
            code: 400,
            msg: 'failed to save data'
         })
   } catch (error) {
      res.jsonp({
         code: 401,
         msg: 'error'
      })
   }
}
