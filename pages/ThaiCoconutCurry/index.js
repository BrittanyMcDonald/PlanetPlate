import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './coconutcurry.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';
import Nav from '../../comps/Nav';


const CoconutCurryPage = ({countryColor, ingredientsColor, nameColor, nextcolor, backtext, nexttext, fontSize}) => {

    function BackClick() {
        document.querySelector("#coconutcurry_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/SelectRecipe");
        }, 600)
    }

    function NextClick() {
        document.querySelector("#coconutcurry_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/AllRecipeSteps");
        }, 600)
    }

    return <div id="coconutcurry_page">
        <div id="app_header">
            <Nav />
            <Header />
        </div>
        <RecipeImg width={300} id="selection_image" />
        <RecipeTitle id="recipe_img_title" nameColor={nameColor} />
        <Ingredients id="ingredients_section" ingredientsColor={ingredientsColor} countryColor={countryColor}/>
        <div id="nav_buttons">
            <CustomButton class="button" width={150} text={backtext} onClick={BackClick} />  
            <CustomButton class="button" width={150} text={nexttext} color={nextcolor} onClick={NextClick} />
        </div>     

    </div>
}


CoconutCurryPage.defaultProps = {
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"Next",
    countryColor:"#2D2A4A",
    ingredientsColor:"#A51931",
    nameColor:"#A51931"
}

export default CoconutCurryPage;