const express = require('express');
const router = express.Router();
var userapi = require('./userapi');
var productapi = require('./productapi');
var employeeapi=require('./employeeapi');
var groupapi=require('./groupapi');
var jwt=require('jsonwebtoken');
const axios = require('axios');
const API = '10.0.170.82:89';

router.get('/', (req, res) => {
  res.send("API");
});

productapi(router, axios);
userapi(router, axios);
employeeapi(router, axios);
groupapi(router, axios);
module.exports = router;