`use strict`;

const express = require('express');
const post = require('../handlers/apartment/apartment-post');

const RouterApartment = express.Router();

RouterApartment.post('/', post.insertApartment);

module.exports = RouterApartment;