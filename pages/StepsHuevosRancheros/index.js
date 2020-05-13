import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './stepshuevosrancheros.css';
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
        Router.push("/MexicanHuevosRancheros");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');
const ThaiChicken2 = require('../../images/huevosrancheros3.jpg');
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
            src="https://www.youtube.com/embed/7khus9sla3c" frameborder="0" 
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
    caption: "Play the video above to help guide you through the Huevos Rancheros recipe!",
    stepnumber2:"Step 2",
    stepnumber3:"Step 3",
    stepnumber4:"Step 4",
    text:"Sauté the onions in a little olive oil in a large skillet on medium heat. Once the onions are translucent, add the tomatoes and their juices. If using whole canned tomatoes, break them up with your fingers or a spatula as you put them in the pan. If you are using fresh tomatoes, chop them first, then add. Add chopped jalapeno. Add ground cumin to taste.",
    text2:"Bring to a simmer, reduce heat to low, and let simmer while you do the rest of the cooking, stirring occasionally. Reduce to warm after it has been simmering for 10 minutes. Add salt to taste if needed.",
    text3:"Heat a teaspoon of olive oil in a large non-stick skillet on medium high, coating the pan with the oil. One by one (or more if your pan is big enough) heat the tortillas in the pan, a minute or two on each side, until they are heated through, softened, and pockets of air bubble up inside of them. ",
    text4:"Using the same skillet as was used for the tortillas, add a little more oil to the pan, about two teaspoons for 4 eggs. Heat the pan on medium high heat. Crack 4 eggs into the skillet and cook for 3 to 4 minutes for runny yolks, more for firmer eggs. To serve, spoon a little of the sauce onto a warmed plate. Top with a tortilla, then a fried egg. Top with more sauce, avocado, sour cream, sprinkle with cilantro if desired. Serve either one or two eggs/tortillas per plate, depending on your preference."
}

export default SelectionPage;