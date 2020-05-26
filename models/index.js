const mongoose = require('mongoose');
const con = 'mongodb://localhost:27017/store';

mongoose.connect(con, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(function(){
  console.log('Mongodb connected');
}).catch(function(error){
  console.log(error);
});

module.exports = {
  Stores: require('./Store')
}