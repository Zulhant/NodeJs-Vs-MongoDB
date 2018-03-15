const express = require('express');
const tempTenant = require('../../models/tenant');
const { TENANT_ID, APARTMENT_ID, TENANT_TYPE, PAGE } = require('../../config/configuration');
const ResponGenerator = require('../../helpers/respon');

exports.getAllData = (req, res) => {
   const perpage = 3;
   const page = req.params[PAGE] || 1
   try {
      tempTenant.find()
         .skip((perpage * page) - perpage)
         .limit(perpage)
         .then((tenants) => {
            tempTenant.count().exec((err, count) => {
               const pages = Math.ceil(count / perpage)
               res.jsonp(
                  ResponGenerator.success(tenants, pages)
               );
            })
         });
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}

exports.getOneData = (req, res) => {
   const idTenant = req.params[TENANT_ID];
   try {
      tempTenant.findOne({ _id: idTenant }).then((tenant => {
         res.jsonp(
            ResponGenerator.success(tenant)
         );
      }))
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}

exports.getApartmentOFTenants = (req, res) => {
   const apartmentId = req.params[APARTMENT_ID];
   try {
      tempTenant.find({ apartment_id: apartmentId }).then((tenants) => {
         res.jsonp(
            ResponGenerator.success(tenants)
         );
      }).catch(err => {
         res.jsonp(
            ResponGenerator.not_found()
         );
      });
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}

exports.getApartmentOFTenant = (req, res) => {
   const apartmentId = req.params[APARTMENT_ID];
   const tenantId = req.params[TENANT_ID];
   try {
      tempTenant.find({ _id: tenantId, apartment_id: apartmentId }).then((tenant) => {
         res.jsonp(
            ResponGenerator.success(tenant)
         );
      })
   } catch (error) {
      res.jsonp(
         ResponGenerator.bad_request(error)
      );
   }
}


