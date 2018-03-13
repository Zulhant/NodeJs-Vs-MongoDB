'use strict';

const express = require('express');
const insertData = require('../../modules/handlers/Tenant/tenant-post');
const tempTenant = require('../models/tenant');

const RouterTenant = express.Router();


RouterTenant.post('/', insertData.insertData)


module.exports = RouterTenant;
