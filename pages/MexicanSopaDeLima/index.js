import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './sopadelima.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';

const FoodImg = require('../../images/sopadelima1.jpg');
const FlagImg = require('../../images/mexicoflag.png');

const SopaDeLimaPage = ({width, nameColor, ingredientsColor, countryColor, flagimg, nextcolor, title, backtext, nexttext, fontSize, img, timeList, portionList, country, list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13, list14, list15}) => {

    function BackClick() {
        document.querySelector("#sopadelima_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/SelectRecipe");
        }, 600)
    }

    function NextClick() {
        document.querySelector("#sopadelima_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/StepsSopaDeLima");
        }, 600)
    }

    return <div id="sopadelima_page">
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


SopaDeLimaPage.defaultProps = {
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"Next",
    img:"FoodImg",
    flagimg:"FlagImg",
    title:"Sopa De Lima (Lime Soup)",
    timeList:"Cook Time: 1 hour and 5 minutes",
    portionList:"8 people",
    country:"This recipe originates from Mexico!",
    list1:"• 9 cups chicken broth",
    list2:"• 5 skinless, boneless chicken breast halves",
    list3:"• 1 large red onion, quartered",
    list4:"• 5 cloves garlic, chopped",
    list5:"• 2 teaspoons dried oregano",
    list6:"• 1 teaspoon salt",
    list7:"• 1 teaspoon ground black pepper",
    list8:"• ½ teaspoon dried thyme",
    list9:"• 1 tablespoon vegetable oil",
    list10:"• 4 green onions, chopped",
    list11:"• 1 large green chile pepper, seeded and chopped",
    list12:"• 2 large tomatoes, peeled and chopped",
    list13:"• 6 limes, juiced",
    list14:"• ½ lime",
    list15:"• ½ cup chopped fresh cilantro",
    list16:"• tortilla chips, for topping",
    countryColor:"#CE1126",
    ingredientsColor:"#006341",
    nameColor:"#006341"
}

export default SopaDeLimaPage;