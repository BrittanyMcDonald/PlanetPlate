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

const FoodImg = require('../../images/BakedTofuPeanutSauce.jpg');
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
            Router.push("/BakedTofuSteps");
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
    title:"Baked Tofu in Thai Peanut Sauce",
    timeList:"Cook Time: 40 minutes",
    portionList:"4 servings",
    country:"This recipe originates from Thailand!",
    list1:"• 1 (12- to 14-ounce) block of tofu (firm or extra firm)",
    list2:"• 1/4 cup peanut butter (creamy or natural peanut butter is best -- no chunks)",
    list3:"• 1/2 teaspoon ground ginger",
    list4:"• 2 tablespoons lime juice (or orange juice)",
    list5:"• 1 tablespoon soy sauce",
    list6:"• 2 tablespoons sesame oil (olive oil can be used if you're in a pinch)",
    list7:"• 3 tablespoons maple syrup (or honey or agave nectar)",
    list8:"•1 tablespoon sweet chili sauce (you can add a bit of hot sauce or cayenne pepper for a spicer dish)",
    countryColor:"#CE1126",
    ingredientsColor:"#006341",
    nameColor:"#006341"
}

export default PadThaiPage;