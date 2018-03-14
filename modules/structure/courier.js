`use strict`;

const express = require('express');
const { Nik, randomName, depan, belakang } = require('../config/params');

const requestCourier = {
   fullName: `${depan} ${belakang}`,
   NIK: Nik,
   phoneNumber: '+6282828822',
   available: true,
   gender: 'L',
   email: `${depan}@gmail.com`
}

module.exports = requestCourier;
