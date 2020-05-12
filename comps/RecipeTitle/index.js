import React from 'react';

import './title.css';

const CountryImg = require('./thai_icon.png');

const RecipeTitle = ({title, fontSize, flagimg, nameColor}) => <div 
className="title_container"
>
    <h2 className="recipe_name"
    style={{fontSize:fontSize, color:nameColor}}>{title}</h2>
    <img id="recipe_img" src={flagimg} />
</div>

RecipeTitle.defaultProps = {
  fontSize:20,
  title:"Thai Red Curry Chicken",
  nameColor:"#4797FF",
  flagimg:CountryImg
}

export default RecipeTitle;