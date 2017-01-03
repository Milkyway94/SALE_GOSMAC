const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'http://smac.vn/dev/Sale/ProductService.asmx';

router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/product', (req, res) => {
  //get
  var product = req.body;
  axios.get(`${API}/GetProduct`)
    .then(products => {
      res.status(200).json(products.data.Data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
  //post
});
router.post('/product', (req, res) => {
  var product = req.query;
  axios.get(`${API}/AddProduct?Name=${product.Name}&Code=${product.Code}&BuyPrice=${product.BuyPrice}`)
    .then(function (response) {
      //console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send(error)
    });
  //post
});
router.put('/product', (req, res) => {
  var product = req.query;
  axios.get(`${API}/UpdateProduct?Name=${product.Name}&Code=${product.Code}&BuyPrice=${product.BuyPrice}`)
    .then(function (response) {
      res.status(200).json(products.data.Data);
    })
    .catch(function (error) {
      res.status(500).send(error)
    });
  //post
});
module.exports = router;