const express = require('express');
const router = express.Router();
const productController = require('../API/Controller/productController');
// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
 router.get('/api', (req, res) => {
   res.send('Danh sách API: \n - Lấy tất cả sản phẩm: api/product');
 });

var api=function(app){
  app.get("/api/product", function(req, res){
    productController.getProducts(res);  
  });
  app.post("/api/product", function(req, res){

  })
}
module.exports = api;