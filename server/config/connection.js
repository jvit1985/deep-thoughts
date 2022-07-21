const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongod://localhost:27017/deep-thoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
