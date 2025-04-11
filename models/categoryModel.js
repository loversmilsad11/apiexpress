const mongoose = require('mongoose');


// Schema Database 1- Create schema /////////////////////
const CaregorySchema = new mongoose.Schema({
    name: String,
  });
  // 2- Create Model /////////////////////////////////////
  const CaregoryModel = mongoose.model("Category", CaregorySchema);


  module.exports = CaregoryModel;