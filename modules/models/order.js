`use strict`;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Tenant = require('../models/tenant');
const Courier = require('../models/courier');

const orderSchema = new Schema({
   tenantId: {
      type: Schema.Types.objectId,
      ref: 'Tenant',
      required: [true, 'tenantId is required']
   },
   couriers: [
      {
         corierId: {
            type: Schema.Types.objectId,
            ref: 'Courier',
            required: [true, 'courier is required']
         },
         serveDate: {
            type: Date,
            default: Date.now()
         },
         serveType: {
            type: String,
            enum: ['Delivery', 'Pick Up'],
         },
         Fee: {
            type: Number,
            min: 0
         }
      }
   ],
   orderDate: {
      type: Date,
      default: Date.now()
   },
   orderDetail: [
      {
         itemName: {
            type: String,
            required: [true, 'item is required']
         },
         qty: {
            type: Number,
            required: [true, 'qty is required'],
            min: 1
         },
         subTotal: {
            type: Number,
            required: [true, 'SubTotal is required']
         }
      }
   ],
   total: {
      type: Number,
      required: [true, 'total is required']
   },
   providerId: {
      type: Schema.Types.objectId,
      ref: 'Provider',
      required: [true, 'provider is required']
   },

})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
