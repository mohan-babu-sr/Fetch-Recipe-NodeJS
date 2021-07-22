const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://root:root@cluster0.avqb1.mongodb.net/recipeapp?retryWrites=true&w=majority'
);

app.use('/', require('./routes/recipeRoute'));

app.listen(3001, function () {
  console.log('express server 3001');
});
