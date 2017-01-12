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
//get by id
router.get('/product/:id', (req, res) => {
  var product = req.params.id;
  console.log(product);
  axios.get(`${API}/GetProductByID?ID=${product}`)
    .then(function (response) {
      res.status(200).json(response.data.Data);
    })
    .catch(function (error) {
      res.status(500).send(error)
    });
})
router.post('/product', (req, res) => {
  var product = req.body;
  console.log(product);
  axios.get(`${API}/AddProduct?Name=${product.name}&Code=${product.code}&BuyPrice=${product.buyPrice}`)
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
router.put('/product/:id', (req, res) => {
  var product = req.body;
  var id = req.params.id;
  console.log(product);
   console.log(id);
  axios.get(`${API}/UpdateProduct?ID=${id}&Name=${product.P_Name}&Code=${product.P_Code}&BuyPrice=${product.P_BuyPrice}`)
    .then(function (response) {
      
      res.status(200).json(response.data.Data);
    })
    .catch(function (error) {
      res.status(500).send(error)
    });
  //post
});
router.delete('/product/:id', (req, res) => {
  var product = req.params.id;
  console.log(product);
  axios.get(`${API}/DeleteProduct?ID=${product}`)
    .then(function (response) {
      res.status(200).json(response.data.Data);
    })
    .catch(function (error) {
      res.status(500).send(error)
    });
});

module.exports = router;