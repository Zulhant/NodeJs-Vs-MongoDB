const express = require('express');
const tempTenant = require('../../models/tenant');
const { TENANT_ID, APARTMENT_ID, TENANT_TYPE } = require('../../config/configuration');

exports.getAllData = (req, res) => {
   try {
      tempTenant.find().then((tenants) => {
         res.jsonp({
            code: 200,
            msg: 'success',
            payload: tenants
         })
      })
   } catch (error) {
      res.jsonp({
         code: 400,
         msg: error
      })
   }
}

exports.getOneData = (req, res) => {
   const idTenant = req.params[TENANT_ID];
   try {
      tempTenant.findOne({ _id: idTenant }).then((tenant => {
         res.jsonp({
            code: 200,
            msg: 'success',
            payload: tenant
         })
      }))
   } catch (error) {
      res.jsonp({
         code: 400,
         msg: error
      })
   }
}

exports.getApartmentOFTenants = (req, res) => {
   const apartmentId = req.params[APARTMENT_ID];
   try {
      tempTenant.find({ apartment_id: apartmentId }).then((tenants) => {
         res.jsonp({
            code: 200,
            msg: 'success',
            paylod: tenants
         })
      })
   } catch (error) {
      res.jsonp({
         code: 400,
         msg: error
      })
   }
}

exports.getApartmentOFTenant = (req, res) => {
   const apartmentId = req.params[APARTMENT_ID];
   const tenantId = req.params[TENANT_ID];
   try {
      tempTenant.find({ _id: tenantId, apartment_id: apartmentId }).then((tenant) => {
         res.jsonp({
            code: 200,
            msg: 'success',
            paylod: tenant
         })
      })
   } catch (error) {
      res.jsonp({
         code: 400,
         msg: error
      })
   }
}


