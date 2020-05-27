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

router.get('/new', (req,res)=>{
  res.render('items/new');
})

router.post('/', (req,res)=>{
  db.Items.create(req.body, function(error, createdItem){
    if(error){
      console.log(error);
      res.send("something went wrong");
    } else {
      res.redirect('/item');
    }
  });
});

router.get('/:id', (req,res)=>{
  db.Items.findById(req.params.id, function(error, foundItem){
    if(error){
      console.log(error);
      res.send("something went wrong");
    } else {
      res.render('items/show', {item: foundItem});
    }
  });
});



module.exports = router;