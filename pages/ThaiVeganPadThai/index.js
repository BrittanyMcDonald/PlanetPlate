import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './veganpadthai.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';

const FoodImg = require('../../images/padthai2.jpg');
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
    title:"Vegan Pad Thai",
    timeList:"Cook Time: 40 minutes",
    portionList:"2 - 4 people",
    country:"This recipe originates from Thailand!",
    list1:"• 8 ounces Rice Noodles (Pad Thai)",
    list2:"• 3 tablespoons sesame oil, divided (Pad Thai)",
    list3:"• 8 ounce block of extra firm tofu (Pad Thai)",
    list4:"• 1 red bell pepper, thinly sliced (Pad Thai)",
    list5:"• 1 yellow bell pepper, thinly sliced (Pad Thai)",
    list6:"• 1 cup mung bean sprouts (Pad Thai)",
    list7:"• 4 scallions, thinly sliced (Pad Thai)",
    list8:"• 3 cloves of garlic, minced (Pad Thai)",
    list9:"• 1/4 cup vegetable broth (Sauce)",
    list10:"• 2 tablespoon tamari sauce (Sauce)",
    list11:"• 2-3 tablespoon vegan fish sauce or white miso (Sauce)",
    list12:"• 3 tablespoons maple syrup (Sauce)",
    list13:"• 2 tablespoons chili paste (Sauce)",
    list14:"• juice of 1 lime (Sauce)",
    list15:"• Roasted peanuts, fresh lime, fresh basil and cilantro, mung bean sprouts, scallions (Toppings - Optional)",
    countryColor:"#CE1126",
    ingredientsColor:"#006341",
    nameColor:"#006341"
}

export default PadThaiPage;