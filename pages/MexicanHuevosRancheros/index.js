import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './huevosrancheros.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';

const FoodImg = require('../../images/huevosrancheros2.jpg');
const FlagImg = require('../../images/mexicoflag.png');

const HuevosRancherosPage = ({width, nameColor, ingredientsColor, countryColor, flagimg, nextcolor, title, backtext, nexttext, fontSize, img, timeList, portionList, country, list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13, list14, list15}) => {

    function BackClick() {
        document.querySelector("#huevosrancheros_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/SelectRecipe");
        }, 600)
    }

    function NextClick() {
        document.querySelector("#huevosrancheros_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/StepsHuevosRancheros");
        }, 600)
    }

    return <div id="huevosrancheros_page">
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


HuevosRancherosPage.defaultProps = {
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"Next",
    img:"FoodImg",
    flagimg:"FlagImg",
    title:"Huevos Rancheros (Ranchers' Eggs)",
    timeList:"Cook Time: 20 minutes",
    portionList:"4 people",
    country:"This recipe originates from Mexico!",
    list1:"• 4 large corn tortillas",
    list2:"• 2 tsp (10 mL) vegetable oil",
    list3:"• 4 eggs (Or 8, if you prefer 2 eggs per tortilla)",
    list4:"• 1 15-ounce can whole or crushed tomatoes, preferably fire-roasted (or 1 -2 large fresh vine-ripened tomatoes, when in season)",
    list5:"• 1/2 white onion, diced/cut into strips",
    list6:"• 1 jalapeno or serrano",
    list7:"• 1 1/4 cups (315 mL) salsa",
    list8:"• 1 cup (250 mL) refried pinto beans, warmed",
    list9:"• 1/2 cup (125 mL) low fat sour cream",
    list10:"• 1/3 cup (75 mL) shredded Monterey Jack cheese",
    list11:"• 1 tbsp (15 mL) chopped fresh cilantro",
    list12:"• 1/4 tsp cumin",
    list14:"• 1 - 2 tablespoons vegetable oil (for shells)",
    list15:"• 1 avocado, diced (optional)",
    countryColor:"#CE1126",
    ingredientsColor:"#006341",
    nameColor:"#006341"
}

export default HuevosRancherosPage;