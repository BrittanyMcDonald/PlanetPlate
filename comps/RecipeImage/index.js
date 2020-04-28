import React from 'react';

import './recipeimage.css';

const FoodImg = require('../../images/thaichicken1.jpg');

const RecipeImg = ({img}) => <div id="food_img_container">
  <img id="recipe_photo" src={img} />
</div>

RecipeImg.defaultProps = {
  img:FoodImg
}

export default RecipeImg;