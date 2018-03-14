`use strict`;

const express = require('express');
const { depan, belakang } = require('../../modules/config/params');

const requestProvider = {
   name: `${depan} ${belakang}`,
   address: 'Jalan Mangga Dua',
   location: {
      _latitude: 3737733,
      _longitude: 238383
   },
   services: [
      {
         name: 'Kiloan',
         price: 2000,
         minOrder: 1,
      },
      {
         name: 'Meteran',
         price: 2000,
         minOrder: 1,
      },
      {
         name: 'Coin',
         price: 2000,
         minOrder: 1,
      },
      {
         name: 'Dry Clean',
         price: 2000,
         minOrder: 1,
      },
      {
         name: 'Satuan',
         price: 2000,
         minOrder: 1,
      }
   ],
   operation_time: [
      {
         day: 'Senin',
         open: '08:00',
         close: '12:00'
      },
      {
         day: 'Selasa',
         open: '08:00',
         close: '12:00'
      }
   ],
   rating: 2,
   picture: 'laundry.jpg',
   type: 'Laundry'
}

module.exports = requestProvider;
