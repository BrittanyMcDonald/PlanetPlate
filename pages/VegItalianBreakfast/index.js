import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './ItalianMeatPasta/app.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';

const FoodImg = require('../../images/ItalianFritata.jpg');
const FlagImg = require('../../images/italianflag.png');

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
    title:"Vegetarian Italian Frittata",
    timeList:"Cook Time: 30 minutes",
    portionList:"2 Servings ",
    country:"This recipe originates from Italy!",
    list1:"• 4 eggs",
    list2:"• 1 tbsp. fat-free milk",
    list3:"• 1/4 tsp. dried oregano leaves",
    list4:"• tsp. garlic powder",
    list5:"• tsp. salt",
    list6:"• tsp. Black pepper",
    list7:"• 1/4 cup chopped red bull pepper",
    list8:"• 1/4 cup chopped broccoli florets",
    list9:"• 4 oz. Veggie Sausage Links",
    list10:"• 1/4 canned sliced mushrooms",
    list11:"• 1/2 cup shredded cheddar cheese",
    countryColor:"#cd212a",
    ingredientsColor:"#cd212a",
    nameColor:"#008c45"
}

export default BreakfastTacosPage;