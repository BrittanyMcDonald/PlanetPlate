import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './stepsbreakfasttacos.css';
import RecipeStep from '../../comps/Steps';
import CustomButton from '../../comps/Button';
import Header from '../../comps/Header';
import RecipeImg from '../../comps/RecipeImage';
import Nav from '../../comps/Nav';
import VideoText from '../../comps/VideoText';

function StartOverClick() {
    document.querySelector("#steps_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/SelectRecipe");
    }, 600)
}

function BackClick() {
    document.querySelector("#steps_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/MexicanBreakfastTacos");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');
const ThaiChicken2 = require('../../images/breakfasttacos1.jpg');
const OnionImg = require('../../images/Onion.png');
const TortillaImg = require('../../images/tortilla.png');


const SelectionPage = ({caption, fork, text, tortilla, onion, text2, text3, text4, nextcolor, backtext, nexttext, stepnumber2, stepnumber3, stepnumber4, fontSize}) => {

    return <div id="steps_page">
        <div id="app_header">
            <Nav />
            <Header />
            <img id="onionimg" src={onion} />
            <img id="tortillaimg" src={tortilla} />

        </div>
        <br />
        <RecipeStep text={text} />
        <RecipeStep stepnumber={stepnumber2} text={text2}/>
        <RecipeStep stepnumber={stepnumber3} text={text3} />
        <RecipeStep stepnumber={stepnumber4} text={text4} />
        <RecipeImg img={ThaiChicken2} width={300} id="selection_image" />

        <div class="video_container">
            <iframe id="thaichicken_video" width="560" height="349" 
            src="https://www.youtube.com/embed/1x4hDIlwjwc" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
        <VideoText caption={caption} />


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
    tortilla:TortillaImg,
    color:"#4797FF",
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"New Recipe",
    fontSize: 12,
    caption: "Play the video above to help guide you through the recipe for Chorizo Breakfast Tacos! The eggs are missing from this recipe, but can easily be added to the potatoes or chorizo before they're taken off of the stove!",
    stepnumber2:"Step 2",
    stepnumber3:"Step 3",
    stepnumber4:"Step 4",
    text:"Heat a large skillet over medium-high heat. Add olive oil and potatoes and cook for 15 minutes, stirring occasionally, until potatoes are cooked through and slightly crispy on the outside. Add chopped onions and cook for 5 minutes, until translucent.",
    text2:"Remove chorizo from casing and add to skillet. Break up the chorizo using your spatula and cook for 5 minutes.",
    text3:"Using the same skillet as was used for the tortillas, add a little more oil to the pan, about two teaspoons for 4 eggs. Heat the pan on medium high heat. Crack 4 eggs into the skillet and cook for 3 to 4 minutes for runny yolks, more for firmer eggs. To serve, spoon a little of the sauce onto a warmed plate. Top with a tortilla, then a fried egg. Top with more sauce, avocado, sour cream, sprinkle with cilantro if desired. Serve either one or two eggs/tortillas per plate, depending on your preference.",
    text4:"Heat up the corn tortillas over medium-high heat on a large skillet, griddle or comal. Fill with chorizo, potato and egg mixture and top with cilantro and queso fresco."
}

export default SelectionPage;