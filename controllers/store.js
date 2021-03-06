const express = require('express');
const router = express.Router();

const db = require('../models');

// store index
router.get('/', (req,res)=>{
  db.Stores.find({}, function(error, allStores){
    if(error){
      console.log(error);
      res.send("Something went wrong");
    } else {
      res.render('store/index', {stores: allStores});
    }
  })
  //res.render('store/index');
})

// new route
router.get('/new', (req,res)=>{
  res.render('store/new');
})

// create
router.post('/', (req,res)=>{
  db.Stores.create(req.body, function(error,createdStore){
    if(error){
      console.log(error);
      res.send("Something went wrong");
    } else {
      res.redirect('/store');
    }
  });
  //res.send(req.body);
})

//show
router.get('/:id', (req,res)=>{
  db.Stores.findById(req.params.id, function(error, foundStore){
    if(error){
      console.log(error);
      res.send("Something went wrong");
    } else {
      res.render('store/show', {store: foundStore});
    }
  })
})

router.get('/:id/edit', (req,res)=>{
  db.Stores.findById(req.params.id, function(error, foundStore){
    if(error){
      console.log(error);
      res.send("Something went wrong");
    } else {
      res.render(`store/edit`, {store: foundStore});
    }
  })
})

//delete
router.delete('/:id', (req,res)=>{
  db.Stores.findByIdAndDelete(req.params.id, function(error, deleteStore){
    if(error){
      console.log(error);
      res.send("Something went wrong");
    } else {
      res.redirect('/store');
    }
  })
})

//edit
router.put('/:id',(req,res)=>{
  db.Stores.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(error, updateStore){
    if(error){
      console.log(error);
      res.send("Something went wrong");
    } else {
      res.redirect(`/store/${updateStore._id}`);
    }
  })
})

//update


module.exports = router;