
const express = require('express');
module.exports = function (router, axios) {
  const API = 'http://10.0.170.82:85/Productservice.asmx';
  router.get('/product', (req, res) => {
    axios.post(`${API}/GetProduct`)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error)
      });
  });
  //post
  router.post('/product', (req, res) => {
    var product = req.body.product;
    axios.post(`${API}/AddProduct`, product)
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
    axios.get(`${API}/storageProducts`)
      .then(function (response) {
        res.status(200).json(response.Data);
      })
      .catch(function (error) {
        res.status(500).send(error)
      });
    //post
  });
}
