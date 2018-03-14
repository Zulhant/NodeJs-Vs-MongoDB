`use strict`;

const express = require('express');
const post = require('../handlers/developer/developer-post');

const RouterDeveloper = express.Router();

RouterDeveloper.post('/', post.insertDeveloper);

module.exports = RouterDeveloper;
