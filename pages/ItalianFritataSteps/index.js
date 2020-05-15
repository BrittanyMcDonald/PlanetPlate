import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './CucumberSaladSteps/app.css';
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
        Router.push("/VegItalianBreakfast");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');
const ThaiChicken2 = require('../../images/ItalianFritata.jpg');
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

        <iframe width="560" height="315" src="https://www.youtube.com/embed/POLtBaZJBoM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
    caption: "Play the video above to help guide you through the Vegetarian Italian Sausage Fritata!",
    stepnumber2:"Step 2",
    stepnumber3:"Step 3",
    stepnumber4:"Step 4",
    text:"In medium bowl whisk together eggs, milk, oregano, garlic powder, salt, and pepper.",
    text2:"In small nonstick skillet coated with cooking spray cook bell pepper, broccoli, and Veggie Sausage Links over medium heat until vegetables are tender. Remove from skillet. Set aside.",
    text3:"In same skillet cook egg mixture over medium-low heat until set. Top with vegetable mixture and mushrooms. Sprinkle with cheese. Tightly cover. Let stand for 3 to 5 minutes or until cheese melts.",
    text4:"Enjoy!"

}

export default SelectionPage;

