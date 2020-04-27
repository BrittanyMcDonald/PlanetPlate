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

    function StartClick() {
        document.querySelector("#coconutcurry_page").style.opacity = 0;
        setTimeout(function(){
            Router.push("/SelectRecipe");
        }, 600)
    }

    return <div id="coconutcurry_page">
        <div id="app_header">
            {/* Menu Icon Here */}
            <Header />
        </div>
        <br />
        <RecipeImg width={300} id="selection_image" />
        <RecipeTitle />
        <Ingredients />
        <div id="nav_buttons">
            <CustomButton class="button" width={150} text={backtext} onClick={StartClick} />  
            <CustomButton class="button" width={150} text={nexttext} color={nextcolor} />
        </div>     

    </div>
}


CoconutCurryPage.defaultProps = {
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"Next",
}

export default CoconutCurryPage;