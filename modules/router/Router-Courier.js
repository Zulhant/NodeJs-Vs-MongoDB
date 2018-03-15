`use strict`;

const express = require('express');
const post = require('../handlers/courier/courier-post');
const get = require('../handlers/courier/courier-get');
const { COURIER_ID, APARTMENT_ID } = require('../config/configuration');

const RouterCourier = express.Router();

RouterCourier.post('/', post.insertData);

RouterCourier.get('/', get.getCouriers);
RouterCourier.get(`/:${COURIER_ID}`, get.getCourier);
RouterCourier.get(`/:${APARTMENT_ID}/apartment`, get.getCouriersByApartment);

module.exports = RouterCourier;