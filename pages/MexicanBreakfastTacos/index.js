import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './breakfasttacos.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';

const FoodImg = require('../../images/breakfasttacos2.jpg');
const FlagImg = require('../../images/mexicoflag.png');

const BreakfastTacosPage = ({width, nameColor, ingredientsColor, countryColor, flagimg, nextcolor, title, backtext, nexttext, fontSize, img, timeList, portionList, country, list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13, list14, list15}) => {

    function BackClick() {
        document.querySelector("#breakfasttacos_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/SelectRecipe");
        }, 600)
    }

    function NextClick() {
        document.querySelector("#breakfasttacos_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/StepsBreakfastTacos");
        }, 600)
    }

    return <div id="breakfasttacos_page">
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


BreakfastTacosPage.defaultProps = {
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"Next",
    img:"FoodImg",
    flagimg:"FlagImg",
    title:"Breakfast Tacos (with chorizo sausage)",
    timeList:"Cook Time: 35 minutes",
    portionList:"4 people (3 tacos each)",
    country:"This recipe originates from Mexico!",
    list1:"• 1 tablespoon olive oil",
    list2:"• 2 medium golden potatoes, cubed (about 2 cups)",
    list3:"• 1/2 cup chopped onions",
    list4:"• 1/2 9-ounce link pork chorizo (such as Ranchero® brand)",
    list5:"• 6 large eggs, beaten",
    list6:"• 12 corn tortillas",
    list7:"• Chopped cilantro, for topping",
    list8:"• Queso fresco, for topping",
    countryColor:"#CE1126",
    ingredientsColor:"#006341",
    nameColor:"#006341"
}

export default BreakfastTacosPage;