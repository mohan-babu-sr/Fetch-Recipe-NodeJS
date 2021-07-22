const mongoose = require('mongoose');

const recipesSchema = {
  cooking_time: Number,
  id: String,
  image_url: String,
  ingredients: Array,
  publisher: String,
  servings: Number,
  source_url: String,
  title: String,
};

const Recipe = mongoose.model('recipes', recipesSchema);

module.exports = Recipe;
