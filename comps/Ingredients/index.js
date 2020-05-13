import React from 'react';

import './ingredients.css';

const TimeImg = require('./time.png');
const PortionImg = require('./portion.png');
const IngredientsImg = require('./ingredients.png');

const Ingredients = ({width, countryColor, ingredientsColor, country, timeImg, timeList, portionImg, portionList, ingredientsImg, list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13, list14, list15}) => <div 
className="recipe_container"
>

    <p className="info" id="recipe_country" style={{color:countryColor}}>{country}</p>

    <div id="recipe_time">
        <img className="icon" id="time_img" src={timeImg} />
        <p className="info" id="time_text">{timeList}</p>
    </div>

    <div id="recipe_portion">
        <img className="icon" id="portion_img" src={portionImg} />
        <p className="info" id="portion_text">Portion: {portionList}</p>
    </div>

    <div id="recipe_ingredients">
        <img className="icon" id="ingredient_img" src={ingredientsImg} />
        <p className="info" id="ingredients" style={{color:ingredientsColor}}>Ingredients:</p>
    </div>

    <div id="ingredient_list">
        <p className="ingredient_item">{list1}</p>
        <p className="ingredient_item">{list2}</p>
        <p className="ingredient_item">{list3}</p>
        <p className="ingredient_item">{list4}</p>
        <p className="ingredient_item">{list5}</p>
        <p className="ingredient_item">{list6}</p>
        <p className="ingredient_item">{list7}</p>
        <p className="ingredient_item">{list8}</p>
        <p className="ingredient_item">{list9}</p>
        <p className="ingredient_item">{list10}</p>
        <p className="ingredient_item">{list11}</p>
        <p className="ingredient_item">{list12}</p>
        <p className="ingredient_item">{list13}</p>
        <p className="ingredient_item">{list14}</p>
        <p className="ingredient_item">{list15}</p>
    </div>

</div>

Ingredients.defaultProps = {
    fontSize:16,
    timeImg:TimeImg,
    timeList:"Cook Time: 1 hour 10 minutes",
    portionImg:PortionImg,
    portionList:"2 People",
    ingredientsImg:IngredientsImg,
    country:"This recipe originates from Thailand!",
    list1:"• 11 ounces boneless skinless chicken breasts, (cut) into 1/2-inch chunks",
    list2:"• 1/4 teaspoon salt and pepper, or to taste",
    list3:"• 1-1/2 teaspoons vegetable oil",
    list4:"• 2 teaspoons curry powder",
    list5:"• 1/8 onion, thinly sliced",
    list6:"• 5/8 clove garlic, crushed",
    list7:"• 3/8 (14 ounce) can coconut milk",
    list8:"• 3/8 (14.5 ounce) can stewed, diced tomatoes",
    list9:"• 3/8 (8 ounce) can tomato sauce",
    list10:"• 1 tablespoon sugar",
    countryColor:"#FF8F3F",
    ingredientsColor:"#4797FF"
}

export default Ingredients;