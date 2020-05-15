import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './app.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';

const FoodImg = require('../../images/CucumberSalad.jpg');
const FlagImg = require('../../comps/RecipeTitle/thai_icon.png');

const PadThaiPage = ({width, nameColor, ingredientsColor, countryColor, flagimg, nextcolor, title, backtext, nexttext, fontSize, img, timeList, portionList, country, list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13, list14, list15}) => {

    function BackClick() {
        document.querySelector("#padthai_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/SelectRecipe");
        }, 600)
    }

    function NextClick() {
        document.querySelector("#padthai_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/StepsPadThai");
        }, 600)
    }

    return <div id="padthai_page">
        <div id="app_header">
            <Nav />
            <Header />
        </div>
        <RecipeImg img={FoodImg} width={300} id="selection_image" />
        <RecipeTitle flagimg={FlagImg} title={title} nameColor={nameColor} id="recipe_img_title" />
        <Ingredients countryColor={countryColor} ingredientsColor={ingredientsColor} timeList={timeList} portionList={portionList} country={country} list1={list1} list2={list2} list3={list3} list4={list4} list5={list5} list6={list6} list7={list7} list8={list8} list9={list9} list10={list10} list11={list11} list12={list12} list13={list13} list14={list14} list15={list15} id="ingredients_section" />
        <div id="nav_buttons">
            <CustomButton class="button" width={150} text={backtext} onClick={BackClick} />  
            <CustomButton class="button" width={150} text={nexttext} color={nextcolor} onClick={NextClick} />
        </div>     

    </div>
}


PadThaiPage.defaultProps = {
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"Next",
    img:"FoodImg",
    flagimg:"FlagImg",
    title:"Thai Cucumber Salad",
    timeList:"Prep Time: 10 minutes",
    portionList:"4 servings",
    country:"This recipe originates from Thailand!",
    list1:"• 1 English cucumber (or 2 field cucumbers, washed and dried)",
    list2:"• 1 shallot (minced or 1/4 cup minced purple onion)",
    list3:"• 2 green onions (finely sliced)",
    list4:"• 1 fresh red chili (de-seeded and minced, or 1/4 cup diced red bell pepper)",
    list5:"• 1/2 cup fresh cilantro ( roughly chopped)",
    list6:"• 1/4 cup dry-roasted peanuts (roughly chopped)",
    list7:"• 2 tablespoons fish sauce (dressing)",
    list8:"• 1/2 lime (juiced) (dressing)",
    list9:"• 1 tablespoon soy sauce (dressing)",
    list10:"• 1 to 2 cloves garlic (minced) (dressing)",
    list11:"• 1/4 to 1/2 teaspoon cayenne pepper (to taste) (dressing)",
    list12:"• 1 1/2 to 2 teaspoons sugar (or more, to taste) (dressing)",
    countryColor:"#CE1126",
    ingredientsColor:"#006341",
    nameColor:"#006341"
}

export default PadThaiPage;