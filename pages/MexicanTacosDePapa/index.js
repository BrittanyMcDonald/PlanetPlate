import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './tacosdepapa.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';

const FoodImg = require('../../images/tacosdepapa2.jpg');
const FlagImg = require('../../images/mexicoflag.png');

const TacosDePapaPage = ({width, nameColor, ingredientsColor, countryColor, flagimg, nextcolor, title, backtext, nexttext, fontSize, img, timeList, portionList, country, list1, list2, list3, list4, list5, list6, list7, list8, list9, list10}) => {

    function BackClick() {
        document.querySelector("#tacosdepapa_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/SelectRecipe");
        }, 600)
    }

    function NextClick() {
        document.querySelector("#tacosdepapa_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/StepsTacosDePapa");
        }, 600)
    }

    return <div id="tacosdepapa_page">
        <div id="app_header">
            <Nav />
            <Header />
        </div>
        <RecipeImg img={FoodImg} width={300} id="selection_image" />
        <RecipeTitle flagimg={FlagImg} title={title} nameColor={nameColor} id="recipe_img_title" />
        <Ingredients countryColor={countryColor} ingredientsColor={ingredientsColor} timeList={timeList} portionList={portionList} country={country} list1={list1} list2={list2} list3={list3} list4={list4} list5={list5} list6={list6} list7={list7} list8={list8} list9={list9} list10={list10} id="ingredients_section" />
        <div id="nav_buttons">
            <CustomButton class="button" width={150} text={backtext} onClick={BackClick} />  
            <CustomButton class="button" width={150} text={nexttext} color={nextcolor} onClick={NextClick} />
        </div>     

    </div>
}


TacosDePapaPage.defaultProps = {
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"Next",
    img:"FoodImg",
    flagimg:"FlagImg",
    title:"Tacos De Papa",
    timeList:"Cook Time: 45 minutes",
    portionList:"24 Tacos (4 - 6 people)",
    country:"This recipe originates from Mexico!",
    list1:"• 6 large potatoes",
    list2:"• 4 ounces queso fresco for potato filling (mexican crumbly cheese)",
    list3:"• 3 tablespoons onions, chopped",
    list4:"• Salt and Pepper",
    list5:"• Milk (if needed)",
    list6:"• oil, for frying",
    list7:"• 2 dozen corn tortillas",
    list8:"• lettuce, julienned",
    list9:"• More queso fresco (as additional taco filling)",
    list10:"• Salsa",
    countryColor:"#CE1126",
    ingredientsColor:"#006341",
    nameColor:"#006341"
}

export default TacosDePapaPage;