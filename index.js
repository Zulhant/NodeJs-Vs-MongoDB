'use strict';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/NtsMo');
mongoose.Promise = global.Promise;

const RouterTenant = require('./modules/router/Router-Tenant');

app.use('/tenant', RouterTenant);


app.listen(process.env.port || port, function () {
   console.log(`now running port ${port}`);
});






