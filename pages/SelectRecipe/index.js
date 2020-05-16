import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './selectrecipe.css';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Dropdown from '../../comps/dropdown';
import Nav from '../../comps/Nav';

// function StartClick() {
//     document.querySelector("#selection_page").style.opacity = "0";
//     setTimeout(function(){
//         Router.push("/ThaiCoconutCurry");
//     }, 600)
// }

var mealtype
function SelectBreakfast(){
    document.querySelector("#breakfast_btn").style.background = "#FF8F3F";
    document.querySelector("#breakfast_btn").style.border = "3px inset #FF8F3F";
    document.querySelector("#dinner_btn").style.background = "#4797FF";
    document.querySelector("#dinner_btn").style.border = "none";
    mealtype="breakfast";
}

function SelectDinner(){
    document.querySelector("#breakfast_btn").style.background = "#4797FF";
    document.querySelector("#breakfast_btn").style.border = "none";
    document.querySelector("#dinner_btn").style.background = "#FF8F3F";
    document.querySelector("#dinner_btn").style.border = "3px inset #FF8F3F";
    mealtype="dinner";
}

var mealpreference
function SelectNonVeg(){
    document.querySelector("#nonveg_btn").style.background = "#FF8F3F";
    document.querySelector("#nonveg_btn").style.border = "3px inset #FF8F3F";
    document.querySelector("#veg_btn").style.background = "#4797FF";
    document.querySelector("#veg_btn").style.border = "none";
    mealpreference="nonvegetarian";
}

function SelectVeg(){
    document.querySelector("#nonveg_btn").style.background = "#4797FF";
    document.querySelector("#nonveg_btn").style.border = "none";
    document.querySelector("#veg_btn").style.background = "#FF8F3F";
    document.querySelector("#veg_btn").style.border = "3px inset #FF8F3F";
    mealpreference="vegetarian";
}


var country
function SelectThailand(){
    document.querySelector("#thailand_btn").style.background = "#FF8F3F";
    document.querySelector("#thailand_btn").style.border = "3px inset #FF8F3F";
    document.querySelector("#mexico_btn").style.background = "#4797FF";
    document.querySelector("#mexico_btn").style.border = "none";
    document.querySelector("#italy_btn").style.background = "#4797FF";
    document.querySelector("#italy_btn").style.border = "none";
    country="thailand";
}

function SelectMexico(){
    document.querySelector("#thailand_btn").style.background = "#4797FF";
    document.querySelector("#thailand_btn").style.border = "none";
    document.querySelector("#mexico_btn").style.background = "#FF8F3F";
    document.querySelector("#mexico_btn").style.border = "3px inset #FF8F3F";
    document.querySelector("#italy_btn").style.background = "#4797FF";
    document.querySelector("#italy_btn").style.border = "none";
    country="mexico";
}

function SelectItaly(){
    document.querySelector("#thailand_btn").style.background = "#4797FF";
    document.querySelector("#thailand_btn").style.border = "none";
    document.querySelector("#mexico_btn").style.background = "#4797FF";
    document.querySelector("#mexico_btn").style.border = "none";
    document.querySelector("#italy_btn").style.background = "#FF8F3F";
    document.querySelector("#italy_btn").style.border = "3px inset #FF8F3F";
    country="italy";
}

function NextPage(){
    if(mealtype === "breakfast" && mealpreference === "nonvegetarian" && country === "thailand"){
        Router.push("/ThaiBreakfast");
    } else if(mealtype === "breakfast" && mealpreference === "vegetarian" && country === "thailand"){
    Router.push("/ThaiBreakfastVeg");
    } else if(mealtype === "dinner" && mealpreference === "nonvegetarian" && country === "thailand"){
        Router.push("/ThaiCoconutCurry");
    } else if(mealtype === "dinner" && mealpreference === "vegetarian" && country === "thailand"){
        Router.push("/ThaiVeganPadThai");
    } else if(mealtype === "breakfast" && mealpreference === "vegetarian" && country === "mexico"){
        Router.push("/MexicanHuevosRancheros");
    } else if(mealtype === "breakfast" && mealpreference === "nonvegetarian" && country === "mexico"){
        Router.push("/MexicanBreakfastTacos");
    } else if(mealtype === "dinner" && mealpreference === "vegetarian" && country === "mexico"){
        Router.push("/MexicanTacosDePapa");
    } else if(mealtype === "dinner" && mealpreference === "nonvegetarian" && country === "mexico"){
        Router.push("/MexicanSopaDeLima");
    } else if(mealtype === "breakfast" && mealpreference === "vegetarian" && country === "italy"){
        Router.push("/VegItalianBreakfast");
    } else if(mealtype === "breakfast" && mealpreference === "nonvegetarian" && country === "italy"){
        Router.push("/ItalianBreakfast");
    } else if(mealtype === "dinner" && mealpreference === "vegetarian" && country === "italy"){
        Router.push("/VegItalianDinner");
    } else if (mealtype === "dinner" && mealpreference === "nonvegetarian" && country === "italy"){
        Router.push("/ItalianMeatPasta");
    }
}



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
       
        <div className="meal_container">
            <p className="p_select" id="select_type">Meal Type</p>
            <div className="select">
                <button id="breakfast_btn" className="selection_btns" onClick={SelectBreakfast}>Breakfast</button>
                <button id="dinner_btn"className="selection_btns" onClick={SelectDinner}>Dinner</button>
            </div>
        </div>

        <div className="meal_container">
            <p className="p_select" id="select_pref">Meal Preference</p>
                <div className="select">
                    <button id="nonveg_btn" className="selection_btns" onClick={SelectNonVeg}>Non-Vegetarian</button>
                    <button id="veg_btn" className="selection_btns" onClick={SelectVeg}>Vegetarian</button>
                </div>
        </div>

        <div className="meal_container">
            <p className="p_select" id="select_country">Country</p>
                    <div className="select">
                        <button id="thailand_btn" className="selection_btns" onClick={SelectThailand}>Thailand</button>
                        <button id="mexico_btn" className="selection_btns" onClick={SelectMexico}>Mexico</button>
                        <button id="italy_btn" className="selection_btns" onClick={SelectItaly}>Italy</button>
                    </div>
        </div>

        <br />
        <br />       
        <CustomButton id="search_button" text={buttontext} onClick={NextPage} />       

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