import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './selectrecipe.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Dropdown from '../../comps/dropdown';
import Nav from '../../comps/Nav';

function StartClick() {
    document.querySelector("#selection_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/ThaiCoconutCurry");
    }, 600)
}

function TypeSelect(){
    document.getElementsByClassName
}

// function CountryClick() {
//     document.querySelector("#selection_page").style.opacity = "0";
//     setTimeout(function(){
//         Router.push("/ThaiCoconutCurry");
//     }, 600)
// }

// function MealClick(){
//     document.querySelector(".dropbtn").innerHTML = "Vegetarian";
//     document.querySelector(".dropdown-content").style.display = "none";
//   }
//   function MealTypeClick(){
//     document.querySelector(".dropbtn").innerHTML = "Vegetarian";
//     document.querySelector(".dropdown-content").style.display = "none";
//   }


const HeaderLogo = require('../../images/LOGO_Horizontal.png');

const SelectionFoodImg = require('../../images/photo2.jpg');

const SelectionPage = ({width, color, mealtype, buttontext, country, pref, fontSize, type1, type2, pref1, pref2, country1}) => {

    return <div id="selection_page">
        <div id="app_header">
            <Nav />
            <Header />
        </div>
        <div id="img_container">
            <RecipeImg img={SelectionFoodImg} width={300} id="selection_image" />
        </div>
        <p id="selection_instructions">Select your Country of choice, preferred Meal, and Meal Type. <br /> Tap <span id="search">"Search"</span> when you're ready!</p>
        {/* <Dropdown id="country_button" select={country} />
        <Dropdown id="meal_button" select={pref} />
        <Dropdown id="mealtype_button" select={mealtype} /> */}
        <div className="meal_container">
            <p className="p_select" id="select_type">Meal Type</p>
            <div className="select">
                <button className="selection_btns">Lunch</button>
                <button className="selection_btns">Dinner</button>
            </div>
        </div>

        <div className="meal_container">
            <p className="p_select" id="select_pref">Meal Preference</p>
                <div className="select">
                    <button className="selection_btns">Non-Vegetarian</button>
                    <button className="selection_btns">Vegetarian</button>
                </div>
        </div>

        <div className="meal_container">
            <p className="p_select" id="select_country">Country</p>
                    <div className="select">
                        <button className="selection_btns">Thailand</button>
                        <button className="selection_btns">Mexico</button>
                        <button className="selection_btns">Italy</button>
                    </div>
        </div>

        <br />
        <br />       
        <CustomButton id="search_button" text={buttontext} onClick={StartClick} />       

    </div>
}


SelectionPage.defaultProps = {
    logo:HeaderLogo,
    color:"#4797FF",
    color2:"#C1DCFF",
    buttontext:"Search",
    fontSize: 12,
    country:"Tap to Select A Meal Type",
    pref:"Tap to Select A Meal Preference",
    mealtype:"Tap to Select A Country",
    type1:"Lunch",
    type2:"Dinner",
    pref1:"Non-Vegetarian",
    pref2:"Vegetarian",
    country1:"Thailand"
}

export default SelectionPage;