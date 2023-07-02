const mongoose = require("mongoose");

const connectDB = async () => mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = connectDB;



