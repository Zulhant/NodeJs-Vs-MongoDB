`use strict`;

const express = require('express');
const TempProvider = require('../../models/provider');
const requestProvider = require('../../structure/provider');
const ResponGenerator = require('../../helpers/respon');

exports.insertData = (req, res) => {
      try {
            const insert = TempProvider.create(req.body);
            if (insert)
                  res.jsonp(
                        ResponGenerator.created()
                  )
            else
                  res.jsonp(
                        ResponGenerator.bad_request('gagal menyimpan data')
                  )
      } catch (error) {
            res.jsonp(
                  ResponGenerator.bad_request(error)
            )
      }
}
