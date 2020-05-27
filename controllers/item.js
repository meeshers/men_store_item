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
  db.Stores.find({}, function(err, foundStores){
    if(err){
      console.log(err);
      res.send("something went wrong");
    } else{
      res.render('items/new', {stores: foundStores});
    }
  })

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

router.delete('/:id', (req,res)=>{
  db.Items.findByIdAndDelete(req.params.id, function(error, foundItem){
    if(error){
      console.log(error);
      res.send("something went wrong");
    } else {
      res.redirect('/item');
    }
  });
});

router.get('/:id/edit', (req,res)=>{
  db.Items.findById(req.params.id, function(error, foundItem){
    if(error){
      console.log(error);
      res.send("something went wrong");
    } else {
      res.render('items/edit', {item: foundItem});
    }
  });
});

router.put('/:id', (req,res)=>{
  db.Items.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(error, foundItem){
    if(error){
      console.log(error);
      res.send("something went wrong");
    } else {
      res.redirect(`/item/${foundItem._id}`);
    }
  })
})

module.exports = router;