`use strict`;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('../models/comment');

const promoSchema = new Schema({
   _id: {
      type: String,
      required: [true, '_id is required'],
      min: 5,
      max: 7
   },
   title: {
      type: String,
      required: [true, 'name is required'],
      min: 5
   },
   desc: {
      type: String,
      require: [true, 'desc is required'],
      min: 10
   },
   startDate: {
      type: Date,
      default: Date.now(),
      required: [true, 'startDate is required']
   },
   endDate: {
      type: Date,
      default: Date.now(),
      required: [true, 'endDate is required']
   }
})




const providerSchema = new Schema({
   name: {
      type: String,
      required: [true, 'name is required']
   },
   address: {
      type: String,
      required: [true, 'address is required']
   },
   location: {
      type: Object,
      required: [true, 'location is required']
   },
   operationTime: {
      type: [
         {
            day: {
               type: String,
               required: [true, 'day is required']
            },
            open: {
               type: String,
               required: [true, 'day is required']
            },
            close: {
               type: String,
               required: [true, 'day is required']
            }

         }
      ]
   },
   services: [
      {
         name: {
            type: String,
            required: [true, 'name is required']
         },
         minimalOrder: {
            type: String,
            required: [true, 'minina; order is required']
         },
         price: {
            type: String,
            required: [true, 'type is required']
         }
      }
   ],
   comments: [commentSchema],
   rating: {
      type: Number,
      default: 0
   },
   desc: {
      type: String,
      required: [true, 'desc is required'],
      min: 20
   },
   isAvailable: {
      type: Boolean,
      default: true
   },
   pictures: [String],
   providerType: {
      type: String,
      required: [true, 'type Provider is required']
   },
   registerDate: {
      type: Date,
      default: Date.now()
   },
   promo: [promoSchema]
});

const TempProvider = mongoose.model('provider', providerSchema);
module.exports = TempProvider;



