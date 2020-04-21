import React from 'react';

import './title.css';

const CountryImg = require('./thai_icon.png');

const RecipeTitle = ({title, fontSize, img, color}) => <div 
className="title_container"
>
    <h2 className="recipe_name"
    style={{color:color}}>{title}</h2>
    <img id="recipe_img" src={img} />
</div>

RecipeTitle.defaultProps = {
  fontSize:20,
  title:"Thai Red Curry Chicken",
  color:"#4797FF",
  img:CountryImg
}

export default RecipeTitle;