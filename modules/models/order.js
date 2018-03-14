'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({


})

const tempOrder = mongoose.model('order', orderSchema);
module.exports = tempOrder;
