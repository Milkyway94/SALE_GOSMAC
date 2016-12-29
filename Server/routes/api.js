const express = require('express');
const router = express.Router();
const execquery=require('../API/Controller/productController');
// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/product', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  execquery(res,"SELECT * FROM StorageProduct");
});

module.exports = router;