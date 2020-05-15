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
        Router.push("/ThaiBreakfast");
    }, 600)
}

const HeaderLogo = require('../../images/LOGO_Horizontal.png');
const ThaiChicken2 = require('../../images/BakedTofuPeanutSauce.jpg');
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_Q27GTEVx7I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    caption: "Play the video above to help guide you through the Baked Tofu with Peanut Sauce Recipe!",
    stepnumber2:"Step 2",
    stepnumber3:"Step 3",
    stepnumber4:"Step 4",
    text:"First, press your tofu. Once your tofu is well-pressed, cut it into your desired shapes. Thin slabs, triangles or even small bite-sized shapes will work.",
    text2:"Once your tofu is ready to go, pre-heat the oven to 400 F. I highly recommend lining a baking tray with aluminum foil if you can, since baked tofu sometimes gets a bit sticky, and the foil makes clean up super easy.",
    text3:"Next, prepare the sauce. Whisk together the peanut butter (I like to melt it slightly in the microwave for just a few seconds to make this easier) with the ginger, lime juice or orange juice, soy sauce, sesame oil, maple syrup and sweet chili sauce. Before you bake your tofu, give the sauce a quick taste. It should be delicious! If not, adjust the seasonings to taste.",
    text4:"Coat the tofu with the peanut sauce on all sides. You can transfer the sauce to a wide shallow bowl or dish and dip it in, or use a pastry brush to coat each piece by hand if you're working with larger pieces of tofu. I like to dip it, then brush on extra sauce.",
    text5:"Bake the tofu in the oven for about 15 to 17 minutes, keeping an eye on them so they don't burn. Turn pieces over, and bake another 10 to 15 minutes. (Note: The sauce on the aluminum foil will burn a bit, don't worry. You just don't want to see the coated tofu burn.)"
}

export default SelectionPage;