`use strict`;
const express = require('express');
const { depan } = require('../config/params');

const requestDeveloper = {
   name: depan,
   address: 'Jalan Raya Jati Murni',
   phoneNumber: '+6252626',
   email: `${depan}@gmail.com`,
   desc: 'developer terbaik',
   type: 'Swasta'
}

module.exports = requestDeveloper;


