const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const CategoryModel = require("../models/categoryModel");

// get category -----------------------------------------------------------

exports.getCategories = (req, res) => {
  // const name = req.body.name;
  // console.log(req.body);

  res.send();
};

// create category ----------------------------------------------------------

exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  // async await
  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});
