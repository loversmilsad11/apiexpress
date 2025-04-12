const mongoose = require("mongoose");

// Schema Database 1- Create schema /////////////////////
const CaregorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Too short category name"],
      maxlength: [30, "Too long category name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    image:String,
  },
  { timestamps: true }
);
// 2- Create Model /////////////////////////////////////
const CategoryModel = mongoose.model("Category", CaregorySchema);

module.exports = CategoryModel;
