`use strict`;

const express = require('express');
const post = require('../handlers/provider/provider-post');

const RouterProvider = express.Router();

RouterProvider.post('/', post.insertData);

module.exports = RouterProvider;