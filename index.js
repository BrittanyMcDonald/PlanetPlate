import React from 'react';

import './recipeimage.css';

const FoodImg = require('./thaicurryrecipe.jpg');

const RecipeImg = ({img}) => <div id="food_img_container">
  <img id="recipe_img" src={img} />
</div>

RecipeImg.defaultProps = {
  img:FoodImg
}

export default RecipeImg;