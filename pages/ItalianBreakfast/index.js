import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import '/Users/aneetromana/Downloads/PlanetPlate-master 3/pages/ItalianMeatPasta/app.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';

const FoodImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/VeggieStrata.jpg');
const FlagImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/italianflag.png');

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
    title:"Veggie Sausage Strata ",
    timeList:"Cook Time: 1 hour 45 minutes",
    portionList:"12 Servings ",
    country:"This recipe originates from Italy!",
    list1:"• 2 pounds bulk Italian sausage",
    list2:"• 2 medium green peppers, coarsely chopped",
    list3:"• 1 medium onion, chopped",
    list4:"• 8 large eggs",
    list5:"• 2 cups whole milk",
    list6:"• 2 teaspoons salt",
    list7:"• 2 teaspoons white pepper",
    list8:"• 2 teaspoons ground mustard",
    list9:"• 12 slices bread, cut into 1/2-inch pieces",
    list10:"• 1 package (10 ounces) frozen chopped spinach, thawed and squeezed dry",
    list11:"• 2 cups shredded Swiss cheese",
    list12:"• 2 cups shredded cheddar cheese",
    list13:"• 1 medium zucchini, cut into 1/4-inch slices",
    countryColor:"#cd212a",
    ingredientsColor:"#cd212a",
    nameColor:"#008c45"
}

export default BreakfastTacosPage;