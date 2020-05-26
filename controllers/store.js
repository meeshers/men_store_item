const express = require('express');
const router = express.Router();

const db = require('../models');

// store index
router.get('/', (req,res)=>{
  res.render('store/index');
})

// new route
router.get('/new', (req,res)=>{
  res.render('store/new');
})


module.exports = router;