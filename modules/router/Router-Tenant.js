`use strict`;

const express = require('express');
const post = require('../../modules/handlers/Tenant/tenant-post');
const get = require('../handlers/Tenant/tenant-get');
const put = require('../handlers/Tenant/tenant-put');
const del = require('../../modules/handlers/Tenant/tenant-delete');
const { TENANT_ID, APARTMENT_ID } = require('../config/configuration');

const RouterTenant = express.Router();
console.log(`<-------START END POINT TENANT --->`)
console.log(`POST /tenant`);
RouterTenant.post('/', post.insertData);

console.log(`GET /tenant`);
RouterTenant.get('/', get.getAllData);
console.log(`GET /tenant/<tenantID>`);
RouterTenant.get(`/:${TENANT_ID}`, get.getOneData);
console.log(`GET /tenant/<apartmentID/apartment>`);
RouterTenant.get(`/:${APARTMENT_ID}/apartment`, get.getApartmentOFTenants);
console.log(`GET /tenant/<tenantID>/apartment/<apartmentID>`);
RouterTenant.get(`/:${TENANT_ID}/apartment/:${APARTMENT_ID}`, get.getApartmentOFTenant);

console.log(`PUT /tenant/<tenantID>/`);
RouterTenant.put(`/:${TENANT_ID}`, put.updateTenant);

console.log(`DELETE /tenant/<tenantID>/`);
RouterTenant.delete(`/:${TENANT_ID}`, del.deleteTenant);

console.log(`<------BORDER END POINT  TENANT --->`)
module.exports = RouterTenant;
