import React from 'react';

import './ingredients.css';

const TimeImg = require('./time.png');
const PortionImg = require('./portion.png');
const IngredientsImg = require('./ingredients.png');

const Ingredients = ({country, timeImg, timeList, portionImg, portionList, ingredientsImg, list1, list2, list3, list4, list5}) => <div 
className="recipe_container"
>

    <p className="info" id="recipe_country">{country}</p>

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
        <p className="info" id="ingredients">Ingredients:</p>
    </div>

    <div id="ingredient_list">
        <p className="ingredient_item" id="ingredient_one">{list1}</p>
        <p className="ingredient_item" id="ingredient_two">{list2}</p>
        <p className="ingredient_item" id="ingredient_three">{list3}</p>
        <p className="ingredient_item" id="ingredient_four">{list4}</p>
        <p className="ingredient_item" id="ingredient_five">{list5}</p>
    </div>

</div>

Ingredients.defaultProps = {
    fontSize:16,
    timeImg:TimeImg,
    timeList:"Cook Time: 1 hour 10 minutes",
    portionImg:PortionImg,
    portionList:"2 People",
    ingredientsImg:IngredientsImg,
    country:"Coconut Curry Originates from Thailand.",
    list1:"11 ounces boneless skinless chicken breasts, (cut) into 1/2-inch chunks",
    list2:"1/4 teaspoon salt and pepper, or to taste",
    list3:"1-1/2 teaspoons vegetable oil",
    list4:"2 teaspoons curry powder",
    list5:"1/8 onion, thinly sliced",
}

export default Ingredients;