import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './stepstacosdepapa.css';
import RecipeStep from '../../comps/Steps';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Nav from '../../comps/Nav';

function StartOverClick() {
    document.querySelector("#steps_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/SelectRecipe");
    }, 600)
}

function BackClick() {
    document.querySelector("#steps_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/MexicanTacosDePapa");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');
const ThaiChicken2 = require('../../images/tacosdepapa3.jpg');
const OnionImg = require('../../images/Onion.png');
const TomatoImg = require('../../images/tomato.png');
const ForkImg = require('../../images/forkknife.png');

const SelectionPage = ({fork, text, tomato, onion, text2, text3, text4, nextcolor, backtext, nexttext, stepnumber2, stepnumber3, stepnumber4, fontSize}) => {

    return <div id="steps_page">
        <div id="app_header">
            <Nav />
            <Header />
            <img id="onionimg" src={onion} />
            <img id="tomatoimg" src={tomato} />
            <img id="forkimg" src={fork} />
        </div>
        <br />
        <RecipeStep text={text} />
        <RecipeStep stepnumber={stepnumber2} text={text2}/>
        <RecipeStep stepnumber={stepnumber3} text={text3} />
        <RecipeStep stepnumber={stepnumber4} text={text4} />
        <RecipeImg img={ThaiChicken2} width={300} id="selection_image" />

        <div class="video_container">
            <iframe id="thaichicken_video" width="560" height="349" 
            src="https://www.youtube.com/embed/lXOgH3e7Kag" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>

        <div id="recipe_buttons_container">
            <CustomButton text={backtext} onClick={BackClick} />
            <CustomButton text={nexttext} color={nextcolor} onClick={StartOverClick} />  
        </div>

    </div>
}


SelectionPage.defaultProps = {
    logo:HeaderLogo,
    img:ThaiChicken2,
    onion:OnionImg,
    tomato:TomatoImg,
    fork:ForkImg,
    color:"#4797FF",
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"New Recipe",
    fontSize: 12,
    stepnumber2:"Step 2",
    stepnumber3:"Step 3",
    stepnumber4:"Step 4",
    text:"Boil potatoes and peel. Heat oil for frying.",
    text2:"Mash potatoes with a masher and mix with onions and the 4 ounces of queso fresco. (if mixture is too thick, add a little milk. mixture should be a little lumpy, but should not be as creamy as mashed potatoes.) Season with salt and pepper.",
    text3:"Warm tortillas in microwave for about 15 seconds.",
    text4:"Spoon potato mixture into tortillas and fry until golden on both sides. Serve and garnish with lettuce, queso fresco and salsa. (Or if preferred, open the fried taco shells instead, and fill with lettuce, queso and salsa)"
}

export default SelectionPage;