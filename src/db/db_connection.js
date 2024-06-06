const mongoose = require('mongoose');
const { db_name } = require('../constant.js');

const connctionDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://siddharamsutar23:7ygC3d0nQAjPD47n@cluster0.u6h5kaf.mongodb.net/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB connected successfully');
  } catch (error) {
    console.error('DB connection error:', error);
  }
};

module.exports = connctionDB;
