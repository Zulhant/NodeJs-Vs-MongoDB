`use strict`;

const express = require('express');
const post = require('../handlers/courier/courier-post');


const RouterCourier = express.Router();

RouterCourier.post('/', post.insertData);


module.exports = RouterCourier;