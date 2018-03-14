`use strict`;

const express = require('express');
const post = require('../handlers/orders/order');

const RouterOrder = express.Router();

RouterOrder.post('/');
RouterOrder.get('/');


module.exports = RouterOrder;
