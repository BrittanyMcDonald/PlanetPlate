import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './tutorial1.css';
import CustomButton from '../../comps/Button';
import TutorialStep from '../../comps/TutorialCard';
import TutorialTitle from '../../comps/TutorialHeader';
import Header from '../../comps/Header';
import TutorialSteps from '../../comps/TutorialCard';

function Tut1PageClick() {
    document.querySelector("#tutorial1_page").style.opacity = 0;
    setTimeout(function(){
        Router.push("/Tutorial2");
    }, 600)
}

const Tut1Page = ({logo, color, buttontext}) => {

    return <div id="tutorial1_page">
        <div id="app_header">
            {/* Menu Icon Here */}
            <Header />
        </div>
        <TutorialTitle />
        <TutorialSteps />
        <br />
        {/* This is where the form comp will go */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p id="instruction1">Then tap "Search" when you're ready to find a recipe.</p>
        <CustomButton text={buttontext} onClick={Tut1PageClick} />       

    </div>
}


Tut1Page.defaultProps = {
    color:"#4797FF",
    buttontext:"Next",
    stepnumber:"Step 1"
}

export default Tut1Page;