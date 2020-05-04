import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './allsteps.css';
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
        Router.push("/ThaiCoconutCurry");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');
const ThaiChicken2 = require('../../images/thaichicken2.jpg');
const OnionImg = require('../../images/Onion.png');
const TomatoImg = require('../../images/tomato.png');
const ForkImg = require('../../images/forkknife.png');

const SelectionPage = ({fork, tomato, onion, text2, text3, text4, nextcolor, backtext, nexttext, stepnumber2, stepnumber3, stepnumber4, fontSize}) => {

    return <div id="steps_page">
        <div id="app_header">
            <Nav />
            <Header />
            <img id="onionimg" src={onion} />
            <img id="tomatoimg" src={tomato} />
            <img id="forkimg" src={fork} />
        </div>
        <br />
        <RecipeStep />
        <RecipeStep stepnumber={stepnumber2} text={text2}/>
        <RecipeStep stepnumber={stepnumber3} text={text3} />
        <RecipeStep stepnumber={stepnumber4} text={text4} />
        <RecipeImg img={ThaiChicken2} width={300} id="selection_image" />

        <div class="video_container">
            <iframe id="thaichicken_video" width="560" height="349" 
            src="https://www.youtube.com/embed/Ff47YVuHGPI" frameborder="0" 
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
    text2:"Heat oil and curry powder in a large skillet over medium-high heat for two minutes. Stir in onions and garlic, and cook 1 minute more.",
    text3:"Add chicken, tossing lightly to coat with curry oil. Reduce heat to medium, and cook for 7 to 10 minutes, or until chicken is no longer pink in center and juices run clear.",
    text4:"Pour coconut milk, tomatoes, tomato sauce, and sugar into the pan, and stir to combine. Cover and simmer, stirring occasionally, approximately 30 to 40 minutes."
}

export default SelectionPage;