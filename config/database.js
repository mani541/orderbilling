var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mani541:manidata@ds111124.mlab.com:11124/testorders')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
  
module.exports = mongoose;