import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './app.css';
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
        Router.push("/ItalianBreakfast");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');
const ThaiChicken2 = require('../../images/SausageStrata.jpg');
const OnionImg = require('../../images/Onion.png');
const ForkImg = require('../../images/forkknife.png');

const SelectionPage = ({caption, fork, text, tomato, onion, text2, text3, text4, nextcolor, backtext, nexttext, stepnumber2, stepnumber3, stepnumber4, fontSize}) => {

    return <div id="steps_page">
        <div id="app_header">
            <Nav />
            <Header />
            <img id="onionimg" src={onion} />
            <img id="forkimg" src={fork} />
        </div>
        <br />
        <RecipeStep text={text} />
        <RecipeStep stepnumber={stepnumber2} text={text2}/>
        <RecipeStep stepnumber={stepnumber3} text={text3} />
        <RecipeStep stepnumber={stepnumber4} text={text4} />
        <RecipeImg img={ThaiChicken2} width={300} id="selection_image" />

        <div class="video_container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/g0A_WpD7wWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
    fork:ForkImg,
    color:"#4797FF",
    nextcolor:"#4797FF",
    backtext:"Back",
    nexttext:"New Recipe",
    fontSize: 12,
    caption: "Play the video above to help guide you through the Italian Veggie Sausage Strata!",
    stepnumber2:"Step 2",
    stepnumber3:"Step 3",
    stepnumber4:"Step 4",
    text:"In a large skillet, cook the sausage, green peppers and onion over medium heat until meat is no longer pink; drain. Meanwhile, in a large bowl, whisk the eggs, milk, salt, pepper and mustard. Stir in the sausage mixture, bread, spinach, cheeses and zucchini.",
    text2:"Transfer mixture to a greased 13x9-in. baking dish. Cover and refrigerate overnight.",
    text3:"Remove from the refrigerator 30 minutes before baking. Cover and bake at 350° for 40 minutes. Uncover; bake 40-45 minutes longer or until a knife inserted in the center comes out clean.",
    text4:"Enjoy!"

}

export default SelectionPage;