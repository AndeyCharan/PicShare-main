require('dotenv').config();
const mongoose = require('mongoose');

const connect = () => {
    console.log('MongoDB URL:', process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => {
        console.log(`Connected to MongoDB ${process.env.MONGO_URL}`);
      })
      .catch(error => {
        console.error('Error connecting to MongoDB:', error);
      });
}

module.exports = connect;

