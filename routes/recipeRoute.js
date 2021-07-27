const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeModal');
const fetch = require('node-fetch');

let arrayData = [],
  newRecipe,
  title,
  cooking_time,
  id,
  image_url,
  ingredients,
  publisher,
  servings,
  source_url;

router.route('/create').post((req, res) => {
  const handleClick = async event => {
    const recipe = [
      'apple',
      'artichoke',
      'asparagus',
      'bacon',
      'basil',
      'bean',
      'beetroot',
      'blueberry',
      'boysenberry',
      'broccoli',
      'brussel sprouts',
      'cabbage',
      'carrot',
      'cauliflower',
      'celery',
      'cherry',
      'chickpea',
      'chili',
      'cinnamon',
      'coconut',
      'coriander',
      'corn',
      'cucumber',
      'dill',
      'fig',
      'garlic',
      'grape',
      'grapefruit',
      'green bean',
      'green pepper',
      'ham',
      'leek',
      'lemon',
      'lentil',
      'lettuce',
      'lime',
      'lychee',
      'mandarin',
      'mongo',
      'melon',
      'mushrooms',
      'nectarine',
      'onion',
      'orange',
      'oregano',
      'parsley',
      'peas',
      'pepperoni',
      'potato',
      'pumpkin',
      'radish',
      'red pepper',
      'ribs',
      'rosemary',
      'saffron',
      'salami',
      'sweet potato',
      'tomato',
      'zucchini',
    ];

    for (let i = 0; i < recipe.length; i++) {
      console.log('************************');
      console.log('recipe added = ', recipe[i]);
      const req = await fetch(
        `https://forkify-fb32c-default-rtdb.firebaseio.com/${recipe[i]}.json`
      );
      const res = await req.json();

      for (let i in res) {
        cooking_time = res[i].cooking_time;
        image_url = res[i].image_url;
        ingredients = res[i].ingredients;
        publisher = res[i].publisher;
        servings = res[i].servings;
        source_url = res[i].source_url;
        title = res[i].title;

        newRecipe = new Recipe({
          cooking_time,
          image_url,
          ingredients,
          publisher,
          servings,
          source_url,
          title,
        });
        newRecipe.save();
      }
    }
  };

  handleClick();
});

module.exports = router;
