import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './selectrecipe.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Dropdown from '../../comps/dropdown';

function StartClick() {
    document.querySelector("#selection_page").style.opacity = 0;
    setTimeout(function(){
        Router.push("/ThaiCoconutCurry");
    }, 600)
}

function CountryClick() {
    document.querySelector("#selection_page").style.opacity = 0;
    setTimeout(function(){
        Router.push("/ThaiCoconutCurry");
    }, 600)
}

function MealClick(){
    document.querySelector(".dropbtn").innerHTML = "Vegetarian";
    document.querySelector(".dropdown-content").style.display = "none";
  }
  function MealTypeClick(){
    document.querySelector(".dropbtn").innerHTML = "Vegetarian";
    document.querySelector(".dropdown-content").style.display = "none";
  }


const HeaderLogo = require('../../images/LOGO_Horizontal.png');

const SelectionFoodImg = require('../../images/photo2.jpg');

const SelectionPage = ({width, color, mealtype, buttontext, country, meal, fontSize}) => {

    return <div id="selection_page">
        <div id="app_header">
            {/* Menu Icon Here */}
            <Header />
        </div>
        <div id="img_container">
            <RecipeImg img={SelectionFoodImg} width={300} id="selection_image" />
        </div>
        <p id="selection_instructions">Select your Country of choice, preferred Meal, and Meal Type. <br /> Tap <span id="search">"Search"</span> when you're ready!</p>
        <Dropdown id="country_button" select={country} />
        <Dropdown id="meal_button" select={meal} />
        <Dropdown id="mealtype_button" select={mealtype} />
        <br />
        <br />       
        <CustomButton id="search_button" text={buttontext} onClick={StartClick} />       

    </div>
}


SelectionPage.defaultProps = {
    logo:HeaderLogo,
    color:"#4797FF",
    buttontext:"Search",
    fontSize: 12,
    country:"Select Country",
    meal:"Select Meal",
    mealtype:"Select Meal Type",
}

export default SelectionPage;