`use strict`;

const express = require('express');
const post = require('../handlers/apartment/apartment-post');
const get = require('../handlers/apartment/apartment-get');

const RouterApartment = express.Router();

RouterApartment.post('/', post.insertApartment);

RouterApartment.get('/', get.getApartments);

module.exports = RouterApartment;