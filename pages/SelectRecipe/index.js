import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './selectrecipe.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';

function StartClick() {
    document.querySelector("#selection_page").style.opacity = 0;
    setTimeout(function(){
        Router.push("/ThaiCoconutCurry");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');

const SelectionFoodImg = require('../../images/photo2.jpg');

const SelectionPage = ({width, color, buttontext, cardtext, steptext, fontSize}) => {

    return <div id="selection_page">
        <div id="app_header">
            {/* Menu Icon Here */}
            <Header />
        </div>
        <div id="img_container">
            <RecipeImg img={SelectionFoodImg} width={300} id="selection_image" />
        </div>
        <p id="selection_instructions">Select your Country of choice, preferred Meal and Meal Type. <br /> Tap <span id="search">"Search"</span> when you're ready!</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <CustomButton text={buttontext} onClick={StartClick} />       

    </div>
}


SelectionPage.defaultProps = {
    logo:HeaderLogo,
    color:"#4797FF",
    buttontext:"Search",
    fontSize: 12,
    steptext:"Step 2",
    cardtext:"A page showing your selection and the resulting recipe will be displayed. Click 'Next' to see the steps of the recipe!",
}

export default SelectionPage;