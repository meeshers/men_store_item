const express = require('express');
const app = express();

const PORT = 4000;

app.set('view engine', 'ejs');
// store

// items

// show index
app.get('/', (req,res) =>{{
  res.render('index');
}})

// store index
app.get('/store', (req,res)=>{
  res.render('store/index');
})

app.get('/store/new', (req,res)=>{
  res.render('store/new');
})

app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
})