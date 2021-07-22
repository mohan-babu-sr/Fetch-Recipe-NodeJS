const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeModal');
const fetch = require('node-fetch');

// let count = 0;
// router.route('/create').post((req, res) => {
//   count++;
//   console.log('************************************', count);
//   const cooking_time = req.body.cooking_time;
//   const id = req.body.id;
//   const image_url = req.body.image_url;
//   const ingredients = req.body.ingredients;
//   const publisher = req.body.publisher;
//   const servings = req.body.servings;
//   const source_url = req.body.source_url;
//   const title = req.body.title;

//   const newRecipe = new Recipe({
//     cooking_time,
//     id,
//     image_url,
//     ingredients,
//     publisher,
//     servings,
//     source_url,
//     title,
//   });
//   newRecipe.save();
// });

// module.exports = router;

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
        arrayData.push(res[i]);
      }
      console.log('arrayData.length = ', arrayData.length);
    }

    for (let i = 0; i < arrayData.length; i++) {
      cooking_time = arrayData[i].cooking_time;
      image_url = arrayData[i].image_url;
      ingredients = arrayData[i].ingredients;
      publisher = arrayData[i].publisher;
      servings = arrayData[i].servings;
      source_url = arrayData[i].source_url;
      title = arrayData[i].title;
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
    arrayData.length = 0;
  };

  handleClick();
});

module.exports = router;
