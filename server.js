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


app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
})