const express = require('express');
module.exports = function (router, axios) {
  const API = 'http://10.0.170.82:85/GroupService.asmx';
  router.get('/group', (req, res) => {
    axios.post(`${API}/GetAllGroup`)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error)
      });
  });
  //post
  router.post('/group', (req, res) => {
    axios.post(`${API}/AddGroup`, req.body)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error)
      });
    //post
  });
  router.put('/group', (req, res) => {
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
