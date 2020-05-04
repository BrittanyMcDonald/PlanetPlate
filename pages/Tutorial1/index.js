import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './tutorial1.css';
import CustomButton from '../../comps/Button';
import TutorialStep from '../../comps/TutorialCard';
import TutorialTitle from '../../comps/TutorialHeader';
import Header from '../../comps/Header';
import TutorialSteps from '../../comps/TutorialCard';
import Nav from '../../comps/Nav';

const Arrow = require('../../images/arrow.png');

function Tut1PageClick() {
    document.querySelector("#tutorial1_page").style.opacity = 0;
    setTimeout(function(){
        Router.push("/Tutorial2");
    }, 600)
}

const Tut1Page = ({img, text, logo, color, buttontext}) => {

    return <div id="tutorial1_page">
        <div id="app_header">
            <Nav />
            <Header />
        </div>
        <TutorialTitle />
        <TutorialSteps />
        <br />
        {/* This is where the form comp will go */}
        <br />
        <br />
        <img id="arrow" src={img} />
        <CustomButton color={color} text={text} />
        <p id="instruction1">Then tap "Search" when you're ready to find a recipe.</p>
        <CustomButton text={buttontext} onClick={Tut1PageClick} />       

    </div>
}


Tut1Page.defaultProps = {
    color:"#C1DCFF",
    buttontext:"Next",
    stepnumber:"Step 1",
    text:"Thailand",
    img:Arrow
}

export default Tut1Page;