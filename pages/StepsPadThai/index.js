import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './stepspadthai.css';
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
        Router.push("/ThaiVeganPadThai");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');
const ThaiChicken2 = require('../../images/padthai2.jpg');
const OnionImg = require('../../images/Onion.png');
const TomatoImg = require('../../images/tomato.png');
const ForkImg = require('../../images/forkknife.png');

const SelectionPage = ({caption, fork, text, tomato, onion, text2, text3, text4, nextcolor, backtext, nexttext, stepnumber2, stepnumber3, stepnumber4, fontSize}) => {

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
            src="https://www.youtube.com/embed/3X9qzLtyQuU" frameborder="0" 
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
    tomato:TomatoImg,
    fork:ForkImg,
    color:"#4797FF",
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"New Recipe",
    fontSize: 12,
    caption: "Play the video above to help guide you through the Vegan Pad Thai recipe!",
    stepnumber2:"Step 2",
    stepnumber3:"Step 3",
    stepnumber4:"Step 4",
    text:"Cook the rice noodles according to package instructions. Once cooked, immediately rinse in cold water, toss with 1 tablespoon sesame oil, and set aside.",
    text2:"While noodles are cooking, make the tofu. Heat the remaining 2 tablespoons of sesame oil in a large cast-iron skillet. Cut tofu in 1 inch X 1/2 rectangles. Once the oil is hot, add tofu and sauté for 7 minutes, flipping once, until tofu is crispy and brown on both sides.",
    text3:"Add red and yellow bell peppers and cook for another 3 minutes, stirring occasionally. Once peppers are soft, add mung bean sprouts, scallions, and garlic. Sauté for another 2-3 minutes.",
    text4:"Stir in sauce and noodles to the tofu/vegetable mixture until heated through thoroughly. Serve into bowls and garnish with desired toppings!"
}

export default SelectionPage;