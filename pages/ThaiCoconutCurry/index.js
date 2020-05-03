import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './coconutcurry.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Ingredients from '../../comps/Ingredients';
import RecipeTitle from '../../comps/RecipeTitle';


const CoconutCurryPage = ({width, nextcolor, backtext, nexttext, fontSize}) => {

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
            {/* Menu Icon Here */}
            <Header />
        </div>
        <RecipeImg width={300} id="selection_image" />
        <RecipeTitle id="recipe_img_title" />
        <Ingredients id="ingredients_section" />
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
}

export default CoconutCurryPage;