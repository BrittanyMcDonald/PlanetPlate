import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import CustomButton from '../comps/Button';
import './app.css';


function StartClick() {
    document.querySelector("#app_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/SelectRecipe");
    }, 600)
}

function TutPageClick() {
    document.querySelector("#app_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/Tutorial1");
    }, 600)
}

const HomeLogo = require('../images/LOGO_Vertical.png');

const HomePage = ({logo, color}) => {

    return <div id="app_page">
    
    <div id="welcome">
        <img id="home_logo" src={logo} />
        <p id="welcome_msg">PlanetPlate is an app that explores
    dishes from a variety of different cultures, with the
    goal of inspiring and educating people about some of the different foods around the globe.</p>

        <div id="button_group">
            <CustomButton color="#4797FF" onClick={StartClick} /><br />
            <CustomButton width={200} id="tut_button" text="Tutorial" onClick={TutPageClick} />
        </div>
    </div>

    </div>
}


HomePage.defaultProps = {
    logo:HomeLogo,
    color:"#4797FF"
}

export default HomePage;