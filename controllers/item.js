const express = require('express');
const router = express.Router();

const db = require('../models');

// home page for item
router.get('/', (req,res)=>{
  db.Items.find({}, function(error, allItems){
    if(error){
      console.log(error);
      res.send("Something went wrong");
    } else {
      res.render('items/index', {item: allItems});
    }
  });
});


module.exports = router;